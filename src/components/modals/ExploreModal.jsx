import { Link, useLocation, useNavigate } from "react-router-dom";
import { generateLinkWithQuery } from "../../hooks/useGenerateQueryLink";
import { useDispatch } from "react-redux";
import {
  openReportModal,
  openLangModal,
} from "../../store/features/modalSlice";
import { motion, AnimatePresence } from "framer-motion";
import { createDropInVariant } from "../../hooks/useAnimationVariants";
const AnimatedLink = motion(Link);

const ExploreModal = ({ toggleExplore }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  const toggleReport = (data) => {
    dispatch(openReportModal(data));
  };

  const toggleLanguage = () => {
    dispatch(openLangModal());
  };

  const handleCategorySubmit = (e, navLink) => {
    const linkToPage = generateLinkWithQuery(location, { category: navLink });
    navigate(linkToPage);
  };
  const dropInVariant = createDropInVariant("3vh");

  return (
    <AnimatePresence initial={false} onExitComplete={() => null}>
      {toggleExplore && (
        <motion.div
          id="dropdown"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 right-[10px] z-[999] w-full place-items-center divide-y divide-slate-300 rounded-lg  shadow-2xl   md:absolute  md:inset-auto md:right-6 md:mt-[540px] md:w-[720px] lg:right-[270px] lg:w-[840px]"
        >
          <motion.div
            variants={dropInVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ damping: 300 }}
            className="flex w-full flex-col divide-y divide-slate-300 rounded bg-white ring-1 ring-slate-900 ring-opacity-5"
          >
            <div className="grid-col grid justify-center space-y-7 md:flex md:flex-row md:justify-evenly">
              <div className="hidden w-[0.5px] bg-transparent lg:block"></div>
              <div className="items-center space-y-1 p-2">
                <p className="text-md px-5 py-3 font-bold text-slate-600 md:px-5 lg:px-10">
                  Collections
                </p>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => handleCategorySubmit(e, "backend")}
                  className={`flex w-full items-center justify-between space-x-2 rounded px-5 py-3 text-center text-sm font-medium focus:outline-none md:px-5 lg:px-10  lg:hover:bg-slate-200 ${
                    category?.split(",")[0] === "backend"
                      ? "bg-blue-100 text-blue-500"
                      : "text-slate-600  lg:hover:text-slate-700"
                  }`}
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
                      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
                      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
                      <line x1="6" x2="6.01" y1="6" y2="6" />
                      <line x1="6" x2="6.01" y1="18" y2="18" />
                    </svg>
                    <span>Backend</span>
                  </div>
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => handleCategorySubmit(e, "frontend")}
                  className={`flex w-full items-center justify-between space-x-2 rounded px-5 py-3 text-center text-sm font-medium focus:outline-none md:px-5 lg:px-10 lg:hover:bg-slate-200 ${
                    category?.split(",")[0] === "frontend"
                      ? "bg-blue-100 text-blue-500"
                      : "text-slate-600  lg:hover:text-slate-700"
                  }`}
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
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => handleCategorySubmit(e, "mobile")}
                  className={`flex  w-full items-center justify-between space-x-2 rounded px-5 py-3 text-center text-sm font-medium focus:outline-none md:px-5 lg:px-10 lg:hover:bg-slate-200 ${
                    category?.split(",")[0] === "mobile"
                      ? "bg-blue-100 text-blue-500"
                      : "text-slate-600  lg:hover:text-slate-700"
                  }`}
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
                      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                      <path d="M12 18h.01" />
                    </svg>
                    <span>Mobile</span>
                  </div>
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => handleCategorySubmit(e, "datascience")}
                  className={`flex  w-full items-center justify-between space-x-2 rounded px-5 py-3 text-center text-sm font-medium focus:outline-none md:px-5 lg:px-10 lg:hover:bg-slate-200 ${
                    category?.split(",")[0] === "datascience"
                      ? "bg-blue-100 text-blue-500"
                      : "text-slate-600  lg:hover:text-slate-700"
                  }`}
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
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => handleCategorySubmit(e, "algorithms")}
                  className={`flex  w-full items-center justify-between space-x-2 rounded px-5 py-3 text-center text-sm font-medium focus:outline-none md:px-5 lg:px-10 lg:hover:bg-slate-200 ${
                    category?.split(",")[0] === "algorithms"
                      ? "bg-blue-100 text-blue-500"
                      : "text-slate-600  lg:hover:text-slate-700"
                  }`}
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
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => handleCategorySubmit(e, "cybersecurity")}
                  className={`flex items-center justify-between space-x-2 rounded px-5 py-3 text-center text-sm font-medium focus:outline-none md:px-5 lg:px-10 lg:hover:bg-slate-200 ${
                    category?.split(",")[0] === "cybersecurity"
                      ? "bg-blue-100 text-blue-500"
                      : "text-slate-600  lg:hover:text-slate-700"
                  }`}
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
                </motion.button>
              </div>
              <div className="hidden w-[0.5px] bg-slate-500 lg:block"></div>
              <div className="space-y-1 p-2">
                <p className="text-md px-5 py-3 font-bold text-slate-600 md:px-5 lg:px-10">
                  Discover
                </p>
                <AnimatedLink
                  whileTap={{ scale: 0.9 }}
                  role="menuitem"
                  to="/"
                  className=" flex items-center justify-between space-x-2 rounded px-5 py-3 text-center text-sm font-medium text-slate-600 focus:bg-slate-200 focus:text-slate-800 focus:outline-none md:px-5 lg:px-10 lg:hover:bg-slate-200 lg:hover:text-slate-800"
                >
                  <div className="flex flex-none items-center space-x-2">
                    <span>Popular Searches</span>
                  </div>
                </AnimatedLink>
                <AnimatedLink
                  whileTap={{ scale: 0.9 }}
                  role="menuitem"
                  to="/"
                  className=" flex items-center justify-between space-x-2 rounded px-5 py-3 text-center text-sm font-medium text-slate-600 focus:bg-slate-200 focus:text-slate-800 focus:outline-none md:px-5 lg:px-10 lg:hover:bg-slate-200 lg:hover:text-slate-800"
                >
                  <div className="flex flex-none items-center space-x-2">
                    <span>Curated Collections</span>
                  </div>
                </AnimatedLink>
                <AnimatedLink
                  whileTap={{ scale: 0.9 }}
                  role="menuitem"
                  to="/"
                  className=" flex items-center justify-between space-x-2 rounded px-5 py-3 text-center text-sm font-medium text-slate-600 focus:bg-slate-200 focus:text-slate-800 focus:outline-none md:px-5 lg:px-10 lg:hover:bg-slate-200 lg:hover:text-slate-800"
                >
                  <div className="flex flex-none items-center space-x-2">
                    <span>Popular IT Courses</span>
                  </div>
                </AnimatedLink>
              </div>
              <div className="hidden w-[0.5px] bg-slate-500 lg:block"></div>
              <div className="space-y-1 p-2">
                <p className="text-md px-5 py-3 font-bold text-slate-600 md:px-5 lg:px-10">
                  Community
                </p>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  onClick={(e) => handleCategorySubmit(e, "blogs")}
                  className={`flex  w-full items-center justify-between space-x-2 rounded px-5 py-3 text-center text-sm font-medium focus:outline-none md:px-5 lg:px-10 lg:hover:bg-slate-200 ${
                    category?.split(",")[0] === "blogs"
                      ? "bg-blue-100 text-blue-500"
                      : "text-slate-600  lg:hover:text-slate-700"
                  }`}
                >
                  <div className="flex flex-none items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-scroll-text"
                    >
                      <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4" />
                      <path d="M19 17V5a2 2 0 0 0-2-2H4" />
                      <path d="M15 8h-5" />
                      <path d="M15 12h-5" />
                    </svg>
                    <span>Blogs</span>
                  </div>
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => handleCategorySubmit(e, "courses")}
                  className={`flex  w-full items-center justify-between space-x-2 rounded px-5 py-3 text-center text-sm font-medium focus:outline-none md:px-5 lg:px-10 lg:hover:bg-slate-200 ${
                    category?.split(",")[0] === "courses"
                      ? "bg-blue-100 text-blue-500"
                      : "text-slate-600  lg:hover:text-slate-700"
                  }`}
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
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => handleCategorySubmit(e, "podcasts")}
                  className={`flex  w-full items-center justify-between space-x-2 rounded px-5 py-3 text-center text-sm font-medium focus:outline-none md:px-5 lg:px-10 lg:hover:bg-slate-200 ${
                    category?.split(",")[0] === "podcasts"
                      ? "bg-blue-100 text-blue-500"
                      : "text-slate-600  lg:hover:text-slate-700"
                  }`}
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
                      class="lucide lucide-mic"
                    >
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      <line x1="12" x2="12" y1="19" y2="22" />
                    </svg>
                    <span>Podcasts</span>
                  </div>
                </motion.button>
              </div>
              <div className="hidden w-[0.5px] bg-slate-500 lg:block"></div>
              <div className="space-y-1 p-2">
                <p className="text-md px-5 py-3 font-bold text-slate-600 md:px-5 lg:px-10">
                  About
                </p>
                <AnimatedLink
                  whileTap={{ scale: 0.9 }}
                  role="menuitem"
                  to="/about"
                  className=" flex items-center justify-between space-x-2 rounded px-5 py-3 text-center text-sm font-medium text-slate-600 focus:bg-slate-200 focus:text-slate-800 focus:outline-none md:px-5 lg:px-10 lg:hover:bg-slate-200 lg:hover:text-slate-800"
                >
                  <div className="flex flex-none items-center space-x-2">
                    <span>About Us</span>
                  </div>
                </AnimatedLink>
                <AnimatedLink
                  whileTap={{ scale: 0.9 }}
                  role="menuitem"
                  to="/faq"
                  className=" flex items-center justify-between space-x-2 rounded px-5 py-3 text-center text-sm font-medium text-slate-600 focus:bg-slate-200 focus:text-slate-800 focus:outline-none md:px-5 lg:px-10 lg:hover:bg-slate-200 lg:hover:text-slate-800"
                >
                  <div className="flex flex-none items-center space-x-2">
                    <span>FAQ</span>
                  </div>
                </AnimatedLink>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  data-ripple-light="true"
                  data-dialog-target="report-dialog"
                  onClick={() => toggleReport("bug")}
                  className="flex w-full items-center justify-between space-x-2 rounded px-5 py-3 text-center text-sm font-medium text-slate-600 focus:bg-slate-200 focus:text-slate-800 focus:outline-none md:px-5 lg:px-10 lg:hover:bg-slate-200 lg:hover:text-slate-800"
                >
                  <div className="flex flex-none items-center space-x-2">
                    <span>Report</span>
                  </div>
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  data-ripple-light="true"
                  data-dialog-target="report-dialog"
                  onClick={() => toggleReport("link")}
                  className="flex w-full items-center justify-between space-x-2 rounded px-5 py-3 text-center text-sm font-medium text-slate-600 focus:bg-slate-200 focus:text-slate-800 focus:outline-none md:px-5 lg:px-10 lg:hover:bg-slate-200 lg:hover:text-slate-800"
                >
                  <div className="flex flex-none items-center space-x-2">
                    <span>Suggest a Link</span>
                  </div>
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  data-ripple-light="true"
                  data-dialog-target="report-dialog"
                  onClick={() => toggleReport("bug")}
                  className="flex w-full items-center justify-between space-x-2 rounded px-5 py-3 text-center text-sm font-medium text-slate-600 focus:bg-slate-200 focus:text-slate-800 focus:outline-none md:px-5 lg:px-10 lg:hover:bg-slate-200 lg:hover:text-slate-800"
                >
                  <div className="flex flex-none items-center space-x-2">
                    <span>Newsletter</span>
                  </div>
                </motion.button>
                <AnimatedLink
                  whileTap={{ scale: 0.9 }}
                  role="menuitem"
                  to="/privacy-policy"
                  className=" flex items-center justify-between space-x-2 rounded px-5 py-3 text-center text-sm font-medium text-slate-600 focus:bg-slate-200 focus:text-slate-800 focus:outline-none md:px-5 lg:px-10 lg:hover:bg-slate-200 lg:hover:text-slate-800"
                >
                  <div className="flex flex-none items-center space-x-2">
                    <span>Privacy Policy</span>
                  </div>
                </AnimatedLink>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  // role="menuitem"
                  type="button"
                  data-ripple-light="true"
                  data-dialog-target="sign-in-dialog"
                  onClick={toggleLanguage}
                  className=" flex items-center justify-between space-x-2 rounded px-5 py-3 text-center text-sm font-medium text-slate-600 focus:bg-slate-200 focus:text-slate-800 focus:outline-none md:px-5 lg:px-10 lg:hover:bg-slate-200 lg:hover:text-slate-800"
                >
                  <div className="flex flex-none items-center space-x-2">
                    <img
                      className="h-5 w-5"
                      src="https://cdn-opennotes.b-cdn.net/static/media/us.d21917ae9982e6ddb4522ce72f25de19.svg"
                      alt=""
                    />
                    <span>English - EN</span>
                  </div>
                </motion.button>
              </div>
            </div>
            <div className="px-5 py-4 text-slate-700 md:px-5 lg:px-10">
              <li className="flex flex-row items-center justify-end space-x-6">
                <AnimatedLink
                  whileTap={{ scale: 0.9 }}
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
                      className="lucide lucide-instagram group-lg:hover:text-red-500 transition duration-300 ease-in-out"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </span>
                </AnimatedLink>
                <AnimatedLink
                  whileTap={{ scale: 0.9 }}
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
                      class="lucide lucide-twitter group-lg:hover:text-blue-500 transition duration-300 ease-in-out"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </span>
                </AnimatedLink>
                <AnimatedLink
                  whileTap={{ scale: 0.9 }}
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
                      class="lucide lucide-linkedin group-lg:hover:text-blue-400 transition duration-300 ease-in-out"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </span>
                </AnimatedLink>
                <AnimatedLink
                  whileTap={{ scale: 0.9 }}
                  to={"https://www.buymeacoffee.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://cdn-opennotes.b-cdn.net/static/media/bmc-logo.f7706b66fa26661302f5.png"
                    alt=""
                    srcset=""
                    className="h-[22px]"
                  />
                </AnimatedLink>
              </li>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExploreModal;
