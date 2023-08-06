import { configureStore } from "@reduxjs/toolkit";
import editProfileSlice from "./features/editProfileSlice";
import userAuthSlice from "./features/userAuthSlice";
import editLinkSlice from "./features/editLinkSlice";
import errorSlice from "./features/errorSlice";
import searchSlice from "./features/searchSlice";

export const store = configureStore({
  reducer: {
    // User Redux
    UserProfile: editProfileSlice,
    Link: editLinkSlice,
    userAuth: userAuthSlice,
    Error: errorSlice,
    Search: searchSlice,
  },
  devTools: true,
});
