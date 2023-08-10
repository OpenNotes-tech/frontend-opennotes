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
} from "../../store/features/searchSlice";
import ShareModal from "../../components/ShareModal";
import LoaderSkeleton from "../../components/LoaderSkeleton";
import IconNoResult from "../../components/IconNoResult";
import SearchAPI from "../../utils/SearchAPI";
import Loader from "../../components/Loader";
import Slider from "../../components/Slider";
import slides from '../../constants/mock.json';

const LinkMain = () => {
  const { query, sort, category, tags, type } = useSelector(
    (state) => state.Search
  );
  const { isShareModalOpen } = useSelector((state) => state.Modal);
  const loading = useSelector((state) => state.Error.loading);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = location.pathname.split("/")[1]?.toLowerCase();
  const [linkResults] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };
  const filterRef = useRef(null);
  const [isFilterSticky, setIsFilterSticky] = useState(false);

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

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTagsSubmit = (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    dispatch(setTagsOption(isOpen));

    SearchAPI.linkSearch(query, sort, category, tags, type)
      .then((res) => {
        dispatch(setSearchResult(res.data.data.body));
        dispatch(setLoading(false));
      })
      .catch((error) => {
        dispatch(setError(error?.response?.data?.message));
        dispatch(setLoading(false));
      })
      .finally((e) => {
        dispatch(setLoading(false));
      });
  };

  const handleCategorySubmit = (e, navLink) => {
    e.preventDefault();
    navigate(navLink);
    dispatch(setLoading(true));
    dispatch(setCategoryOption(navLink.substring(1)));
    console.log(navLink.substring(1));

    SearchAPI.linkSearch(query, sort, navLink.substring(1), tags, type)
      .then((res) => {
        console.log(res);
        dispatch(setSearchResult(res.data.data.body));
        dispatch(setLoading(false));
      })
      .catch((error) => {
        dispatch(setError(error?.response?.data?.message));
        dispatch(setLoading(false));
      })
      .finally((e) => {
        dispatch(setLoading(false));
      });
  };

  const handleSortChange = (e, result) => {
    e.preventDefault();
    dispatch(setSortOption(result));
    dispatch(setLoading(true));

    SearchAPI.linkSearch(query, result, category, tags, type)
      .then((res) => {
        console.log(res);
        dispatch(setSearchResult(res.data.data.body));
        dispatch(setLoading(false));
      })
      .catch((error) => {
        console.log(error);
        dispatch(setError(error?.response?.data?.message));
        dispatch(setLoading(false));
      })
      .finally((e) => {
        dispatch(setLoading(false));
      });
  };

  const handleMoreButton = () => {
    if (name !== "search") {
      navigate("/search");
    } else {
      console.log("hello world");
    }
  };

  return (
    <div className="container px-4 lg:px-0 mx-auto">
      {loading && <Loader />}
      <div className="flex flex-col px-12 py-10 space-y-10">
        <div
          className={`flex flex-row space-x-4 justify-center ${
            name === "search" ? "hidden" : "block"
          }`}
        >
          <button
            onClick={(e) => handleCategorySubmit(e, "/")}
            className={`px-4 py-2 hover:bg-gray-200 rounded-full flex flex-row space-x-2 ${
              name === "" && "bg-blue-100 text-blue-500"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-home"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <p>Home</p>
          </button>
          <button
            onClick={(e) => handleCategorySubmit(e, "/frontend")}
            className={`px-4 py-2 hover:bg-gray-200 rounded-full flex flex-row space-x-2 ${
              name === "frontend" && "bg-blue-100 text-blue-500"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
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
            </svg>{" "}
            <p>Frontend</p>
          </button>
          <button
            onClick={(e) => handleCategorySubmit(e, "/backend")}
            className={`px-4 py-2 hover:bg-gray-200 rounded-full flex flex-row space-x-2 ${
              name === "backend" && "bg-blue-100 text-blue-500"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
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
          <button
            onClick={(e) => handleCategorySubmit(e, "/mobile")}
            className={`px-4 py-2 hover:bg-gray-200 rounded-full flex flex-row space-x-2 ${
              name === "mobile" && "bg-blue-100 text-blue-500"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
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
          <button
            onClick={(e) => handleCategorySubmit(e, "/courses")}
            className={`px-4 py-2 hover:bg-gray-200 rounded-full flex flex-row space-x-2 ${
              name === "courses" && "bg-blue-100 text-blue-500"
            }`}
          >
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
              class="lucide lucide-graduation-cap"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>{" "}
            <p>Courses</p>
          </button>
          <button
            onClick={(e) => handleCategorySubmit(e, "/cybersecurity")}
            className={`px-4 py-2 hover:bg-gray-200 rounded-full flex flex-row space-x-2 ${
              name === "cybersecurity" && "bg-blue-100 text-blue-500"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
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
          <button
            onClick={(e) => handleCategorySubmit(e, "/datascience")}
            className={`px-4 py-2 hover:bg-gray-200 rounded-full flex flex-row space-x-2 ${
              name === "artificialintelligence" && "bg-blue-100 text-blue-500"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
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
        </div>
        <div className=" flex flex-col space-y-10">
          <div className="flex justify-between">
            {/* <div class="relative overflow-x-auto overflow-y-clip h-14">
              <div class="max-w-5xl mx-auto  shadow-xl min-w-0  dark:highlight-white/5">
                <div class="overflow-x-auto overflow-y-hidden flex no-scrollbar items-center space-x-3">
                  <div class="flex py-6 -mt-3 items-center first:pl-6 last:pr-6">
                    <button onclick={handleTagsSubmit} className="text-sm px-3 rounded-full py-[6px] text-center focus:outline-none font-semibold transition duration-300 ease-in-out backdrop-blur-4xl backdrop-saturate-200 bg-opacity-20 bg-white/20 text-slate-600 ring-[1.1px] ring-slate-300 hover:ring-[1.1px] hover:ring-black">
                      #nature
                    </button>
                  </div>{" "}
                  <div class="flex py-6 -mt-3 items-center first:pl-6 last:pr-6">
                    <button onclick={handleTagsSubmit} className="text-sm px-3 rounded-full py-[6px] text-center focus:outline-none font-semibold transition duration-300 ease-in-out backdrop-blur-4xl backdrop-saturate-200 bg-opacity-20 bg-white/20 text-slate-600 ring-[1.1px] ring-slate-300 hover:ring-[1.1px] hover:ring-black">
                      #wallpaper
                    </button>
                  </div>
                  <div class="flex py-6 -mt-3 items-center first:pl-6 last:pr-6">
                    <button onclick={handleTagsSubmit} className="text-sm px-3 rounded-full py-[6px] text-center focus:outline-none font-semibold transition duration-300 ease-in-out backdrop-blur-4xl backdrop-saturate-200 bg-opacity-20 bg-white/20 text-slate-600 ring-[1.1px] ring-slate-300 hover:ring-[1.1px] hover:ring-black">
                      #background
                    </button>
                  </div>
                  <div class="flex py-6 -mt-3 items-center first:pl-6 last:pr-6">
                    <button onclick={handleTagsSubmit} className="text-sm px-3 rounded-full py-[6px] text-center focus:outline-none font-semibold transition duration-300 ease-in-out backdrop-blur-4xl backdrop-saturate-200 bg-opacity-20 bg-white/20 text-slate-600 ring-[1.1px] ring-slate-300 hover:ring-[1.1px] hover:ring-black">
                      #sky
                    </button>
                  </div>
                  <div class="flex py-6 -mt-3 items-center first:pl-6 last:pr-6">
                    <button onclick={handleTagsSubmit} className="text-sm px-3 rounded-full py-[6px] text-center focus:outline-none font-semibold transition duration-300 ease-in-out backdrop-blur-4xl backdrop-saturate-200 bg-opacity-20 bg-white/20 text-slate-600 ring-[1.1px] ring-slate-300 hover:ring-[1.1px] hover:ring-black">
                      #food
                    </button>
                  </div>
                  <div class="flex py-6 -mt-3 items-center first:pl-6 last:pr-6">
                    <button onclick={handleTagsSubmit} className="text-sm px-3 rounded-full py-[6px] text-center focus:outline-none font-semibold transition duration-300 ease-in-out backdrop-blur-4xl backdrop-saturate-200 bg-opacity-20 bg-white/20 text-slate-600 ring-[1.1px] ring-slate-300 hover:ring-[1.1px] hover:ring-black">
                      #cat
                    </button>
                  </div>
                  <div class="flex py-6 -mt-3 items-center first:pl-6 last:pr-6">
                    <button onclick={handleTagsSubmit} className="text-sm px-3 rounded-full py-[6px] text-center focus:outline-none font-semibold transition duration-300 ease-in-out backdrop-blur-4xl backdrop-saturate-200 bg-opacity-20 bg-white/20 text-slate-600 ring-[1.1px] ring-slate-300 hover:ring-[1.1px] hover:ring-black">
                      #summer
                    </button>
                  </div>
                  <div class="flex py-6 -mt-3 items-center first:pl-6 last:pr-6">
                    <button onclick={handleTagsSubmit} className="text-sm px-3 rounded-full py-[6px] text-center focus:outline-none font-semibold transition duration-300 ease-in-out backdrop-blur-4xl backdrop-saturate-200 bg-opacity-20 bg-white/20 text-slate-600 ring-[1.1px] ring-slate-300 hover:ring-[1.1px] hover:ring-black">
                      #love
                    </button>
                  </div>
                  <div class="flex py-6 -mt-3 items-center first:pl-6 last:pr-6">
                    <button onclick={handleTagsSubmit} className="text-sm px-3 rounded-full py-[6px] text-center focus:outline-none font-semibold transition duration-300 ease-in-out backdrop-blur-4xl backdrop-saturate-200 bg-opacity-20 bg-white/20 text-slate-600 ring-[1.1px] ring-slate-300 hover:ring-[1.1px] hover:ring-black">
                      #beach
                    </button>
                  </div>
                  <div class="flex py-6 -mt-3 items-center first:pl-6 last:pr-6">
                    <button onclick={handleTagsSubmit} className="text-sm px-3 rounded-full py-[6px] text-center focus:outline-none font-semibold transition duration-300 ease-in-out backdrop-blur-4xl backdrop-saturate-200 bg-opacity-20 bg-white/20 text-slate-600 ring-[1.1px] ring-slate-300 hover:ring-[1.1px] hover:ring-black">
                      #flower
                    </button>
                  </div>
                  <div class="flex py-6 -mt-3 items-center first:pl-6 last:pr-6">
                    <button onclick={handleTagsSubmit} className="text-sm px-3 rounded-full py-[6px] text-center focus:outline-none font-semibold transition duration-300 ease-in-out backdrop-blur-4xl backdrop-saturate-200 bg-opacity-20 bg-white/20 text-slate-600 ring-[1.1px] ring-slate-300 hover:ring-[1.1px] hover:ring-black">
                      #water
                    </button>
                  </div>
                  <div class="flex py-6 -mt-3 items-center first:pl-6 last:pr-6">
                    <button onclick={handleTagsSubmit} className="text-sm px-3 rounded-full py-[6px] text-center focus:outline-none font-semibold transition duration-300 ease-in-out backdrop-blur-4xl backdrop-saturate-200 bg-opacity-20 bg-white/20 text-slate-600 ring-[1.1px] ring-slate-300 hover:ring-[1.1px] hover:ring-black">
                      #flowers
                    </button>
                  </div>
                  <div class="flex py-6 -mt-3 items-center first:pl-6 last:pr-6">
                    <button onclick={handleTagsSubmit} className="text-sm px-3 rounded-full py-[6px] text-center focus:outline-none font-semibold transition duration-300 ease-in-out backdrop-blur-4xl backdrop-saturate-200 bg-opacity-20 bg-white/20 text-slate-600 ring-[1.1px] ring-slate-300 hover:ring-[1.1px] hover:ring-black">
                      #iphone
                    </button>
                  </div>
                  <div class="flex py-6 -mt-3 items-center first:pl-6 last:pr-6">
                    <button onclick={handleTagsSubmit} className="text-sm px-3 rounded-full py-[6px] text-center focus:outline-none font-semibold transition duration-300 ease-in-out backdrop-blur-4xl backdrop-saturate-200 bg-opacity-20 bg-white/20 text-slate-600 ring-[1.1px] ring-slate-300 hover:ring-[1.1px] hover:ring-black">
                      #wallpaper
                    </button>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="">
            <Slider slides={slides}/>
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

          <div className="grid grid-cols-1 md:grid-cols-4 md:gap-x-12 gap-y-12">
            {linkResults &&
              linkResults.map((linkElement, index) => (
                <LinkCard key={index} linkElement={linkElement} />
              ))}

            {linkResults.length === 0 && (
              <div className="flex justify-center items-center md:ml-4 mb-10 w-full h-4/5 md:h-1/3 lg:h-2/6">
                <IconNoResult />
              </div>
            )}
          </div>
          {loading && (
            <div className="w-full">
              <LoaderSkeleton />
            </div>
          )}
          <div className="flex w-full justify-center">
            <button
              onClick={handleMoreButton}
              class="middle none center rounded-lg bg-pink-500 py-3 px-10 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
            >
              More
            </button>
          </div>
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
      {isShareModalOpen && <ShareModal />}
    </div>
  );
};

export default LinkMain;
