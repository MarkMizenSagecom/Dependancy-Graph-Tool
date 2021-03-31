import TreeNode from "./TreeNode";
import { useCallback, useContext, useMemo } from "react";
import { TreeContext } from "./TreeContext";
import { useSelector } from "react-redux";
import { getItems } from "../../../redux/dependancies/dependanciesSlice";
import TreeArrows from "./TreeArrows";
import { useHistory } from "react-router";

function TreeContents() {
  const { nodes, active } = useContext(TreeContext);
  const items = useSelector(getItems);
  const history = useHistory();

  const activePosition = useMemo(() => {
    return nodes[active].position;
  }, [nodes, active]);

  const switchItem = useCallback(
    (id) => {
      history.push(`/tree/${id}`);
    },
    [history]
  );

  return (
    <>
      {nodes && (
        <>
          {nodes.map((node, index) => {
            if (node.rel === "root") {
              return null;
            }
            return (
              <TreeArrows
                key={index}
                rel={node.rel}
                position={node.position}
                activePosition={activePosition}
              />
            );
          })}
          {nodes.map((node, index) => (
            <TreeNode
              selected={() => {
                switchItem(node.id);
              }}
              key={index}
              itemDetails={items[node.id]}
              {...node}
            />
          ))}
        </>
      )}
    </>
  );
}

export default TreeContents;
