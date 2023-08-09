import { useEffect, useRef } from "react";
import { setError, setLoading } from "../store/features/errorSlice";
import { useSelector, useDispatch } from "react-redux";
import { closeBookmarkModal } from "../store/features/modalSlice";
import Loader from "./Loader";
const BookmarkModal = () => {
  const isBookmarkModalOpen = useSelector(
    (state) => state.Modal.isBookmarkModalOpen
  );
  const loading = useSelector((state) => state.Error.loading);
  const dispatch = useDispatch();
  const modalRef = useRef();

  // Close the modal when the user clicks outside of it
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target === modalRef.current) {
        dispatch(closeBookmarkModal());
      }
    };
    if (isBookmarkModalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dispatch, isBookmarkModalOpen]);

  const handleBookmarkModalToggle = () => {
    dispatch(closeBookmarkModal());
  };

  return (
    <div
      data-dialog-backdrop="sign-in-dialog"
      data-dialog-backdrop-close="true"
      ref={modalRef}
      class="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-100 backdrop-blur-sm transition-opacity duration-300"
    >
      {loading && <Loader />}
      <div
        data-dialog="sign-in-dialog"
        class="relative mx-auto flex w-full max-w-[30rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
      >
        <button
          aria-label="Close panel"
          onClick={handleBookmarkModalToggle}
          class="absolute z-10 inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-white text-gray-600 transition duration-200 focus:outline-none focus:text-gray-800 focus:shadow-md hover:text-gray-800 hover:shadow-md left-[465px] -top-3"
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
          <div className="flex flex-row justify-center mt-5 -mb-3 pb-2 border-b">
            <h3
              class="text-base font-semibold text-neutral-900 lg:text-xl capital font-serif"
              id="headlessui-dialog-title-38"
            >
              Report Admin
            </h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div
              class="grid grid-cols-2 lg:grid-cols-4 gap-2 text-xs font-normal"
              role="none"
            >
              <div className="flex flex-row space-x-5 px-10 py-2 bg-blue-6000 text-white dark:bg-blue-700 items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-6000 dark:focus:ring-offset-0 cursor-pointer shadow-lg rounded-lg">
                <div>Violence</div>
                <div class="flex-shrink-0 text-black">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle
                      cx="12"
                      cy="12"
                      r="12"
                      fill="#000"
                      opacity="0.2"
                    ></circle>
                    <path
                      d="M7 13l3 3 7-7"
                      stroke="#000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="flex flex-row space-x-5 px-10 py-2 bg-blue-6000 text-white dark:bg-blue-700 items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-6000 dark:focus:ring-offset-0 cursor-pointer shadow-lg rounded-lg">
                <div>Trouble</div>
                <div class="flex-shrink-0 text-black">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle
                      cx="12"
                      cy="12"
                      r="12"
                      fill="#000"
                      opacity="0.2"
                    ></circle>
                    <path
                      d="M7 13l3 3 7-7"
                      stroke="#000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="flex flex-row space-x-5 px-10 py-2 bg-blue-6000 text-white dark:bg-blue-700 items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-6000 dark:focus:ring-offset-0 cursor-pointer shadow-lg rounded-lg">
                <div>Spam</div>
                <div class="flex-shrink-0 text-black">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle
                      cx="12"
                      cy="12"
                      r="12"
                      fill="#000"
                      opacity="0.2"
                    ></circle>
                    <path
                      d="M7 13l3 3 7-7"
                      stroke="#000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="flex flex-row space-x-5 px-10 py-2 bg-blue-6000 text-white dark:bg-blue-700 items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-6000 dark:focus:ring-offset-0 cursor-pointer shadow-lg rounded-lg">
                <div>Other</div>
                <div class="flex-shrink-0 text-black">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle
                      cx="12"
                      cy="12"
                      r="12"
                      fill="#000"
                      opacity="0.2"
                    ></circle>
                    <path
                      d="M7 13l3 3 7-7"
                      stroke="#000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full min-w-[200px]">
            <textarea
              className="peer h-full w-full min-h-[100px] rounded-[7px] border placeholder-transparent placeholder:italic focus:placeholder-gray-400 border-gray-800 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-800 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-800 placeholder-shown:border-t-gray-800 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-800"
              placeholder="10 Anson Road, International Plaza, #10-11, 079903 Singapore, Singapore"
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-800 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-700 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-900">
              Address
            </label>
          </div>
          <div className="flex items-center flex-row space-x-4 md:justify-end rounded-b border-t border-solid border-slate-200  justify-center  px-6">
            <button
              type="button"
              onClick={handleBookmarkModalToggle}
              className="transition duration-200 ease-in-out cursor-pointer items-center justify-center rounded-md border-[1.5px] border-black px-8 md:px-8 py-2 md:py-2 text-center font-medium text-black hover:border-blue-700 hover:bg-blue-100 hover:text-blue-700"
            >
              Cancel
            </button>
            <button
              className="transition duration-200 ease-in-out cursor-pointer items-center justify-center rounded-md border-[1.5px] border-black bg-black px-8 py-2 font-medium text-center text-white hover:border-blue-700 hover:bg-blue-700"
              type="button"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookmarkModal;
