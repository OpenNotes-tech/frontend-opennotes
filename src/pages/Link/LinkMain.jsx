import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useLocation, useNavigate } from "react-router-dom";
import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Icon from "../../hooks/Icon"; //TODO: uninstall clsx
import { QueryRoute } from "../../hooks/useGenerateQueryLink";
import LoaderSkeleton from "../../components/LoaderSkeleton";
import useMenuAnimation from "../../hooks/useMenuAnimation";
import useScreenSize from "../../hooks/useScreenSize";
import BottomTabs from "../../components/BottomTabs";
import hashtags from "../../constants/tags.json";
import tabsData from "../../constants/category.json";
import sortOptions from "../../constants/sort.json";
import LinkCard from "./LinkCard";
import "@splidejs/react-splide/css/skyblue";
const IconNoResult = lazy(() => import("../../components/IconNoResult"));

const LinkMain = ({ fetchResult, sort, category, handleLike }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const screenSize = useScreenSize();
  const modalRef = useRef();

  const queryParams = new URLSearchParams(location.search);
  const hashtag = queryParams.get("tags");
  const loading = useSelector((state) => state.Error.loading);
  const [isSortbyOpen, setSortbyOpen] = useState(false);
  const [getHash, setHash] = useState(Object.entries(hashtags.home));
  const [showTabs, setShowTabs] = useState(false);
  const [hashLoad, setHashLoad] = useState(true);
  const scope = useMenuAnimation(isSortbyOpen);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setSortbyOpen((state) => !state);
      }
    };
    if (isSortbyOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isSortbyOpen]);

  const handleRouteSubmit = (e, query) => {
    const linkToPage = QueryRoute(location, query);
    navigate(linkToPage);
  };
  const getWidthAndHeightCategory = () => {
    if (screenSize === "sm") {
      return { width: "22rem", height: "4rem" };
    } else if (screenSize === "md") {
      return { width: "46rem", height: "4rem" };
    } else {
      return { width: "62rem", height: "5rem" };
    }
  };
  const getWidthAndHeightTags = () => {
    if (screenSize === "sm") {
      return { width: "22rem", height: "3rem" };
    } else if (screenSize === "md") {
      return { width: "34rem", height: "3rem" };
    } else if (screenSize === "xl") {
      return { width: "60rem", height: "3rem" };
    } else {
      return { width: "70rem", height: "3rem" };
    }
  };

  useEffect(() => {
    setHashLoad(true); // Set loading state

    // Simulate fetching data with a setTimeout
    const fetchData = () => {
      if (category) {
        setHash(Object.entries(hashtags[category.split(",")[0]]));
      } else {
        setHash(Object.entries(hashtags.home));
      }
      setHashLoad(false); // Set loading state to false after fetching
    };

    // Simulate a delay before fetching data
    const delay = setTimeout(fetchData, 1000); // Adjust the delay as needed

    return () => clearTimeout(delay); // Clear the timeout on component unmount
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
      <div className="justify-center scroll-smooth">
        <div className="flex flex-col space-y-1 py-6 md:space-y-4 md:px-8 md:py-10 ">
          <div
            className={`flex w-full snap-x flex-row justify-center space-x-4 ${
              loading ? " pointer-events-none" : ""
            }`}
          >
            <Splide
              className="flex snap-x flex-row justify-center space-x-4 text-lg text-slate-800 dark:text-slate-300"
              options={{
                gap: "1rem",
                pagination: false,
                autoWidth: true,
                arrows: false,
                loop: false,
                wheel: true,
                mousewheel: true,
                height: getWidthAndHeightCategory().height,
                width: getWidthAndHeightCategory().width,
              }}
              aria-label="scrollbar for categories"
            >
              {tabsData.map((tab, index) => (
                <SplideSlide key={index}>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) =>
                      handleRouteSubmit(
                        e,
                        tab.id === "/"
                          ? { category: "" }
                          : { category: tab.id },
                      )
                    }
                    className={`mt-2 flex snap-center snap-normal flex-row items-center justify-center space-x-2 rounded-full px-4 py-2 first:ml-2 lg:hover:bg-slate-200 lg:dark:lg:hover:bg-slate-600 lg:dark:lg:hover:text-white ${
                      category?.split(",")[0] ===
                        (tab.id === "/" ? undefined : tab.id) &&
                      "bg-blue-100 text-blue-500"
                    }`}
                  >
                    <Icon name={tab.icon} size={19} />
                    <p>{tab.label}</p>
                  </motion.button>
                </SplideSlide>
              ))}
            </Splide>
          </div>
          <div className="block h-[1px] w-full bg-slate-300 dark:bg-slate-300 lg:hidden"></div>
          <div
            className={`container mx-auto flex flex-col items-center justify-center space-y-6 md:flex-row md:justify-between md:space-x-3 md:space-y-0 xl:px-8 ${
              loading ? " pointer-events-none" : ""
            }`}
          >
            <div class="relative mt-3 h-10 overflow-x-auto overflow-y-clip md:mt-0">
              <Splide
                options={{
                  gap: "1rem",
                  autoWidth: true,
                  arrows: false,
                  pagination: false,
                  loop: false,
                  wheel: true,
                  releaseWheel: true,
                  mousewheel: true,
                  height: getWidthAndHeightTags().height,
                  width: getWidthAndHeightTags().width,
                }}
                aria-label="scrollbar for tags"
              >
                {hashLoad
                  ? Array.from({ length: 10 }).map((_, index) => (
                      <div
                        key={index}
                        className="ml-5 mt-1 animate-pulse rounded-full bg-slate-200 px-14 py-4"
                      ></div>
                    ))
                  : getHash?.map(([key, value], index) => (
                      <SplideSlide key={index}>
                        <div className="flex items-center py-1">
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.1 }}
                            onClick={(e) =>
                              handleRouteSubmit(e, { tags: value })
                            }
                            className={`
                rounded-full px-3 py-[6px] text-center text-sm font-medium first:ml-2 focus:outline-none
                ${
                  hashtag === value || (hashtag === null && index === 0)
                    ? "bg-blue-50 text-blue-600 ring-[1px] ring-blue-300 lg:hover:ring-blue-600"
                    : "bg-white/10 text-slate-600 ring-[1px] ring-slate-300 dark:text-slate-300 dark:ring-slate-500 lg:hover:ring-slate-600 dark:lg:hover:ring-slate-300"
                }`}
                          >
                            {key}
                          </motion.button>
                        </div>
                      </SplideSlide>
                    ))}
              </Splide>
            </div>

            <div
              ref={modalRef}
              className="menu flex flex-row items-center md:justify-center md:space-x-6"
            >
              <div className="hidden h-[41px] w-[1px] bg-slate-300 dark:bg-slate-300 md:block"></div>
              <div
                ref={scope}
                className="flex flex-col items-center space-y-12"
              >
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  className="raletive inline-flex w-full items-center justify-center whitespace-nowrap rounded-full px-[117px] py-2 text-center text-xs font-semibold uppercase text-slate-600 ring-[1px] ring-slate-400 focus:outline-none dark:bg-slate-700 dark:text-slate-300 dark:ring-slate-500 md:px-5 md:py-2.5 lg:hover:ring-slate-600 dark:lg:hover:ring-slate-300"
                  type="button"
                  onClick={() => setSortbyOpen((state) => !state)}
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
                    className="lucide lucide-arrow-down-wide-narrow  mr-2.5"
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
                    className="lucide lucide-chevron-down arrow ml-2.5"
                    style={{ transformOrigin: "50% 55%" }}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </motion.button>
                <ul
                  style={{
                    pointerEvents: isSortbyOpen ? "auto" : "none",
                    clipPath: "inset(10% 50% 90% 50% round 6px)",
                  }}
                  id="dropdown"
                  className="shadow-3xl absolute z-[999] mt-2 w-5/6 rounded-md border border-slate-300 bg-white ring-1 ring-slate-900 ring-opacity-5 drop-shadow-xl dark:bg-slate-500 dark:ring-slate-100 md:-ml-4 md:w-44"
                >
                  <div className="flex flex-col justify-center space-y-1 p-2">
                    {sortOptions.map((option, index) => (
                      <motion.li
                        key={index}
                        whileTap={{ scale: 0.9 }}
                        role="menuitem"
                        onClick={(e) =>
                          handleRouteSubmit(e, { sortby: option.value })
                        }
                        className={`flex cursor-pointer items-center justify-center space-x-2 rounded px-12 py-2 text-center text-sm font-medium focus:outline-none ${
                          sort === option.value ||
                          (sort === null && option.value === "trending")
                            ? "bg-blue-100 text-blue-500 lg:hover:bg-slate-200 lg:dark:lg:hover:bg-slate-300"
                            : "text-slate-600 dark:text-slate-300 lg:hover:bg-slate-200 lg:hover:text-slate-800 dark:lg:hover:bg-slate-300 dark:lg:hover:text-slate-500"
                        }`}
                      >
                        <div className="flex flex-none items-center space-x-2">
                          <span>{option.name}</span>
                        </div>
                      </motion.li>
                    ))}
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-10 pt-10">
            {fetchResult?.length > 0 && (
              <div className="grid grid-cols-1 gap-y-12 px-3 md:grid-cols-2 md:gap-x-12 md:px-8 lg:grid-cols-3 xl:grid-cols-4">
                {fetchResult.map((linkElement, index) => (
                  <LinkCard
                    key={index}
                    linkElement={linkElement}
                    handleLike={handleLike}
                  />
                ))}
              </div>
            )}
            {loading && (
              <div className="trigger visible">
                {parseInt(sessionStorage.getItem("_PageNumber")) !==
                  parseInt(sessionStorage.getItem("_TotalPages")) && (
                  <LoaderSkeleton />
                )}
              </div>
            )}
            {!loading && fetchResult?.length === 0 && (
              <div className="flex justify-center">
                <Suspense fallback={null}>
                  <IconNoResult />
                </Suspense>
              </div>
            )}
          </div>
        </div>
      </div>
      {showTabs && <BottomTabs />}
    </>
  );
};

export default LinkMain;
