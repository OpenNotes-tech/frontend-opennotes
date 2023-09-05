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
      class="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-100 backdrop-blur-sm "
    >
      <motion.div
        variants={dropInVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ damping: 300 }}
        data-dialog="sign-in-dialog"
        class="relative mx-auto flex w-full max-w-[45rem] flex-col rounded-xl bg-white bg-clip-border text-neutral-700 shadow-md ring-1 ring-neutral-900 ring-opacity-5"
      >
        <button
          aria-label="Close panel"
          onClick={handleReportModalToggle}
          class="absolute -top-4 left-[710px] z-10 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-neutral-700 transition duration-200 hover:text-neutral-800 hover:shadow-md focus:text-neutral-800 focus:shadow-md focus:outline-none md:h-8 md:w-8"
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
        <div className="flex flex-col space-y-10 p-4">
          <div className="-mb-3 mt-2 flex flex-row justify-center border-b pb-5">
            <h3
              class="capital font-serif text-base font-semibold text-neutral-700 lg:text-xl"
              id="headlessui-dialog-title-38"
            >
              Report Admin
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div
              class="grid grid-cols-2 gap-2 text-sm font-medium lg:grid-cols-4"
              role="none"
            >
              <button
                onClick={() => setType("bug")}
                className={`focus:ring-blue-6000 flex cursor-pointer flex-row items-center justify-center space-x-5 whitespace-nowrap rounded-lg px-10 py-[13px] text-center shadow-lg ring-1 ring-neutral-900 ring-opacity-5 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-0 ${
                  getType === "bug"
                    ? "bg-blue-600 text-white dark:bg-blue-600"
                    : ""
                }`}
              >
                <div>Report Bug</div>
                {getType === "bug" && (
                  <div class="flex-shrink-0 ">
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
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
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                )}
              </button>
              <button
                onClick={() => setType("link")}
                className={`focus:ring-blue-6000 flex cursor-pointer flex-row items-center justify-center space-x-5 whitespace-nowrap rounded-lg px-10 py-[13px] text-center shadow-lg ring-1 ring-neutral-900 ring-opacity-5 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-0 ${
                  getType === "link"
                    ? "bg-blue-600 text-white dark:bg-blue-600"
                    : ""
                }`}
              >
                <div>Suggest Link</div>
                {getType === "link" && (
                  <div class="flex-shrink-0 ">
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
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
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                )}
              </button>
              <button
                onClick={() => setType("admin")}
                className={`focus:ring-blue-6000 flex cursor-pointer flex-row items-center justify-center space-x-5 whitespace-nowrap rounded-lg px-10 py-[13px] text-center shadow-lg ring-1 ring-neutral-900 ring-opacity-5 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-0 ${
                  getType === "admin"
                    ? "bg-blue-600 text-white dark:bg-blue-600"
                    : ""
                }`}
              >
                <div>Tell Admin</div>
                {getType === "admin" && (
                  <div class="flex-shrink-0 ">
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
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
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                )}
              </button>
              <button
                onClick={() => setType("other")}
                className={`focus:ring-blue-6000 flex cursor-pointer flex-row items-center justify-center space-x-5 whitespace-nowrap rounded-lg px-10 py-[13px] text-center shadow-lg ring-1 ring-neutral-900 ring-opacity-5 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-0 ${
                  getType === "other"
                    ? "bg-blue-600 text-white dark:bg-blue-600"
                    : ""
                }`}
              >
                <div>Other Topic</div>
                {getType === "other" && (
                  <div class="flex-shrink-0 ">
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
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
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                )}
              </button>
            </div>
          </div>
          <form className="relative w-full min-w-[200px]">
            <textarea
              className="peer h-full min-h-[150px] w-full rounded-[7px] border border-neutral-700 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-neutral-700 placeholder-transparent outline outline-0 transition-all placeholder:italic placeholder-shown:border placeholder-shown:border-neutral-700 placeholder-shown:border-t-neutral-700 focus:border-2 focus:border-blue-600 focus:border-t-transparent focus:placeholder-neutral-400 focus:outline-0 disabled:border-0 disabled:bg-neutral-700"
              placeholder={getPlaceholder}
              value={getForm}
              required
              onChange={(e) => setForm(e.target.value)}
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-neutral-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-neutral-700 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-neutral-700 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-neutral-600 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-600 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-blue-600 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-blue-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-neutral-800">
              {getType === "bug"
                ? "Report Bug"
                : getType === "link"
                ? "Suggest Link"
                : getType === "admin"
                ? "Write to Admin"
                : "Other Topic"}
            </label>
          </form>
          <div className="flex flex-row items-center justify-center space-x-4 rounded-b border-t border-solid border-neutral-300  px-6 md:justify-end">
            <button
              type="button"
              onClick={handleReportModalToggle}
              className="cursor-pointer items-center justify-center rounded-md border-[1.5px] border-neutral-700 px-8 py-2 text-center font-medium text-neutral-700 transition duration-200 ease-in-out hover:border-blue-700 hover:bg-blue-100 hover:text-blue-700 md:px-8 md:py-2"
            >
              Cancel
            </button>
            <button
              onClick={handleReportSubmit}
              className="cursor-pointer items-center justify-center rounded-md border-[1.5px] border-neutral-700 bg-neutral-700 px-8 py-2 text-center font-medium text-white transition duration-200 ease-in-out hover:border-blue-700 hover:bg-blue-700"
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
