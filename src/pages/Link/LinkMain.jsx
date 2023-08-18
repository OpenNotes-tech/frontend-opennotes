import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { setLoading, setError } from "../../store/features/errorSlice";
import { useDispatch, useSelector } from "react-redux";
import LinkCard from "./LinkCard";
import {
  setSortOption,
  setCategoryOption,
  setTagsOption,
  setSearchResult,
  setPagination,
} from "../../store/features/searchSlice";
import ShareModal from "../../components/ShareModal";
import LoaderSkeleton from "../../components/LoaderSkeleton";
import IconNoResult from "../../components/IconNoResult";
import SearchAPI from "../../utils/SearchAPI";
import Loader from "../../components/Loader";
import BookmarkModal from "../../components/BookmarkModal";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import LinkDetailsModal from "./LinkDetailsModal";
import hashtags from "../../constants/tags.json";
import useScreenSize from "../../components/useScreenSize";
const LinkMain = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const filterRef = useRef(null);

  const {
    query,
    sort,
    category,
    tags,
    pricing,
    result,
    pageNumber,
    totalPages,
  } = useSelector((state) => state.Search);
  const { isShareModalOpen, isBookmarkModalOpen, isDetailsModalOpen } =
    useSelector((state) => state.Modal);
  const name = location.pathname.split("/")[1]?.toLowerCase();
  const loading = useSelector((state) => state.Error.loading);
  const [isOpen, setIsOpen] = useState(false);
  const [isFilterSticky, setIsFilterSticky] = useState(false);
  const [linkResults, setLinkResults] = useState(result);
  const [getHash, setHash] = useState(hashtags.Home);
  const screenSize = useScreenSize();

  const pages = new Array(totalPages).fill(null).map((v, i) => i);

  // useEffect(() => {
  //   dispatch(setLoading(true));
  //   SearchAPI.linkSearch(query, sort, category, tags, pricing, pageNumber, 12)
  //     .then((res) => {
  //       setLinkResults(res.data.data.body);
  //       dispatch(setSearchResult(res.data.data.body));
  //       dispatch(setPagination({ totalPages: res.data.data.totalPages }));
  //       dispatch(setLoading(false));
  //     })
  //     .catch((error) => {
  //       dispatch(setError(error?.response?.data?.message));
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
  // }, [pageNumber]);

  const gotoPrevious = () => {
    dispatch(setPagination({ pageNumber: Math.max(0, pageNumber - 1) }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const gotoNext = () => {
    dispatch(
      setPagination({ pageNumber: Math.min(totalPages - 1, pageNumber + 1) })
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const setPage = (pageIndex) => {
    dispatch(setPagination({ pageNumber: pageIndex }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCategorySubmit = (e, navLink) => {
    if (e) {
      e.preventDefault();
      navigate(navLink);
      navLink = navLink.substring(1);
    }
    navLink = navLink.charAt(0).toUpperCase() + navLink.slice(1);
    dispatch(setLoading(true));
    dispatch(setCategoryOption(e.target.textContent.trim()));

    SearchAPI.linkSearch(query, sort, navLink, tags, pricing, pageNumber, 12)
      .then((res) => {
        setLinkResults(res.data.data.body);
        dispatch(setSearchResult(res.data.data.body));
        dispatch(setPagination({ totalPages: res.data.data.totalPages }));
        dispatch(setLoading(false));
      })
      .catch((error) => {
        dispatch(setError(error?.response?.data?.message));
        dispatch(setLoading(false));
        dispatch(
          setError({
            message: error?.response?.data?.message,
            type: "error",
          })
        );
      })
      .finally((e) => {
        dispatch(setLoading(false));
      });
  };
  const handleSortChange = (e, result) => {
    e.preventDefault();
    dispatch(setSortOption(result));
    dispatch(setLoading(true));
    setIsOpen((prevState) => !prevState);

    SearchAPI.linkSearch(query, result, category, tags, pricing, pageNumber, 12)
      .then((res) => {
        dispatch(setSearchResult(res.data.data.body));
        dispatch(setLoading(false));
        dispatch(setPagination({ totalPages: res.data.data.totalPages }));
        // dispatch(
        //   setError({
        //     message: "Signed Up Successfully!",
        //     type: "success",
        //   })
        // );
      })
      .catch((error) => {
        dispatch(
          setError({
            message: error?.response?.data?.message,
            type: "error",
          })
        );
        dispatch(setLoading(false));
      })
      .finally((e) => {
        dispatch(setLoading(false));
      });
  };

  const handleTagsSubmit = () => {
    console.log("hello world");
  };

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getWidthAndHeight = () => {
    if (screenSize === "sm") {
      return { width: "25rem", height: "5rem" };
    } else {
      return { width: "70rem", height: "5rem" };
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if the filterRef is available before calling getBoundingClientRect
      if (filterRef.current) {
        const filterRect = filterRef.current.getBoundingClientRect();
        setIsFilterSticky(filterRect.top <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setLinkResults(result);
  }, [result]);

  useEffect(() => {
    if (category) {
      setHash(hashtags[category]);
    }
  }, [category]);

  return (
    <div className="container px-4 lg:px-0 mx-auto">
      {loading && <Loader />}
      <div className="flex flex-col px-12 py-10 space-y-4">
        <div className="flex flex-row space-x-4 justify-center">
          <Splide
            className="flex flex-row space-x-4 justify-center group"
            options={{
              pagination: false,
              gap: "1rem",
              autoWidth: true,
              arrows: false,
              loop: false,
              // gap: "1rem",
              // autoWidth: true,
              // arrows: false,
              // loop: false,
              // speed: 700,
              // grabCursor: false,
              // mousewheel: true,
              // slidesPerView: 0,
              // spaceBetween: 0,
              // freeMode: false,
              // shortSwipes: true,
              // longSwipes: false,
              // autoplay: true,
              // pauseOnHover: false,
              // resetProgress: false,
              // grabCursor: true,
              // rewind: true,
              height: getWidthAndHeight().height,
              width: getWidthAndHeight().width,
              // focus: "center",
              // perPage: 6,
              // wheel: true,
              // releaseWheel: true,
              // pagination: false,
              // direction: "ltr",
              // wheelSleep: 10,

              // waitForTransition: true,
            }}
            aria-label="My Favorite Images"
          >
            <SplideSlide>
              <button
                onClick={(e) => handleCategorySubmit(e, "/")}
                className={`px-4 py-2 hover:bg-gray-200 rounded-full flex flex-row space-x-2 ${
                  category?.split(",")[0] === "Home" &&
                  "bg-blue-100 text-blue-500"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-home"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                <p>Home</p>
              </button>
            </SplideSlide>
            <SplideSlide>
              <button
                onClick={(e) => handleCategorySubmit(e, "/frontend")}
                className={`px-4 py-2 hover:bg-gray-200 rounded-full flex flex-row space-x-2 ${
                  category?.split(",")[0] === "Frontend" &&
                  "bg-blue-100 text-blue-500"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-palette"
                >
                  <circle cx="13.5" cy="6.5" r=".5" />
                  <circle cx="17.5" cy="10.5" r=".5" />
                  <circle cx="8.5" cy="7.5" r=".5" />
                  <circle cx="6.5" cy="12.5" r=".5" />
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
                </svg>
                <p>Frontend</p>
              </button>
            </SplideSlide>
            <SplideSlide>
              <button
                onClick={(e) => handleCategorySubmit(e, "/backend")}
                className={`px-4 py-2 hover:bg-gray-200 rounded-full flex flex-row space-x-2 ${
                  category?.split(",")[0] === "Backend" &&
                  "bg-blue-100 text-blue-500"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-server"
                >
                  <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
                  <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
                  <line x1="6" x2="6.01" y1="6" y2="6" />
                  <line x1="6" x2="6.01" y1="18" y2="18" />
                </svg>{" "}
                <p>Backend</p>
              </button>
            </SplideSlide>
            <SplideSlide>
              <button
                onClick={(e) => handleCategorySubmit(e, "/mobile")}
                className={`px-4 py-2 hover:bg-gray-200 rounded-full flex flex-row space-x-2 ${
                  category?.split(",")[0] === "Mobile" &&
                  "bg-blue-100 text-blue-500"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-smartphone"
                >
                  <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                  <path d="M12 18h.01" />
                </svg>{" "}
                <p>Mobile</p>
              </button>
            </SplideSlide>
            <SplideSlide>
              <button
                onClick={(e) => handleCategorySubmit(e, "/courses")}
                className={`px-4 py-2 hover:bg-gray-200 rounded-full flex flex-row space-x-2 ${
                  category?.split(",")[0] === "IT Courses" &&
                  "bg-blue-100 text-blue-500"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-graduation-cap"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>{" "}
                <p>IT Courses</p>
              </button>
            </SplideSlide>
            <SplideSlide>
              <button
                onClick={(e) => handleCategorySubmit(e, "/cybersecurity")}
                className={`px-4 py-2 hover:bg-gray-200 rounded-full flex flex-row space-x-2 whitespace-nowrap ${
                  category?.split(",")[0] === "Cyber Security" &&
                  "bg-blue-100 text-blue-500"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-fingerprint"
                >
                  <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4" />
                  <path d="M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2" />
                  <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
                  <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
                  <path d="M8.65 22c.21-.66.45-1.32.57-2" />
                  <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
                  <path d="M2 16h.01" />
                  <path d="M21.8 16c.2-2 .131-5.354 0-6" />
                  <path d="M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2" />
                </svg>{" "}
                <p>Cyber Security</p>
              </button>
            </SplideSlide>
            <SplideSlide>
              <button
                onClick={(e) => handleCategorySubmit(e, "/datascience")}
                className={`px-4 py-2 hover:bg-gray-200 rounded-full flex flex-row space-x-2 whitespace-nowrap ${
                  category?.split(",")[0] === "Data Science" &&
                  "bg-blue-100 text-blue-500"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-brain-circuit"
                >
                  <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z" />
                  <path d="M16 8V5c0-1.1.9-2 2-2" />
                  <path d="M12 13h4" />
                  <path d="M12 18h6a2 2 0 0 1 2 2v1" />
                  <path d="M12 8h8" />
                  <path d="M20.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
                  <path d="M16.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
                  <path d="M20.5 21a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
                  <path d="M18.5 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
                </svg>{" "}
                <p>Data Science</p>
              </button>
            </SplideSlide>
          </Splide>
        </div>
        <div className="flex flex-col space-y-10">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div class="relative overflow-x-auto overflow-y-clip h-14">
              <div class="mx-auto  shadow-xl min-w-0  dark:highlight-white/5">
                <div class="overflow-x-auto overflow-y-hidden flex no-scrollbar items-center space-x-3 italic">
                  <Splide
                    className="flex flex-row space-x-4 justify-center "
                    options={{
                      gap: "-2rem",
                      autoWidth: true,
                      arrows: false,
                      loop: false,
                      // speed: 700,
                      // grabCursor: false,
                      // mousewheel: true,
                      // slidesPerView: 0,
                      // spaceBetween: 0,
                      // freeMode: false,
                      // shortSwipes: true,
                      // longSwipes: false,
                      // autoplay: true,
                      // pauseOnHover: false,
                      // resetProgress: false,
                      // grabCursor: true,
                      // rewind: true,
                      height: "4rem",
                      width: "60rem",
                      // focus: "center",
                      // perPage: 6,
                      // wheel: true,
                      // releaseWheel: true,
                      pagination: false,
                      // direction: "ltr",
                      // wheelSleep: 10,

                      // waitForTransition: true,
                    }}
                    aria-label="My Favorite Images"
                  >
                    {getHash.map((tag, index) => (
                      <SplideSlide key={index}>
                        <div className="flex py-6 -mt-3 items-center first:pl-6 last:pr-6">
                          <button
                            onClick={() => handleTagsSubmit(tag)}
                            className="text-sm px-3 rounded-full py-[6px] text-center focus:outline-none font-semibold transition duration-300 ease-in-out backdrop-blur-4xl backdrop-saturate-200 bg-opacity-20 bg-white/20 text-slate-600 ring-[1.1px] ring-slate-300 hover:ring-[1.1px] hover:ring-black"
                          >
                            {tag}
                          </button>
                        </div>
                      </SplideSlide>
                    ))}
                  </Splide>
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center space-x-6">
              <div className="hidden h-[41px] w-[1px] bg-gray-300 lg:block"></div>
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="raletive uppercase  focus:outline-none font-semibold text-sm transition duration-300 ease-in-out backdrop-blur-4xl backdrop-saturate-200 bg-opacity-20 bg-white/20 rounded-full px-5 py-2.5 text-center inline-flex items-center text-slate-600 ring-[1.1px] ring-slate-300 hover:ring-[1.1px] hover:ring-black"
                type="button"
                onClick={toggleDropdown}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="mr-2.5 lucide lucide-arrow-down-wide-narrow"
                >
                  <path d="m3 16 4 4 4-4" />
                  <path d="M7 20V4" />
                  <path d="M11 4h10" />
                  <path d="M11 8h7" />
                  <path d="M11 12h4" />
                </svg>
                Sort By{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className={`lucide lucide-chevron-down ml-2.5 ${
                    isOpen ? "transform rotate-180" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              {isOpen && (
                <div
                  id="dropdown"
                  className="mt-64 absolute origin-bottom-right z-10 bg-white divide-y divide-gray-100 rounded-lg w-44 shadow-2xl"
                >
                  <div className="divide-y divide-gray-300 rounded bg-white ring-1 ring-black ring-opacity-5">
                    <div className="space-y-1 p-2 flex flex-col justify-center">
                      <button
                        role="menuitem"
                        onClick={(e) => handleSortChange(e, "trending")}
                        className={` flex items-center text-center justify-center space-x-2 rounded py-2 px-12 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none ${
                          sort === "trending" && "bg-blue-100 text-blue-500"
                        }`}
                      >
                        <div className="flex flex-none items-center space-x-2">
                          <span>Trending</span>
                        </div>
                      </button>
                      <button
                        role="menuitem"
                        onClick={(e) => handleSortChange(e, "favorite")}
                        className={`flex items-center text-center justify-center space-x-2 rounded py-2 px-12 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none ${
                          sort === "favorite" && "bg-blue-100 text-blue-500"
                        }`}
                      >
                        <div className="flex flex-none items-center space-x-2">
                          <span>Favorite</span>
                        </div>
                      </button>
                      <button
                        role="menuitem"
                        onClick={(e) => handleSortChange(e, "latest")}
                        className={`flex items-center text-center justify-center space-x-2 rounded py-2 px-12 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none ${
                          sort === "latest" && "bg-blue-100 text-blue-500"
                        }`}
                      >
                        <div className="flex flex-none items-center space-x-2">
                          <span>Latest</span>
                        </div>
                      </button>
                      <button
                        role="menuitem"
                        onClick={(e) => handleSortChange(e, "oldest")}
                        className={`flex items-center text-center justify-center space-x-2 rounded py-2 px-12 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none ${
                          sort === "oldest" && "bg-blue-100 text-blue-500"
                        }`}
                      >
                        <div className="flex flex-none items-center space-x-2">
                          <span>Oldest</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-12 gap-y-12">
            {!loading &&
              linkResults &&
              linkResults.map((linkElement, index) => (
                <LinkCard key={index} linkElement={linkElement} />
              ))}
          </div>
          {!loading && linkResults.length === 0 && (
            <div className="flex justify-center items-center">
              <IconNoResult />
            </div>
          )}
          {loading && (
            <div className="w-full">
              <LoaderSkeleton />
            </div>
          )}
          {/* {!loading && totalPages > 2 && (
            <div className="flex w-full justify-center">
              <div className="flex flex-row space-x-2 items-center justify-center mt-20">
                <button
                  onClick={gotoPrevious}
                  className="p-2 border-black border-2 rounded-lg hover:bg-black hover:text-white text-black ease-linear duration-200 "
                >
                  Previous
                </button>
                {!pageNumber >= 2 && (
                  <span className="text-black mt-4">. . .</span>
                )}
                {!totalPages > 2
                  ? pages
                      .slice(
                        pageNumber === 0 ? 0 : pageNumber - 1,
                        pageNumber + 2
                      )
                      .map((page, index) => {
                        return (
                          <button
                            key={index}
                            onClick={() => setPage(page)}
                            className={` ${
                              page === pageNumber
                                ? "bg-black text-white p-2 border-black border-2 rounded-lg hover:bg-white hover:text-black ease-linear duration-200"
                                : "p-2 border-black border-2 rounded-lg hover:bg-black hover:text-white text-black ease-linear duration-200"
                            }`}
                          >
                            {page + 1}
                          </button>
                        );
                      })
                  : pages.map((pageIndex) => (
                      <button
                        key={pageIndex}
                        onClick={() => setPage(pageIndex)}
                        className={` ${
                          pageIndex === pageNumber
                            ? "bg-black text-white p-2 border-black border-2 rounded-lg hover:bg-white hover:text-black ease-linear duration-200"
                            : "p-2 border-black border-2 rounded-lg hover:bg-black hover:text-white text-black ease-linear duration-200"
                        }`}
                      >
                        {pageIndex + 1}
                      </button>
                    ))}
                {totalPages > 2 && totalPages !== pageNumber + 1 && (
                  <span className="text-black mt-4">. . .</span>
                )}
                <button
                  onClick={gotoNext}
                  className="p-2 border-black border-2 rounded-lg hover:bg-black hover:text-white text-black ease-linear duration-200 "
                >
                  Next
                </button>
              </div>
            </div>
          )} */}
          {!isFilterSticky && (
            <button
              className="fixed bottom-24 md:bottom-10 right-4 bg-gray-900 p-2 rounded-full shadow-2xl text-white hover:bg-blue-500 transition duration-300 ease-in-out"
              onClick={handleScrollToTop}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-up"
              >
                <line x1="12" x2="12" y1="19" y2="5"></line>
                <polyline points="5 12 12 5 19 12"></polyline>
              </svg>
            </button>
          )}
        </div>
      </div>
      {isBookmarkModalOpen && <BookmarkModal />}
      {isShareModalOpen && <ShareModal />}
      {isDetailsModalOpen && <LinkDetailsModal />}
    </div>
  );
};

export default LinkMain;
