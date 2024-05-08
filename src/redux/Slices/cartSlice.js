import { createSlice } from "@reduxjs/toolkit";

const cartSLice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    cart_set: (state, action) => {
      return action.payload;
    },
    cart_add: (state, action) => {
      if (state.length === 0) {
        window.localStorage.setItem("cart", JSON.stringify([action.payload]));
        return [action.payload];
      }

      const exist = state.some((product) => product.id === action.payload.id);

      if (exist) {
        for (let i = 0; i < state.length; i++) {
          state[i].id === action.payload.id && state[i].quantity++;
        }
        window.localStorage.setItem("cart", JSON.stringify(state));
        return state;
      } else {
        state.push(action.payload);
        window.localStorage.setItem("cart", JSON.stringify(state));
        return state;
      }
    },
    cart_increase: (state, action) => {
      for (let i = 0; i < state.length; i++) {
        state[i].id === action.payload && state[i].quantity++;
      }
      window.localStorage.setItem("cart", JSON.stringify(state));
      return state;
    },
    cart_decrease: (state, action) => {
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === action.payload) {
          if (state[i].quantity > 1) {
            state[i].quantity--;
          } else {
            state = state.filter((product) => product.id !== action.payload);
          }
        }
      }
      window.localStorage.setItem("cart", JSON.stringify(state));
      return state;
    },
    cart_delete: (state, action) => {
      state = state.filter((product) => product.id !== action.payload);

      window.localStorage.setItem("cart", JSON.stringify(state));
      return state;
    },
  },
});

export const { cart_set, cart_add, cart_increase, cart_decrease, cart_delete } =
  cartSLice.actions;
export default cartSLice.reducer;
