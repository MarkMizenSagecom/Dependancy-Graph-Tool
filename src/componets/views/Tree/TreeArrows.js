import { useMemo } from "react";
import styled from "styled-components";

const TreeArrowsG = styled.g`
  pointer-events: none;
`;

function TreeArrows({
  activePosition = { x: 0, y: 0 },
  position = { x: 0, y: 0 },
  rel,
}) {
  const [line, triangle] = useMemo(() => {
    if (activePosition.y > position.y) {
      const xStart = position.x + 150;
      const yStart = position.y + 80;

      const xEnd = activePosition.x + 150;
      const yEnd = activePosition.y;

      return [
        ` M ${xStart} ${yStart},
            C ${xStart} ${yStart + 100},
            ${xEnd} ${yEnd - 100},
            ${xEnd} ${yEnd - 10}
            L ${xEnd} ${yEnd}`,
        `${xEnd},${yEnd} ${xEnd - 5},${yEnd - 10} ${xEnd + 5},${yEnd - 10}`,
      ];
    } else if (activePosition.y < position.y) {
      const xStart = activePosition.x + 150;
      const yStart = activePosition.y + 80;

      const xEnd = position.x + 150;
      const yEnd = position.y;

      return [
        ` M ${xStart} ${yStart},
              C ${xStart} ${yStart + 100},
              ${xEnd} ${yEnd - 100},
              ${xEnd} ${yEnd - 10}
              L ${xEnd} ${yEnd}`,
        `${xEnd},${yEnd} ${xEnd - 5},${yEnd - 10} ${xEnd + 5},${yEnd - 10}`,
      ];
    } else if (rel === "ancesstor") {
      const xStart = position.x + 150;
      const yStart = position.y;

      const xEnd = activePosition.x + 150;
      const yEnd = activePosition.y;

      return [
        ` M ${xStart} ${yStart},
              C ${xStart} ${yStart - 80},
              ${xEnd} ${yEnd - 80},
              ${xEnd} ${yEnd - 10}
              L ${xEnd} ${yEnd}`,
        `${xEnd},${yEnd} ${xEnd - 5},${yEnd - 10} ${xEnd + 5},${yEnd - 10}`,
      ];

      // return [{ x: 0, y: 0 }, ``, ``];
    } else {
      const xStart = activePosition.x + 150;
      const yStart = activePosition.y + 80;

      const xEnd = position.x + 150;
      const yEnd = position.y + 80;

      return [
        ` M ${xStart} ${yStart},
              C ${xStart} ${yStart + 80},
              ${xEnd} ${yEnd + 80},
              ${xEnd} ${yEnd + 10}
              L ${xEnd} ${yEnd}`,
        `${xEnd},${yEnd} ${xEnd - 5},${yEnd + 10} ${xEnd + 5},${yEnd + 10}`,
      ];
    }
  }, [position, activePosition, rel]);

  return (
    <TreeArrowsG>
      <path
        d={line}
        strokeWidth="2"
        fill="transparent"
        stroke="rgba(0, 0, 0, 0.4)"
      ></path>
      <polygon points={triangle} fill="black" />
    </TreeArrowsG>
  );
}

export default TreeArrows;
