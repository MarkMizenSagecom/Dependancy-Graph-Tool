import { useMemo } from "react";
import { useParams } from "react-router-dom";
import TreeNode from "./TreeNode";
import { useSelector } from "react-redux";
import {
  getColumns,
  getConnections,
  getItems,
} from "../../../redux/dependancies/dependanciesSlice";

const FRAME_WIDTH = 2000;
const FRAME_HEIGHT = 2000;

function TreeContents() {
  const { itemId } = useParams();
  const items = useSelector(getItems);
  const connections = useSelector(getConnections);
  const columns = useSelector(getColumns);

  const nodes = useMemo(() => {
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

    colKeys.forEach((colKey, index) => {
      let rowCount = 0;
      columns[colKey].items.forEach((item) => {
        const nodeToShowIndex = nodesToShow.findIndex(
          (node) => node.id === item
        );
        if (nodeToShowIndex < 0) {
          return;
        }
        nodesToShow[nodeToShowIndex].row = index;
        nodesToShow[nodeToShowIndex].rowCount = rowCount++;
      });

      rowLength[index] = rowCount;
    });

    const nodesAndPos = nodesToShow.map((node) => {
      return {
        id: node.id,
        position: {
          x: FRAME_WIDTH / 2 + (rowLength[node.row] / 2 - node.rowCount) * 500,
          y: node.row * 300,
        },
      };
    });

    console.log(nodesAndPos);

    return nodesAndPos;
  }, [columns, connections, itemId]);

  return (
    <>
      {nodes.map((node, index) => (
        <TreeNode
          key={index}
          itemId={node.id}
          itemDetails={items[node.id]}
          position={node.position}
        />
      ))}
    </>
  );
}

export default TreeContents;
