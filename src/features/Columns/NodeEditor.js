import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import statuses from "../../data/statuses";

import Button from "carbon-react/lib/components/button";
import Textbox from "carbon-react/lib/__experimental__/components/textbox";
import Typography from "carbon-react/lib/components/typography";
import Confirm from "carbon-react/lib/components/confirm";
import { Select, Option } from "carbon-react/lib/components/select";

import { updateItem } from "../../redux/dependancies/dependanciesSlice";

import { removeItem } from "../../redux/dependancies/dependanciesSlice";

const ItemButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const Circle = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 0 0.5rem;
  vertical-align: middle;
  ${(props) => props.color && `background: ${props.color};`}
`;

function NodeEditor({ itemId, item, doneEditing }) {
  const dispatch = useDispatch();
  const [confirmDelete, setConfirmDelete] = useState(false);

  const update = useCallback(
    (key, val) => {
      dispatch({
        type: updateItem.type,
        payload: {
          id: itemId,
          update: {
            [key]: val,
          },
        },
      });
    },
    [itemId, dispatch]
  );

  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
      }}
    >
      <Typography>
        <Textbox
          labelInline
          label="Name"
          size="small"
          value={item.title}
          onChange={(ev) => {
            update("title", ev.target.value);
          }}
          required
        />
      </Typography>
      <Typography>
        <Select
          labelInline
          name="simple"
          size="small"
          label="Status"
          value={item.status}
          onChange={(ev) => {
            update("status", ev.target.value);
          }}
        >
          {Object.keys(statuses).map((status) => {
            return (
              <Option value={status} key={status}>
                <Circle color={statuses[status].color} />
                {statuses[status].text}
              </Option>
            );
          })}
        </Select>
      </Typography>
      <Typography>
        <Textbox
          labelInline
          label="Description"
          value={item.description}
          size="small"
          onChange={(ev) => update("description", ev.target.value)}
        />
      </Typography>
      <ItemButtons>
        <Button size="small" onClick={setConfirmDelete}>
          Delete
        </Button>

        <Button
          buttonType="primary"
          size="small"
          onClick={doneEditing}
          type="submit"
        >
          Done
        </Button>
      </ItemButtons>

      <Confirm
        title="Delete item"
        open={confirmDelete}
        onConfirm={() => {
          setConfirmDelete(false);
          requestAnimationFrame(() => {
            dispatch({ type: removeItem.type, payload: { id: itemId } });
          });
        }}
        onCancel={() => setConfirmDelete(false)}
      >
        Are you sure?
      </Confirm>
    </form>
  );
}

export default NodeEditor;
