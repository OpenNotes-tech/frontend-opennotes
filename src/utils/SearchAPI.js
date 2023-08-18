import http from "./backend-link";

class SearchAPI {
  linkSearch(query, sort, category, tags, pricing,  limit) {
    let queryParams = `/links/search?route=linksearch&field=searchText&limit=${limit}`;

    if (query) {
      queryParams += `&text=${query}`;
    }
    if (category) {
      queryParams += `&category=${category}`;
    }
    if (sort) {
      queryParams += `&sortField=${sort}`;
    }
    if (tags?.length > 0) {
      queryParams += `&tags=${tags}`;
    }
    if (pricing?.length > 0) {
      queryParams += `&pricing=${pricing}`;
    }

    return http.get(`/api/v1/link${queryParams}`);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new SearchAPI();
