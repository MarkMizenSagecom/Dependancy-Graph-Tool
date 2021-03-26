import { useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ClickAndDragProvider } from "../../context/clickAndDrag";
import { RefsProvider } from "../../context/refs";
import { LinkingProvider } from "../../context/linking";
import { getColumns } from "../../redux/dependancies/dependanciesSlice";

import AddNewColumn from "../atoms/AddNewColumn";
import Connections from "../atoms/Connections";
import Column from "../containers/Column";

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
  const scrollable = useRef(null);

  return (
    <div style={{ position: "relative" }}>
      <Provders>
        <ColumnViewWrap>
          {/* <ColumnViewOptions /> */}
          <ColumnsScrollableWrap ref={scrollable}>
            {Object.keys(columns).map((colId) => (
              <Column key={colId} colId={colId} />
            ))}
            <AddNewColumn />
          </ColumnsScrollableWrap>
        </ColumnViewWrap>
        <Connections />
      </Provders>
    </div>
  );
}
export default ColumnView;
