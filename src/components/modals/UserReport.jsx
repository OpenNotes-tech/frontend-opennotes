import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addError, setLoading } from "../../store/features/errorSlice";
import { closeReportModal } from "../../store/features/modalSlice";
import Request from "../../utils/API-router";
import { motion } from "framer-motion";
import { createDropInVariant } from "../../hooks/useAnimationVariants";
import useClickOutside from "../../hooks/useClickOutside";

const UserReport = () => {
  const { modalValue } = useSelector((state) => state.Modal);
  const dropInVariant = createDropInVariant("100vh");
  const isReportModalOpen = useSelector(
    (state) => state.Modal.isReportModalOpen,
  );
  const [getPlaceholder, setPlaceholder] = useState(modalValue);
  const [getType, setType] = useState(modalValue);
  const [getForm, setForm] = useState("");
  const dispatch = useDispatch();
  const modalRef = useRef();

  // Close the modal when the user clicks outside of it
  useClickOutside(
    modalRef,
    () => {
      dispatch(closeReportModal());
    },
    isReportModalOpen,
  );

  useEffect(() => {
    setForm("");
    if (getType === "bug") {
      setPlaceholder("Report any bug to the admin");
    } else if (getType === "link") {
      setPlaceholder("Suggest a link to admin");
    } else if (getType === "admin") {
      setPlaceholder("communicate directly with admin");
    } else if (getType === "other") {
      setPlaceholder("Write any other topic to admin");
    }
  }, [getType]);

  const handleReportModalToggle = () => {
    setForm("");
    dispatch(closeReportModal());
  };

  const handleReportSubmit = (event) => {
    event.preventDefault();

    if (getForm.trim().length >= 1) {
      dispatch(setLoading(true));

      Request.postReport({ message: getForm, type: getType })
        .then((res) => {
          dispatch(
            addError({
              type: "success",
              error: "Successfully Submitted!",
              id: Date.now(),
            }),
          );
          dispatch(setLoading(false));
        })
        .catch((error) => {
          dispatch(setLoading(false));
          dispatch(
            addError({
              type: "error",
              error: error?.response?.data?.message,
              id: Date.now(),
            }),
          );
        })
        .finally((e) => {
          dispatch(setLoading(false));
        });
    }
  };

  return (
    <motion.div
      data-dialog-backdrop="sign-in-dialog"
      data-dialog-backdrop-close="true"
      ref={modalRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-100 backdrop-blur-sm "
    >
      <motion.div
        variants={dropInVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ damping: 300 }}
        data-dialog="sign-in-dialog"
        className="relative mx-auto flex w-full max-w-[45rem] flex-col rounded-xl bg-white bg-clip-border text-slate-700 shadow-md ring-1 ring-slate-900 ring-opacity-5"
      >
        <button
          aria-label="Close panel"
          onClick={handleReportModalToggle}
          className="absolute -top-4 left-[710px] z-10 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-slate-700 transition duration-200 focus:text-slate-800 focus:shadow-md focus:outline-none md:h-8 md:w-8 lg:hover:text-slate-800 lg:hover:shadow-md"
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
        <div className="flex flex-col space-y-10 p-4">
          <div className="-mb-3 mt-2 flex flex-row justify-center border-b pb-5">
            <h3
              className="capital font-serif text-base font-semibold text-slate-700 lg:text-xl"
              id="headlessui-dialog-title-38"
            >
              Report Admin
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div
              className="grid grid-cols-2 gap-2 text-sm font-medium lg:grid-cols-4"
              role="none"
            >
              <button
                onClick={() => setType("bug")}
                className={`flex cursor-pointer flex-row items-center justify-center space-x-5 whitespace-nowrap rounded-lg px-10 py-[13px] text-center shadow-lg ring-1 ring-slate-900 ring-opacity-5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:focus:ring-offset-0 ${
                  getType === "bug"
                    ? "bg-blue-600 text-white dark:bg-blue-600"
                    : ""
                }`}
              >
                <div>Report Bug</div>
                {getType === "bug" && (
                  <div className="flex-shrink-0 ">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                      <circle
                        cx="12"
                        cy="12"
                        r="12"
                        fill="#fff"
                        opacity="0.2"
                      ></circle>
                      <path
                        d="M7 13l3 3 7-7"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                )}
              </button>
              <button
                onClick={() => setType("link")}
                className={`flex cursor-pointer flex-row items-center justify-center space-x-5 whitespace-nowrap rounded-lg px-10 py-[13px] text-center shadow-lg ring-1 ring-slate-900 ring-opacity-5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:focus:ring-offset-0 ${
                  getType === "link"
                    ? "bg-blue-600 text-white dark:bg-blue-600"
                    : ""
                }`}
              >
                <div>Suggest Link</div>
                {getType === "link" && (
                  <div className="flex-shrink-0 ">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                      <circle
                        cx="12"
                        cy="12"
                        r="12"
                        fill="#fff"
                        opacity="0.2"
                      ></circle>
                      <path
                        d="M7 13l3 3 7-7"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                )}
              </button>
              <button
                onClick={() => setType("admin")}
                className={`flex cursor-pointer flex-row items-center justify-center space-x-5 whitespace-nowrap rounded-lg px-10 py-[13px] text-center shadow-lg ring-1 ring-slate-900 ring-opacity-5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:focus:ring-offset-0 ${
                  getType === "admin"
                    ? "bg-blue-600 text-white dark:bg-blue-600"
                    : ""
                }`}
              >
                <div>Tell Admin</div>
                {getType === "admin" && (
                  <div className="flex-shrink-0 ">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                      <circle
                        cx="12"
                        cy="12"
                        r="12"
                        fill="#fff"
                        opacity="0.2"
                      ></circle>
                      <path
                        d="M7 13l3 3 7-7"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                )}
              </button>
              <button
                onClick={() => setType("other")}
                className={`flex cursor-pointer flex-row items-center justify-center space-x-5 whitespace-nowrap rounded-lg px-10 py-[13px] text-center shadow-lg ring-1 ring-slate-900 ring-opacity-5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:focus:ring-offset-0 ${
                  getType === "other"
                    ? "bg-blue-600 text-white dark:bg-blue-600"
                    : ""
                }`}
              >
                <div>Other Topic</div>
                {getType === "other" && (
                  <div className="flex-shrink-0 ">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                      <circle
                        cx="12"
                        cy="12"
                        r="12"
                        fill="#fff"
                        opacity="0.2"
                      ></circle>
                      <path
                        d="M7 13l3 3 7-7"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                )}
              </button>
            </div>
          </div>
          <form className="flex flex-col space-y-4">
            <div className="relative h-10 w-full min-w-[200px]">
              <input
                className="peer h-full w-full rounded-[7px] border border-gray-800 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-800 placeholder-transparent outline outline-0 transition-all placeholder:italic placeholder-shown:border placeholder-shown:border-gray-800 placeholder-shown:border-t-gray-800 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:placeholder-gray-400 focus:outline-0 disabled:border-0 disabled:bg-gray-800"
                placeholder="john.doe@example.com"
                value={getForm}
                required
                // onChange={(e) => setForm(e.target.value)}
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-gray-800 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-gray-700 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-blue-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-900">
                Email
              </label>
            </div>
            <div className="relative w-full min-w-[200px]">
              <textarea
                className="peer h-full min-h-[150px] w-full rounded-[7px] border border-slate-700 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-slate-700 placeholder-transparent outline outline-0 transition-all placeholder:italic placeholder-shown:border placeholder-shown:border-slate-700 placeholder-shown:border-t-slate-700 focus:border-2 focus:border-blue-600 focus:border-t-transparent focus:placeholder-slate-400 focus:outline-0 disabled:border-0 disabled:bg-slate-700"
                placeholder={getPlaceholder}
                value={getForm}
                required
                onChange={(e) => setForm(e.target.value)}
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-slate-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-slate-700 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-slate-700 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-slate-600 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-600 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-blue-600 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-blue-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-slate-800">
                {getType === "bug"
                  ? "Report Bug"
                  : getType === "link"
                  ? "Suggest Link"
                  : getType === "admin"
                  ? "Write to Admin"
                  : "Other Topic"}
              </label>
            </div>
          </form>
          <div className="flex flex-row items-center justify-center space-x-4 rounded-b border-t border-solid border-slate-300  px-6 md:justify-end">
            <button
              type="button"
              onClick={handleReportModalToggle}
              className="cursor-pointer items-center justify-center rounded-md border-[1.5px] border-slate-700 px-8 py-2 text-center font-medium text-slate-700 transition duration-200 ease-in-out md:px-8 md:py-2 lg:hover:border-blue-700 lg:hover:bg-blue-100 lg:hover:text-blue-700"
            >
              Cancel
            </button>
            <button
              onClick={handleReportSubmit}
              className="cursor-pointer items-center justify-center rounded-md border-[1.5px] border-slate-700 bg-slate-700 px-8 py-2 text-center font-medium text-white transition duration-200 ease-in-out lg:hover:border-blue-700 lg:hover:bg-blue-700"
              type="submit"
            >
              Send
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default UserReport;
