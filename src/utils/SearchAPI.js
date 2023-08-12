import http from "./backend-link";

class SearchAPI {
  async linkSearch(query, sort, category, tags, type) {
    let queryParams = `/links/search?route=linksearch&field=searchText`;

    if (query) {
      queryParams += `&text=${query}`;
    }
    if (category) {
      queryParams += `&category=${category}`;
    }
    // if (limit) {
    //   queryParams += `&limit=${limit}`;
    // }
    if (sort) {
      queryParams += `&sortField=${sort}`;
    }
    if (tags?.length > 0) {
      queryParams += `&tags=${tags}`;
    }
    if (type?.length > 0) {
      queryParams += `&type=${type}`;
    }

    return http.get(`/api/v1/link${queryParams}`);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new SearchAPI();
