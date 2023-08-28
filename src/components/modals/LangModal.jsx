import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { setError, setLoading } from "../../store/features/errorSlice";
import { closeLangModal } from "../../store/features/modalSlice";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const LangModal = () => {
  const isLangModalOpen = useSelector((state) => state.Modal.isLangModalOpen);
  const dispatch = useDispatch();
  const modalRef = useRef();

  // Close the modal when the user clicks outside of it
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target === modalRef.current) {
        dispatch(closeLangModal());
      }
    };
    if (isLangModalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dispatch, isLangModalOpen]);

  const handleLangModalToggle = () => {
    dispatch(closeLangModal());
  };

  const dropIn = {
    hidden: {
      y: "100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      // transition: {
      //   duration: 0.1,
      //   type: "spring",
      //   damping: 25,
      //   stiffness: 500,
      // },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  return (
    <AnimatePresence initial={false} onExitComplete={() => null}>
      {isLangModalOpen && (
        <motion.div
          data-dialog-backdrop="sign-in-dialog"
          data-dialog-backdrop-close="true"
          ref={modalRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          class="raletive fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-100 backdrop-blur-sm transition-opacity duration-300"
        >
          <motion.div
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ damping: 300 }}
            data-dialog="sign-in-dialog"
            class="relative mx-auto flex w-10/12 max-w-[30rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
          >
            <button
              aria-label="Close panel"
              onClick={handleLangModalToggle}
              class="absolute -top-3 left-[300px] z-10 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-gray-600 transition duration-200 hover:text-gray-800 hover:shadow-md focus:text-gray-800 focus:shadow-md focus:outline-none md:left-[470px] md:h-8 md:w-8"
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
            <div className="-mb-3 mt-5 flex flex-row justify-center">
              <h3
                class="capital font-serif text-base font-semibold text-neutral-900 lg:text-2xl"
                id="headlessui-dialog-title-38"
              >
                Languages
              </h3>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="grid py-10 md:grid-cols-2">
                <div className="flex flex-col space-y-2">
                  <Link
                    role="menuitem"
                    to="/profile"
                    className=" flex items-center justify-between space-x-2 rounded px-10 py-3 text-center text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                  >
                    <div className="flex flex-none items-center space-x-2">
                      <img
                        className="h-5 w-5"
                        src={require("../../assets/images/us.svg").default}
                        alt=""
                      />
                      <span>English - EN</span>
                    </div>
                  </Link>
                  <Link
                    role="menuitem"
                    to="/profile"
                    className="flex items-center justify-between space-x-2 rounded px-10 py-3 text-center text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                  >
                    <div className="flex flex-none items-center space-x-2">
                      <img
                        className="h-5 w-5"
                        src={require("../../assets/images/es.svg").default}
                        alt=""
                      />
                      <span>Español - ES</span>
                    </div>
                  </Link>
                  <Link
                    role="menuitem"
                    to="/profile"
                    className=" flex items-center justify-between space-x-2 rounded px-10 py-3 text-center text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                  >
                    <div className="flex flex-none items-center space-x-2">
                      <img
                        className="h-5 w-5"
                        src={require("../../assets/images/de.svg").default}
                        alt=""
                      />
                      <span>Deutsch - DE</span>
                    </div>
                  </Link>
                  <Link
                    role="menuitem"
                    to="/profile"
                    className=" flex items-center justify-between space-x-2 rounded px-10 py-3 text-center text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                  >
                    <div className="flex flex-none items-center space-x-2">
                      <img
                        className="h-5 w-5"
                        src={require("../../assets/images/il.svg").default}
                        alt=""
                      />
                      <span>עברית - HE</span>
                    </div>
                  </Link>
                </div>
                <div className="flex flex-col space-y-2">
                  <Link
                    role="menuitem"
                    to="/profile"
                    className=" flex items-center justify-between space-x-2 rounded px-10 py-3 text-center text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                  >
                    <div className="flex flex-none items-center space-x-2">
                      <img
                        className="h-5 w-5"
                        src={require("../../assets/images/cn.svg").default}
                        alt=""
                      />
                      <span>中国人 - ZH</span>
                    </div>
                  </Link>
                  <Link
                    role="menuitem"
                    to="/profile"
                    className=" flex items-center justify-between space-x-2 rounded px-10 py-3 text-center text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                  >
                    <div className="flex flex-none items-center space-x-2">
                      <img
                        className="h-5 w-5"
                        src={require("../../assets/images/fr.svg").default}
                        alt=""
                      />
                      <span>Français - FR</span>
                    </div>
                  </Link>
                  <Link
                    role="menuitem"
                    to="/profile"
                    className=" flex items-center justify-between space-x-2 rounded px-10 py-3 text-center text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                  >
                    <div className="flex flex-none items-center space-x-2">
                      <img
                        className="h-5 w-5"
                        src={require("../../assets/images/ru.svg").default}
                        alt=""
                      />
                      <span>Русский - RU</span>
                    </div>
                  </Link>
                  <Link
                    role="menuitem"
                    to="/profile"
                    className=" flex items-center justify-between space-x-2 rounded px-10 py-3 text-center text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                  >
                    <div className="flex flex-none items-center space-x-2">
                      <img
                        className="h-5 w-5"
                        src={require("../../assets/images/sa.svg").default}
                        alt=""
                      />
                      <span>عربى - AR</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LangModal;
