import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: [],
};

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload);
    },
    removeFavorite: (state, { payload }) => {
      const indexOfItem = state.ids.indexOf(payload);
      state.ids.splice(indexOfItem, 1);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
