import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getConnections,
  getColumns,
  getItems,
  getShouldSave,
  updateAll,
  saved,
} from "../redux/dependancies/dependanciesSlice";

const URL = "http://localhost:3002";

const loadData =
  process.env.NODE_ENV === "development"
    ? async () => {
        const data = await Promise.all([
          fetch(URL + "/items").then((res) => res.json()),
          fetch(URL + "/columns").then((res) => res.json()),
          fetch(URL + "/connections")
            .then((res) => res.json())
            .then((connections) =>
              Object.keys(connections).map((key) => connections[key])
            ),
        ]);

        return {
          items: data[0],
          columns: data[1],
          connections: data[2],
        };
      }
    : async () => {
        return await fetch("./data.json").then((res) => res.json());
      };

const saveData =
  process.env.NODE_ENV === "development"
    ? async (items, connections, columns) => {
        await Promise.all([
          fetch(URL + "/items", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(items),
          }),
          fetch(URL + "/columns", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(columns),
          }),
          fetch(URL + "/connections", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(
              Object.fromEntries(connections.map((connection, index) => [index, connection]))
            ),
          }),
        ]);
      }
    : async () => {
        console.error("Can't save in prod!");
      };

function LoadData() {
  const dispatch = useDispatch();

  const items = useSelector(getItems);
  const connections = useSelector(getConnections);
  const columns = useSelector(getColumns);
  const shouldSave = useSelector(getShouldSave);

  useEffect(() => {
    const load = async () => {
      const data = await loadData();
      dispatch({ type: updateAll.type, payload: data });
    };
    load();
  }, [dispatch]);

  useEffect(() => {
    if (!shouldSave) {
      return;
    }

    const save = async () => {
      await saveData(items, connections, columns);
    };

    save().finally(() => {
      dispatch({ type: saved.type });
    });
  }, [dispatch, shouldSave, items, connections, columns]);

  return null;
}

export default LoadData;
