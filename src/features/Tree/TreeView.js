import { useEffect, useState } from "react";
import DraggableGroup from "./DraggableGroup";
import styled from "styled-components";

import useViewport from "../../hooks/useViewport";

import TreeActions from "./TreeActions";
import TreeContents from "./TreeContents";
import { TreeContextProvider } from "./TreeContext";

const TreeViewWrap = styled.div`
  width: calc(100vw - 320px);
  height: 100vh;
  position: relative;
`;

const TreeViewSVG = styled.svg`
  position: absolute;
  left: 0;
  top: 0;
`;

function TreeView() {
  const viewport = useViewport();
  const [svgProps, setSvgProps] = useState({
    height: 300,
    width: 600,
    viewbox: `0 0 600 300`,
  });

  useEffect(() => {
    const { width, height } = viewport;
    setSvgProps({
      width: width - 320,
      height,
      viewbox: `0 0 ${width - 320} ${height}`,
    });
  }, [viewport, setSvgProps]);

  return (
    <TreeViewWrap>
      <TreeContextProvider>
        <TreeViewSVG
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          {...svgProps}
        >
          <DraggableGroup>
            <TreeContents />
          </DraggableGroup>
        </TreeViewSVG>
        <TreeActions/>
      </TreeContextProvider>
    </TreeViewWrap>
  );
}
export default TreeView;
