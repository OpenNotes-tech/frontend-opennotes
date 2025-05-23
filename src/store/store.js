import { configureStore } from "@reduxjs/toolkit";
import editProfileSlice from "./features/editProfileSlice";
import modalSlice from "./features/modalSlice";
import errorSlice from "./features/errorSlice";

export const store = configureStore({
  reducer: {
    UserProfile: editProfileSlice,
    Modal: modalSlice,
    Error: errorSlice,
  },

  devTools: true, // TODO: PRODUCTION - remove
});

// Subscribe to store changes to update localStorage
// store.subscribe(() => {
//   if (Cookies.get("logged_in_candidate") === "yes") {
//     const modalState = store.getState();
//     localStorage.setItem("modalState", JSON.stringify(modalState));
//   }
// });
// Check if the condition is met before restoring data from localStorage
// const shouldRestoreFromLocalStorage =
//   Cookies.get("logged_in_candidate") === "yes";
// Initial state for the Redux store
// const initialState = shouldRestoreFromLocalStorage
//   ? JSON.parse(localStorage.getItem("modalState")) // Try to restore from localStorage
//   : {};
// preloadedState: initialState, // Set the initial state from localStorage if condition is met
