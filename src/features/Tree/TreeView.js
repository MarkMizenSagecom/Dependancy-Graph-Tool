import { useEffect, useState } from "react";
import DraggableGroup from "./DraggableGroup";
import styled from "styled-components";

import useViewport from "../../hooks/useViewport";

import TreeContents from "./TreeContents";
import Button from "carbon-react/lib/components/button";
import { useHistory } from "react-router";
import { TreeContextProvider } from "./TreeContext";

const TreeViewWrap = styled.div`
  width: 100vw;
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
  const history = useHistory();
  const [svgProps, setSvgProps] = useState({
    height: 300,
    width: 600,
    viewbox: `0 0 600 300`,
  });

  useEffect(() => {
    const { width, height } = viewport;
    setSvgProps({ width, height, viewbox: `0 0 ${width} ${height}` });
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
        <div
          style={{
            zIndex: 10,
            position: "relative",
          }}
        >
          <Button onClick={() => history.push("/columns")}>Editor</Button>
        </div>
      </TreeContextProvider>
    </TreeViewWrap>
  );
}
export default TreeView;
