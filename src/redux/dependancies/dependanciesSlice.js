import { createSlice } from "@reduxjs/toolkit";

const genId = (prefix = "item") =>
  `${prefix}-${Math.random()
    .toString()
    .substr(2, 8)}${Math.random().toString().substr(2, 8)}`;

const genItem = (partial = {}) => {
  const now = new Date();
  return {
    title: "Name",
    description: "",
    status: "unknown",
    updated: {
      seconds: Math.floor(now / 1000),
      milliseconds: now % 1000,
    },
    ...partial,
  };
};

export const dependanciesSlice = createSlice({
  name: "dependancies",
  initialState: {
    saving: false,
    shouldLoad: true,
    items: {},
    connections: [],
    columns: {},
  },
  reducers: {
    addItem: (state, action) => {
      const { column } = action.payload;
      let id = genId();
      // Make sure there are no id conflicts.
      // Should be very low, but non-zero, chance
      while (!!state.items[id]) {
        id = genId();
      }
      state.items[id] = genItem();
      state.columns[column].items.unshift(id);

      return state;
    },
    removeItem: (state, action) => {
      const { id } = action.payload;

      // Delete the item
      delete state.items[id];

      // Get the correct column to remove it from
      const column = Object.keys(state.columns).find((col) => {
        return state.columns[col]?.items?.findIndex((item) => item === id) > -1;
      });

      if (column) {
        // Filter it from the column
        state.columns[column].items = state.columns[column].items.filter(
          (thisItem) => thisItem !== id
        );
      }

      state.connections = state.connections.filter(
        ({ from, to }) => from !== id && to !== id
      );

      return state;
    },
    updateItem: (state, action) => {
      const { id, update } = action.payload;
      state.items[id] = {
        ...state.items[id],
        ...update,
      };
    },
    moveItem: (state, action) => {
      const { id, newPos, from, to } = action.payload;
      const startPos = state.columns[from].items.findIndex(id);

      // If from and to are the same then this will still work, so no case needs to be added

      // Remove from original array:
      state.columns[from].items.splice(startPos, 1);

      // Add to target array
      state.columns[to].items.splice(newPos, 0, id);

      return state;
    },
    addColumn: (state) => {
      const id = genId("column-");

      state.columns[id] = {
        title: "Column title",
        items: [],
      };
    },
    removeColumn: (state, action) => {
      const { id } = action.payload;
      delete state.columns[id];
    },
    updateColumn: (state, action) => {
      const { id, ...update } = action.payload;

      return {
        ...state,
        columns: {
          ...state.columns,
          [id]: {
            ...state.columns[id],
            ...update,
          },
        },
      };
    },
    addConnection: (state, action) => {
      const { to, from } = action.payload;
      const existing = state.connections.findIndex(
        (conn) => conn.to === to && conn.from === from
      );
      if (existing > -1) {
        state.connections.splice(existing, 1);
      } else {
        state.connections.push({ to, from });
      }
    },
    removeConnection: (state, action) => {
      const { to, from } = action.payload;
      state.connections = state.connections.filter(
        (item) => item.to === to && item.from === from
      );
    },
    updateAll: (state, action) => {
      const { items, columns, connections } = action.payload;

      state.items = items;
      state.columns = columns;
      state.connections = connections;
      state.shouldLoad = false;
    },
    save: (state) => {
      state.saving = true;
    },
    saved: (state) => {
      state.saving = false;
    },
  },
});

export const {
  addItem,
  removeItem,
  updateItem,
  moveItem,
  addColumn,
  updateColumn,
  addConnection,
  updateAll,
  save,
  saved,
} = dependanciesSlice.actions;

export const getItems = (state) => state?.dependancies?.items;
export const getColumns = (state) => state?.dependancies?.columns;
export const getConnections = (state) => state?.dependancies?.connections;
export const getShouldLoad = (state) => state?.dependancies?.shouldLoad;
export const getShouldSave = (state) => state?.dependancies?.saving;
export const getSaving = (state) => state?.dependancies?.saving;

export default dependanciesSlice.reducer;
