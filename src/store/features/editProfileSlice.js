import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  isLoggedIn: Cookies.get("userID") !== undefined,
  profile: [],
};

export const editProfileSlice = createSlice({
  name: "UserProfile",
  initialState,
  reducers: {
    clickLike: (state, action) => {
      const { linkId, likedFolderId } = action.payload;

      // Find the liked folder with the matching ID
      const likedFolderIndex = state.profile.folders.findIndex(
        (folder) => folder._id === likedFolderId,
      );

      if (likedFolderIndex !== -1) {
        // Clone the liked folder object to avoid mutating the state directly
        const likedFolder = { ...state.profile.folders[likedFolderIndex] };

        // Check if the link already exists in the bookmarked array of the liked folder
        if (likedFolder.bookmarked.includes(linkId)) {
          // If the link exists, remove it from the bookmarked array
          likedFolder.bookmarked = likedFolder.bookmarked.filter(
            (bookmark) => bookmark !== linkId,
          );
        } else {
          // If the link doesn't exist, add it to the bookmarked array
          likedFolder.bookmarked.push(linkId);
        }

        // Update the liked folder in the state by creating a new array with the updated liked folder
        state.profile.folders[likedFolderIndex] = likedFolder;
      } else {
        // If the liked folder doesn't exist, create it and add the link ID
        const newLikedFolder = {
          _id: likedFolderId, // Assign the provided likedFolderId
          name: "liked",
          bookmarked: [linkId], // Add the link ID to the new folder
        };

        // Push the new liked folder to the user's folders array
        state.profile.folders.push(newLikedFolder);
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
      state.isLoggedIn = Cookies.get("userID") !== undefined;
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
  editUserProfile,
  deleteFolderItem,
  editBookmark,
  deleteFolder,
  authenticate,
  editFolder,
  clickLike,
  logout,
} = editProfileSlice.actions;
