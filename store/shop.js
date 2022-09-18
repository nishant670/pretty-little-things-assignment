import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../config";

const initialState = {
  items: [],
  isLoading: true,
};

export const getShopItems = createAsyncThunk(
  "getShopItems",
  async (_, thunkAPI) => {
    try {
      const response = await axios(API_URL);
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.log("api error", error.response);
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {},
  extraReducers: {
    [getShopItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getShopItems.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    },
    [getShopItems.rejected]: (state, { payload }) => {
      console.log("api rejection error", payload);
      state.isLoading = false;
    },
  },
});

export default shopSlice.reducer;
