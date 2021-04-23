import ButtonToggle from "carbon-react/lib/components/button-toggle";
import Typography from "carbon-react/lib/components/typography";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  getShowOtherRelations,
  setOption,
} from "../redux/options/optionsSlice";

const Wrap = styled.div`
  text-align: center;
`;

function ShowHideOtherRelations() {
  const showOtherRelations = useSelector(getShowOtherRelations);
  const dispatch = useDispatch();
  return (
    <Wrap>
      <Typography fontWeight="600" mb={1}>
        Show other relations:
      </Typography>
      <div>
        <ButtonToggle
          grouped
          name="showOtherRels"
          key="show"
          onChange={() => {
            dispatch({
              type: setOption.type,
              payload: { key: "showOtherRelations", value: true },
            });
          }}
          checked={showOtherRelations}
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
              payload: { key: "showOtherRelations", value: false },
            });
          }}
          checked={!showOtherRelations}
        >
          Hide
        </ButtonToggle>
      </div>
    </Wrap>
  );
}

export default ShowHideOtherRelations;
