import { useSelector } from "react-redux";
import styled from "styled-components";
import statuses from "../../data/statuses";
import { getShowOtherRelations } from "../../redux/options/optionsSlice";

const NodeTitle = styled.text`
  font: normal 18px sans-serif;
  pointer-events: none;
`;

// const NodeDescription = styled.text`
//   font: normal 14px sans-serif;
//   pointer-events: none;
// `;

const NodeColumn = styled.text`
  font: normal 14px sans-serif;
  pointer-events: none;
`;

const NodeBox = styled.rect`
  fill: #fff;
  stroke: #8099a4;
  stroke-width: 1;
  filter: 
    drop-shadow(0 3px 3px rgba(0,20,29,0.2)) 
    drop-shadow(0 2px 4px rgba(0,20,29,0.15));
  ${(props) =>
    props.root
      ? `
      stroke-width: 2;
      fill: rgb(242, 245, 246);
      `
      : `
      &:hover {
        stroke-width: 2;
        stroke: #008200;
        cursor: pointer;
      }
    `}}
`;

const StatusBox = styled.rect`
  stroke-width: 0;
  ${(props) => {
    if (statuses[props.status]) {
      return `fill: ${statuses[props.status].color};`;
    }
    return `fill: transparent;`;
  }}
`;

const OtherNodeLabel = ({ x, y, parentX, parentY, text }) => {
  const line = `M ${parentX} ${parentY}, L ${x} ${y}`;
  return (
    <g>
      <path
        d={line}
        strokeWidth="2"
        fill="transparent"
        stroke="rgba(0, 0, 0, 0.4)"
      />
      <circle
        cx={x}
        cy={y}
        r="16"
        fill="#ffffff"
        stroke="#8099a4"
        strokeWidth="1"
      />
      <text x={x} y={y} textAnchor="middle" dominantBaseline="central">
        {text}
      </text>
    </g>
  );
};

function TreeNode({
  selected,
  itemDetails,
  position = { x: 0, y: 0 },
  rel,
  descendants,
  ancesstors,
  col,
}) {
  const showOtherRelations = useSelector(getShowOtherRelations);

  let descendantsLabel = "";
  let ancesstorsLabel = "";

  if (rel === "ancesstor") {
    descendantsLabel = descendants - 1 > 0 ? `+${descendants - 1}` : "";
    ancesstorsLabel = ancesstors;
  }

  if (rel === "descendant") {
    descendantsLabel = descendants;
    ancesstorsLabel = ancesstors - 1 > 0 ? `+${ancesstors - 1}` : "";
  }

  return (
    <>
      <g onClick={selected}>
        <NodeBox
          root={rel === "root"}
          x={position.x.toString()}
          y={position.y.toString()}
          height="80"
          width="300"
        />

        <StatusBox
          status={itemDetails?.status}
          x={position.x.toString()}
          y={position.y.toString()}
          height="80"
          width="8"
        />

        <NodeTitle
          x={(position.x + 24).toString()}
          y={(position.y + 30).toString()}
        >
          {itemDetails?.title}
        </NodeTitle>

        <NodeColumn
          x={(position.x + 24).toString()}
          y={(position.y + 60).toString()}
        >
          {col}
        </NodeColumn>

        {/* <NodeDescription
          x={(position.x + 10).toString()}
          y={(position.y + 60).toString()}
        >
          {itemDetails?.description}
        </NodeDescription> */}
      </g>

      {showOtherRelations && (
        <>
          {descendantsLabel > 0 && (
            <OtherNodeLabel
              x={(position.x + 240).toString()}
              y={(position.y + 80 + 40).toString()}
              parentX={position.x + 240}
              parentY={position.y + 80}
              text={descendantsLabel}
            />
          )}

          {ancesstorsLabel > 0 && (
            <OtherNodeLabel
              x={(position.x + 240).toString()}
              y={(position.y - 40).toString()}
              parentX={position.x + 240}
              parentY={position.y}
              text={ancesstorsLabel}
            />
          )}
        </>
      )}
    </>
  );
}
export default TreeNode;
