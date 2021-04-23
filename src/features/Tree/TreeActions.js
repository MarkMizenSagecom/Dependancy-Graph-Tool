import { useContext } from "react";
import Button from "carbon-react/lib/components/button";
import styled from "styled-components";
import { TreeContext } from "./TreeContext";
import Typography from "carbon-react/lib/components/typography";

const ButtonWrap = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
`;

function TreeActions() {
  const context = useContext(TreeContext);
  return (
    <ButtonWrap>
      <Typography mb={1} fontWeight="600">Zoom: {context.zoom}%</Typography>
      <Button
        size="small"
        onClick={() => context.setZoom(context.zoom + 20)}
        iconType="plus"
      >
        Zoom In
      </Button>
      <Button
        size="small"
        onClick={() => context.setZoom(context.zoom - 20)}
        iconType="minus"
      >
        Zoom Out
      </Button>
    </ButtonWrap>
  );
}

export default TreeActions;
