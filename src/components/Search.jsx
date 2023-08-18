import {
  setSearchQuery,
  setSearchResult,
  setPagination,
} from "../store/features/searchSlice";
import { setLoading, setError } from "../store/features/errorSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SearchAPI from "../utils/SearchAPI";
import { FilterModal } from "./FilterModal";

const Search = ({ nav }) => {
  const { query, sort, category, tags, pricing, pageNumber } = useSelector(
    (state) => state.Search
  );
  const dispatch = useDispatch();

  const [isInputFocused, setInputFocused] = useState(false);
  const [getToggleFilter, setToggleFilter] = useState(false);
  const [getFilterChange, setFilterChange] = useState(false);

  const handleInputSubmit = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setLoading(true));
    SearchAPI.linkSearch(query, sort, category, tags, pricing, pageNumber, 12)
      .then((res) => {
        dispatch(setSearchResult(res.data.data.body));
        dispatch(setPagination({ totalPages: res.data.data.totalPages }));
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

  const handleFilterToggle = () => {
    setToggleFilter(true);
  };

  useEffect(() => {
    if ((category.length > 0 || pricing.length > 0 || tags.length > 0) && category?.split(",")[0] !== "Home") {
      setFilterChange(true);
    } else {
      setFilterChange(false);
    }
  }, [category, tags, pricing]);

  return (
    <>
      <div
        className={`w-full items-center    ${
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
              value={query}
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
            <div
              className={`absolute right-16 w-[0.5px] bg-gray-500  ${
                nav === "dfdf" ? "h-[40px]" : "h-[56px]"
              }`}
            ></div>
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
      {getToggleFilter ? (
        <>
          <FilterModal
            setToggleFilter={setToggleFilter}
            getToggleFilter={getToggleFilter}
          />
        </>
      ) : null}
    </>
  );
};

export default Search;
