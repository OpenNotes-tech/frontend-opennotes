import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isAuthModalOpen: false,
  isLangModalOpen: false,
  isReportModalOpen: false,
  isDetailsModalOpen: false,
  isBookmarkModalOpen: false,
  isShareModalOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openAuthModal: (state) => {
      state.isAuthModalOpen = true;
    },
    closeAuthModal: (state) => {
      state.isAuthModalOpen = false;
    },
    openLangModal: (state) => {
      state.isLangModalOpen = true;
    },
    closeLangModal: (state) => {
      state.isLangModalOpen = false;
    },
    openReportModal: (state) => {
      state.isReportModalOpen = true;
    },
    closeReportModal: (state) => {
      state.isReportModalOpen = false;
    },
    openDetailsModal: (state) => {
      state.isDetailsModalOpen = true;
    },
    closeDetailsModal: (state) => {
      state.isDetailsModalOpen = false;
    },
    openShareModal: (state) => {
      state.isShareModalOpen = true;
    },
    closeShareModal: (state) => {
      state.isShareModalOpen = false;
    },
    openBookmarkModal: (state) => {
      state.isBookmarkModalOpen = true;
    },
    closeBookmarkModal: (state) => {
      state.isBookmarkModalOpen = false;
    },
  },
});

export default modalSlice.reducer;
export const {
  openShareModal,
  closeShareModal,
  openAuthModal,
  closeAuthModal,
  openLangModal,
  closeLangModal,
  openReportModal,
  closeReportModal,
  openDetailsModal,
  closeDetailsModal,
  openBookmarkModal,
  closeBookmarkModal,
} = modalSlice.actions;
