export const QueryRoutes = (location, newQueryParams) => {
  const queryParams = new URLSearchParams(location.search);

  for (const key in newQueryParams) {
    if (newQueryParams.hasOwnProperty(key)) {
      const value = newQueryParams[key];
      if (value !== undefined && value !== null && value !== "") {
        queryParams.set(key, encodeURI(value));
      } else {
        // If value is empty or undefined, remove the parameter
        queryParams.delete(key);
      }
    }
  }

  const linkPath = `${location.pathname}`;
  let queryString = queryParams.toString();

  return `${linkPath}${queryString ? "?" + queryString : ""}`;
};
