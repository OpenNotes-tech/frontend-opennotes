import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
const initialState = {
  isLoggedIn: Cookies.get("logged_in_candidate"),
  token: "",
  _id: null,
  fullName: "",
  email: "",
  address: [],
  salaryMin: null,
  salaryMax: null,
  socialLinks: [],
  photo:
    "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
  achievement: "",
  bio: "",
  skills: [],
  opentoRoles: [],
  primaryRole: "",
  yearofExperience: null,
  resume: "",
  education: [],
  experiences: [],
  applications: [],
  bookmarkedJobs: [],
};

export const editProfileSlice = createSlice({
  name: "UserProfile",
  initialState,
  reducers: {
    editUserProfile: (state, action) => {
      state.fullName = action.payload.fullName;
      state.email = action.payload.email;
      state._id = action.payload._id;
      state.token = action.payload.token;
      state.address = action.payload.address;
      state.socialLinks = action.payload.socialLinks;
      state.photo = action.payload.photo;
      state.achievement = action.payload.achievement;
      state.bio = action.payload.bio;
      state.skills = action.payload.skills;
      state.opentoRoles = action.payload.opentoRoles;
      state.primaryRole = action.payload.primaryRole;
      state.yearofExperience = action.payload.yearofExperience;
      state.resume = action.payload.resume;
      state.salaryMax = action.payload.salaryMax;
      state.salaryMin = action.payload.salaryMin;
      state.education = action.payload.education;
      state.experiences = action.payload.experiences;
      state.applications = action.payload.applications;
      state.bookmarkedJobs = action.payload.bookmarkedJobs;
    },
    addExperience: (state, action) => {
      state.experiences.push(action.payload);
    },
    deleteExperience: (state, action) => {
      state.experiences = state.experiences.filter((exp) => {
        return exp._id !== action.payload._id;
      });
    },
    editExperience: (state, action) => {
      state.experiences = state.experiences.filter((exp) => {
        return exp._id !== action.payload._id;
      });
      state.experiences.push(action.payload);
    },
    addEducation: (state, action) => {
      state.education.push(action.payload);
    },
    deleteEducation: (state, action) => {
      state.education = state.education.filter((edu) => {
        return edu._id !== action.payload._id;
      });
    },
    editEducation: (state, action) => {
      state.education = state.education.filter((edu) => {
        return edu._id !== action.payload._id;
      });
      state.education.push(action.payload);
    },
    addApplications: (state, action) => {
      state.applications = action.payload;
    },
    addSocialLinks: (state, action) => {
      state.socialLinks = action.payload;
    },
    addBookmarkedJobs: (state, action) => {
      state.bookmarkedJobs = action.payload;
    },
    signup: (state, action) => {
      const { fullName, email, _id, token } = action.payload;
      state.fullName = fullName;
      state.email = email;
      state._id = _id;
      state.token = token;
    },
    login: (state, action) => {
      state.isLoggedIn = Cookies.get("logged_in_candidate");
      state.fullName = action.payload.fullName;
      state.email = action.payload.email;
      state._id = action.payload._id;
      state.token = action.payload.token;
      state.address = action.payload.address;
      state.socialLinks = action.payload.socialLinks;
      state.photo = action.payload.photo;
      state.achievement = action.payload.achievement;
      state.bio = action.payload.bio;
      state.skills = action.payload.skills;
      state.opentoRoles = action.payload.opentoRoles;
      state.primaryRole = action.payload.primaryRole;
      state.yearofExperience = action.payload.yearofExperience;
      state.resume = action.payload.resume;
      state.education = action.payload.education;
      state.experiences = action.payload.experiences;
      state.applications = action.payload.applications;
      state.bookmarkedJobs = action.payload.bookmarkedJobs;
    },
    logout: (state) => {
      state.isLoggedIn = null;
      state.token = null;
      state.fullName = null;
      state.email = null;
      state._id = null;
    },

    // editExperience: (state, action) => {
    //   console.log("ss");
    //   if (action.type === "ADD") {
    //     console.log(action.payload);
    //     console.log(state.payload);
    //     return { ...state, experiences: [...action.payload] };
    //     // state.experiences = [...state.experiences, action.payload];
    //     // state.experiences.push(action.payload);
    //   } else if (action.type === "DELETE") {
    //     state.experiences = state.experiences.filter((edu) => {
    //       return edu._id !== action.payload._id;
    //     });
    //   } else if (action.type === "EDIT") {
    //     state.experiences = state.experiences.filter((edu) => {
    //       return edu._id !== action.payload._id;
    //     });
    //     state.experiences.push(action.payload);
    //   }
    // },

    // editEducation: (state, action) => {
    //   if (action.type === "ADD") {
    //     state.education.push(action.payload);
    //   } else if (action.type === "DELETE") {
    //     state.education = state.education.filter((edu) => {
    //       return edu._id !== action.payload._id;
    //     });
    //   } else if (action.type === "EDIT") {
    //     state.education = state.education.filter((edu) => {
    //       return edu._id !== action.payload._id;
    //     });
    //     state.education.push(action.payload);
    //   }
    // },
  },
});

export default editProfileSlice.reducer;
export const {
  editUserProfile,
  editExperience,
  deleteExperience,
  addExperience,
  editEducation,
  deleteEducation,
  addEducation,
  addApplications,
  addBookmarkedJobs,
  addSocialLinks,
  login,
  logout,
  signup,
} = editProfileSlice.actions;
