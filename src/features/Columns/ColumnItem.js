import {
  useContext,
  useCallback,
  useRef,
  useState,
  useMemo,
  useEffect,
} from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import Button from "carbon-react/lib/components/button";
import Content from "carbon-react/lib/components/content";
import Icon from "carbon-react/lib/components/icon";
import Tile from "carbon-react/lib/components/tile";
import Pill from "carbon-react/lib/components/pill";
import Typography from "carbon-react/lib/components/typography";

import { Refs } from "../../context/refs";

import {
  getItems,
  addConnection,
} from "../../redux/dependancies/dependanciesSlice";

import { getReadOnly } from "../../redux/settings/settingsSlice";

import {
  startLinking,
  doneLinking,
  getIsLinking,
  getLinkingSource,
} from "../../redux/linking/linkingSlice";

import NodeEditor from "./NodeEditor";

import statuses from "../../data/statuses";

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

  const [edittable, setEdittable] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const items = useSelector(getItems);
  const linkingSource = useSelector(getLinkingSource);
  const linking = useSelector(getIsLinking);

  const readonly = useSelector(getReadOnly);

  useEffect(() => {
    console.log({ linkingSource, linking });
  }, [linkingSource, linking]);

  const { addRef, removeRef } = useContext(Refs);

  const item = useMemo(() => {
    return items[itemId];
  }, [items, itemId]);

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

  const viewTree = useCallback(
    (ev) => {
      ev.preventDefault();
      history.push(`/tree/${itemId}`);
    },
    [history, itemId]
  );

  // Add a link
  const addLink = useCallback(() => {
    if (linking && linkingSource !== itemId) {
      dispatch({
        type: addConnection.type,
        payload: { from: linkingSource, to: itemId },
      });
    }
  }, [linking, linkingSource, dispatch, itemId]);

  // Start linking
  const startLinkingFromNode = useCallback(
    (ev) => {
      ev.preventDefault();
      dispatch({
        type: startLinking.type,
        payload: { id: itemId },
      });
    },
    [dispatch, itemId]
  );

  useEffect(() => {
    addRef(itemId, ref.current);
    return () => {
      removeRef(itemId);
    };
  }, [addRef, removeRef, ref, itemId]);

  useEffect(() => {
    if (linking !== itemId) {
      return;
    }
    const exitlinking = (ev) => {
      if (ev.key === "Escape") {
        dispatch({ type: doneLinking.type });
      }
    };
    window.addEventListener("keydown", exitlinking);
    return () => {
      window.removeEventListener("keydown", exitlinking);
    };
  }, [itemId, linking, dispatch]);

  return (
    <ColumnItemEle ref={ref} onClick={addLink} linking={!!linking} id={itemId}>
      <Tile orientation="vertical" pixelWidth={320}>
        <Content>
          {edittable ? (
            <NodeEditor {...{ itemId, item, doneEditing }} />
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

              {item.status && (
                <Pill mb={1} borderColor={statuses[item.status]?.color} fill>
                  {statuses[item.status]?.text}
                </Pill>
              )}

              {item.description && (
                <Typography mb={2}>{item.description}</Typography>
              )}

              <ItemButtons>
                {linkingSource === itemId ? (
                  <Button
                    size="small"
                    variant="primary"
                    onClick={() => dispatch({ type: doneLinking.type })}
                  >
                    Done
                  </Button>
                ) : (
                  <>
                    {!readonly && (
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
                          onClick={startLinkingFromNode}
                          disabled={!!linking}
                        >
                          Link
                        </Button>
                      </>
                    )}
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
    </ColumnItemEle>
  );
}

export default ColumnItem;
