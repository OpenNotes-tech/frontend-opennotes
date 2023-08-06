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
    return http.post(`/api/v1/user/forgotPassword`);
  }
  resetPassword() {
    return http.post(`/api/v1/user/resetPassword/:token`);
  }
  googleLogin(data) {
    return http.post(`/api/v1/user/google-login`, data);
  }
  facebookLogin(data) {
    return http.post(`/api/v1/user/facebook-login`, data);
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
