import ButtonToggle from "carbon-react/lib/components/button-toggle";
import Typography from "carbon-react/lib/components/typography";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getShowAllArrows, setOption } from "../redux/options/optionsSlice";

const Wrap = styled.div`
  text-align: center;
`;

function ShowHideAllArrows() {
  const showAllArrows = useSelector(getShowAllArrows);
  const dispatch = useDispatch();
  return (
    <Wrap>
      <Typography fontWeight="600" mb={1}>
        Show Arrows:
      </Typography>
      <div>
        <ButtonToggle
          grouped
          name="showOtherRels"
          key="show"
          onChange={() => {
            dispatch({
              type: setOption.type,
              payload: { key: "showAllArrows", value: true },
            });
          }}
          checked={showAllArrows}
        >
          Show
        </ButtonToggle>
        <ButtonToggle
          grouped
          name="showOtherRels"
          key="hide"
          onChange={() => {
            dispatch({
              type: setOption.type,
              payload: { key: "showAllArrows", value: false },
            });
          }}
          checked={!showAllArrows}
        >
          Hide
        </ButtonToggle>
      </div>
    </Wrap>
  );
}

export default ShowHideAllArrows;
