import { createContext, useCallback, useEffect, useReducer } from "react";

export const Refs = createContext({});

function reducer(state, { type, payload }) {
  switch (type) {
    case "ADD": {
      const { id, ref } = payload;
      return {
        ...state,
        [id]: ref,
      };
    }
    case "REMOVE": {
      const { id } = payload;
      const newState = { ...state };
      delete newState[id];
      return newState;
    }
    default:
      return state;
  }
}

export const RefsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {});

  const addRef = useCallback(
    (id, ref) => {
      dispatch({ type: "ADD", payload: { id, ref } });
    },
    [dispatch]
  );

  const removeRef = useCallback(
    (id) => {
      dispatch({ type: "REMOVE", payload: { id } });
    },
    [dispatch]
  );

  return (
    <Refs.Provider
      value={{
        refs: state,
        addRef,
        removeRef,
      }}
    >
      {children}
    </Refs.Provider>
  );
};
