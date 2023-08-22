import http from "./backend-link";

class SearchAPI {
  linkSearch(searchInput, sort, category, tags, pricing, pageNumber) {
    let queryParams = `/links/search?route=linksearch&field=searchText&page=${pageNumber}&limit=${12}`;

    if (searchInput) {
      queryParams += `&text=${searchInput}`;
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
