import {
  useContext,
  useCallback,
  useRef,
  useState,
  useMemo,
  useEffect,
} from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "carbon-react/lib/components/button";
import Content from "carbon-react/lib/components/content";
import Icon from "carbon-react/lib/components/icon";
import Textbox from "carbon-react/lib/__experimental__/components/textbox";
import Tile from "carbon-react/lib/components/tile";
import Confirm from "carbon-react/lib/components/confirm";
import Typography from "carbon-react/lib/components/typography";
import { Select, Option } from "carbon-react/lib/components/select";

import { Refs } from "../../context/refs";

import styled from "styled-components";

import {
  getItems,
  removeItem,
  updateItem,
} from "../../redux/dependancies/dependanciesSlice";
import { Linking } from "../../context/linking";
import { useHistory } from "react-router";

const ColumnItemEle = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
  ${(props) =>
    props.linking
      ? `
      cursor:pointer;
      &:hover {
        border-color: red;
      }`
      : ""}
`;

const ItemButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const ReadOnlyView = styled.div`
  position: relative;
  padding-left: 1rem;
`;

function ColumnItem({ itemId }) {
  const ref = useRef(null);

  const items = useSelector(getItems);
  const dispatch = useDispatch();

  const history = useHistory();

  const { addRef, removeRef } = useContext(Refs);

  const item = useMemo(() => {
    return items[itemId];
  }, [items, itemId]);

  const [edittable, setEdittable] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const startEditing = useCallback(
    (ev) => {
      ev.preventDefault();
      setEdittable(true);
      requestAnimationFrame(() => {
        ref.current?.querySelector("input")?.focus();
      });
    },
    [setEdittable, ref]
  );

  const doneEditing = useCallback(() => {
    setEdittable(false);
  }, [setEdittable]);

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

  useEffect(() => {
    addRef(itemId, ref.current);
    return () => {
      removeRef(itemId);
    };
  }, [addRef, removeRef, ref, itemId]);

  const { linking, startLinking, doneLinking, addLink } = useContext(Linking);

  const viewTree = useCallback(
    (ev) => {
      ev.preventDefault();
      history.push(`/tree/${itemId}`);
    },
    [history, itemId]
  );

  useEffect(() => {
    if (linking !== itemId) {
      return;
    }
    const exitlinking = (ev) => {
      if (ev.key === "Escape") {
        doneLinking();
      }
    };
    window.addEventListener("keydown", exitlinking);
    return () => {
      window.removeEventListener("keydown", exitlinking);
    };
  }, [itemId, linking, doneLinking]);

  return (
    <ColumnItemEle
      ref={ref}
      onClick={() => {
        if (linking && linking !== itemId) {
          addLink(itemId);
        }
      }}
      linking={!!linking}
    >
      <Tile orientation="vertical" pixelWidth={320}>
        <Content>
          {edittable ? (
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
                <Textbox
                  labelInline
                  label="Description"
                  value={item.description}
                  size="small"
                  onChange={(ev) => update("description", ev.target.value)}
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
                  <Option text="Blue" value="blue" />
                </Select>
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
            </form>
          ) : (
            <ReadOnlyView>
              <div
                style={{
                  position: "absolute",
                  right: "100%",
                  top: "50%",
                  transform: "translate(.5rem, -50%)",
                  cursor: "pointer",
                }}
              >
                <Icon fontSize="medium" type="drag_vertical" />
              </div>

              <Typography variant="h3" mb={1}>
                {item.title ?? "\u00A0"}
              </Typography>
              {item.description && (
                <Typography mb={1}>{item.description}</Typography>
              )}
              {item.status && <Typography mb={1}>{item.status}</Typography>}
              <ItemButtons>
                {linking === itemId ? (
                  <Button size="small" variant="primary" onClick={doneLinking}>
                    Done
                  </Button>
                ) : (
                  <>
                    <Button
                      size="small"
                      onClick={startEditing}
                      disabled={!!linking}
                    >
                      Edit
                    </Button>
                    <Button
                      size="small"
                      onClick={() => startLinking(itemId)}
                      disabled={!!linking}
                    >
                      Link
                    </Button>
                    <Button
                      size="small"
                      onClick={viewTree}
                      disabled={!!linking}
                    >
                      Tree
                    </Button>
                  </>
                )}
              </ItemButtons>
            </ReadOnlyView>
          )}
        </Content>
      </Tile>

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
    </ColumnItemEle>
  );
}

export default ColumnItem;
