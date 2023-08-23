import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { generateLinkWithQuery } from "./generateLinkWithQuery";
import { openFilterModal } from "../store/features/modalSlice";
import { useDispatch } from "react-redux";

const Search = ({ nav }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const tags = queryParams.get("tags");
  const pricing = queryParams.get("pricing");
  const category = queryParams.get("category");
  const hashtag = queryParams.get("hashtag");

  const [isInputFocused, setInputFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [getFilterChange, setFilterChange] = useState(false);

  const handleInputSubmit = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const linkToPage = generateLinkWithQuery(location, {
      search_query: searchValue,
    });
    navigate(linkToPage);
  };

  const handleFilterToggle = () => {
    dispatch(openFilterModal());
  };

  useEffect(() => {
    if (
      category?.length > 0 ||
      pricing?.length > 0 ||
      tags?.length > 0 ||
      hashtag?.length > 0
    ) {
      setFilterChange(true);
    } else {
      setFilterChange(false);
    }
  }, [category, tags, pricing, hashtag]);

  return (
    <>
      <div
        className={` w-full items-center    ${
          nav === "dfdf" ? "max-w-2xl" : "pt-24 lg:px-20 xl:px-40"
        }`}
      >
        <form onSubmit={handleSubmit}>
          <div
            className={`backdrop-blur-lg backdrop-saturate-900  bg-opacity-90   bg-white relative flex w-full items-center rounded-full border-2 border-gray-200 lg:w-auto lg:flex-1 lg:border-0 mr-8 ${
              nav === "dfdf" ? "h-10 focus:shadow-2xl" : "h-14 shadow-md"
            }`}
          >
            <input
              value={searchValue}
              onChange={handleInputSubmit}
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
              type="search"
              className="transition duration-300 placeholder:italic ease-in-out h-full w-full  rounded-full pl-14 pr-20 font-normal text-base text-gray-900 bg-gray-900/5 focus:bg-gray-100 focus:outline-none focus:shadow-xl"
              placeholder="What Are You Searching For?"
            />

            <button type="submit" className="absolute left-4 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className={`text-gray-400 lucide lucide-search  ${
                  nav === "dfdf" ? "h-5 w-5" : "h-6 w-6"
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke={isInputFocused ? "#3b82f6" : "#6b7280"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
              </svg>
            </button>
            <div className="absolute right-16 w-[0.5px] bg-gray-500 h-full"></div>
            <button
              type="button"
              onClick={handleFilterToggle}
              className="absolute right-2  px-4 py-[10px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6b7280"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                className={` text-gray-400 lucide lucide-filter  ${
                  nav === "dfdf" ? "h-5 w-5" : "h-6 w-6"
                }`}
              >
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
              </svg>
              {getFilterChange && (
                <div className="absolute top-2 right-3">
                  <div className="relative flex h-2 w-2">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                  </div>
                </div>
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Search;
