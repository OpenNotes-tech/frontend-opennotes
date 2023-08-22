// useEffect(() => {
//   // Load initial data
//   loadLinkResults();
// }, []);

// const loadLinkResults = () => {
//   if (pageNumber > totalPages) {
//     return; // No more pages to load
//   }

//   // dispatch(setLoading(true));
//   SearchAPI.linkSearch(query, sort, category, tags, pricing, pageNumber, 12)
//     .then((res) => {
//       setLinkResults((prevResults) => [...prevResults, ...res.data.data.body]);
//       dispatch(setTotalPages({ totalPages: res.data.data.totalPages }));
//       dispatch(setPageNumber({ pageNumber: pageNumber + 1 }));
//       // dispatch(setLoading(false));
//     })
//     .catch((error) => {
//       dispatch(setLoading(false));
//       console.error("Error loading ink results:", error);
//     })
//     .finally(() => {
//       dispatch(setLoading(false));
//     });
// };

// const debounce = (func, delay) => {
//   let timer;
//   return function () {
//     clearTimeout(timer);
//     timer = setTimeout(() => func.apply(this, arguments), delay);
//   };
// };

// const debouncedLoadLinkResults = debounce(loadLinkResults, 200); // Adjust delay as needed

// const handleScroll = () => {
//   if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 100) {
//     debouncedLoadLinkResults();
//   }
// };

// useEffect(() => {
//   window.addEventListener("scroll", handleScroll);
//   return () => {
//     window.removeEventListener("scroll", handleScroll);
//   };
// }, [pageNumber, loading]);

// const handleCategorySubmit = (e, navLink) => {
//   if (e) {
//     e.preventDefault();
//     navigate(navLink);
//     navLink = navLink.substring(1);
//   }
//   navLink = navLink.charAt(0).toUpperCase() + navLink.slice(1);
//   dispatch(setLoading(true));
//   dispatch(setCategoryOption(e.target.textContent.trim()));
//   dispatch(setTotalPages({ totalPages: 1 }));
//   dispatch(setPageNumber({ pageNumber: 1 }));

//   SearchAPI.linkSearch(query, sort, navLink, tags, pricing, pageNumber, 12)
//     .then((res) => {
//       setLinkResults(res.data.data.body);
//       dispatch(setSearchResult(res.data.data.body));
//       dispatch(setTotalPages({ totalPages: res.data.data.totalPages }));
//       dispatch(setLoading(false));
//     })
//     .catch((error) => {
//       dispatch(setLoading(false));
//       dispatch(
//         setError({
//           message: error?.response?.data?.message,
//           type: "error",
//         })
//       );
//     })
//     .finally((e) => {
//       dispatch(setLoading(false));
//     });
// };
// const handleSortChange = (e, result) => {
//   e.preventDefault();
//   dispatch(setSortOption(result));
//   dispatch(setLoading(true));
//   setSortbyOpen((prevState) => !prevState);

//   SearchAPI.linkSearch(query, result, category, tags, pricing, pageNumber, 12)
//     .then((res) => {
//       dispatch(setSearchResult(res.data.data.body));
//       dispatch(setLoading(false));
//       // dispatch(setPagination({ totalPages: res.data.data.totalPages }));
//       // dispatch(
//       //   setError({
//       //     message: "Signed Up Successfully!",
//       //     type: "success",
//       //   })
//       // );
//     })
//     .catch((error) => {
//       dispatch(
//         setError({
//           message: error?.response?.data?.message,
//           type: "error",
//         })
//       );
//       dispatch(setLoading(false));
//     })
//     .finally((e) => {
//       dispatch(setLoading(false));
//     });
// };

// const handleTagsSubmit = () => {
//   console.log("hello world");
// };

// const toggleDropdown = () => {
//   setSortbyOpen((prevState) => !prevState);
// };

// const handleScrollToTop = () => {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// };

// const getWidthAndHeight = () => {
//   if (screenSize === "sm") {
//     return { width: "22rem", height: "5rem" };
//   } else {
//     return { width: "70rem", height: "5rem" };
//   }
// };

// useEffect(() => {
//   const handleScroll = () => {
//     // Check if the filterRef is available before calling getBoundingClientRect
//     if (filterRef.current) {
//       const filterRect = filterRef.current.getBoundingClientRect();
//       setIsFilterSticky(filterRect.top <= 0);
//     }
//   };

//   window.addEventListener("scroll", handleScroll);
//   return () => {
//     window.removeEventListener("scroll", handleScroll);
//   };
// }, []);

// useEffect(() => {
//   setLinkResults(result);
// }, [result]);

// useEffect(() => {
//   if (category) {
//     setHash(hashtags[category.split(",")[0]]);
//   }
// }, [category]);

// ###################################################
//                 HomeMain
// ####################################################
// import {
//     setSearchResult,
//     setPagination,
//   } from "../../store/features/searchSlice";
// import { setLoading, setError } from "../../store/features/errorSlice";
// import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";
// import SearchAPI from "../../utils/SearchAPI";

// const { query, sort, category, tags, pageNumber, pricing } = useSelector(
//     (state) => state.Search
//   );
//   const dispatch = useDispatch();
// useEffect(() => {
//   // Send a request to the backend here
//   dispatch(setLoading(true));
//   SearchAPI.linkSearch(query, sort, category, tags, pricing, pageNumber, 12)
//     .then((res) => {
//       dispatch(setSearchResult(res.data.data.body));
//       // dispatch(setPagination({ totalPages: res.data.data.totalPages }));
//       dispatch(setLoading(false));
//     })
//     .catch((error) => {
//       dispatch(setError(error?.response?.data?.message));
//       dispatch(setLoading(false));
//     })
//     .finally((e) => {
//       dispatch(setLoading(false));
//     });
// }, []);
