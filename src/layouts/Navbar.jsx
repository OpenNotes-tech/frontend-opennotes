import { Link, useLocation } from "react-router-dom";
import ExploreModal from "../components/modals/ExploreModal";
import { logout } from "../store/features/editProfileSlice";
import { openAuthModal, openBookmarkModal } from "../store/features/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";
import Request from "../utils/API-router";
import Loader from "../components/Loader";
import Search from "../components/Search";
import Cookies from "js-cookie";
import "../assets/css/darkmode.css";
import { motion, AnimatePresence } from "framer-motion";
import useDarkMode from "../hooks/useDarkMode";
import { createDropInVariant } from "../hooks/useAnimationVariants";
const AnimatedLink = motion(Link);

const Navbar = () => {
  const dropInSearch = createDropInVariant("-10vh");
  const dropInProfile = createDropInVariant("3vh");
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const { loading } = useSelector((state) => state.Error);
  const [mobileSearchBar, setMobileSearchBar] = useState(false);
  const [toggleExplore, setToggleExplore] = useState(false);
  const [toggleProfile, setToggleProfile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const dispatch = useDispatch();
  const refProfile = useRef();
  const modalRef = useRef();

  // ############   Click Outside Function  ###############
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
    [toggleProfile],
  );
  useEffect(
    () => handleClickOutside(toggleExplore, modalRef, setToggleExplore),
    [toggleExplore],
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
  const handleBookmarkModalToggle = () => {
    dispatch(openBookmarkModal());
  };
  // ##########  Mobile version Searchbar & Bottom Tabs   #################
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  const handleSearch = () => {
    setMobileSearchBar(!mobileSearchBar);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={` sticky top-0 z-[99] -mx-4 flex h-16  flex-row items-center justify-between px-4 md:mx-0 md:px-6 xl:px-12 ${
          scrolled
            ? "border border-white/70 bg-white text-neutral-700 shadow-md dark:border-slate-900 dark:bg-slate-800 dark:text-slate-300"
            : location.pathname === "/"
            ? "bg-transparent text-white"
            : "bg-neutral-600 dark:bg-slate-300"
        }  ${loading ? " pointer-events-none" : ""}`}
      >
        {loading && <Loader />}

        <div className="flex flex-row items-center space-x-8 md:space-x-16">
          <Link to={"/"} className="flex h-8 w-full items-center md:h-10">
            {/* <Example /> */}
            <img
              className="block h-full w-full"
              src="https://cdn-opennotes.b-cdn.net/static/media/logo.708029b797f0dc11c4bb71c64fd217c5.svg"
              alt="Main Logo"
            />
          </Link>
          {scrolled && (
            <div className="lg:hidden">
              <motion.button onClick={handleSearch} whileTap={{ scale: 0.8 }}>
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
                  class="lucide lucide-search"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </motion.button>
            </div>
          )}
        </div>
        <div className="hidden w-[600px] lg:block">
          {scrolled && (
            <Search
              scrolled={scrolled}
              nav={"navbarVersion"}
              loading={loading}
            />
          )}
        </div>

        <div className="flex flex-row items-center space-x-4 whitespace-nowrap">
          <div
            ref={modalRef}
            className="hidden flex-row items-center space-x-6 md:flex "
          >
            <motion.button
              type="button"
              whileTap={{ scale: 0.97 }}
              onClick={() => setToggleExplore((oldState) => !oldState)}
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className={`raletive flex items-center justify-center rounded-full px-4 py-[8px] text-center text-base font-semibold focus:outline-none  ${
                scrolled
                  ? "lg:hover:bg-neutral-100 dark:lg:hover:bg-slate-600 dark:lg:hover:text-white"
                  : "lg:hover:backdrop-blur-4xl lg:hover:bg-white/20 lg:hover:bg-opacity-20 lg:hover:backdrop-saturate-200"
              }`}
            >
              <p>Explore</p>
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
                className={`lucide lucide-chevron-down ml-2.5  ${
                  toggleExplore ? "rotate-180 transform" : ""
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </motion.button>
            {<ExploreModal toggleExplore={toggleExplore} />}
          </div>
          <div>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleBookmarkModalToggle}
              className={`group rounded-full px-2 py-[8px] text-center text-base font-semibold transition duration-300 ease-in-out focus:outline-none  ${
                scrolled
                  ? "lg:hover:bg-neutral-100 lg:hover:text-blue-500 dark:lg:hover:bg-slate-600"
                  : "lg:hover:backdrop-blur-4xl text-white lg:hover:bg-white/20 lg:hover:bg-opacity-20 lg:hover:backdrop-saturate-200"
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
                className="lucide lucide-bookmark group-hover:fill-blue-500 " //transition duration-300 ease-in-out
              >
                <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
              </svg>
            </motion.button>
          </div>
          <div>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleAuthModalToggle}
              className={`backdrop-blur-4xl select-none rounded-full bg-white/20 bg-opacity-20 px-4 text-center text-base font-semibold backdrop-saturate-200 focus:outline-none lg:select-text  ${
                scrolled
                  ? "py-[7px] text-neutral-600  ring-[1px] ring-neutral-300 hover:ring-[1px] hover:ring-neutral-600 dark:text-slate-300 dark:ring-slate-500 lg:hover:ring-neutral-600 dark:lg:hover:ring-slate-300"
                  : "py-[8px] text-white hover:ring-[1px] hover:ring-white"
              }`}
            >
              Join
            </motion.button>
          </div>
          <div className="relative inline-block" ref={refProfile}>
            <div className="relative inline-flex items-center space-x-10 self-center">
              <motion.button
                whileTap={{ scale: 0.9 }}
                className={`flex flex-row items-center space-x-2 rounded-full border border-neutral-300 px-2 py-1 hover:shadow-md ${
                  scrolled
                    ? "bg-white dark:bg-slate-600 dark:text-slate-300 dark:ring-slate-500 lg:hover:ring-neutral-600 dark:lg:hover:ring-slate-300"
                    : "bg-white/80 text-neutral-600 dark:text-slate-700"
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
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-menu"
                >
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
                <div className="bg-cover bg-center bg-no-repeat">
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
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </motion.button>
            </div>
            <AnimatePresence initial={false} onExitComplete={() => null}>
              {toggleProfile && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  role="menu"
                  aria-labelledby="tk-dropdown-with-header-badges"
                  className="absolute right-0 z-10 mt-1 w-64 origin-top-right rounded shadow-2xl"
                >
                  <motion.div
                    variants={dropInProfile}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ damping: 300 }}
                    className="divide-y divide-neutral-300 rounded bg-white ring-1 ring-neutral-900 ring-opacity-5 dark:divide-slate-300 dark:bg-slate-500 dark:ring-slate-300"
                  >
                    <div className="flex items-center space-x-3 p-3">
                      <div className="bg-cover bg-center bg-no-repeat">
                        <img
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                          alt="User Avatar"
                          className="block h-10 w-10 flex-none rounded-full object-cover"
                        />
                      </div>
                      <div className="grow text-sm">
                        <AnimatedLink
                          whileTap={{ scale: 0.9 }}
                          to="/"
                          className="select-none font-semibold text-neutral-700 dark:text-slate-200 lg:hover:text-neutral-500 dark:lg:hover:text-white"
                        >
                          John Doe
                        </AnimatedLink>
                        <p className="select-none font-normal text-neutral-500 dark:text-slate-300">
                          john.doe@example.com
                        </p>
                      </div>
                    </div>
                    <div className="space-y-1 p-2">
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        role="menuitem"
                        onClick={handleBookmarkModalToggle}
                        className="flex w-full items-center justify-between space-x-2 rounded px-3 py-2 text-center text-sm font-medium text-neutral-700 focus:bg-neutral-100 focus:text-neutral-700 focus:outline-none dark:text-slate-300 lg:hover:bg-neutral-100 lg:hover:text-neutral-700 dark:lg:hover:bg-slate-200 dark:lg:hover:text-slate-600"
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
                          <span className="select-none lg:select-text">
                            Bookmark
                          </span>
                        </div>
                      </motion.button>
                      <AnimatedLink
                        whileTap={{ scale: 0.9 }}
                        role="menuitem"
                        to="/"
                        className=" flex items-center justify-between space-x-2 rounded px-3 py-2 text-center text-sm font-medium text-neutral-700 focus:bg-neutral-100 focus:text-neutral-700 focus:outline-none dark:text-slate-300 lg:hover:bg-neutral-100 lg:hover:text-neutral-700 dark:lg:hover:bg-slate-200 dark:lg:hover:text-slate-600"
                      >
                        <div className="flex flex-none items-center space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-user"
                          >
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                          <span className="select-none lg:select-text">
                            Profile
                          </span>
                        </div>
                      </AnimatedLink>

                      <Link
                        role="menuitem"
                        to="/contacts"
                        className="flex items-center justify-between space-x-2 rounded px-3 py-2 text-center text-sm font-medium text-neutral-700 focus:bg-neutral-100 focus:text-neutral-700 focus:outline-none dark:text-slate-300 lg:hover:bg-neutral-100 lg:hover:text-neutral-700 dark:lg:hover:bg-slate-200 dark:lg:hover:text-slate-600"
                      >
                        <div className="flex flex-none select-none items-center space-x-2 lg:select-text">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
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

                      <div>
                        {Cookies.get("logged_in_candidate") === "yes" ? (
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={Logout}
                            type="submit"
                            role="menuitem"
                            className="flex w-full items-center space-x-2 rounded px-3 py-2 text-left text-sm font-medium text-neutral-700 focus:bg-neutral-100 focus:text-neutral-700 focus:outline-none dark:text-slate-300 lg:hover:bg-neutral-100 lg:hover:text-neutral-700 dark:lg:hover:bg-slate-200 dark:lg:hover:text-slate-600"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
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
                          </motion.button>
                        ) : (
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={handleAuthModalToggle}
                            role="menuitem"
                            className="flex w-full items-center space-x-2 rounded px-3 py-2 text-left text-sm font-medium text-neutral-700 focus:bg-neutral-100 focus:text-neutral-700 focus:outline-none dark:text-slate-300 lg:hover:bg-neutral-100 lg:hover:text-neutral-700 dark:lg:hover:bg-slate-200 dark:lg:hover:text-slate-600"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
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
                          </motion.button>
                        )}
                      </div>
                    </div>
                    <div className="space-y-1 p-2">
                      <div className="rounded px-3 py-5 text-sm font-medium ">
                        <div class="toggleWrapper mt-[120px]">
                          <input
                            type="checkbox"
                            class="dn"
                            id="dn"
                            checked={isDarkMode}
                            onChange={toggleDarkMode}
                          />
                          <label for="dn" class="toggle">
                            <span class="toggle__handler">
                              <span class="crater crater--1"></span>
                              <span class="crater crater--2"></span>
                              <span class="crater crater--3"></span>
                            </span>
                            <span class="star star--1"></span>
                            <span class="star star--2"></span>
                            <span class="star star--3"></span>
                            <span class="star star--4"></span>
                            <span class="star star--5"></span>
                            <span class="star star--6"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>
      <AnimatePresence initial={false} onExitComplete={() => null}>
        {mobileSearchBar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="sticky top-0 z-[999] -mx-4 flex h-16  flex-row items-center justify-between space-x-3 border border-white/80 bg-white px-3 text-neutral-700 shadow-md"
          >
            <motion.div
              variants={dropInSearch}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ damping: 300 }}
              className="flex flex-row items-center justify-between space-x-3"
            >
              {loading && <Loader />}
              <Search
                scrolled={scrolled}
                nav={"navbarVersion"}
                loading={loading}
              />
              <motion.button whileTap={{ scale: 0.8 }} onClick={handleSearch}>
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
                  class="lucide lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
