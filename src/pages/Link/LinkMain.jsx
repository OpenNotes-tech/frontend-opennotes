import { useEffect, useRef, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { setLoading, setError } from "../../store/features/errorSlice";
import { useDispatch, useSelector } from "react-redux";
import LinkCard from "./LinkCard";
import {
  setCategoryOption,
  setTags,
  setSearchResult,
} from "../../store/features/searchSlice";

import LoaderSkeleton from "../../components/LoaderSkeleton";
import IconNoResult from "../../components/IconNoResult";
import SearchAPI from "../../utils/SearchAPI";

const LinkMain = () => {
  const { query, sort, category, tags } = useSelector((state) => state.Search);
  const location = useLocation();
  const dispatch = useDispatch();
  const name = location.pathname.split("/")[1]?.toLowerCase();
  const [getLoad] = useState(false);
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
    dispatch(setTags(isOpen));

    SearchAPI.linkSearch(query, sort, category, tags)
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

  const handleCategorySubmit = (e) => {
    e.preventDefault();
    dispatch(setCategoryOption(e.target.value))

    SearchAPI.linkSearch(query, sort, category, tags)
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

  return (
    <div className="container px-4 lg:px-0 mx-auto">
      <div className="flex flex-col px-12 py-10 space-y-10">
        <div className="flex flex-row space-x-4 justify-center">
          <button
            onClick={handleCategorySubmit}
            className="px-4 py-2 hover:bg-gray-200 rounded-full flex flex-row space-x-2"
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
            onClick={handleCategorySubmit}
            className="px-4 py-2 hover:bg-gray-200 rounded-full flex flex-row space-x-2"
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
            onClick={handleCategorySubmit}
            className="px-4 py-2 hover:bg-gray-200 rounded-full flex flex-row space-x-2"
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
            onClick={handleCategorySubmit}
            className="px-4 py-2 hover:bg-gray-200 rounded-full flex flex-row space-x-2"
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
            onClick={handleCategorySubmit}
            className="px-4 py-2 hover:bg-gray-200 rounded-full flex flex-row space-x-2"
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
            onClick={handleCategorySubmit}
            className="px-4 py-2 hover:bg-gray-200 rounded-full flex flex-row space-x-2"
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
              class="lucide lucide-newspaper"
            >
              <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
              <path d="M18 14h-8" />
              <path d="M15 18h-5" />
              <path d="M10 6h8v4h-8V6Z" />
            </svg>{" "}
            <p>Blogs</p>
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
                  className="mt-72 absolute origin-bottom-right z-10 bg-white divide-y divide-gray-100 rounded-lg w-44 shadow-2xl"
                >
                  <div className="divide-y divide-gray-300 rounded bg-white ring-1 ring-black ring-opacity-5">
                    <div className="space-y-1 p-2">
                      <Link
                        role="menuitem"
                        to="/profile"
                        className=" flex items-center text-center justify-between space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                      >
                        <div className="flex flex-none items-center space-x-2">
                          <span>Trending</span>
                        </div>
                      </Link>
                      <Link
                        role="menuitem"
                        to="/profile"
                        className=" flex items-center text-center justify-between space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                      >
                        <div className="flex flex-none items-center space-x-2">
                          <span>Favorite</span>
                        </div>
                      </Link>
                      <Link
                        role="menuitem"
                        to="/profile"
                        className=" flex items-center text-center justify-between space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                      >
                        <div className="flex flex-none items-center space-x-2">
                          <span>Latest</span>
                        </div>
                      </Link>
                      <Link
                        role="menuitem"
                        to="/profile"
                        className=" flex items-center text-center justify-between space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                      >
                        <div className="flex flex-none items-center space-x-2">
                          <span>Oldest</span>
                        </div>
                      </Link>
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
          {getLoad && (
            <div className="w-full">
              <LoaderSkeleton />
            </div>
          )}
          <div className="flex w-full justify-center">
            <button
              class="middle none center rounded-lg bg-pink-500 py-3 px-10 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
            >
              More
            </button>
          </div>
          {isFilterSticky && (
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
    </div>
  );
};

export default LinkMain;
