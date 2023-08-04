import { useState } from "react";
import { Link } from "react-router-dom";

const SearchHero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <div class="xl:px-16 -mx-4 xl:-mx-0 px-4 md:px-10 items-center py-16 text-center h-[450px]">
        <div className="flex flex-row items-center space-x-6 border-b">
          <div>
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="raletive inline-flex items-center  font-semibold text-base transition duration-300 ease-in-out  px-4 py-[8px] text-center rounded-full focus:outline-none text-slate-600 hover:bg-slate-200"
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
                        <span>Newest</span>
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
          <div>
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="raletive inline-flex items-center  font-semibold text-base transition duration-300 ease-in-out  px-4 py-[8px] text-center rounded-full focus:outline-none text-slate-600 hover:bg-slate-200"
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
                        <span>Newest</span>
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
      </div>
    </>
  );
};

export default SearchHero;
