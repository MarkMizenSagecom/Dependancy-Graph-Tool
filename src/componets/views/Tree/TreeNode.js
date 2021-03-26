import styled from "styled-components";

const NodeTitle = styled.text`
  font: normal 18px sans-serif;
`;

const NodeDescription = styled.text`
  font: normal 14px sans-serif;
`;

function TreeNode({ itemId, itemDetails, position = { x: 0, y: 0 } }) {
  console.log({ itemId, ...position });
  return (
    <g>
      <rect
        x={position.x.toString()}
        y={position.y.toString()}
        height="80"
        width="300"
        fill="transparent"
        stroke="rgba(0, 0, 0, 0.9)"
        strokeWidth="2"
      />
      <NodeTitle
        x={(position.x + 10).toString()}
        y={(position.y + 30).toString()}
      >
        {itemDetails.title}
      </NodeTitle>

      <NodeDescription
        x={(position.x + 10).toString()}
        y={(position.y + 60).toString()}
      >
        {JSON.stringify(itemDetails, null, 2)}
      </NodeDescription>
    </g>
  );
}
export default TreeNode;
