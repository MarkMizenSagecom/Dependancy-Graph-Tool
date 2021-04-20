import { useMemo, useRef } from "react";
import IconButton from "carbon-react/lib/components/icon-button";
import Icon from "carbon-react/lib/components/icon";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { getReadOnly } from "../../redux/settings/settingsSlice";
import {
  addItem,
  getColumns,
  updateColumn,
} from "../../redux/dependancies/dependanciesSlice";

import ColumnItem from "./ColumnItem";

const ColumnEle = styled.div`
  display: flex;
  padding: 0 2.5rem;
  flex: 0 0 320px;
  flex-direction: column;
  border-right: 2px solid #8099a4;
`;

const ColumnVerticalList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
  align-items: center;
  ${(props) => props.justify && `justify-content: ${props.justify};`}
`;

const ColumnTitle = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  padding: 1.5rem 0;
  display: flex;
  gap: 1rem;
`;

const ColumnTitleText = styled.h2`
  font-size: 18px;
  font-weight: 600;
  padding: 0.5rem;
  border-bottom: 2px solid transparent;
  margin: 0;
`;

const ColumnTitleEditable = styled.input`
  border: none;
  background: none;
  font-family: inherit;
  font-size: 18px;
  font-weight: 600;
  padding: 0.5rem;
  border-radius: 0;
  width: 100%;
  border-bottom: 2px solid transparent;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-bottom: 2px solid #0077c8;
  }
`;

const EditableWrap = styled.div`
  flex: 1 0 auto;
  position: relative;
`;

const EditableIcon = styled.div`
  position: absolute;
  right: 0;
  top: 0.5rem;
  cursor: pointer;
`;

function Column({ justify = "flex-start", colId }) {
  const dispatch = useDispatch();
  const columns = useSelector(getColumns);

  const column = useMemo(() => columns[colId], [colId, columns]);
  const readonly = useSelector(getReadOnly);
  const titleInput = useRef(null);

  return (
    <ColumnEle>
      <ColumnTitle>
        {readonly ? (
          <ColumnTitleText>{column?.title}</ColumnTitleText>
        ) : (
          <>
            <EditableWrap>
              <ColumnTitleEditable
                ref={titleInput}
                value={column?.title}
                type="text"
                onChange={(ev) => {
                  dispatch({
                    type: updateColumn.type,
                    payload: { id: colId, title: ev.target.value },
                  });
                }}
              />
              <EditableIcon
                onClick={() => {
                  titleInput.current.focus();
                }}
              >
                <Icon type="edit" />
              </EditableIcon>
            </EditableWrap>
            <IconButton
              type="button"
              onAction={(ev) => {
                ev.preventDefault();
                dispatch({
                  type: addItem.type,
                  payload: {
                    column: colId,
                  },
                });
              }}
            >
              <Icon bgTheme="info" bgSize="large" type="plus" />
            </IconButton>
          </>
        )}
      </ColumnTitle>

      <ColumnVerticalList justify={justify}>
        {column?.items?.map((itemId) => (
          <ColumnItem key={itemId} itemId={itemId} />
        ))}
      </ColumnVerticalList>
    </ColumnEle>
  );
}

export default Column;
