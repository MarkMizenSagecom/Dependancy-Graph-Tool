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
  const firebase = useFirestore();

  useEffect(() => {
    if (!signedIn || !shouldLoad) {
      return;
    }

    Promise.all([
      firebase.collection("items").get(),
      firebase.collection("columns").get(),
      firebase.collection("connections").doc("connections").get(),
    ]).then(([itemsData, columnsData, connectionsData]) => {
      const itemsValues = {};
      itemsData.docs.forEach((doc) => {
        itemsValues[doc.id] = doc.data();
      });

      const columnsValues = {};
      columnsData.docs.forEach((doc) => {
        columnsValues[doc.id] = doc.data();
      });

      const connectionsValues = connectionsData.data().current;
      const connectionsArray = Object.keys(connectionsValues).map((from) => {
        const to = connectionsValues[from];
        return {
          to,
          from,
        };
      });

      dispatch({
        type: updateAll.type,
        payload: {
          items: itemsValues,
          columns: columnsValues,
          connections: connectionsArray,
        },
      });
    });
  }, [shouldLoad, signedIn, firebase, dispatch]);

  useEffect(() => {
    if (!shouldSave) {
      return;
    }
    if (!writeAccess) {
      console.warn("User doesn't have write access");
      dispatch({ type: saved.type });
      return;
    }

    console.log({ items, connections, columns });

    setTimeout(() => {
      dispatch({ type: saved.type });
    }, 500);
  }, [dispatch, shouldSave, writeAccess, items, connections, columns]);

  return null;
}
export default FirebaseSync;
