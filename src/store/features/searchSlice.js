// reducers/searchSlice.js
import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    sort: "",
    category: "",
    tags: "",
    type: "",
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
    setTypeOption(state, action) {
      state.type = action.payload;
    },
    setSearchResult(state, action) {
      state.result = action.payload;
    },
  },
});

export const {
  setSearchQuery,
  setSortOption,
  setCategoryOption,
  setSearchResult,
  setTypeOption,
  setTagsOption,
} = searchSlice.actions;

export default searchSlice.reducer;
