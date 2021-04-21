import Button from "carbon-react/lib/components/button";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSaving, save } from "../redux/dependancies/dependanciesSlice";
import { getReadOnly } from "../redux/user/userSlice";

function SaveButton() {
  const readonly = useSelector(getReadOnly);
  const saving = useSelector(getSaving);
  const dispatch = useDispatch();
  const handleClick = useCallback(
    (ev) => {
      ev.preventDefault();
      dispatch({ type: save.type });
    },
    [dispatch]
  );

  if (readonly) {
    return null;
  }

  return (
    <Button
      fullWidth
      buttonType="primary"
      disabled={saving}
      onClick={handleClick}
    >
      Save
    </Button>
  );
}

export default SaveButton;
