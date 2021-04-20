import { useState } from "react";

import Search from "carbon-react/lib/__experimental__/components/search";
import SearchResults from "./SearchResults";
import styled from "styled-components";
import Typography from "carbon-react/lib/components/typography";

const SearchWrap = styled.form`
  margin: 2rem 0;
  padding: 0 2rem;
`;

const SearchLabel = styled.label`
  display: block;
  margin: 0 0 2rem;
`;

function ComponentSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchWrap onSubmit={(ev) => ev.preventDefault()}>
      <SearchLabel>
        <Typography as="div" fontWeight="700" mb={1}>Search</Typography>
        <Search
          id="search"
          name="search"
          placeholder=""
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          searchButton
        />
      </SearchLabel>
      <SearchResults searchTerm={searchTerm} />
    </SearchWrap>
  );
}

export default ComponentSearch;
