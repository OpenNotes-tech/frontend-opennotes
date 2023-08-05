import { configureStore } from "@reduxjs/toolkit";
import editProfileSlice from "./features/editProfileSlice";
import userAuthSlice from "./features/userAuthSlice";
import editLinkSlice from "./features/editLinkSlice";

export const store = configureStore({
  reducer: {
    // User Redux
    UserProfile: editProfileSlice,
    Link: editLinkSlice,
    userAuth: userAuthSlice,
  },
  devTools: true,
});
