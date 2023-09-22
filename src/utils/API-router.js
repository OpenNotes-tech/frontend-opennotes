import Cookies from "js-cookie";
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

  async getProfile() {
    return http.get(
      `/api/v1/user/profile/${Cookies.get("userID")}?opentoken=${Cookies.get(
        "openToken",
      )}`,
    );
  }
  async postReport(data) {
    return http.post(`/api/v1/user/report/`, data);
  }

  async postLike(id, action) {
    return http.post(`/api/v1/link/links/${id}/like`, { action: action });
  }

  async postClick(id) {
    return http.post(`/api/v1/link/links/${id}/click`);
  }

  async postBookmark(data) {
    return http.post(`/api/v1/link/bookmarks`, {
      ...data,
      token: Cookies.get("openToken"),
    });
  }
  async removeBookmark(id, data) {
    return http.post(`/api/v1/link/${id}/unbookmark`, {
      ...data,
      token: Cookies.get("openToken"),
    });
  }
  async postFolder(data) {
    return http.post(`/api/v1/link/folders`, {
      ...data,
      token: Cookies.get("openToken"),
    });
  }
  async deleteFolder(userId, folderId) {
    return http.delete(
      `/api/v1/link/folders/${folderId}?opentoken=${Cookies.get(
        "openToken",
      )}&userId=${userId}`,
    );
  }
  async getFolder(id) {
    return http.get(
      `/api/v1/link/folders/${id}?opentoken=${Cookies.get("openToken")}`,
    );
  }
  async editFolder(userId, folderId, folderName) {
    return http.patch(
      `/api/v1/link/folders/${folderId}?opentoken=${Cookies.get("openToken")}`,
      { userId, folderName },
    );
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Request();
