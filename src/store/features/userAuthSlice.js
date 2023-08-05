import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
const initialState = {
  isLoggedIn: Cookies.get("logged_in_candidate"),
  token: "",
  email: "",
  fullName: "",
  _id: "",
  isAuthModalOpen: false,
};

export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    signup: (state, action) => {
      const { fullName, email, _id, token } = action.payload;
      state.fullName = fullName;
      state.email = email;
      state._id = _id;
      state.token = token;
    },
    login: (state, action) => {
      const { fullName, email, _id, token } = action.payload;
      state.isLoggedIn = Cookies.get("logged_in_candidate");
      state.fullName = fullName;
      state.email = email;
      state._id = _id;
      state.token = token;
    },
    logout: (state) => {
      state.isLoggedIn = null;
      state.token = null;
      state.fullName = null;
      state.email = null;
    },
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
  },
});

export default userAuthSlice.reducer;
export const { login, logout, signup, openModal, closeModal} = userAuthSlice.actions;
