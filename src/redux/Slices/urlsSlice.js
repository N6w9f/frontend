import { createSlice } from "@reduxjs/toolkit";
const url = "https://e-commerce-backend-a15v.onrender.com/api/";

const urlsSlice = createSlice({
  initialState: {
    products: `${url}products/`,
    users: `${url}users/`,
    images: `${url}uploads/`,
  },
  name: "urlsSlice",
  reducers: {},
});

export default urlsSlice.reducer;
