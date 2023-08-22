export const generateLinkWithQuery = (location, newQueryParams) => {
  const queryParams = new URLSearchParams(location.search);

  if (newQueryParams.sort) {
    queryParams.set("sort_by", newQueryParams.sort);
  } else if (newQueryParams.tags) {
    queryParams.set("tags", encodeURIComponent(newQueryParams.tags));
  } else if (newQueryParams.pricing) {
    queryParams.set("pricing", newQueryParams.pricing);
  } else if (newQueryParams.category) {
    queryParams.set("category", newQueryParams.category);
  } else if (newQueryParams.searchInput) {
    queryParams.set("search_query", newQueryParams.searchInput);
  } else if (newQueryParams.pageNumber) {
    queryParams.set("page", newQueryParams.pageNumber);
  }

  const linkPath = `${location.pathname}`;
  const queryString = queryParams.toString();

  return `${linkPath}${queryString ? "?" + queryString : ""}`;
};
