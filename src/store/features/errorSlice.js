// errorSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  errorMessage: "",
  errorType: "", // New property to track the type of error
  loading: false,
  pageNumber: 1,
  totalPages: 1,
};

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.errorMessage = action.payload?.message;
      state.errorType = action.payload?.type;
    },
    clearError: (state) => {
      state.errorMessage = "";
      state.errorType = "";
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
  },
});

export const { setError, clearError, setLoading, setTotalPages } =
  errorSlice.actions;
export default errorSlice.reducer;
