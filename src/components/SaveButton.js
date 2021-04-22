import Loader from "carbon-react/lib/components/loader";
import Button from "carbon-react/lib/components/button";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSaving, save } from "../redux/dependancies/dependanciesSlice";
import { getWriteAccess } from "../redux/user/userSlice";

function SaveButton() {
  const writeAccess = useSelector(getWriteAccess);
  const saving = useSelector(getSaving);
  const dispatch = useDispatch();

  const handleClick = useCallback(
    (ev) => {
      ev.preventDefault();
      if (!saving) {
        dispatch({ type: save.type });
      }
    },
    [dispatch, saving]
  );

  if (!writeAccess) {
    return null;
  }

  return (
    <Button fullWidth buttonType="primary" onClick={handleClick}>
      {saving ? <Loader isInsideButton /> : <>Save</>}
    </Button>
  );
}

export default SaveButton;
