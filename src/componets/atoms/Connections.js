import { useMemo, useContext, useEffect, useRef, useState } from "react";
import { Refs } from "../../context/refs";

import useViewport from "../../hooks/useViewport";

import { useSelector } from "react-redux";
import { getConnections } from "../../redux/dependancies/dependanciesSlice";
import styled from "styled-components";

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

    // const filter = itemsContext.connectionSrc
    //   ? ({ from, to }) => {
    //       return (
    //         itemsContext.connectionSrc === from ||
    //         itemsContext.connectionSrc === to
    //       );
    //     }
    //   : () => true;

    return connections?.map(({ from, to }) => {
      try {
        const fromRef = refsContext.refs[from]?.current;
        const toRef = refsContext.refs[to]?.current;

        const fromClientRect = fromRef.getBoundingClientRect();
        const x1 = fromClientRect.right;
        const y1 = fromClientRect.top + scrollTop + fromClientRect.height / 2;

        const toClientRect = toRef.getBoundingClientRect();
        const x2 =
          toClientRect.right === y1 ? toClientRect.right : toClientRect.left;
        const y2 = toClientRect.top + scrollTop + toClientRect.height / 2;

        return `M ${x1} ${y1} , L ${x2}, ${y2}`;
      } catch (err) {
        console.log(err);
      }
      return null;
    });
  }, [viewport, connections, refsContext]);

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
      <pre>{JSON.stringify(connections, null, 2)}</pre>
      <Svg
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        height={svgProps.height}
        width={svgProps.width}
        viewbox={svgProps.viewBox}
      >
        {lines
          ?.filter((line) => !!line)
          .map((lineDef, index) => {
            return (
              <path
                d={lineDef}
                key={index}
                strokeWidth="2px"
                fill="transparent"
                stroke="rgb(33, 133, 208)"
              ></path>
            );
          })}
      </Svg>
    </ConnectionsWrap>
  );
}

export default Connections;
