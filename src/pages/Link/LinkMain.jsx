import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import clsx from "clsx";
import { generateLinkWithQuery } from "../../hooks/useGenerateQueryLink";
import LoaderSkeleton from "../../components/LoaderSkeleton";
import useMenuAnimation from "../../hooks/useMenuAnimation";
import IconNoResult from "../../components/IconNoResult";
import useScreenSize from "../../hooks/useScreenSize";
import BottomTabs from "../../components/BottomTabs";
import hashtags from "../../constants/tags.json";
import LinkCard from "./LinkCard";
import "@splidejs/react-splide/css/skyblue";

const LinkMain = ({ fetchResult, sort, category }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const screenSize = useScreenSize();
  const modalRef = useRef();

  const queryParams = new URLSearchParams(location.search);
  const hashtag = queryParams.get("hashtag");
  const loading = useSelector((state) => state.Error.loading);
  const [isSortbyOpen, setSortbyOpen] = useState(false);
  const [getHash, setHash] = useState(hashtags.home);
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

  const handleCategorySubmit = (e, category) => {
    const linkToPage = generateLinkWithQuery(location, {
      category: category,
    });
    navigate(linkToPage);
  };

  const handleSortChange = (e, result) => {
    const linkToPage = generateLinkWithQuery(location, { sortby: result });
    navigate(linkToPage);
  };
  const handleTagsSubmit = (e, tag) => {
    const linkToPage = generateLinkWithQuery(location, { hashtag: tag });
    navigate(linkToPage);
  };

  const toggleDropdown = () => {
    setSortbyOpen((state) => !state);
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
        setHash(hashtags[category.split(",")[0]]);
      } else {
        setHash(hashtags.home);
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

  const SkeletonLoader = () => (
    <>
      <div className="ml-5 mt-1 animate-pulse rounded-full bg-neutral-200 px-14 py-4"></div>
    </>
  );

  let tabs = [
    {
      id: "/",
      label: "Home",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
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
      ),
    },
    {
      id: "frontend",
      label: "Frontend",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
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
      ),
    },
    {
      id: "backend",
      label: "Backend",
      icon: (
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
        </svg>
      ),
    },
    {
      id: "mobile",
      label: "Mobile",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
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
        </svg>
      ),
    },
    {
      id: "courses",
      label: "IT Coureses",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
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
        </svg>
      ),
    },
    {
      id: "cybersecurity",
      label: "Cyber Security",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
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
        </svg>
      ),
    },
    {
      id: "datascience",
      label: "AI / ML / DS",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
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
        </svg>
      ),
    },
    {
      id: "algorithms",
      label: "Algorithms",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-braces"
        >
          <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" />
          <path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" />
        </svg>
      ),
    },
    {
      id: "blogs",
      label: "Blogs",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-scroll-text"
        >
          <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4" />
          <path d="M19 17V5a2 2 0 0 0-2-2H4" />
          <path d="M15 8h-5" />
          <path d="M15 12h-5" />
        </svg>
      ),
    },
    {
      id: "podcasts",
      label: "Podcasts",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-mic"
        >
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" x2="12" y1="19" y2="22" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <div className="justify-center scroll-smooth ">
        <div className="flex flex-col space-y-1 py-6 md:space-y-4 md:px-8 md:py-10 ">
          <div
            className={`flex w-full snap-x flex-row justify-center space-x-4 ${
              loading ? " pointer-events-none" : ""
            }`}
          >
            <Splide
              className="flex snap-x flex-row justify-center space-x-4 text-lg text-neutral-800 dark:text-slate-300"
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
                height: getWidthAndHeightCategory().height,
                width: getWidthAndHeightCategory().width,
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
              {tabs.map((tab, index) => (
                <>
                  <SplideSlide key={index}>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) =>
                        handleCategorySubmit(e, tab.id === "/" ? "" : tab.id)
                      }
                      className={`mt-2 flex snap-center snap-normal flex-row items-center justify-center space-x-2 rounded-full px-4 py-2 first:ml-2 lg:hover:bg-neutral-200 lg:dark:hover:bg-slate-600 lg:dark:hover:text-white ${
                        category?.split(",")[0] ===
                          (tab.id === "/" ? undefined : tab.id) &&
                        "bg-blue-100 text-blue-500"
                      }`}
                    >
                      {tab.icon}
                      <p>{tab.label}</p>
                    </motion.button>
                  </SplideSlide>
                </>
              ))}
            </Splide>
          </div>
          <div className="block h-[1px] w-full bg-neutral-300 dark:bg-slate-300 lg:hidden"></div>
          <div
            className={`container mx-auto -mb-10 flex flex-col items-center justify-center space-y-4 md:flex-row md:justify-between md:space-x-3 md:space-y-0 xl:px-2 ${
              loading ? " pointer-events-none" : ""
            }`}
          >
            <div class="relative h-10  overflow-x-auto overflow-y-clip">
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
                  height: getWidthAndHeightTags().height,
                  width: getWidthAndHeightTags().width,
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
                {hashLoad
                  ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((_, index) => (
                      <SkeletonLoader key={index} />
                    ))
                  : getHash?.map((tag, index) => (
                      <SplideSlide key={index}>
                        <div className="flex items-center py-1">
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.1 }}
                            onClick={(e) => handleTagsSubmit(e, tag.slice(1))}
                            className={`rounded-full px-3 py-[6px] text-center text-sm font-medium first:ml-2 focus:outline-none
                ${
                  hashtag === tag.slice(1) || (hashtag === null && index === 0)
                    ? "bg-blue-50 text-blue-600 ring-[1px]  ring-blue-300 lg:hover:ring-blue-600"
                    : "bg-white/10 text-neutral-600 ring-[1px] ring-neutral-300 dark:text-slate-300 dark:ring-slate-500 lg:hover:ring-neutral-600 dark:lg:hover:ring-slate-300"
                }
              `}
                          >
                            {tag}
                          </motion.button>
                        </div>
                      </SplideSlide>
                    ))}
              </Splide>
            </div>

            <div
              ref={modalRef}
              className=" menu flex flex-row items-center md:justify-center md:space-x-6"
            >
              <div className="hidden h-[41px] w-[1px] bg-neutral-300 dark:bg-slate-300 md:block"></div>
              <div ref={scope}>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  className="raletive inline-flex w-full items-center justify-center whitespace-nowrap rounded-full px-[117px] py-2 text-center text-xs font-semibold uppercase text-neutral-600 ring-[1px] ring-neutral-400 hover:ring-neutral-600 focus:outline-none dark:bg-slate-700 dark:text-slate-300 dark:ring-slate-500 md:px-5 md:py-2.5 dark:lg:hover:ring-slate-300"
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
                    clipPath: "inset(10% 50% 90% 50% round 10px)",
                  }}
                  id="dropdown"
                  className="shadow-3xl absolute z-[999] -ml-4 mt-2 w-1/2 rounded-md border border-neutral-300 bg-white ring-1 ring-neutral-900 ring-opacity-5 drop-shadow-xl dark:bg-slate-500 dark:ring-slate-100 md:w-44"
                >
                  <div className="flex flex-col justify-center space-y-1 p-2">
                    <motion.li
                      whileTap={{ scale: 0.9 }}
                      role="menuitem"
                      onClick={(e) => handleSortChange(e, "trending")}
                      className={`flex cursor-pointer items-center justify-center space-x-2 rounded px-12 py-2 text-center text-sm font-medium focus:outline-none ${
                        sort === "trending" || sort === null
                          ? "bg-blue-100 text-blue-500 lg:hover:bg-neutral-200 lg:dark:hover:bg-slate-300"
                          : "text-neutral-600 dark:text-slate-300 lg:hover:bg-neutral-200 lg:hover:text-neutral-800 dark:lg:hover:bg-slate-300 dark:lg:hover:text-slate-500"
                      }`}
                    >
                      <div className="flex flex-none items-center space-x-2">
                        <span>Trending</span>
                      </div>
                    </motion.li>
                    <motion.li
                      whileTap={{ scale: 0.9 }}
                      role="menuitem"
                      onClick={(e) => handleSortChange(e, "favorite")}
                      className={`flex cursor-pointer items-center justify-center space-x-2 rounded px-12 py-2 text-center text-sm font-medium focus:outline-none ${
                        sort === "favorite"
                          ? "bg-blue-100 text-blue-500 lg:hover:bg-neutral-200 lg:dark:hover:bg-slate-300"
                          : "text-neutral-600 dark:text-slate-300 lg:hover:bg-neutral-200 lg:hover:text-neutral-800 dark:lg:hover:bg-slate-300 dark:lg:hover:text-slate-500"
                      }`}
                    >
                      <div className="flex flex-none items-center space-x-2">
                        <span>Favorite</span>
                      </div>
                    </motion.li>
                    <motion.li
                      whileTap={{ scale: 0.9 }}
                      role="menuitem"
                      onClick={(e) => handleSortChange(e, "latest")}
                      className={` flex cursor-pointer items-center justify-center space-x-2 rounded px-12 py-2 text-center text-sm font-medium focus:outline-none ${
                        sort === "latest"
                          ? "bg-blue-100 text-blue-500 lg:hover:bg-neutral-200 lg:dark:hover:bg-slate-300"
                          : "text-neutral-600 dark:text-slate-300 lg:hover:bg-neutral-200 lg:hover:text-neutral-800 dark:lg:hover:bg-slate-300 dark:lg:hover:text-slate-500"
                      }`}
                    >
                      <div className="flex flex-none items-center space-x-2">
                        <span>Latest</span>
                      </div>
                    </motion.li>
                    <motion.li
                      whileTap={{ scale: 0.9 }}
                      role="menuitem"
                      onClick={(e) => handleSortChange(e, "oldest")}
                      className={`flex cursor-pointer items-center justify-center space-x-2 rounded px-12 py-2 text-center text-sm font-medium focus:outline-none ${
                        sort === "oldest"
                          ? "bg-blue-100 text-blue-500 lg:hover:bg-neutral-200 lg:dark:hover:bg-slate-300"
                          : "text-neutral-600 dark:text-slate-300 lg:hover:bg-neutral-200 lg:hover:text-neutral-800 dark:lg:hover:bg-slate-300 dark:lg:hover:text-slate-500"
                      }`}
                    >
                      <div className="flex flex-none items-center space-x-2">
                        <span>Oldest</span>
                      </div>
                    </motion.li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-5 pt-4 md:pt-0">
            <div className="grid grid-cols-1 gap-y-12 pb-16 pt-16 md:grid-cols-2 md:gap-x-12 md:pb-10  md:pt-10 lg:grid-cols-3 xl:grid-cols-4">
              {fetchResult &&
                fetchResult.map((linkElement, index) => (
                  <LinkCard key={index} linkElement={linkElement} />
                ))}
            </div>
            <div
              className={clsx("trigger", {
                visible: loading,
              })}
            >
              {parseInt(sessionStorage.getItem("_PageNumber")) !==
                parseInt(sessionStorage.getItem("_TotalPages")) &&
                !(!loading === true && fetchResult?.length === 0) && (
                  <LoaderSkeleton />
                )}
            </div>
            {!loading === true && fetchResult?.length === 0 && (
              <div className="flex justify-center">
                <IconNoResult />
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
