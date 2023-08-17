import http from "./backend-link";

class Request {
  // Authentication
  async signup(data) {
    return http.post(`/api/v1/user/signup`, data);
  }
  async login(data) {
    return http.post(`/api/v1/user/login`, data);
  }
  async logout() {
    return http.get(`/api/v1/user/logout`);
  }
  async forgotPassword() {
    return http.post(`/api/v1/user/forgot-password`);
  }
  async resetPassword() {
    return http.post(`/api/v1/user/reset-password/:token`);
  }
  async googleLogin(data) {
    return http.post(`/api/v1/user/google-login`, data);
  }
  async twitterLogin(data) {
    return http.post(`/api/v1/user/twitter-login`, data);
  }
  async githubLogin(codeParam) {
    return http.get(`/api/v1/user/github-login?code=${codeParam}`);
  }

  //     ######  Profile   ########
  async patchProfile(id, data) {
    return http.patch(`/api/v1/user/profile/${id}`, data);
  }

  async filterJobCompanyCandidate(term, field, limit) {
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
