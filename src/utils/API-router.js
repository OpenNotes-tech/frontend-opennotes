import Cookies from "js-cookie";
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
  forgotPassword(data) {
    return http.post(`/api/v1/user/forgot-password`, data);
  }
  resetPassword(token, data) {
    return http.patch(`/api/v1/user/reset-password/${token}`, data);
  }
  googleLogin(data) {
    return http.post(`/api/v1/user/google-login`, data);
  }
  twitterLogin(data) {
    return http.post(`/api/v1/user/twitter-login`, data);
  }
  githubLogin(codeParam) {
    return http.get(`/api/v1/user/github-login?code=${codeParam}`);
  }
  //     ######  Report   ########

  getProfile() {
    return http.get(
      `/api/v1/user/profile/${Cookies.get("userID")}?opentoken=${Cookies.get(
        "openToken",
      )}`,
    );
  }
  postReport(data) {
    return http.post(`/api/v1/user/report/`, data);
  }

  postLike(id, data) {
    return http.post(`/api/v1/link/links/${id}/like`, data);
  }

  postClick(id) {
    return http.post(`/api/v1/link/links/${id}/click`);
  }

  postBookmark(data) {
    return http.post(`/api/v1/link/bookmarks`, {
      ...data,
      token: Cookies.get("openToken"),
    });
  }
  removeBookmark(id, data) {
    return http.post(`/api/v1/link/${id}/unbookmark`, {
      ...data,
      token: Cookies.get("openToken"),
    });
  }
  postFolder(data) {
    return http.post(`/api/v1/link/folders`, {
      ...data,
      token: Cookies.get("openToken"),
    });
  }
  deleteFolder(userId, folderId) {
    return http.delete(
      `/api/v1/link/folders/${folderId}?opentoken=${Cookies.get(
        "openToken",
      )}&userId=${userId}`,
    );
  }
  getFolder(id) {
    return http.get(
      `/api/v1/link/folders/${id}?opentoken=${Cookies.get("openToken")}`,
    );
  }
  editFolder(userId, folderId, folderName) {
    return http.patch(
      `/api/v1/link/folders/${folderId}?opentoken=${Cookies.get("openToken")}`,
      { userId, folderName },
    );
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Request();
