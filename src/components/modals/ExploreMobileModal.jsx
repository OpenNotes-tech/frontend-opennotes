import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import * as React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { generateLinkWithQuery } from "../../hooks/useGenerateQueryLink";
import { useDispatch } from "react-redux";
import {
  openReportModal,
  closeExploreModal,
  openLangModal,
} from "../../store/features/modalSlice";
import { createDropInVariant } from "../../hooks/useAnimationVariants";
const AnimatedLink = motion(Link);

const ExploreMobileModal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");
  const dropInVariant = createDropInVariant("100vh");
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

  const handleExploreModalToggle = () => {
    dispatch(closeExploreModal());
  };

  const [expanded, setExpanded] = useState(0);
  return (
    <>
      <motion.div
        data-dialog-backdrop="sign-in-dialog"
        data-dialog-backdrop-close="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        class="raletive fixed inset-0 z-[999] grid h-screen w-screen items-end justify-center bg-black bg-opacity-60 opacity-100 backdrop-blur-sm "
      >
        <motion.div
          variants={dropInVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ damping: 300 }}
          data-dialog="sign-in-dialog"
          class="sticky bottom-0 top-[100vh] mx-auto flex h-[650px] w-screen  flex-col overflow-y-scroll rounded-t-xl bg-white bg-clip-border text-gray-700 shadow-md"
        >
          <button
            aria-label="Close panel"
            onClick={handleExploreModalToggle}
            class="top-18 absolute left-[180px] z-[999] hidden h-7 w-7 items-center justify-center rounded-full bg-black text-gray-600 transition duration-200 hover:text-gray-800 hover:shadow-md focus:text-gray-800 focus:shadow-md focus:outline-none md:-top-3 md:left-[405px] md:block md:h-8  md:w-8"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
            </svg>
          </button>
          <div className="flex items-center justify-between bg-slate-200 px-4 py-2 ">
            <button
              onClick={handleExploreModalToggle}
              className="text-xs font-medium text-blue-500"
            >
              Cancel
            </button>
            <h3 className="text-sm font-semibold">Menu</h3>
            <button
              onClick={handleExploreModalToggle}
              className="text-xs font-medium text-blue-500"
            >
              Done
            </button>
          </div>

          <div className="flex h-screen flex-col justify-between py-4">
            <div className="flex w-full flex-col  rounded bg-white px-6 ">
              <motion.div
                className="mt-4 flex items-center justify-between rounded-lg px-6 py-2 text-white"
                whileTap={{ scale: 0.9 }}
                initial={false}
                animate={{
                  backgroundColor: expanded === 1 ? "#FF0088" : "#0055FF",
                }}
                onClick={() => setExpanded(expanded === 1 ? 0 : 1)}
              >
                Collections{" "}
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
                  className={`lucide lucide-chevron-down arrow ml-2.5 ${
                    expanded === 1 ? "rotate-180 transform" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </motion.div>
              <AnimatePresence initial={false}>
                {expanded === 1 && (
                  <motion.section
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    className="overflow-hidden px-5"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                  >
                    <motion.div
                      variants={{
                        collapsed: { scale: 0.8 },
                        open: { scale: 1 },
                      }}
                      transition={{ duration: 0.8 }}
                      className="my-4 flex flex-col space-y-3"
                    >
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => handleCategorySubmit(e, "backend")}
                        className={`flex w-full items-center justify-between space-x-2 rounded px-5 py-3 text-center text-sm font-medium  focus:outline-none md:px-5  lg:px-10 ${
                          category?.split(",")[0] === "backend"
                            ? "bg-blue-100 text-blue-500"
                            : "text-gray-800   focus:bg-gray-100 focus:text-gray-900"
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
                      </motion.button>
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => handleCategorySubmit(e, "frontend")}
                        className={`flex w-full items-center justify-between space-x-2 rounded px-5 py-3 text-center text-sm font-medium  focus:outline-none md:px-5 lg:px-10 ${
                          category?.split(",")[0] === "frontend"
                            ? "bg-blue-100 text-blue-500"
                            : "text-gray-800   focus:bg-gray-100 focus:text-gray-900"
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
                        className={`flex  w-full items-center justify-between space-x-2 rounded px-5 py-3 text-center text-sm font-medium  focus:outline-none md:px-5 lg:px-10 ${
                          category?.split(",")[0] === "mobile"
                            ? "bg-blue-100 text-blue-500"
                            : "text-gray-800   focus:bg-gray-100 focus:text-gray-900"
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
                      </motion.button>
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => handleCategorySubmit(e, "datascience")}
                        className={`flex  w-full items-center justify-between space-x-2 rounded px-5 py-3 text-center text-sm font-medium  focus:outline-none md:px-5 lg:px-10 ${
                          category?.split(",")[0] === "datascience"
                            ? "bg-blue-100 text-blue-500"
                            : "text-gray-800   focus:bg-gray-100 focus:text-gray-900"
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
                        className={`flex  w-full items-center justify-between space-x-2 rounded px-5 py-3 text-center text-sm font-medium  focus:outline-none md:px-5 lg:px-10 ${
                          category?.split(",")[0] === "algorithms"
                            ? "bg-blue-100 text-blue-500"
                            : "text-gray-800   focus:bg-gray-100 focus:text-gray-900"
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
                        onClick={(e) =>
                          handleCategorySubmit(e, "cybersecurity")
                        }
                        className={`flex items-center justify-between space-x-2 rounded px-5 py-3 text-center text-sm font-medium  focus:outline-none md:px-5 lg:px-10 ${
                          category?.split(",")[0] === "cybersecurity"
                            ? "bg-blue-100 text-blue-500"
                            : "text-gray-800   focus:bg-gray-100 focus:text-gray-900"
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
                    </motion.div>
                  </motion.section>
                )}
              </AnimatePresence>
              <motion.div
                className="mt-4 flex items-center justify-between rounded-lg px-6 py-2 text-white"
                whileTap={{ scale: 0.9 }}
                initial={false}
                animate={{
                  backgroundColor: expanded === 2 ? "#FF0088" : "#0055FF",
                }}
                onClick={() => setExpanded(expanded === 2 ? 0 : 2)}
              >
                Discover{" "}
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
                  className={`lucide lucide-chevron-down arrow ml-2.5 ${
                    expanded === 2 ? "rotate-180 transform" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </motion.div>
              <AnimatePresence initial={false}>
                {expanded === 2 && (
                  <motion.section
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    className="overflow-hidden px-5"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                  >
                    <motion.div
                      variants={{
                        collapsed: { scale: 0.8 },
                        open: { scale: 1 },
                      }}
                      transition={{ duration: 0.8 }}
                      className="my-4 flex flex-col space-y-3"
                    >
                      <AnimatedLink
                        whileTap={{ scale: 0.9 }}
                        role="menuitem"
                        to="/"
                        className=" flex items-center justify-between space-x-2 rounded px-5 py-3 text-center text-sm font-medium text-gray-800   focus:bg-gray-100 focus:text-gray-900 focus:outline-none md:px-5 lg:px-10"
                      >
                        <div className="flex flex-none items-center space-x-2">
                          <span>Popular Searches</span>
                        </div>
                      </AnimatedLink>
                      <AnimatedLink
                        whileTap={{ scale: 0.9 }}
                        role="menuitem"
                        to="/"
                        className=" flex items-center justify-between space-x-2 rounded px-5 py-3 text-center text-sm font-medium text-gray-800   focus:bg-gray-100 focus:text-gray-900 focus:outline-none md:px-5 lg:px-10"
                      >
                        <div className="flex flex-none items-center space-x-2">
                          <span>Curated Collections</span>
                        </div>
                      </AnimatedLink>
                      <AnimatedLink
                        whileTap={{ scale: 0.9 }}
                        role="menuitem"
                        to="/"
                        className=" flex items-center justify-between space-x-2 rounded px-5 py-3 text-center text-sm font-medium text-gray-800   focus:bg-gray-100 focus:text-gray-900 focus:outline-none md:px-5 lg:px-10"
                      >
                        <div className="flex flex-none items-center space-x-2">
                          <span>Popular IT Courses</span>
                        </div>
                      </AnimatedLink>
                    </motion.div>
                  </motion.section>
                )}
              </AnimatePresence>
              <motion.div
                className="mt-4 flex items-center justify-between rounded-lg px-6 py-2 text-white"
                whileTap={{ scale: 0.9 }}
                initial={false}
                animate={{
                  backgroundColor: expanded === 3 ? "#FF0088" : "#0055FF",
                }}
                onClick={() => setExpanded(expanded === 3 ? 0 : 3)}
              >
                Community{" "}
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
                  className={`lucide lucide-chevron-down arrow ml-2.5 ${
                    expanded === 3 ? "rotate-180 transform" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </motion.div>
              <AnimatePresence initial={false}>
                {expanded === 3 && (
                  <motion.section
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    className="overflow-hidden px-5"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                  >
                    <motion.div
                      variants={{
                        collapsed: { scale: 0.8 },
                        open: { scale: 1 },
                      }}
                      transition={{ duration: 0.8 }}
                      className="my-4 flex flex-col space-y-3"
                    >
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        type="button"
                        onClick={(e) => handleCategorySubmit(e, "blogs")}
                        className={`flex  w-full items-center justify-between space-x-2 rounded px-5 py-3 text-center text-sm font-medium  focus:outline-none md:px-5 lg:px-10 ${
                          category?.split(",")[0] === "blogs"
                            ? "bg-blue-100 text-blue-500"
                            : "text-gray-800   focus:bg-gray-100 focus:text-gray-900"
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
                        className={`flex  w-full items-center justify-between space-x-2 rounded px-5 py-3 text-center text-sm font-medium  focus:outline-none md:px-5 lg:px-10 ${
                          category?.split(",")[0] === "courses"
                            ? "bg-blue-100 text-blue-500"
                            : "text-gray-800   focus:bg-gray-100 focus:text-gray-900"
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
                        className={`flex  w-full items-center justify-between space-x-2 rounded px-5 py-3 text-center text-sm font-medium  focus:outline-none md:px-5 lg:px-10 ${
                          category?.split(",")[0] === "podcasts"
                            ? "bg-blue-100 text-blue-500"
                            : "text-gray-800   focus:bg-gray-100 focus:text-gray-900"
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
                    </motion.div>
                  </motion.section>
                )}
              </AnimatePresence>
              <motion.div
                className="mt-4 flex items-center justify-between rounded-lg px-6 py-2 text-white"
                whileTap={{ scale: 0.9 }}
                initial={false}
                animate={{
                  backgroundColor: expanded === 4 ? "#FF0088" : "#0055FF",
                }}
                onClick={() => setExpanded(expanded === 4 ? 0 : 4)}
              >
                About{" "}
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
                  className={`lucide lucide-chevron-down arrow ml-2.5 ${
                    expanded === 4 ? "rotate-180 transform" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </motion.div>
              <AnimatePresence initial={false}>
                {expanded === 4 && (
                  <motion.section
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    className="overflow-hidden px-5"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                  >
                    <motion.div
                      variants={{
                        collapsed: { scale: 0.8 },
                        open: { scale: 1 },
                      }}
                      transition={{ duration: 0.8 }}
                      className="my-4 flex flex-col space-y-3"
                    >
                      <AnimatedLink
                        whileTap={{ scale: 0.9 }}
                        role="menuitem"
                        to="/about"
                        className=" flex items-center justify-between space-x-2 rounded px-5 py-3 text-center text-sm font-medium text-gray-800   focus:bg-gray-100 focus:text-gray-900 focus:outline-none md:px-5 lg:px-10"
                      >
                        <div className="flex flex-none items-center space-x-2">
                          <span>About Us</span>
                        </div>
                      </AnimatedLink>
                      <AnimatedLink
                        whileTap={{ scale: 0.9 }}
                        role="menuitem"
                        to="/faq"
                        className=" flex items-center justify-between space-x-2 rounded px-5 py-3 text-center text-sm font-medium text-gray-800   focus:bg-gray-100 focus:text-gray-900 focus:outline-none md:px-5 lg:px-10"
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
                        className="flex w-full items-center justify-between space-x-2 rounded px-5 py-3 text-center text-sm font-medium text-gray-800   focus:bg-gray-100 focus:text-gray-900 focus:outline-none md:px-5 lg:px-10"
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
                        className="flex w-full items-center justify-between space-x-2 rounded px-5 py-3 text-center text-sm font-medium text-gray-800   focus:bg-gray-100 focus:text-gray-900 focus:outline-none md:px-5 lg:px-10"
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
                        className="flex w-full items-center justify-between space-x-2 rounded px-5 py-3 text-center text-sm font-medium text-gray-800   focus:bg-gray-100 focus:text-gray-900 focus:outline-none md:px-5 lg:px-10"
                      >
                        <div className="flex flex-none items-center space-x-2">
                          <span>Newsletter</span>
                        </div>
                      </motion.button>
                      <AnimatedLink
                        whileTap={{ scale: 0.9 }}
                        role="menuitem"
                        to="/privacy-policy"
                        className=" flex items-center justify-between space-x-2 rounded px-5 py-3 text-center text-sm font-medium text-gray-800   focus:bg-gray-100 focus:text-gray-900 focus:outline-none md:px-5 lg:px-10"
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
                        className=" flex items-center justify-between space-x-2 rounded px-5 py-3 text-center text-sm font-medium text-gray-800   focus:bg-gray-100 focus:text-gray-900 focus:outline-none md:px-5 lg:px-10"
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
                    </motion.div>
                  </motion.section>
                )}
              </AnimatePresence>
            </div>
            <div className="mt-4 flex flex-row items-center justify-center space-x-6 px-5 py-3 text-slate-700">
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
                    className="lucide lucide-instagram transition duration-300 ease-in-out "
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
                    class="lucide lucide-twitter transition duration-300 ease-in-out "
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
                    class="lucide lucide-linkedin transition duration-300 ease-in-out "
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
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ExploreMobileModal;
