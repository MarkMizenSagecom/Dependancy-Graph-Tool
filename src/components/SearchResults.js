import Button from "carbon-react/lib/components/button";
import Typography from "carbon-react/lib/components/typography";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";

import { getItems } from "../redux/dependancies/dependanciesSlice";

const ItemActions = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
`;

const Item = styled.li`
  padding: 0.5rem;
  border: 1px solid #ccd6db;
  margin-bottom: 1rem;
`;

function SearchResults({ searchTerm }) {
  const history = useHistory();
  const searchSelector = useCallback(
    (state) => {
      if (!searchTerm) {
        return [];
      }
      const items = getItems(state);
      if (!items) {
        console.log(items);
        return [];
      }
      return Object.keys(items)
        .map((itemId) => ({
          ...items[itemId],
          id: itemId,
        }))
        .filter(
          (item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    },
    [searchTerm]
  );
  const results = useSelector((state) => searchSelector(state, searchTerm));
  return (
    <div>
      <Typography as="ul" listStyleType="none" pl={0}>
        {results.map((item) => {
          return (
            <Item key={item.id} as="li" listStyleType="none" pl={0}>
              <Typography fontWeight="700" mb={2}>
                {item.title}
              </Typography>
              <ItemActions>
                {/* <Button
                  size="small"
                  onClick={() => {
                    const target = document.querySelector(`#${item.id}`);
                    target?.scrollIntoView();
                    target?.focus();
                  }}
                >
                  Highlight
                </Button> */}
                <Button
                  size="small"
                  onClick={() => {
                    history.push(`/tree/${item.id}`);
                  }}
                >
                  Tree View
                </Button>
              </ItemActions>
            </Item>
          );
        })}
      </Typography>
    </div>
  );
}

export default SearchResults;
