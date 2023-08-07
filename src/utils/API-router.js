import http from "./backend-link";

class Request {
  // Authentication
  signup(data) {
    return http.post(`/api/v1/user/signup`, data);
  }
  login(data) {
    return http.post(`/api/v1/user/login`, data);
  }
  logout() {
    return http.get(`/api/v1/user/logout`);
  }
  forgotPassword() {
    return http.post(`/api/v1/user/forgot-password`);
  }
  resetPassword() {
    return http.post(`/api/v1/user/reset-password/:token`);
  }
  googleLogin(data) {
    return http.post(`/api/v1/user/google-login`, data);
  }
  twitterLogin(data) {
    return http.post(`/api/v1/user/twitter-login`, data);
  }
  githubLogin(data) {
    return http.post(`/api/v1/user/github-login`, data);
  }

  //     ######  Profile   ########
  patchProfile(id, data) {
    return http.patch(`/api/v1/user/profile/${id}`, data);
  }

  filterJobCompanyCandidate(term, field, limit) {
    return http.get(
      `/api/v1/jobs/filter?text=${term}&route=searchNews&field=${field}&limit=${limit}`
    );
  }

  // #############################################
  //             Upload a Media File
  // ##############################################
  uploadAWS(dataType) {
    return http.get(`/api/v1/links/upload-media/${dataType}`);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Request();
