import { useParams } from "react-router-dom";
import { createContext } from "react";
import { useSelector } from "react-redux";
import {
  getColumns,
  getConnections,
} from "../../redux/dependancies/dependanciesSlice";
import { useState } from "react";
import { useCallback } from "react";

const FRAME_WIDTH = 2000;
// const FRAME_HEIGHT = 2000;

export const TreeContext = createContext();

export function TreeContextProvider({ children }) {
  const { itemId } = useParams();
  const connections = useSelector(getConnections);
  const columns = useSelector(getColumns);
  const [zoom, _setZoom] = useState(100);

  const setZoom = useCallback(
    (amount) => {
      if (isNaN(amount)) {
        return;
      }
      _setZoom(Math.max(Math.min(amount, 200), 30));
    },
    [_setZoom]
  );

  let nodesToShow = [
    {
      rel: "root",
      id: itemId,
    },
  ];

  // Add all descendents and ancesstors
  connections.forEach((connection) => {
    if (connection.from === itemId) {
      nodesToShow.push({
        rel: "descendant",
        id: connection.to,
      });
    }
    if (connection.to === itemId) {
      nodesToShow.push({
        rel: "ancesstor",
        id: connection.from,
      });
    }
  });

  // Assign the row and position in row
  const colKeys = Object.keys(columns);

  const rowLength = [];

  let columnsLength = 0;

  colKeys.forEach((colKey, index) => {
    let rowCount = 0;
    columns[colKey].items.forEach((item) => {
      const nodeToShowIndex = nodesToShow.findIndex((node) => node.id === item);
      if (nodeToShowIndex < 0) {
        return;
      }
      nodesToShow[nodeToShowIndex].row = index;
      nodesToShow[nodeToShowIndex].rowCount = rowCount++;
      nodesToShow[nodeToShowIndex].col = columns[colKey].title;
    });

    rowLength[index] = rowCount;
    columnsLength = Math.max(rowCount, columnsLength);
  });

  const nodes = nodesToShow.map((node) => {
    return {
      id: node.id,
      rel: node.rel,
      col: node.col,
      descendants: connections.filter(({ from }) => from === node.id).length,
      ancesstors: connections.filter(({ to }) => to === node.id).length,
      position: {
        x: FRAME_WIDTH / 2 + (rowLength[node.row] / 2 - node.rowCount) * 400,
        y: node.row * 180,
      },
    };
  });

  const active = nodes.findIndex((node) => node.id === itemId);

  return (
    <TreeContext.Provider
      value={{ nodes, maxColumns: columnsLength, active, zoom, setZoom }}
    >
      {children}
    </TreeContext.Provider>
  );
}
