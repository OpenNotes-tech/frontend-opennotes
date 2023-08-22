import { configureStore } from "@reduxjs/toolkit";
import editProfileSlice from "./features/editProfileSlice";
import userAuthSlice from "./features/userAuthSlice";
import editLinkSlice from "./features/editLinkSlice";
import searchSlice from "./features/searchSlice";
import modalSlice from "./features/modalSlice";
import errorSlice from "./features/errorSlice";

export const store = configureStore({
  reducer: {
    UserProfile: editProfileSlice,
    Link: editLinkSlice,
    userAuth: userAuthSlice,
    Search: searchSlice,
    Modal: modalSlice,
    Error: errorSlice,
  },
  devTools: true,
});

// Subscribe to store changes
store.subscribe(() => {
  const modalState = store.getState();
  localStorage.setItem("modalState", JSON.stringify(modalState));
});

// const isAuthModalOpen = sessionStorage.getItem("_IsAuthModalOpen");
// const isLangModalOpen = sessionStorage.getItem("_IsLangModalOpen");
// const isReportModalOpen = sessionStorage.getItem("_IsReportModalOpen");
// const isDetailsModalOpen = sessionStorage.getItem("_IsDetailsModalOpen");
// const isBookmarkModalOpen = sessionStorage.getItem("_IsBookmarkModalOpen");
// const isShareModalOpen = sessionStorage.getItem("_IsShareModalOpen");
// const isExploreModalOpen = sessionStorage.getItem("_IsExploreModalOpen");
// const modalValue = sessionStorage.getItem("_ModalValue");

// sessionStorage.setItem("_IsAuthModalOpen", false);
// sessionStorage.setItem("_IsLangModalOpen", false);
// sessionStorage.setItem("_IsReportModalOpen", false);
// sessionStorage.setItem("_IsDetailsModalOpen", false);
// sessionStorage.setItem("_IsBookmarkModalOpen", false);
// sessionStorage.setItem("_IsShareModalOpen", false);
// sessionStorage.setItem("_IsExploreModalOpen", false);
// sessionStorage.setItem("_ModalValue", false);
