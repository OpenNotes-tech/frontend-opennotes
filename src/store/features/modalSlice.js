import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isAuthModalOpen: false,
  isLangModalOpen: false,
  isReportModalOpen: false,
  isDetailsModalOpen: false,
  isBookmarkModalOpen: false,
  isShareModalOpen: false,
  isExploreModalOpen: false,
  isFilterModalOpen: false,
  isNewsModalOpen: false,
  modalValue: null,
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
    openNewsModal: (state) => {
      state.isNewsModalOpen = true;
    },
    closeNewsModal: (state) => {
      state.isNewsModalOpen = false;
    },
    openLangModal: (state) => {
      state.isLangModalOpen = true;
    },
    closeLangModal: (state) => {
      state.isLangModalOpen = false;
    },
    openReportModal: (state, action) => {
      state.modalValue = action.payload;
      state.isReportModalOpen = true;
    },
    closeReportModal: (state) => {
      // state.modalValue = null;
      state.isReportModalOpen = false;
    },
    openDetailsModal: (state, action) => {
      state.modalValue = action.payload;
      state.isDetailsModalOpen = true;
    },
    closeDetailsModal: (state) => {
      // state.modalValue = null;
      state.isDetailsModalOpen = false;
    },
    openShareModal: (state, action) => {
      state.modalValue = action.payload;
      state.isShareModalOpen = true;
    },
    closeShareModal: (state) => {
      // state.modalValue = null;
      state.isShareModalOpen = false;
    },
    openBookmarkModal: (state, action) => {
      state.modalValue = action.payload;
      state.isBookmarkModalOpen = true;
    },
    closeBookmarkModal: (state) => {
      state.isBookmarkModalOpen = false;
    },
    openExploreModal: (state) => {
      state.isExploreModalOpen = true;
    },
    closeExploreModal: (state) => {
      state.isExploreModalOpen = false;
    },
    openFilterModal: (state) => {
      state.isFilterModalOpen = true;
    },
    closeFilterModal: (state) => {
      state.isFilterModalOpen = false;
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
  closeExploreModal,
  openExploreModal,
  closeFilterModal,
  openFilterModal,
  openNewsModal,
  closeNewsModal,
} = modalSlice.actions;
