import { useState } from "react";
import { Link } from "react-router-dom";
import FilterAPI from "../utils/Filter";

const Searchbar = ({
  filter,
  setIsSidebarOpen,
  isSidebarOpen,
  setTitleSearch,
  setJobResults,
  setError,
  setLoad,
  setToggleFilter,
  getToggleFilter,
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
      <div className="lg:px-20 xl:px-40 pb-20 pt-28 w-full items-center">
        <form
          onSubmit={handleSubmit}
          className="border-[0.6px] backdrop-blur-lg backdrop-saturate-900 bg-opacity-90 border-gray-200 shadow-md flex h-auto max-w-lg -translate-y-12 transform flex-col items-center space-y-3 overflow-hidden rounded-lg bg-white p-6 lg:h-24 w-full lg:max-w-6xl lg:flex-row  lg:space-y-0"
        >
          <div className="relative flex h-11 w-full items-center rounded-lg border-2 border-gray-200 lg:w-auto lg:flex-1 lg:border-0 mr-4">
            <input
              value={Search}
              onChange={(e) => setSearch(e.target.value)}
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
              type="search"
              className="transition duration-300 ease-in-out h-full w-full rounded-md  px-4 pl-12 font-normal text-gray-900 bg-gray-900/5 focus:bg-gray-50 focus:outline-none focus:ring-[1.1px] focus:ring-blue-500 focus:outline-[1px] sm:text-lg"
              placeholder="What Are You Searching For?"
            />

            <button type="submit" className="absolute left-2 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="h-6 w-6 text-gray-400 lucide lucide-search"
                viewBox="0 0 24 24"
                fill="none"
                stroke={isInputFocused ? "#3b82f6" : "#9ca3af"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
              </svg>
            </button>
          </div>
          <div className="hidden h-8 w-[1.4px] bg-gray-300 lg:block"></div>
          <div className="px-6 rounded-lg  lg:border-0">
            <button onClick={handleFilterToggle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6b7280"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sliders-horizontal"
              >
                <line x1="21" x2="14" y1="4" y2="4"></line>
                <line x1="10" x2="3" y1="4" y2="4"></line>
                <line x1="21" x2="12" y1="12" y2="12"></line>
                <line x1="8" x2="3" y1="12" y2="12"></line>
                <line x1="21" x2="16" y1="20" y2="20"></line>
                <line x1="12" x2="3" y1="20" y2="20"></line>
                <line x1="14" x2="14" y1="2" y2="6"></line>
                <line x1="8" x2="8" y1="10" y2="14"></line>
                <line x1="16" x2="16" y1="18" y2="22"></line>
              </svg>
            </button>
          </div>
          <div className="h-full w-full lg:w-auto">
            <button
              type="submit"
              className="transition duration-300 ease-in-out whitespace-no-wrap inline-flex h-full w-full items-center justify-center rounded-md  border border-transparent bg-black px-4 py-2 text-base font-normal leading-6 text-white shadow-sm hover:bg-blue-600 focus:outline-none lg:w-64"
            >
              SEARCH
            </button>
          </div>
          {filter && (
            <Link
              className="hover:bg-gray-100 p-2 rounded-md border-[0.6px] border-black  md:hidden block"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-settings-2"
              >
                <path d="M20 7h-9"></path>
                <path d="M14 17H5"></path>
                <circle cx="17" cy="17" r="3"></circle>
                <circle cx="7" cy="7" r="3"></circle>
              </svg>
            </Link>
          )}
        </form>
      </div>
    </>
  );
};

export default Searchbar;
