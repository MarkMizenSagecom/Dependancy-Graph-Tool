import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getConnections,
  getColumns,
  getItems,
  getShouldLoad,
  getShouldSave,
  updateAll,
  saved,
} from "../redux/dependancies/dependanciesSlice";
import { getSignedIn, getWriteAccess } from "../redux/user/userSlice";
import { useFirestore } from "reactfire";

function FirebaseSync() {
  const shouldLoad = useSelector(getShouldLoad);
  const writeAccess = useSelector(getWriteAccess);
  const shouldSave = useSelector(getShouldSave);

  const items = useSelector(getItems);
  const connections = useSelector(getConnections);
  const columns = useSelector(getColumns);

  const dispatch = useDispatch();

  const signedIn = useSelector(getSignedIn);
  const firestore = useFirestore();

  useEffect(() => {
    if (!shouldLoad) {
      return;
    }

    Promise.all([
      firestore.collection("items").get(),
      firestore.collection("columns").get(),
      firestore.collection("connections").get(),
    ]).then(([itemsData, columnsData, connectionsData]) => {
      const itemsValues = {};
      itemsData.docs.forEach((doc) => {
        itemsValues[doc.id] = doc.data();
      });

      const columnsValues = {};
      columnsData.docs.forEach((doc) => {
        columnsValues[doc.id] = doc.data();
      });

      const connectionsValues = connectionsData.docs.map((doc) => {
        const data = doc.data();
        const { to, from } = data;
        return { to, from };
      });

      dispatch({
        type: updateAll.type,
        payload: {
          items: itemsValues,
          columns: columnsValues,
          connections: connectionsValues,
        },
      });
    });
  }, [shouldLoad, firestore, dispatch]);

  useEffect(() => {
    if (!shouldSave) {
      return;
    }
    if (!writeAccess) {
      console.warn("User doesn't have write access");
      dispatch({ type: saved.type });
      return;
    }

    Promise.all([
      firestore.collection("items").get(),
      firestore.collection("columns").get(),
      firestore.collection("connections").get(),
    ])
      .then(([itemsData, columnsData, connectionsData]) => {
        const batch = firestore.batch();

        // Remove deleted items
        itemsData.docs.forEach((doc) => {
          if (!items[doc.id]) {
            const ref = firestore.collection("items").doc(doc.id);
            batch.delete(ref);
          }
        });

        // Remove deleted columns
        columnsData.docs.forEach((doc) => {
          if (!columns[doc.id]) {
            const ref = firestore.collection("columns").doc(doc.id);
            batch.delete(ref);
          }
        });

        connectionsData.docs.forEach((doc) => {
          const ref = firestore.collection("connections").doc(doc.id);
          batch.delete(ref);
        });

        Object.keys(items).forEach((id) => {
          const ref = firestore.collection("items").doc(id);
          batch.set(ref, items[id]);
        });

        Object.keys(columns).forEach((id) => {
          const ref = firestore.collection("columns").doc(id);
          batch.set(ref, columns[id]);
        });

        connections.forEach((connection, index) => {
          const ref = firestore.collection("connections").doc(String(index));
          batch.set(ref, connection);
        });

        return batch.commit();
      })
      .then(() => {
        console.log("batch executed");
      })
      .catch((err) => {
        console.log("batch failed", err);
      });

    setTimeout(() => {
      dispatch({ type: saved.type });
    }, 500);
  }, [
    dispatch,
    shouldSave,
    writeAccess,
    items,
    connections,
    columns,
    firestore,
  ]);

  return null;
}
export default FirebaseSync;
