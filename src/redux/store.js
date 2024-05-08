import { configureStore } from "@reduxjs/toolkit";

import urlsSlice from "./Slices/urlsSlice";
import cartSlice from "./Slices/cartSlice";

const store = configureStore({
  reducer: {
    urls: urlsSlice,
    cart: cartSlice,
  },
});
export default store;
