import { useEffect, useContext, useMemo, useReducer } from "react";
import { TreeContext } from "./TreeContext";
import useViewport from "../../hooks/useViewport";
import { useParams } from "react-router";

function reducer(state, { type, payload }) {
  switch (type) {
    case "RESET":
      return {
        scale: 1,
        transform: {
          x: 0,
          y: 0,
        },
        start: {
          x: 0,
          y: 0,
        },
        prev: {
          x: 0,
          y: 0,
        },
        mouseDown: false,
      };
    case "SCALE":
      return {
        ...state,
        scale: payload.scale,
        transform: {
          x: 0,
          y: 0,
        },
        prev: {
          x: 0,
          y: 0,
        },
      };
    case "MOUSE_DOWN":
      return {
        ...state,
        start: {
          x: payload.x,
          y: payload.y,
        },
        mouseDown: true,
      };
    case "MOUSE_UP":
      return {
        ...state,
        mouseDown: false,
        prev: { ...state.transform },
      };
    case "MOVE":
      if (!state.mouseDown) {
        return state;
      }
      const { start, prev } = state;
      return {
        ...state,
        transform: {
          x: prev.x - (start.x - payload.x),
          y: prev.y - (start.y - payload.y),
        },
      };

    default: {
      return state;
    }
  }
}

function DraggableGroup({ children }) {
  const { itemId } = useParams();
  const [dragging, dispatch] = useReducer(reducer, {
    scale: 1,
    transform: {
      x: 0,
      y: 0,
    },
    start: {
      x: 0,
      y: 0,
    },
    prev: {
      x: 0,
      y: 0,
    },
    mouseDown: false,
  });

  const { nodes, active, zoom } = useContext(TreeContext);

  useEffect(() => {
    requestAnimationFrame(() => {
      dispatch({ type: "RESET" });
    });
  }, [itemId, dispatch]);

  useEffect(() => {
    requestAnimationFrame(() => {
      dispatch({ type: "SCALE", payload: { scale: zoom / 100 } });
    });
  }, [zoom, dispatch]);

  const viewport = useViewport();

  const outerTransform = useMemo(() => {
    const x =
      viewport.width / 2 -
      (nodes[active].position.x) * dragging.scale -
      160 - 150;
    const y =
      viewport.height / 2 - (nodes[active].position.y - 40) * dragging.scale;
    return `translate(${x} ${y})`;
  }, [viewport, nodes, active, dragging.scale]);

  useEffect(() => {
    const eventHandler = () => {
      dispatch({ type: "MOUSE_UP" });
    };
    document.addEventListener("mouseleave", eventHandler);
    return () => {
      document.removeEventListener("mouseleave", eventHandler);
    };
  }, [dispatch]);

  return (
    <>
      <rect
        fill="transparent"
        width="2000"
        height="2000"
        onMouseDown={(ev) => {
          dispatch({
            type: "MOUSE_DOWN",
            payload: { x: ev.clientX, y: ev.clientY },
          });
        }}
        onMouseMove={(ev) => {
          dispatch({
            type: "MOVE",
            payload: {
              x: ev.clientX,
              y: ev.clientY,
            },
          });
        }}
        onMouseUp={(ev) => {
          dispatch({ type: "MOUSE_UP" });
        }}
      ></rect>
      <g transform={outerTransform} style={{ userSelect: "none" }}>
        <g
          transform={`translate(${dragging.transform.x} ${dragging.transform.y}) scale(${dragging.scale})`}
        >
          {children}
        </g>
      </g>
    </>
  );
}
export default DraggableGroup;
