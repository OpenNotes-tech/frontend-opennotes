import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  data: [],
  isLoggedIn: Cookies.get("logged_in_candidate"),
  profile: [], // TODO: Check without localstorage code
};

export const editProfileSlice = createSlice({
  name: "UserProfile",
  initialState,
  reducers: {
    setData: (state, action) => {
      if (action.payload.first) {
        state.data = action.payload.data;
      } else {
        state.data.push(action.payload.data);
      }
    },
    editUserProfile: (state, action) => {
      state.profile = action.payload;
    },
    editBookmark: (state, action) => {
      // Find the index of the folder with the matching ID
      const folderIndex = state.profile.folders.findIndex(
        (folder) => folder._id === action.payload._id,
      );

      if (folderIndex !== -1) {
        // Clone the folder object to avoid mutating the state directly
        const updatedFolder = { ...state.profile.folders[folderIndex] };

        // Check if the link already exists in the bookmarked array
        const linkId = action.payload.link;

        if (updatedFolder.bookmarked.includes(linkId)) {
          // If the link exists, remove it from the bookmarked array
          updatedFolder.bookmarked = updatedFolder.bookmarked.filter(
            (bookmark) => bookmark !== linkId,
          );
        } else {
          // If the link doesn't exist, add it to the bookmarked array
          updatedFolder.bookmarked.push(linkId);
        }

        // Update the folder in the state by creating a new array with the updated folder
        state.profile.folders[folderIndex] = updatedFolder;
      }
    },
    deleteFolderItem: (state, action) => {
      state.profile.folders.push(action.payload);
    },
    deleteFolder: (state, action) => {
      state.profile.folders = state.profile.folders.filter((edu) => {
        return edu._id !== action.payload;
      });
    },
    editFolder: (state, action) => {
      const folderIndex = state.profile.folders.findIndex(
        (folder) => folder._id === action.payload._id,
      );

      if (folderIndex !== -1) {
        // Clone the folder object to avoid mutating the state directly
        const updatedFolder = { ...state.profile.folders[folderIndex] };

        // Update the folder name
        updatedFolder.name = action.payload.name;

        // Update the folder in the state by creating a new array with the updated folder
        state.profile.folders[folderIndex] = updatedFolder;
      }
    },
    editEducation: (state, action) => {
      state.education = state.education.filter((edu) => {
        return edu._id !== action.payload._id;
      });
      state.education.push(action.payload);
    },
    authenticate: (state, action) => {
      state.isLoggedIn = Cookies.get("logged_in_candidate");
      state.profile = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = null;
      state.profile = null;
    },
  },
});

export default editProfileSlice.reducer;
export const {
  deleteFolderItem,
  editBookmark,
  deleteFolder,
  editFolder,
  logout,
  setData,
  authenticate,
} = editProfileSlice.actions;
