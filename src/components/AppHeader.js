import styled from "styled-components";
import SaveButton from "./SaveButton";

const HeaderWrap = styled.header`
  height: 2.5rem;
  background: #023349;
`;

function AppHeader() {
  return (
    <HeaderWrap>
      <SaveButton />
    </HeaderWrap>
  );
}

export default AppHeader;
