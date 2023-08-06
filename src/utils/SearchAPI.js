import http from "./backend-link";

class SearchAPI {
  linkSearch(limit, query, sort, tags) {
    let queryParams = `/links/search?route=linksearch&field=searchText`;

    if (query) {
      queryParams += `&text=${query}`;
    }
    if (limit) {
      queryParams += `&limit=${limit}`;
    }
    if (sort) {
      queryParams += `&sortby=${sort}`;
    }
    if (tags) {
      queryParams += `&tags=${tags}`;
    }

    return http.get(`/api/v1/link${queryParams}`);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new SearchAPI();
