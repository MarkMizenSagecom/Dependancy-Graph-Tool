import { createContext, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addConnection } from "../redux/dependancies/dependanciesSlice";

export const Linking = createContext(false);

export const LinkingProvider = ({ children }) => {
  const [state, setState] = useState(null);

  const dispatch = useDispatch();

  const startLinking = useCallback(
    (id) => {
      setState(id);
    },
    [setState]
  );

  const doneLinking = useCallback(() => {
    setState(null);
  }, [setState]);

  const addLink = useCallback(
    (id) => {
      if (state && id) {
        dispatch({
          type: addConnection.type,
          payload: { from: state, to: id },
        });
      }
    },
    [dispatch, state]
  );

  return (
    <Linking.Provider
      value={{
        linking: state,
        startLinking,
        doneLinking,
        addLink,
      }}
    >
      {children}
    </Linking.Provider>
  );
};
