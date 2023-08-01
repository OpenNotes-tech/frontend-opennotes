import http from "./backend-link";

class Request {
  // Authentication
  signup(path, data) {
    return http.post(`/api/v1/${path}/signup`, data);
  }
  login(path, data) {
    return http.post(`/api/v1/${path}/login`, data);
  }
  logout(path) {
    return http.get(`/api/v1/${path}/logout`);
  }
  forgotPassword(path) {
    return http.get(`/api/v1/${path}/forgotPassword`);
  }
  resetPassword(path) {
    return http.get(`/api/v1/${path}/resetPassword/:token`);
  }
  googleLogin(path, data) {
    return http.post(`/api/v1/${path}/google-login`, data);
  }
  facebookLogin(path, data) {
    return http.post(`/api/v1/${path}/facebook-login`, data);
  }

  //     ######  Profile   ########
  patchProfile(path,  id, data) {
    return http.patch(`/api/v1/${path}/profile/${id}`, data);
  }

  //     ######  Education, Experience, Profile   ########
  getEduExperienceProfile(path, section, id) {
    return http.get(`/api/v1/${path}/${section}/${id}`);
  }
  createEduExperienceProfile(id, section, path, data) {
    return http.post(`/api/v1/${section}/profile/${id}/${path}`, data);
  }
  deleteEduExperienceProfile(id, section, path, pathid) {
    return http.delete(`/api/v1/${section}/profile/${id}/${path}/${pathid}`);
  }
  editEduExperienceProfile(id, section, path, pathid, data) {
    return http.patch(
      `/api/v1/${section}/profile/${id}/${path}/${pathid}`,
      data
    );
  }

  // ######    JOB & Company  (recruiter)  ########
  createRecruiterJobCompany(route, data) {
    return http.post(`/api/v1/${route}/create-${route}`, data);
  }
  getRecruiterJobCompany(route, data) {
    return http.post(`/api/v1/${route}/all`, data);
  }
  getJobCompany(route, id) {
    return http.get(`/api/v1/${route}/detail/${id}`);
  }
  deleteRecruiterJobCompany(route, id) {
    return http.delete(`/api/v1/${route}/detail/${id}`);
  }
  editRecruiterJobCompany(route, id, data) {
    return http.patch(`/api/v1/${route}/detail/${id}`, data);
  }
  filterJobCompanyCandidate(term, field, limit) {
    return http.get(
      `/api/v1/jobs/filter?text=${term}&route=searchNews&field=${field}&limit=${limit}`
    );
  }

  // #############################################
  //             Apply Job & Applicants for Job
  // ##############################################
  createApplyJob(id) {
    return http.post(`/api/v1/candidates/${id}/apply`);
  }
  getAppliedJobs(id) {
    return http.get(`/api/v1/candidates/${id}/applied-jobs`);
  }

  getApplicants(id) {
    return http.get(`/api/v1/job/${id}/applicants`);
  }

  uploadAWS(route, dataType) {
    return http.get(`/api/v1/upload/${route}/${dataType}`);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Request();
