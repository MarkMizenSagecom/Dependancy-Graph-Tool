import { useDispatch } from "react-redux";
import { addColumn } from "../../redux/dependancies/dependanciesSlice";

import Button from "carbon-react/lib/components/button";

function AddNewColumn() {
  const dispatch = useDispatch();

  return (
    <div style={{width: '260px', paddingTop: '1.5rem', flex: '1 0 auto'}}>
      <Button
        onClick={() => {
          dispatch({ type: addColumn.toString() });
        }}
        iconType="plus"
      >Add New Column</Button>
    </div>
  );
}

export default AddNewColumn;
