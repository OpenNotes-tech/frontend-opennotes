// errorSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  errorMessage: "",
  errorType: "", // New property to track the type of error
  loading: false,
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
      state.loading = action.payload
    },
  },
});

export const { setError, clearError, setLoading } = errorSlice.actions;
export default errorSlice.reducer;
