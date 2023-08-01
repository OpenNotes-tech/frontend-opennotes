import http from "./backend-link";

class FilterAPI {
  filterJobCompanyCandidate(limit) {
    const term = localStorage.getItem("titleSearch");
    const jobType = localStorage.getItem("jobtype");
    const Level = localStorage.getItem("Level");
    const Salary = localStorage.getItem("sliderRange");
    const Locations = localStorage.getItem("Locations");
    const Skills = localStorage.getItem("Skills");
    const Remote = localStorage.getItem("Remote");

    let queryParams = `route=jobsearch&text=${term}&field=title`;

    if (jobType) {
      queryParams += `&jobType=${jobType}`;
    }
    if (limit) {
      queryParams += `&limit=${limit}`;
    }
    if (Level) {
      queryParams += `&candidateLevel=${Level}`;
    }
    if (Salary) {
      queryParams += `&maxSalary=${Salary.split(",")[1] * 1000}`;
      queryParams += `&minSalary=${Salary.split(",")[0] * 1000}`;
    }
    if (Locations) {
      queryParams += `&location=${Locations}`;
    }
    if (Skills) {
      queryParams += `&skills=${Skills}`;
    }
    if (Remote === "true") {
      queryParams += `&remote=${Remote}`;
    }

    return http.get(`/api/v1/job/filter?${queryParams}`);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new FilterAPI();
