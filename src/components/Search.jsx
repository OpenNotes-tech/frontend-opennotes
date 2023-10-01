import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { openFilterModal } from "../store/features/modalSlice";
import { setSearchValue } from "../store/features/editProfileSlice";
import { QueryRoutes } from "../hooks/useGenerateQueryLink";

const Search = ({ nav }) => {
  const { searchValue } = useSelector((state) => state.UserProfile);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");
  const hashtag = queryParams.get("hashtag");
  const pricing = queryParams.get("pricing");
  const sortby = queryParams.get("sortby");
  const tags = queryParams.get("tags");

  const [getFilterChange, setFilterChange] = useState(false);
  const [isInputFocused, setInputFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sortby === null) {
      const linkToPage = QueryRoutes(location, {
        search_query: searchValue.trim(),
        sortby: "relevant",
      });
      navigate(linkToPage);
    } else {
      const linkToPage = QueryRoutes(location, {
        search_query: searchValue.trim(),
      });
      navigate(linkToPage);
    }
  };

  useEffect(() => {
    if (
      category?.length > 0 ||
      pricing?.length > 0 ||
      tags?.length > 0 ||
      (hashtag?.length > 0 && hashtag !== "all")
    ) {
      setFilterChange(true);
    } else {
      setFilterChange(false);
    }
  }, [category, tags, pricing, hashtag]);

  return (
    <div
      className={`w-full items-center ${
        nav === "navbarVersion" ? "max-w-2xl" : "pt-24 lg:px-20 xl:px-40"
      }`}
    >
      <form onSubmit={handleSubmit}>
        <div
          className={`backdrop-saturate-900 relative mr-8 flex w-full items-center rounded-full border-2 border-slate-200 bg-white bg-opacity-90 backdrop-blur-lg lg:w-auto lg:flex-1 lg:border-0 ${
            nav === "navbarVersion" ? "h-10 focus:shadow-2xl" : "h-14 shadow-md"
          }`}
        >
          <input
            value={searchValue}
            onChange={(event) => dispatch(setSearchValue(event.target.value))}
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
            type="search"
            className="h-full w-full rounded-full bg-slate-900/5 pl-14 pr-20 text-base font-normal text-slate-900 transition duration-300 ease-in-out placeholder:italic focus:bg-slate-100 focus:shadow-xl focus:outline-none"
            placeholder="What Are You Searching For?"
          />
          <motion.button
            whileTap={{ scale: 0.9 }}
            type="submit"
            className="absolute left-4 mr-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className={`lucide lucide-search text-slate-400  ${
                nav === "navbarVersion" ? "h-5 w-5" : "h-6 w-6"
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
          </motion.button>
          <div className="absolute right-16 h-full w-[0.5px] bg-gray-500"></div>
          <button
            type="button"
            onClick={() => dispatch(openFilterModal())}
            className="absolute right-2 px-4 py-[10px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6b7280"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={` lucide lucide-filter text-slate-400  ${
                nav === "navbarVersion" ? "h-5 w-5" : "h-6 w-6"
              }`}
            >
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
            {getFilterChange && (
              <div className="absolute right-3 top-2">
                <div className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500"></span>
                </div>
              </div>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
