import { createContext, useState, useCallback } from "react";

export const ClickAndDrag = createContext();

export const ClickAndDragProvider = ({ children }) => {
  const [state, setState] = useState(false);

  const drag = useCallback(() => {
    setState(true);
  }, [setState]);

  const drop = useCallback(() => {
    setState(false);
  }, [setState]);

  return (
    <ClickAndDrag.Provider
      value={{
        linking: state,
        drag,
        drop,
      }}
    >
      {children}
    </ClickAndDrag.Provider>
  );
};
