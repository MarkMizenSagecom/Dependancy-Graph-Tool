import { useEffect, useCallback, useState, useReducer } from "react";
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

const formDataReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return action.payload;
    case "UPDATE":
      const { key, val } = action.payload;
      return { ...state, [key]: val };
    default:
      return state;
  }
};

function NodeEditor({ itemId, item, doneEditing }) {
  const dispatch = useDispatch();
  const [confirmDelete, setConfirmDelete] = useState(false);

  const [formData, formDataDispatch] = useReducer(formDataReducer, {
    title: "",
    status: "",
    description: "",
  });

  const save = useCallback(() => {
    dispatch({
      type: updateItem.type,
      payload: {
        id: itemId,
        update: formData,
      },
    });
    doneEditing();
  }, [itemId, dispatch, formData, doneEditing]);

  useEffect(() => {
    formDataDispatch({ type: "SET", payload: item });
  }, [item]);

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
          value={formData.title}
          onChange={(ev) => {
            console.log("here!");
            formDataDispatch({
              type: "UPDATE",
              payload: {
                key: "title",
                val: ev.target.value,
              },
            });
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
          value={formData.status}
          onChange={(ev) => {
            formDataDispatch({
              type: "UPDATE",
              payload: {
                key: "status",
                val: ev.target.value,
              },
            });
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
          value={formData.description}
          size="small"
          onChange={(ev) => {
            formDataDispatch({
              type: "UPDATE",
              payload: {
                key: "description",
                val: ev.target.value,
              },
            });
          }}
        />
      </Typography>
      <ItemButtons>
        <Button size="small" onClick={setConfirmDelete}>
          Delete
        </Button>

        <Button buttonType="primary" size="small" onClick={save} type="submit">
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
