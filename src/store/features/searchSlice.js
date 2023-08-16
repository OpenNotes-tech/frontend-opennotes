import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    sort: "",
    category: "",
    tags: "",
    pricing: "",
    pageNumber: 0,
    totalPages: 0,
    result: [],
  },
  reducers: {
    setSearchQuery(state, action) {
      state.query = action.payload;
    },
    setSortOption(state, action) {
      state.sort = action.payload;
    },
    setCategoryOption(state, action) {
      state.category = action.payload;
    },
    setTagsOption(state, action) {
      state.tags = action.payload;
    },
    setPricingOption(state, action) {
      state.pricing = action.payload;
    },
    setSearchResult(state, action) {
      state.result = action.payload;
    },
    setPagination(state, action) {
      state.pageNumber = action.payload?.pageNumber;
      state.totalPages = action.payload?.totalPages;
    },
  },
});

export const {
  setSearchQuery,
  setSortOption,
  setCategoryOption,
  setSearchResult,
  setPricingOption,
  setTagsOption,
  setPagination,
} = searchSlice.actions;

export default searchSlice.reducer;
