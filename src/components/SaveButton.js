import Button from "carbon-react/lib/components/button";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSaving, save } from "../redux/dependancies/dependanciesSlice";

function SaveButton() {
  const saving = useSelector(getSaving);
  const dispatch = useDispatch();
  const handleClick = useCallback(
    (ev) => {
      ev.preventDefault();
      dispatch({ type: save.type });
    },
    [dispatch]
  );
  return (
    <Button fullWidth buttonType="primary" disabled={saving} onClick={handleClick}>
      Save
    </Button>
  );
}

export default SaveButton;
