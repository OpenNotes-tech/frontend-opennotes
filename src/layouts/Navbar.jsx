import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { logout } from "../store/features/editProfileSlice";
import Request from "../utils/API-router";
import Loader from "../components/Loader";
import Sign from "../pages/Authentication/Sign";
import Search from "../components/Search";

const Navbar = ({ setIsSidebarOpen, isSidebarOpen, loading, getError }) => {
  const [toggleProfile, setToggleProfile] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = location.pathname.split("/")[1].toLowerCase();
  const path = "candidates"; // User part only has candidates,
  const route = "/signin"; // User part only has candidates,
  const cook = "logged_in_candidate"; // User part only has candidates,
  const reduxData = logout(); // User part only has candidates,

  const refProfile = useRef();
  const refMenu = useRef();

  const handleClickOutside = (toggleState, ref, setToggleState) => {
    const handleClick = (e) => {
      if (toggleState && ref.current && !ref.current.contains(e.target)) {
        setToggleState(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  };

  useEffect(
    () => handleClickOutside(toggleProfile, refProfile, setToggleProfile),
    [toggleProfile]
  );
  useEffect(
    () => handleClickOutside(toggleMenu, refMenu, setToggleMenu),
    [toggleMenu]
  );

  const Logout = () => {
    dispatch(reduxData);
    Request.logout(path);
    Cookies.remove(cook);
    navigate(route, { replace: true });
  };

  const handleAuthModalToggle = () => {
    Sign.setIsAuthModalOpen(!Sign.isAuthModalOpen);
    console.log(Sign.isAuthModalOpen);
  };

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-[999] flex flex-row h-16  items-center justify-between -mx-4 xl:-mx-0 px-4 md:px-10 xl:px-12 ${
          scrolled
            ? "border border-white/80 bg-white text-slate-700 shadow-md"
            : "bg-transparent text-white"
        }`}
      >
        {loading && <Loader />}

        <div className="items-center flex flex-row space-x-2 md:space-x-0 flex-nowrap">
          {name === "profile" && (
            <Link
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="block md:hidden"
              type="button"
              data-drawer-target="drawer-navigation"
              data-drawer-show="drawer-navigation"
              aria-controls="drawer-navigation"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#18181b"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </Link>
          )}
          <Link to="/" className="flex h-8 items-center md:h-10">
            <img
              className="h-full block"
              src={require("../assets/images/logo.svg").default}
              alt="Main Logo"
            />
          </Link>
        </div>
        {scrolled && (
          <div className="w-full">
            <Search scrolled={scrolled} nav={"dfdf"} />
          </div>
        )}

        <div className="flex flex-row space-x-4 items-center whitespace-nowrap">
          
          <div className="flex flex-row items-center space-x-6">
            <button
              type="button"
              onClick={toggleDropdown}
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className={`raletive inline-flex items-center  font-semibold text-base transition duration-300 ease-in-out  px-4 py-[8px] text-center rounded-full focus:outline-none  ${
                scrolled ? "text-slate-600 hover:bg-slate-100" : "text-white hover:backdrop-blur-4xl hover:backdrop-saturate-200 hover:bg-opacity-20 hover:bg-white/20"
              }`}
            >
              Explore{" "}
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
                className="mt-[260px] absolute right-[300px] z-10 bg-white divide-y divide-gray-100 rounded-lg w-44 shadow-2xl"
              >
                <div className="divide-y divide-gray-300 rounded bg-white ring-1 ring-black ring-opacity-5">
                  <div className="space-y-1 p-2">
                    <Link
                      role="menuitem"
                      to="/profile"
                      className=" flex items-center text-center justify-between space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                    >
                      <div className="flex flex-none items-center space-x-2">
                        <span>Profile</span>
                      </div>
                    </Link>
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
              className={`font-semibold text-base transition duration-300 ease-in-out px-4 py-[8px] text-center rounded-full focus:outline-none  ${
                scrolled ? "text-slate-600 hover:bg-slate-100" : "text-white hover:backdrop-blur-4xl hover:backdrop-saturate-200 hover:bg-opacity-20 hover:bg-white/20"
              }`}
            >
              Log in
            </button>
          </div>
          <div>
            <button
              className={`font-semibold text-base transition duration-300 ease-in-out backdrop-blur-4xl backdrop-saturate-200 bg-opacity-20 bg-white/20 px-4 py-[8px] text-center rounded-full focus:outline-none  ${
                scrolled
                  ? "text-slate-600 ring-[1.1px] ring-slate-300 hover:ring-[1.1px] hover:ring-black"
                  : "text-white hover:ring-[1.1px] hover:ring-white"
              }`}
            >
              Join
            </button>
          </div>
          <div className="relative inline-block" ref={refProfile}>
            <div className="relative inline-flex self-center items-center space-x-10">
              <Link
                className={`flex flex-row items-center space-x-2 border border-gray-300 rounded-full py-1 px-2 hover:shadow-md transition duration-300 ease-in-out ${
                  scrolled ? "bg-white" : "bg-white/80"
                }`}
                type="button"
                onClick={() => setToggleProfile((oldState) => !oldState)}
                id="tk-dropdown-layouts-user"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1f2937"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-menu"
                >
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
                <div className="bg-center bg-cover bg-no-repeat">
                  <svg
                    width="32"
                    height="32"
                    className="-mr-1"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.08 24.2176C10.56 24.2176 7.44832 22.4154 5.632 19.712C5.67424 16.896 11.264 15.3472 14.08 15.3472C16.896 15.3472 22.4858 16.896 22.528 19.712C21.5972 21.098 20.3398 22.2339 18.8666 23.0196C17.3934 23.8053 15.7496 24.2167 14.08 24.2176ZM14.08 4.224C15.2003 4.224 16.2747 4.66903 17.0668 5.46118C17.859 6.25333 18.304 7.32773 18.304 8.448C18.304 9.56827 17.859 10.6427 17.0668 11.4348C16.2747 12.227 15.2003 12.672 14.08 12.672C12.9597 12.672 11.8853 12.227 11.0932 11.4348C10.301 10.6427 9.856 9.56827 9.856 8.448C9.856 7.32773 10.301 6.25333 11.0932 5.46118C11.8853 4.66903 12.9597 4.224 14.08 4.224ZM14.08 0C12.231 0 10.4001 0.36419 8.69182 1.07178C6.98355 1.77936 5.43139 2.81649 4.12394 4.12394C1.48342 6.76445 0 10.3458 0 14.08C0 17.8142 1.48342 21.3956 4.12394 24.0361C5.43139 25.3435 6.98355 26.3806 8.69182 27.0882C10.4001 27.7958 12.231 28.16 14.08 28.16C17.8142 28.16 21.3956 26.6766 24.0361 24.0361C26.6766 21.3956 28.16 17.8142 28.16 14.08C28.16 6.29376 21.824 0 14.08 0Z"
                      fill="#5F5F5F"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            {toggleProfile && (
              <div
                role="menu"
                aria-labelledby="tk-dropdown-with-header-badges"
                className="absolute right-0 z-10 mt-1 w-64 origin-top-right rounded shadow-2xl"
              >
                <div className="divide-y divide-gray-300 rounded bg-white ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center space-x-3 p-3">
                    <div className="bg-center bg-cover bg-no-repeat">
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                        alt="User Avatar"
                        className="block h-10 w-10 flex-none rounded-full object-cover"
                      />
                    </div>
                    <div className="grow text-sm">
                      <Link
                        to="/profile"
                        className="font-semibold text-gray-800 hover:text-gray-500"
                      >
                        John Doe
                      </Link>
                      <p className="text-gray-700 font-normal">
                        john.doe@example.com
                      </p>
                    </div>
                  </div>
                  <div className="space-y-1 p-2">
                    <Link
                      role="menuitem"
                      to="/profile"
                      className=" flex items-center text-center justify-between space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                    >
                      <div className="flex flex-none items-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#1f2937"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-user"
                        >
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <span>Profile</span>
                      </div>
                    </Link>
                    <Link
                      role="menuitem"
                      to="/interview"
                      className="group flex items-center text-center justify-between space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                    >
                      <div className="flex flex-none items-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#1f2937"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-calendar-clock"
                        >
                          <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                          <path d="M16 2v4"></path>
                          <path d="M8 2v4"></path>
                          <path d="M3 10h5"></path>
                          <path d="M17.5 17.5 16 16.25V14"></path>
                          <path d="M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"></path>
                        </svg>
                        <span>Interview</span>
                      </div>
                      <div className="ml-2 inline-flex rounded-full group-hover:bg-blue-200 bg-gray-200 px-2 py-1 text-sm font-semibold leading-4 group-hover:text-blue-700 text-gray-700">
                        5
                      </div>
                    </Link>

                    <Link
                      role="menuitem"
                      to="/contacts"
                      className="flex items-center text-center justify-between space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                    >
                      <div className="flex flex-none items-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#1f2937"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-help-circle"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                          <path d="M12 17h.01"></path>
                        </svg>
                        <span>Help</span>
                      </div>
                    </Link>
                    <div className="flex items-center text-center justify-between space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none">
                      <label className="relative inline-flex cursor-pointer items-center">
                        <input
                          type="checkbox"
                          // checked={value}
                          // onChange={onChange}
                          className="peer sr-only"
                        />
                        <div className="peer h-6 w-11 rounded-full bg-gray-300 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-500 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none"></div>
                        {/* dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800 */}
                        <span className="ml-3 ">Dark Mode</span>
                      </label>
                    </div>
                  </div>
                  <div className="space-y-1 p-2">
                    <div>
                      {Cookies.get(cook) === "yes" ? (
                        <button
                          onClick={Logout}
                          type="submit"
                          role="menuitem"
                          className="flex w-full items-center space-x-2 rounded py-2 px-3 text-left text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#1f2937"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-log-out"
                          >
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                            <polyline points="16 17 21 12 16 7"></polyline>
                            <line x1="21" x2="9" y1="12" y2="12"></line>
                          </svg>

                          <span>Logout</span>
                        </button>
                      ) : (
                        <button
                          onClick={handleAuthModalToggle}
                          role="menuitem"
                          className="flex w-full items-center space-x-2 rounded py-2 px-3 text-left text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#1f2937"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-log-in"
                          >
                            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                            <polyline points="10 17 15 12 10 7"></polyline>
                            <line x1="15" x2="3" y1="12" y2="12"></line>
                          </svg>

                          <span>Login</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {getError && (
        <div
          id="alert-border-2"
          className="sticky  top-14 flex p-4 mb-4 z-90 text-red-900 border-t-4  border-red-300 bg-red-50 "
          role="alert"
        >
          <svg
            className="flex-shrink-0 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            ></path>
          </svg>
          <div className="ml-3 text-sm font-medium">{getError}</div>
          <button
            type="button"
            className="ml-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 "
            data-dismiss-target="#alert-border-2"
            aria-label="Close"
          >
            <span className="sr-only">Dismiss</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
