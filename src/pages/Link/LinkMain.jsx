import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setLoading, setError } from "../../store/features/errorSlice";
import SearchAPI from "../../utils/SearchAPI";
import LinkCard from "./LinkCard";
import useScreenSize from "../../components/useScreenSize";
import LoaderSkeleton from "../../components/LoaderSkeleton";
import IconNoResult from "../../components/IconNoResult";
import hashtags from "../../constants/tags.json";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import { generateLinkWithQuery } from "../../components/generateLinkWithQuery";

const LinkMain = ({
  fetchResult,
  setFetchResult,
  sort,
  tags,
  pricing,
  category,
  searchQuery,
  pageNumber,
  totalPages,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const screenSize = useScreenSize();

  const loading = useSelector((state) => state.Error.loading);
  const [isSortbyOpen, setSortbyOpen] = useState(false);
  const [showTabs, setShowTabs] = useState(false);
  const [pressedTag, setPressedTag] = useState("");
  const [getHash, setHash] = useState(hashtags.home);

  const loadLinkResults = () => {
    if (pageNumber > totalPages) {
      return;
    }
    dispatch(setLoading(true));
    SearchAPI.linkSearch(searchQuery, sort, category, tags, pricing, pageNumber)
      .then((res) => {
        if (pageNumber === 1) {
          setFetchResult(res.data.data.body);
        } else {
          setFetchResult((prevResults) => [
            ...prevResults,
            ...res.data.data.body,
          ]);
        }
        // dispatch(setPagination({ totalPages: res.data.data.totalPages }));
        // dispatch(setPageNumber({ pageNumber: pageNumber + 1 }));
        sessionStorage.setItem("_PageNumber", pageNumber + 1);
        dispatch(setLoading(false));
      })
      .catch((error) => {
        dispatch(setLoading(false));
        dispatch(
          setError({
            message: error?.response?.data?.message,
            type: "error",
          })
        );
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };

  // const debounce = (func, delay) => {
  //   let timer;
  //   return function () {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => func.apply(this, arguments), delay);
  //   };
  // };

  // const debouncedLoadLinkResults = debounce(loadLinkResults, 200);

  // const handleScroll = () => {
  //   if (
  //     window.innerHeight + window.scrollY >=
  //     document.body.scrollHeight - 100
  //   ) {
  //     debouncedLoadLinkResults();
  //   }
  // };

  const handleCategorySubmit = (e, navLink) => {
    const linkToPage = generateLinkWithQuery(location, { category: navLink });
    navigate(linkToPage);

    // dispatch(setTotalPages({ totalPages: 1 }));
    // dispatch(setPageNumber({ pageNumber: 1 }));
  };
  const handleSortChange = (e, result) => {
    const linkToPage = generateLinkWithQuery(location, { sort: result });
    navigate(linkToPage);
  };
  const handleTagsSubmit = (e, tag) => {
    setPressedTag(tag);
    const linkToPage = generateLinkWithQuery(location, { tags: tag });
    navigate(linkToPage);
  };

  const toggleDropdown = () => {
    setSortbyOpen((prevState) => !prevState);
  };

  const handleBookmarkModalToggle = () => {};

  const handleExploreModalToggle = () => {
    sessionStorage.setItem("_IsExploreModalOpen", true);
  };

  const getWidthAndHeight = () => {
    if (screenSize === "sm") {
      return { width: "22rem", height: "4rem" };
    } else if (screenSize === "md") {
      return { width: "40rem", height: "5rem" };
    } else {
      return { width: "70rem", height: "5rem" };
    }
  };

  useEffect(() => {
    // Load initial data
    loadLinkResults();
  }, []);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [pageNumber, loading]);

  useEffect(() => {
    setFetchResult(fetchResult);
  }, [fetchResult, setFetchResult]);

  useEffect(() => {
    if (category) {
      setHash(hashtags[category.split(",")[0]]);
    }
  }, [category]);

  const Scroll = () => {
    if (window.scrollY > 50) {
      setShowTabs(true);
    } else {
      setShowTabs(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", Scroll);
    return () => {
      window.removeEventListener("scroll", Scroll);
    };
  }, []);

  return (
    <>
      <div className="container md:px-4 lg:px-0 mx-auto justify-center scroll-smooth">
        <div className="flex flex-col md:px-12 py-6 md:py-10 space-y-1 md:space-y-4 ">
          <div className="flex flex-row space-x-4 justify-center w-full snap-x">
            <Splide
              className="flex flex-row space-x-4 justify-center group snap-x"
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
                  onClick={(e) => handleCategorySubmit(e, "home")}
                  className={`snap-normal snap-center px-4 py-2 lg:hover:bg-gray-200 rounded-full flex flex-row space-x-2 ${
                    category?.split(",")[0] === "home" &&
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
                  onClick={(e) => handleCategorySubmit(e, "frontend")}
                  className={`snap-normal snap-center px-4 py-2 lg:hover:bg-gray-200 rounded-full flex flex-row space-x-2 ${
                    category?.split(",")[0] === "frontend" &&
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
                  onClick={(e) => handleCategorySubmit(e, "backend")}
                  className={`snap-normal snap-center px-4 py-2 lg:hover:bg-gray-200 rounded-full flex flex-row space-x-2 ${
                    category?.split(",")[0] === "backend" &&
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
                  onClick={(e) => handleCategorySubmit(e, "mobile")}
                  className={`snap-normal snap-center px-4 py-2 lg:hover:bg-gray-200 rounded-full flex flex-row space-x-2 ${
                    category?.split(",")[0] === "mobile" &&
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
                  onClick={(e) => handleCategorySubmit(e, "courses")}
                  className={`snap-normal snap-center px-4 py-2 lg:hover:bg-gray-200 rounded-full flex flex-row space-x-2 ${
                    category?.split(",")[0] === "courses" &&
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
                  onClick={(e) => handleCategorySubmit(e, "cybersecurity")}
                  className={`snap-normal snap-center px-4 py-2 lg:hover:bg-gray-200 rounded-full flex flex-row space-x-2 whitespace-nowrap ${
                    category?.split(",")[0] === "cybersecurity" &&
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
                  onClick={(e) => handleCategorySubmit(e, "datascience")}
                  className={`snap-normal snap-center px-4 py-2 lg:hover:bg-gray-200 rounded-full flex flex-row space-x-2 whitespace-nowrap ${
                    category?.split(",")[0] === "datascience" &&
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
                  <p>AI / ML / DS</p>
                </button>
              </SplideSlide>
            </Splide>
          </div>
          <div className="lg:hidden h-[1px] w-full bg-gray-300 block -mt-4"></div>
          <div className="flex flex-col space-y-10 pt-4 md:pt-0">
            <div className="flex flex-col md:flex-row justify-center md:justify-between space-y-4 md:space-y-0">
              <div class="relative overflow-x-auto overflow-y-clip h-14">
                <Splide
                  options={{
                    gap: "1rem",
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
                    height: getWidthAndHeight().height,
                    width: getWidthAndHeight().width,
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
                  {getHash?.map((tag, index) => (
                    <SplideSlide key={index}>
                      <div className="flex py-4 -mt-3 md:-mt-1 items-center">
                        <button
                          onClick={(e) => handleTagsSubmit(e, tag.slice(1))}
                          className={`text-sm px-3 rounded-full py-[6px] text-center focus:outline-none font-semibold    ${
                            pressedTag === tag.slice(1)
                              ? "text-blue-500 ring-[1.1px] ring-blue-200  lg:hover:ring-blue-600 bg-blue-100"
                              : "text-slate-600 ring-[1.1px] ring-slate-300 hover:ring-[1.1px] hover:ring-black bg-white/20"
                          }`}
                        >
                          {tag}
                        </button>
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              </div>

              <div className="flex flex-row items-center justify-center md:space-x-6">
                <div className="hidden h-[41px] w-[1px] bg-gray-300 lg:block"></div>
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  className="raletive uppercase  focus:outline-none font-semibold text-xs transition duration-300 ease-in-out backdrop-blur-4xl backdrop-saturate-200 bg-opacity-20 bg-white/20 rounded-full justify-center w-full  md:px-5 py-2 md:py-2.5 text-center inline-flex items-center text-slate-600 ring-[1.1px] ring-slate-300 hover:ring-[1.1px] hover:ring-black"
                  type="button"
                  onClick={toggleDropdown}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
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
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className={`lucide lucide-chevron-down ml-2.5 ${
                      isSortbyOpen ? "transform rotate-180" : ""
                    }`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                {isSortbyOpen && (
                  <div
                    id="dropdown"
                    className="mt-64 absolute origin-bottom-right z-10 bg-white rounded-lg w-11/12 md:w-44 shadow-2xl"
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
              {!loading === false &&
                fetchResult &&
                fetchResult?.map((linkElement, index) => (
                  <LinkCard key={index} linkElement={linkElement} />
                ))}
            </div>
            {!loading === true && fetchResult.length === 0 && (
              <div className="flex justify-center items-center">
                <IconNoResult />
              </div>
            )}
            {loading === true && (
              <div className="w-full">
                <LoaderSkeleton />
              </div>
            )}
          </div>
        </div>
      </div>
      {showTabs && (
        <aside className="fixed bottom-0 z-50 w-full h-16 md:hidden shadow-[0_40px_60px_2px_rgba(0.9,0.9,0.9,0.9)]">
          <ul className="justify-center grid px-4 grid-cols-4 -ml-8 text-xs text-gray-500 font-normal h-full bg-white">
            <li>
              <Link
                className={`flex flex-col items-center space-y-1 hover:bg-blue-100 rounded-tr-xl py-3 px-5 w-full ${
                  category === "profile" && "bg-blue-100 text-blue-500"
                }`}
                to="/"
                alt="sidebar button called interview"
              >
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 13.7143C10.1814 13.7143 8.43723 12.9918 7.15127 11.7059C5.8653 10.4199 5.14286 8.67577 5.14286 6.85714C5.14286 5.03852 5.8653 3.29437 7.15127 2.00841C8.43723 0.722447 10.1814 0 12 0C13.8186 0 15.5628 0.722447 16.8487 2.00841C18.1347 3.29437 18.8571 5.03852 18.8571 6.85714C18.8571 8.67577 18.1347 10.4199 16.8487 11.7059C15.5628 12.9918 13.8186 13.7143 12 13.7143ZM11.2018 19.2429L10.2054 17.5821C9.8625 17.0089 10.275 16.2857 10.9393 16.2857H13.0554C13.7196 16.2857 14.1321 17.0143 13.7893 17.5821L12.7929 19.2429L14.5821 25.8804L16.5107 18.0107C16.6179 17.5768 17.0357 17.2929 17.4696 17.4054C21.225 18.3482 24 21.7446 24 25.7839C24 26.6946 23.2607 27.4286 22.3554 27.4286H15.2946C15.1821 27.4286 15.0804 27.4071 14.9839 27.3696L15 27.4286H9L9.01607 27.3696C8.91964 27.4071 8.8125 27.4286 8.70536 27.4286H1.64464C0.739286 27.4286 0 26.6893 0 25.7839C0 21.7393 2.78036 18.3429 6.53036 17.4054C6.96429 17.2982 7.38214 17.5821 7.48929 18.0107L9.41786 25.8804L11.2071 19.2429H11.2018Z"
                    fill={`${category === "profile" ? "#3b82f6" : "#808080"}`}
                  />
                </svg>

                <p>Profile</p>
              </Link>
            </li>
            <li>
              <button
                className={`flex flex-col items-center space-y-1 hover:bg-blue-100 rounded-t-xl py-3 px-6 w-full ${
                  category === "bookmark" && "bg-blue-100 text-blue-500"
                }`}
                onClick={handleBookmarkModalToggle}
                alt="sidebar button called interview"
              >
                <svg
                  width="20"
                  height="24"
                  viewBox="0 0 20 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 25.7143V2.85714C0 2.07143 0.28 1.39857 0.84 0.838571C1.39905 0.279524 2.07143 0 2.85714 0H17.1429C17.9286 0 18.6014 0.279524 19.1614 0.838571C19.7205 1.39857 20 2.07143 20 2.85714V25.7143L10 21.4286L0 25.7143ZM2.85714 21.3571L10 18.2857L17.1429 21.3571V2.85714H2.85714V21.3571ZM2.85714 2.85714H17.1429H10H2.85714Z"
                    fill={`${category === "saved" ? "#3b82f6" : "#5F5F5F"}`}
                    fillOpacity="0.8"
                  />
                </svg>
                <p>Saved</p>
              </button>
            </li>
            <li>
              <button
                className={`flex flex-col items-center space-y-1 hover:bg-blue-100 rounded-t-xl py-3 px-3 w-full ${
                  category?.split(",")[0] === "Home" &&
                  "bg-blue-100 text-blue-500"
                }`}
                onClick={(e) => handleCategorySubmit(e, "/")}
                alt="sidebar button called interview"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-home"
                  // fill={`${category?.split(",")[0] === "" ? "#3b82f6" : "#5F5F5F"}`}
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>

                <p>Home</p>
              </button>
            </li>
            <li>
              <button
                className={`flex flex-col items-center space-y-1 hover:bg-blue-100 rounded-tl-xl py-3 px-5 w-full ${
                  category === "menu" && "bg-blue-100 text-blue-500"
                }`}
                onClick={handleExploreModalToggle}
                alt="sidebar button called interview"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-list fill-blue-500"
                  // fill={`${category === "job" ? "#3b82f6" : "#5F5F5F"}`}
                >
                  <line x1="8" x2="21" y1="6" y2="6" />
                  <line x1="8" x2="21" y1="12" y2="12" />
                  <line x1="8" x2="21" y1="18" y2="18" />
                  <line x1="3" x2="3.01" y1="6" y2="6" />
                  <line x1="3" x2="3.01" y1="12" y2="12" />
                  <line x1="3" x2="3.01" y1="18" y2="18" />
                </svg>

                <p>Menu</p>
              </button>
            </li>
          </ul>
        </aside>
      )}
    </>
  );
};

export default LinkMain;
