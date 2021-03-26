import { useMemo, useContext, useEffect, useRef, useState } from "react";
import { Refs } from "../../context/refs";

import useViewport from "../../hooks/useViewport";

import { useSelector } from "react-redux";
import { getConnections } from "../../redux/dependancies/dependanciesSlice";
import styled from "styled-components";
import { getScrollLeft } from "../../redux/connections/connectionsSlice";

const ConnectionsWrap = styled.div`
  pointer-events: none;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`;

const Svg = styled.svg`
  width: 100%;
  height: 100%;
  display: block;
`;

function Connections() {
  const connections = useSelector(getConnections);
  const scrollLeft = useSelector(getScrollLeft);

  const refsContext = useContext(Refs);

  const [svgProps, setSvgProps] = useState({
    width: 100,
    height: 100,
    viewBox: `0 0 100 100`,
  });

  const viewport = useViewport();

  const ref = useRef(null);

  const lines = useMemo(() => {
    const { scrollTop } = document.documentElement;

    return connections
      ?.map(({ from, to }) => {
        try {
          const fromRef = refsContext.refs[from];
          const toRef = refsContext.refs[to];

          const fromClientRect = fromRef.getBoundingClientRect();
          const xStart = fromClientRect.right;
          const yStart =
            fromClientRect.top + scrollTop + fromClientRect.height / 2;

          const toClientRect = toRef.getBoundingClientRect();
          let xEnd = toClientRect.right;
          let yEnd = toClientRect.top + scrollTop + toClientRect.height / 2;

          if (xStart === xEnd || Math.abs(xStart - xEnd) < 1) {
            // modifier is negative if to is below from
            const modifier = yStart > yEnd ? 1 : -1;
            yEnd = yEnd + (modifier * toClientRect.height) / 4;

            return {
              line: `M ${xStart} ${yStart} 
          C ${xStart + 40} ${yStart}, 
            ${xEnd + 40} ${yEnd}, 
            ${xEnd} ${yEnd}`,
              start: { x: xStart, y: yStart },
            };
          } else {
            xEnd = toClientRect.left;

            return {
              line: `M ${xStart} ${yStart} 
            C ${xStart + 40} ${yStart}, 
              ${xEnd - 40} ${yEnd}, 
              ${xEnd} ${yEnd}`,
              start: { x: xStart, y: yStart },
            };
          }

          // return `M ${x1} ${y1} , L ${x2}, ${y2}`;
          // return `M ${x1} ${y1} C ${x1} ${y1}, ${x1 + 20} ${y1}, ${x2} ${y2}`;

          // return `M ${xStart} ${yStart} C ${xStart} ${yStart}, ${xStart + 50} ${
          //   yStart + 50
          // }, ${xEnd} ${yEnd}`;
        } catch (err) {
          console.log(err);
        }
        return null;
      })
      ?.filter((line) => !!line)
      .map(({ start, line }, index) => {
        return (
          <g key={index}>
            <path
              d={line}
              strokeWidth="2"
              fill="transparent"
              stroke="rgba(0, 0, 0, 0.4)"
            ></path>
            <circle cx={start.x} cy={start.y} r="4" fill="rgba(0, 0, 0, 0.4)" />
          </g>
        );
      });
  }, [viewport, scrollLeft, connections, refsContext]);

  useEffect(() => {
    if (!viewport || !ref?.current) {
      return;
    }
    setSvgProps({
      height: viewport.height,
      width: viewport.width,
      viewBox: `0 0 ${viewport.height} ${viewport.width}`,
    });
  }, [viewport, ref, setSvgProps]);

  return (
    <ConnectionsWrap ref={ref}>
      <Svg
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        height={svgProps.height}
        width={svgProps.width}
        viewbox={svgProps.viewBox}
      >
        {lines}
      </Svg>
    </ConnectionsWrap>
  );
}

export default Connections;
