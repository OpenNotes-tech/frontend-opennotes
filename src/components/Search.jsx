import { useState } from "react";
// import { Link } from "react-router-dom";
import FilterAPI from "../utils/Filter";

const Search = ({
  filter,
  setIsSidebarOpen,
  isSidebarOpen,
  setTitleSearch,
  setJobResults,
  setError,
  setLoad,
  setToggleFilter,
  getToggleFilter,
  scrolled,
  nav,
}) => {
  const [Search, setSearch] = useState(
    "" || localStorage.getItem("titleSearch")
  );
  const [isInputFocused, setInputFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleSearch(Search);
    if (Search.trim() === "") {
      localStorage.removeItem("titleSearch");
    } else {
      localStorage.setItem("titleSearch", Search);
    }

    FilterAPI.filterJobCompanyCandidate()
      .then((res) => {
        console.log(res.data);
        setJobResults(res.data.data.body);
        setLoad(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error?.response?.data?.message);
        setLoad(false);
      })
      .finally((e) => {
        setLoad(false);
      });
  };
  const handleFilterToggle = () => {
    setToggleFilter(true);
  };

  return (
    <>
      <div
        className={`w-full items-center lg:px-20 xl:px-40   ${
          nav === "dfdf" ? "" : "pt-24"
        }`}
      >
        <form onSubmit={handleSubmit} className="">
          <div
            className={`backdrop-blur-lg backdrop-saturate-900  bg-opacity-90   bg-white relative flex w-full items-center rounded-full border-2 border-gray-200 lg:w-auto lg:flex-1 lg:border-0 mr-8 ${
              nav === "dfdf" ? "h-10 focus:shadow-2xl" : "h-14 shadow-md"
            }`}
          >
            <input
              value={Search}
              onChange={(e) => setSearch(e.target.value)}
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
              type="submit"
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
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Search;
