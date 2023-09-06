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

  //     ######  Report   ########
  async postReport(data) {
    return http.post(`/api/v1/user/report/`, data);
  }

  async postLike(id) {
    return http.post(`/api/v1/link/links/${id}/like`);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Request();
