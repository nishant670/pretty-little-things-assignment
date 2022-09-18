import { configureStore } from "@reduxjs/toolkit";

import shopSlice from "./shop";
import favoriteSlice from "./favorites";
import cartSlice from "./cart";

export const store = configureStore({
  reducer: {
    shop: shopSlice,
    favorites: favoriteSlice,
    cart: cartSlice,
  },
});
