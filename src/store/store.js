import { configureStore } from "@reduxjs/toolkit";
import editProfileSlice from "./features/editProfileSlice";
import userAuthSlice from "./features/userAuthSlice";
import modalSlice from "./features/modalSlice";
import errorSlice from "./features/errorSlice";

export const store = configureStore({
  reducer: {
    UserProfile: editProfileSlice,
    userAuth: userAuthSlice,
    Modal: modalSlice,
    Error: errorSlice,
  },
  devTools: true, // PRODUCTION - remove
});

// Subscribe to store changes
store.subscribe(() => {
  const modalState = store.getState();
  localStorage.setItem("modalState", JSON.stringify(modalState));
});
