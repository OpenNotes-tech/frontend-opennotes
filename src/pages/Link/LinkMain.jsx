import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  openExploreModal,
  openBookmarkModal,
} from "../../store/features/modalSlice";
import LinkCard from "./LinkCard";
import useScreenSize from "../../components/useScreenSize";
import LoaderSkeleton from "../../components/LoaderSkeleton";
import IconNoResult from "../../components/IconNoResult";
import hashtags from "../../constants/tags.json";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import { generateLinkWithQuery } from "../../components/generateLinkWithQuery";
import clsx from "clsx";
// import { motion } from "framer-motion";
import useMenuAnimation from "../../components/useMenuAnimation";

import { motion } from "framer-motion";

const LinkMain = ({ fetchResult, sort, category }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const screenSize = useScreenSize();
  const queryParams = new URLSearchParams(location.search);
  const hashtag = queryParams.get("hashtag");
  const loading = useSelector((state) => state.Error.loading);
  const [isSortbyOpen, setSortbyOpen] = useState(false);
  const [showTabs, setShowTabs] = useState(false);
  const [hashLoad, setHashLoad] = useState(true);
  const [getHash, setHash] = useState(hashtags.home);
  const scope = useMenuAnimation(isSortbyOpen);

  let tabs = [
    {
      id: "frontend",
      label: "Frontend",
      icon: (
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
      ),
    },
    {
      id: "backend",
      label: "Backend",
      icon: (
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
      ),
    },
    {
      id: "blog",
      label: "Blog",
      icon: (
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
      ),
    },
    {
      id: "mobile",
      label: "Mobile",
      icon: (
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
      ),
    },
  ];

  const handleCategorySubmit = (e, navLink) => {
    const linkToPage = generateLinkWithQuery(location, { category: navLink });
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
    setSortbyOpen((prevState) => !prevState);
  };

  const handleBookmarkModalToggle = () => {
    dispatch(openBookmarkModal());
  };

  const handleExploreModalToggle = () => {
    dispatch(openExploreModal());
  };

  const getWidthAndHeight = () => {
    if (screenSize === "sm") {
      return { width: "22rem", height: "4rem" };
    } else if (screenSize === "md") {
      return { width: "44rem", height: "4rem" };
    } else {
      return { width: "70rem", height: "5rem" };
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
      <div className="ml-5 mt-1 animate-pulse rounded-full bg-gray-200 px-14 py-4"></div>
    </>
  );

  return (
    <>
      <div className="container mx-auto justify-center scroll-smooth">
        <div className="flex flex-col space-y-1 py-6 md:space-y-4 md:px-8 md:py-10 ">
          <div
            className={`flex w-full snap-x flex-row justify-center space-x-4 ${
              loading ? " pointer-events-none" : ""
            }`}
          >
            <Splide
              className="group flex snap-x flex-row justify-center space-x-4"
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
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => handleCategorySubmit(e, "")}
                  className={`ml-2 mt-2 flex snap-center snap-normal flex-row space-x-2 rounded-full px-4 py-2 lg:hover:bg-gray-200 ${
                    category?.split(",")[0] === undefined &&
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
                </motion.button>
              </SplideSlide>
              <SplideSlide>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => handleCategorySubmit(e, "frontend")}
                  className={`mt-2 flex snap-center snap-normal flex-row space-x-2 rounded-full px-4 py-2 lg:hover:bg-gray-200 ${
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
                </motion.button>
              </SplideSlide>
              <SplideSlide>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => handleCategorySubmit(e, "backend")}
                  className={`mt-2 flex snap-center snap-normal flex-row space-x-2 rounded-full px-4 py-2 lg:hover:bg-gray-200 ${
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
                </motion.button>
              </SplideSlide>
              <SplideSlide>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => handleCategorySubmit(e, "mobile")}
                  className={`mt-2 flex snap-center snap-normal flex-row space-x-2 rounded-full px-4 py-2 lg:hover:bg-gray-200 ${
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
                </motion.button>
              </SplideSlide>
              <SplideSlide>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => handleCategorySubmit(e, "courses")}
                  className={`mt-2 flex snap-center snap-normal flex-row space-x-2 rounded-full px-4 py-2 lg:hover:bg-gray-200 ${
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
                </motion.button>
              </SplideSlide>
              <SplideSlide>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => handleCategorySubmit(e, "cybersecurity")}
                  className={`mt-2 flex snap-center snap-normal flex-row space-x-2 whitespace-nowrap rounded-full px-4 py-2 lg:hover:bg-gray-200 ${
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
                </motion.button>
              </SplideSlide>
              <SplideSlide>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => handleCategorySubmit(e, "datascience")}
                  className={`mt-2 flex snap-center snap-normal flex-row space-x-2 whitespace-nowrap rounded-full px-4 py-2 lg:hover:bg-gray-200 ${
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
                </motion.button>
              </SplideSlide>
            </Splide>
          </div>
          <div className="block h-[1px] w-full bg-gray-300 lg:hidden"></div>
          <div className="flex flex-col space-y-5 pt-4 md:pt-0">
            <div
              className={`-mb-10 flex flex-col justify-center space-y-4 md:flex-row md:justify-between md:space-x-3 md:space-y-0 ${
                loading ? " pointer-events-none" : ""
              }`}
            >
              <div class="relative h-14 overflow-x-auto overflow-y-clip">
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
                  {hashLoad
                    ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((_, index) => (
                        <SkeletonLoader key={index} />
                      ))
                    : getHash?.map((tag, index) => (
                        <SplideSlide key={index}>
                          <div className="flex items-center py-1">
                            <button
                              onClick={(e) => handleTagsSubmit(e, tag.slice(1))}
                              className={` rounded-full px-3 py-[6px] text-center text-sm font-semibold focus:outline-none 
                ${
                  hashtag === tag.slice(1) || (hashtag === null && index === 0)
                    ? "bg-blue-100 text-blue-500 ring-[1.1px]  ring-blue-200 lg:hover:ring-blue-600"
                    : "bg-white/20 text-slate-600 ring-[1.1px] ring-slate-300 lg:hover:ring-[1.1px] lg:hover:ring-black"
                }
                ${index === 0 && "ml-2"}
              `}
                            >
                              {tag}
                            </button>
                          </div>
                        </SplideSlide>
                      ))}
                </Splide>
              </div>

              <div className=" menu flex flex-row items-center justify-center md:space-x-6 md:pb-4">
                <div className="hidden h-[41px] w-[1px] bg-gray-300 md:block"></div>
                <div ref={scope}>
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="dropdown"
                    className="raletive backdrop-blur-4xl inline-flex w-full items-center justify-center whitespace-nowrap rounded-full bg-white/20 bg-opacity-20 px-[117px] py-2 text-center text-xs font-semibold uppercase text-slate-600  ring-[1.1px] ring-slate-300 backdrop-saturate-200 transition duration-300 ease-in-out hover:ring-[1.1px] hover:ring-black focus:outline-none md:px-5 md:py-2.5"
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
                    className="absolute z-10 -ml-4 mt-2 w-11/12  rounded-lg bg-white shadow-2xl  md:w-44"
                  >
                    <div className="divide-y divide-gray-300 rounded bg-white ring-1 ring-black ring-opacity-5">
                      <div className="flex flex-col justify-center space-y-1 p-2">
                        <li
                          role="menuitem"
                          onClick={(e) => handleSortChange(e, "trending")}
                          className={`flex cursor-pointer items-center justify-center space-x-2 rounded px-12 py-2 text-center text-sm font-medium focus:outline-none  lg:hover:bg-gray-200 ${
                            sort === "trending" || sort === null
                              ? "bg-blue-100 text-blue-500"
                              : "text-gray-800 hover:bg-gray-100 hover:text-gray-900"
                          }`}
                        >
                          <div className="flex flex-none items-center space-x-2">
                            <span>Trending</span>
                          </div>
                        </li>
                        <li
                          role="menuitem"
                          onClick={(e) => handleSortChange(e, "favorite")}
                          className={`flex cursor-pointer items-center justify-center space-x-2 rounded px-12 py-2 text-center text-sm font-medium focus:outline-none lg:hover:bg-gray-200 ${
                            sort === "favorite"
                              ? "bg-blue-100 text-blue-500"
                              : "text-gray-800 hover:bg-gray-100 hover:text-gray-900"
                          }`}
                        >
                          <div className="flex flex-none items-center space-x-2">
                            <span>Favorite</span>
                          </div>
                        </li>
                        <li
                          role="menuitem"
                          onClick={(e) => handleSortChange(e, "latest")}
                          className={` flex cursor-pointer items-center justify-center space-x-2 rounded px-12 py-2 text-center text-sm font-medium focus:outline-none lg:hover:bg-gray-200 ${
                            sort === "latest"
                              ? "bg-blue-100 text-blue-500"
                              : "text-gray-800 hover:bg-gray-100 hover:text-gray-900"
                          }`}
                        >
                          <div className="flex flex-none items-center space-x-2">
                            <span>Latest</span>
                          </div>
                        </li>
                        <li
                          role="menuitem"
                          onClick={(e) => handleSortChange(e, "oldest")}
                          className={`flex cursor-pointer items-center justify-center space-x-2 rounded px-12 py-2 text-center text-sm font-medium focus:outline-none lg:hover:bg-gray-200 ${
                            sort === "oldest"
                              ? "bg-blue-100 text-blue-500"
                              : "text-gray-800 hover:bg-gray-100 hover:text-gray-900"
                          }`}
                        >
                          <div className="flex flex-none items-center space-x-2">
                            <span>Oldest</span>
                          </div>
                        </li>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>

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
      {showTabs && (
        <aside className="toolbarx fixed bottom-0 z-[999] h-16 w-full shadow-[0_40px_60px_2px_rgba(0.9,0.9,0.9,0.9)]  md:hidden">
          <ul className="-ml-8 grid h-full grid-cols-4 justify-center bg-white px-4 text-xs font-normal text-gray-500">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={(e) => handleCategorySubmit(e, tab.id)}
                className="relative flex flex-col items-center justify-center rounded-full px-3 py-1.5 text-sm font-medium text-slate-500 outline-sky-400 transition focus-visible:outline-2"
                style={{
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                {category === tab.id && (
                  <motion.span
                    layoutId="bubble"
                    className="absolute inset-0 z-10 rounded-t-lg bg-yellow-700 mix-blend-difference"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </ul>
        </aside>
      )}
    </>
  );
};

export default LinkMain;
