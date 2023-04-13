import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartShown: false,
  notification: null
};

const toggleCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggle(state) {
      state.isCartShown = !state.isCartShown;
    },

    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message
      };
    },
  },
});

export const { toggle, showNotification } = toggleCartSlice.actions;

export default toggleCartSlice.reducer; 