import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeLangModal } from "../../store/features/modalSlice";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { createDropInVariant } from "../../hooks/useAnimationVariants";
import useClickOutside from "../../hooks/useClickOutside";

const LangModal = () => {
  const isLangModalOpen = useSelector((state) => state.Modal.isLangModalOpen);
  const dropInVariant = createDropInVariant("100vh");
  const dispatch = useDispatch();
  const modalRef = useRef();

  // Close the modal when the user clicks outside of it
  useClickOutside(
    modalRef,
    () => {
      dispatch(closeLangModal());
    },
    isLangModalOpen,
  );

  const handleLangModalToggle = () => {
    dispatch(closeLangModal());
  };

  return (
    <motion.div
      data-dialog-backdrop="sign-in-dialog"
      data-dialog-backdrop-close="true"
      ref={modalRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="raletive fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-100 backdrop-blur-sm "
    >
      <motion.div
        variants={dropInVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ damping: 300 }}
        data-dialog="sign-in-dialog"
        className="relative mx-auto flex w-10/12 max-w-[30rem] flex-col rounded-xl bg-white bg-clip-border text-slate-700 shadow-md"
      >
        <button
          aria-label="Close panel"
          onClick={handleLangModalToggle}
          className="absolute -top-3 left-[300px] z-10 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-slate-700 transition duration-200 focus:text-slate-800 focus:shadow-md focus:outline-none md:left-[470px] md:h-8 md:w-8 lg:hover:text-slate-800 lg:hover:shadow-md"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="text-xl"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
          </svg>
        </button>
        <div className="-mb-3 mt-5 flex flex-row justify-center">
          <h3
            className="capital font-serif text-base font-semibold text-slate-900 lg:text-2xl"
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
                className=" flex items-center justify-between space-x-2 rounded px-10 py-3 text-center text-sm font-medium  focus:bg-slate-100 focus:text-slate-800 focus:outline-none lg:hover:bg-slate-100 lg:hover:text-slate-800"
              >
                <div className="flex flex-none items-center space-x-2">
                  <img
                    className="h-5 w-5"
                    src="https://cdn-opennotes.b-cdn.net/static/media/us.d21917ae9982e6ddb4522ce72f25de19.svg"
                    alt=""
                  />
                  <span>English - EN</span>
                </div>
              </Link>
              <Link
                role="menuitem"
                to="/profile"
                className="flex items-center justify-between space-x-2 rounded px-10 py-3 text-center text-sm font-medium  focus:bg-slate-100 focus:text-slate-800 focus:outline-none lg:hover:bg-slate-100 lg:hover:text-slate-800"
              >
                <div className="flex flex-none items-center space-x-2">
                  <img
                    className="h-5 w-5"
                    src="https://cdn-opennotes.b-cdn.net/static/media/es.628f10fe057a86d47f75d765dce23dac.svg"
                    alt=""
                  />
                  <span>Español - ES</span>
                </div>
              </Link>
              <Link
                role="menuitem"
                to="/profile"
                className=" flex items-center justify-between space-x-2 rounded px-10 py-3 text-center text-sm font-medium  focus:bg-slate-100 focus:text-slate-800 focus:outline-none lg:hover:bg-slate-100 lg:hover:text-slate-800"
              >
                <div className="flex flex-none items-center space-x-2">
                  <img
                    className="h-5 w-5"
                    src="https://cdn-opennotes.b-cdn.net/static/media/de.67ea3e1e09afb41c926309de66c84d29.svg"
                    alt=""
                  />
                  <span>Deutsch - DE</span>
                </div>
              </Link>
              <Link
                role="menuitem"
                to="/profile"
                className=" flex items-center justify-between space-x-2 rounded px-10 py-3 text-center text-sm font-medium  focus:bg-slate-100 focus:text-slate-800 focus:outline-none lg:hover:bg-slate-100 lg:hover:text-slate-800"
              >
                <div className="flex flex-none items-center space-x-2">
                  <img
                    className="h-5 w-5"
                    src="https://cdn-opennotes.b-cdn.net/static/media/il.11d095d6bd3ced58d50e8a718e73ca14.svg"
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
                className=" flex items-center justify-between space-x-2 rounded px-10 py-3 text-center text-sm font-medium  focus:bg-slate-100 focus:text-slate-800 focus:outline-none lg:hover:bg-slate-100 lg:hover:text-slate-800"
              >
                <div className="flex flex-none items-center space-x-2">
                  <img
                    className="h-5 w-5"
                    src="https://cdn-opennotes.b-cdn.net/static/media/cn.ede831f04bc53cf28ca3da183a586c2e.svg"
                    alt=""
                  />
                  <span>中国人 - ZH</span>
                </div>
              </Link>
              <Link
                role="menuitem"
                to="/profile"
                className=" flex items-center justify-between space-x-2 rounded px-10 py-3 text-center text-sm font-medium  focus:bg-slate-100 focus:text-slate-800 focus:outline-none lg:hover:bg-slate-100 lg:hover:text-slate-800"
              >
                <div className="flex flex-none items-center space-x-2">
                  <img
                    className="h-5 w-5"
                    src="https://cdn-opennotes.b-cdn.net/static/media/fr.03e210d9c2d260a9fe7c74fb3d5226c7.svg"
                    alt=""
                  />
                  <span>Français - FR</span>
                </div>
              </Link>
              <Link
                role="menuitem"
                to="/profile"
                className=" flex items-center justify-between space-x-2 rounded px-10 py-3 text-center text-sm font-medium  focus:bg-slate-100 focus:text-slate-800 focus:outline-none lg:hover:bg-slate-100 lg:hover:text-slate-800"
              >
                <div className="flex flex-none items-center space-x-2">
                  <img
                    className="h-5 w-5"
                    src="https://cdn-opennotes.b-cdn.net/static/media/ru.1a25dd02f5c961746191ceea5532d1e7.svg"
                    alt=""
                  />
                  <span>Русский - RU</span>
                </div>
              </Link>
              <Link
                role="menuitem"
                to="/profile"
                className=" flex items-center justify-between space-x-2 rounded px-10 py-3 text-center text-sm font-medium  focus:bg-slate-100 focus:text-slate-800 focus:outline-none lg:hover:bg-slate-100 lg:hover:text-slate-800"
              >
                <div className="flex flex-none items-center space-x-2">
                  <img
                    className="h-5 w-5"
                    src="https://cdn-opennotes.b-cdn.net/static/media/sa.bba81f588f75291e0091db58c09e6075.svg"
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
  );
};

export default LangModal;
