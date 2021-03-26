import { useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { ClickAndDragProvider } from "../../context/clickAndDrag";
import { RefsProvider } from "../../context/refs";
import { LinkingProvider } from "../../context/linking";
import { getColumns } from "../../redux/dependancies/dependanciesSlice";

import AddNewColumn from "../atoms/AddNewColumn";
import Connections from "../atoms/Connections";
import Column from "../containers/Column";
import { updateScrollLeft } from "../../redux/connections/connectionsSlice";

const ColumnViewWrap = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
`;
const ColumnsScrollableWrap = styled.div`
  width: 100%;
  display: flex;
  flex: 1 1 100%;
  overflow-x: scroll;
  scroll-snap-type: x proximity;
  scroll-behaviour: smooth;
`;

const Provders = ({ children }) => (
  <LinkingProvider>
    <ClickAndDragProvider>
      <RefsProvider>{children}</RefsProvider>
    </ClickAndDragProvider>
  </LinkingProvider>
);

function ColumnView() {
  const columns = useSelector(getColumns);
  const dispatch = useDispatch();

  const scrollable = useRef(null);

  const handleScroll = useCallback(
    (ev) => {
      dispatch({
        type: updateScrollLeft.type,
        payload: { value: ev.target.scrollLeft },
      });
    },
    [dispatch]
  );

  return (
    <div style={{ position: "relative" }}>
      <Provders>
        <Connections />
        <ColumnViewWrap>
          {/* <ColumnViewOptions /> */}
          <ColumnsScrollableWrap ref={scrollable} onScroll={handleScroll}>
            {Object.keys(columns).map((colId) => (
              <Column key={colId} colId={colId} />
            ))}
            <AddNewColumn />
          </ColumnsScrollableWrap>
        </ColumnViewWrap>
      </Provders>
    </div>
  );
}
export default ColumnView;
