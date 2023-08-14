import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { logout } from "../store/features/editProfileSlice";
import {
  openAuthModal,
  openReportModal,
  openLangModal,
} from "../store/features/modalSlice";
import Request from "../utils/API-router";
import Loader from "../components/Loader";
import Sign from "../pages/Authentication/Sign";
import Search from "../components/Search";
import UserReport from "../components/UserReport";
import LangModal from "../components/LangModal";

const Navbar = ({ setIsSidebarOpen, isSidebarOpen }) => {
  const { errorMessage, loading } = useSelector((state) => state.Error);
  const { isReportModalOpen, isLangModalOpen } = useSelector(
    (state) => state.Modal
  );

  const [toggleExplore, setToggleExplore] = useState(false);
  const [toggleProfile, setToggleProfile] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const dispatch = useDispatch();
  const name = location.pathname.split("/")[1].toLowerCase();

  const refProfile = useRef();
  const refMenu = useRef();
  const modalRef = useRef();

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

  useEffect(
    () => handleClickOutside(toggleExplore, modalRef, setToggleExplore),
    [toggleExplore]
  );

  const Logout = () => {
    dispatch(logout());
    Request.logout();
    Cookies.remove("logged_in_candidate");
    dispatch(openAuthModal());
  };

  const handleAuthModalToggle = () => {
    dispatch(openAuthModal());
  };

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
  useEffect(() => {}, [loading]);
  const toggleReport = () => {
    dispatch(openReportModal());
  };

  const toggleLanguage = () => {
    dispatch(openLangModal());
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-[999] flex flex-row h-16  items-center justify-between -mx-4 xl:-mx-0 px-4 md:px-10 xl:px-12 ${
          scrolled || name === "search"
            ? "border border-white/80 bg-white text-slate-700 shadow-md"
            : "bg-transparent text-white"
        }  ${loading ? "opacity-50 pointer-events-none" : ""}`}
      >
        {loading && <Loader />}
        <Sign />

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
        {(scrolled || name === "search") && (
          <div className="w-full">
            <Search scrolled={scrolled} nav={"dfdf"} loading={loading} />
          </div>
        )}

        <div className="flex flex-row space-x-4 items-center whitespace-nowrap">
          <div ref={modalRef} className="flex flex-row items-center space-x-6">
            <button
              type="button"
              onClick={() => setToggleExplore((oldState) => !oldState)}
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className={`raletive inline-flex items-center  font-semibold text-base transition duration-300 ease-in-out  px-4 py-[8px] text-center rounded-full focus:outline-none  ${
                scrolled || name === "search"
                  ? "text-slate-600 hover:bg-slate-100"
                  : "text-white hover:backdrop-blur-4xl hover:backdrop-saturate-200 hover:bg-opacity-20 hover:bg-white/20"
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
                  toggleExplore ? "transform rotate-180" : ""
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {toggleExplore && (
              <div
                id="dropdown"
                className="mt-[520px] absolute right-[300px] z-10 bg-white divide-y divide-gray-100 rounded-lg w-[840px] shadow-2xl"
              >
                <div className="flex flex-col divide-y divide-gray-300 rounded bg-white ring-1 ring-black ring-opacity-5">
                  <div className="flex flex-row justify-evenly">
                    <div className="space-y-1 p-2 items-center">
                      <p className="px-10 py-3 font-bold text-md text-gray-800">
                        Collections
                      </p>
                      <Link
                        role="menuitem"
                        to="/profile"
                        className=" flex items-center text-center justify-between space-x-2 rounded py-3 px-10 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                      >
                        <div className="flex flex-none items-center space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="19"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-server"
                          >
                            <rect
                              width="20"
                              height="8"
                              x="2"
                              y="2"
                              rx="2"
                              ry="2"
                            />
                            <rect
                              width="20"
                              height="8"
                              x="2"
                              y="14"
                              rx="2"
                              ry="2"
                            />
                            <line x1="6" x2="6.01" y1="6" y2="6" />
                            <line x1="6" x2="6.01" y1="18" y2="18" />
                          </svg>
                          <span>Backend</span>
                        </div>
                      </Link>
                      <Link
                        role="menuitem"
                        to="/profile"
                        className="flex items-center text-center justify-between space-x-2 rounded py-3 px-10 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                      >
                        <div className="flex flex-none items-center space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="19"
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
                          <span>Frontend</span>
                        </div>
                      </Link>
                      <Link
                        role="menuitem"
                        to="/profile"
                        className=" flex items-center text-center justify-between space-x-2 rounded py-3 px-10 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                      >
                        <div className="flex flex-none items-center space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="19"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-smartphone"
                          >
                            <rect
                              width="14"
                              height="20"
                              x="5"
                              y="2"
                              rx="2"
                              ry="2"
                            />
                            <path d="M12 18h.01" />
                          </svg>
                          <span>Mobile</span>
                        </div>
                      </Link>
                      <Link
                        role="menuitem"
                        to="/profile"
                        className=" flex items-center text-center justify-between space-x-2 rounded py-3 px-10 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                      >
                        <div className="flex flex-none items-center space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="19"
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
                          </svg>
                          <span>AI / ML / DS</span>
                        </div>
                      </Link>
                      <Link
                        role="menuitem"
                        to="/profile"
                        className=" flex items-center text-center justify-between space-x-2 rounded py-3 px-10 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                      >
                        <div className="flex flex-none items-center space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="19"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-braces"
                          >
                            <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" />
                            <path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" />
                          </svg>
                          <span>Algorithms</span>
                        </div>
                      </Link>
                      <Link
                        role="menuitem"
                        to="/profile"
                        className=" flex items-center text-center justify-between space-x-2 rounded py-3 px-10 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                      >
                        <div className="flex flex-none items-center space-x-2">
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
                            class="lucide lucide-graduation-cap"
                          >
                            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                            <path d="M6 12v5c3 3 9 3 12 0v-5" />
                          </svg>
                          <span>IT Courses</span>
                        </div>
                      </Link>
                      <Link
                        role="menuitem"
                        to="/profile"
                        className=" flex items-center text-center justify-between space-x-2 rounded py-3 px-10 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                      >
                        <div className="flex flex-none items-center space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="19"
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
                          </svg>
                          <span>Cyber Security</span>
                        </div>
                      </Link>
                    </div>
                    <div className="hidden w-[0.5px] bg-gray-500 lg:block"></div>
                    <div className="space-y-1 p-2">
                      <p className="px-10 py-3 font-bold text-md text-gray-800">
                        Discover
                      </p>
                      <Link
                        role="menuitem"
                        to="/profile"
                        className=" flex items-center text-center justify-between space-x-2 rounded py-3 px-10 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                      >
                        <div className="flex flex-none items-center space-x-2">
                          <span>Popular Searches</span>
                        </div>
                      </Link>
                      <Link
                        role="menuitem"
                        to="/profile"
                        className=" flex items-center text-center justify-between space-x-2 rounded py-3 px-10 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                      >
                        <div className="flex flex-none items-center space-x-2">
                          <span>Curated Collections</span>
                        </div>
                      </Link>
                      <Link
                        role="menuitem"
                        to="/profile"
                        className=" flex items-center text-center justify-between space-x-2 rounded py-3 px-10 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                      >
                        <div className="flex flex-none items-center space-x-2">
                          <span>Popular IT Courses</span>
                        </div>
                      </Link>
                      <Link
                        role="menuitem"
                        to="/profile"
                        className=" flex items-center text-center justify-between space-x-2 rounded py-3 px-10 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                      >
                        <div className="flex flex-none items-center space-x-2">
                          <span>Newest</span>
                        </div>
                      </Link>
                      <Link
                        role="menuitem"
                        to="/profile"
                        className=" flex items-center text-center justify-between space-x-2 rounded py-3 px-10 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                      >
                        <div className="flex flex-none items-center space-x-2">
                          <span>Oldest</span>
                        </div>
                      </Link>
                    </div>
                    <div className="hidden w-[0.5px] bg-gray-500 lg:block"></div>
                    <div className="space-y-1 p-2">
                      <p className="px-10 py-3 font-bold text-md text-gray-800">
                        Community
                      </p>
                      <Link
                        role="menuitem"
                        to="/profile"
                        className=" flex items-center text-center justify-between space-x-2 rounded py-3 px-10 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                      >
                        <div className="flex flex-none items-center space-x-2">
                          <span>Blog</span>
                        </div>
                      </Link>
                    </div>
                    <div className="hidden w-[0.5px] bg-gray-500 lg:block"></div>
                    <div className="space-y-1 p-2">
                      <p className="px-10 py-3 font-bold text-md text-gray-800">
                        About
                      </p>
                      <Link
                        role="menuitem"
                        to="/profile"
                        className=" flex items-center text-center justify-between space-x-2 rounded py-3 px-10 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                      >
                        <div className="flex flex-none items-center space-x-2">
                          <span>About Us</span>
                        </div>
                      </Link>
                      <Link
                        role="menuitem"
                        to="/profile"
                        className=" flex items-center text-center justify-between space-x-2 rounded py-3 px-10 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                      >
                        <div className="flex flex-none items-center space-x-2">
                          <span>FAQ</span>
                        </div>
                      </Link>
                      <Link
                        role="menuitem"
                        to="/profile"
                        className=" flex items-center text-center justify-between space-x-2 rounded py-3 px-10 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                      >
                        <div className="flex flex-none items-center space-x-2">
                          <span>Privacy Policy</span>
                        </div>
                      </Link>
                      <button
                        type="button"
                        data-ripple-light="true"
                        data-dialog-target="report-dialog"
                        onClick={toggleReport}
                        className=" flex items-center text-center justify-between space-x-2 rounded py-3 px-10 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                      >
                        <div className="flex flex-none items-center space-x-2">
                          <span>Report</span>
                        </div>
                      </button>
                      {isReportModalOpen && <UserReport />}
                      <Link
                        role="menuitem"
                        to="/profile"
                        className=" flex items-center text-center justify-between space-x-2 rounded py-3 px-10 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                      >
                        <div className="flex flex-none items-center space-x-2">
                          <span>Suggest a Link</span>
                        </div>
                      </Link>
                      <button
                        // role="menuitem"
                        type="button"
                        data-ripple-light="true"
                        data-dialog-target="sign-in-dialog"
                        onClick={toggleLanguage}
                        className=" flex items-center text-center justify-between space-x-2 rounded py-3 px-10 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                      >
                        <div className="flex flex-none items-center space-x-2">
                          <img
                            className="h-5 w-5"
                            src={require("../assets/images/us.svg").default}
                            alt=""
                          />
                          <span>English - EN</span>
                        </div>
                      </button>
                      {isLangModalOpen && <LangModal />}
                    </div>
                  </div>
                  <div className="py-5 px-10 text-slate-700">
                    <li className="flex flex-row justify-end space-x-6">
                      <Link
                        to={"https://instagram.com"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="group">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-instagram group-hover:text-red-500 transition ease-in-out duration-300"
                          >
                            <rect
                              width="20"
                              height="20"
                              x="2"
                              y="2"
                              rx="5"
                              ry="5"
                            />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                          </svg>
                        </span>
                      </Link>
                      <Link
                        to={"https://twitter.com"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="group">
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
                            class="lucide lucide-twitter group-hover:text-blue-500 transition ease-in-out duration-300"
                          >
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                          </svg>
                        </span>
                      </Link>
                      <Link
                        to={"https://www.linkedin.com"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="group">
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
                            class="lucide lucide-linkedin group-hover:text-blue-400 transition ease-in-out duration-300"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect width="4" height="12" x="2" y="9" />
                            <circle cx="4" cy="4" r="2" />
                          </svg>
                        </span>
                      </Link>
                      <Link
                        to={"https://www.buymeacoffee.com"}
                        target="_blank"
                        rel="noopener noreferrer"
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
                          class="lucide lucide-coffee transition ease-in-out duration-300"
                        >
                          <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                          <line x1="6" x2="6" y1="2" y2="4" />
                          <line x1="10" x2="10" y1="2" y2="4" />
                          <line x1="14" x2="14" y1="2" y2="4" />
                        </svg>
                      </Link>
                    </li>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div>
            <button
              onClick={handleAuthModalToggle}
              className={`group font-semibold text-base transition duration-300 ease-in-out px-2 py-[8px] text-center rounded-full focus:outline-none  ${
                scrolled || name === "search"
                  ? "text-slate-600 hover:bg-slate-100"
                  : "text-white hover:backdrop-blur-4xl hover:backdrop-saturate-200 hover:bg-opacity-20 hover:bg-white/20"
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
                className="lucide lucide-bookmark group-hover:fill-blue-500 transition duration-300 ease-in-out"
              >
                <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
              </svg>
            </button>
          </div>
          <div>
            <button
              onClick={handleAuthModalToggle}
              className={`font-semibold text-base transition duration-300 ease-in-out backdrop-blur-4xl backdrop-saturate-200 bg-opacity-20 bg-white/20 px-4 py-[8px] text-center rounded-full focus:outline-none  ${
                scrolled || name === "search"
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
                  scrolled || name === "search" ? "bg-white" : "bg-white/80"
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
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-bookmark"
                        >
                          <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                        </svg>
                        <span>Bookmark</span>
                      </div>
                    </Link>
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
                      {Cookies.get("logged_in_candidate") === "yes" ? (
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

      {errorMessage && (
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
          <div className="ml-3 text-sm font-medium">{errorMessage}</div>
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
