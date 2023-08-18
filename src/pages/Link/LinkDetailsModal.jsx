import { useEffect, useRef } from "react";
import { setError, setLoading } from "../../store/features/errorSlice";
import { useSelector, useDispatch } from "react-redux";
import { closeDetailsModal } from "../../store/features/modalSlice";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";

const LinkDetailsModal = () => {
  const { isDetailsModalOpen, modalValue } = useSelector(
    (state) => state.Modal
  );
  const loading = useSelector((state) => state.Error.loading);
  const dispatch = useDispatch();
  const modalRef = useRef();

  // Close the modal when the user clicks outside of it
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target === modalRef.current) {
        dispatch(closeDetailsModal());
      }
    };
    if (isDetailsModalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dispatch, isDetailsModalOpen]);

  const handleDetailsModalToggle = () => {
    dispatch(closeDetailsModal());
  };

  return (
    <>
      {isDetailsModalOpen && (
        <div
          data-dialog-backdrop="sign-in-dialog"
          data-dialog-backdrop-close="true"
          ref={modalRef}
          class="raletive fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-100 backdrop-blur-sm transition-opacity duration-300"
        >
          <div
            data-dialog="sign-in-dialog"
            class="relative mx-auto flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
          >
            {loading && <Loader />}
            <button
              aria-label="Close panel"
              onClick={handleDetailsModalToggle}
              class="absolute z-10 inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-white text-gray-600 transition duration-200 focus:outline-none focus:text-gray-800 focus:shadow-md hover:text-gray-800 hover:shadow-md left-[405px] -top-3"
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
            <div className="flex flex-col justify-center items-center">
              <div class="max-w-sm text-left h-[500px] flex flex-col space-y-6 bg-white border border-gray-200 rounded-2xl shadow-2xl ">
                <div className="h-1/2">
                  <img class="rounded-t-2xl" src={modalValue.photo} alt="" />
                  <div class="p-5">
                    <h5 class="mb-2 text-xl  capitalize font-bold truncate tracking-wide text-gray-900 ">
                      {modalValue.title}
                    </h5>
                    <p class="mb-3  font-normal text-gray-700 line-clamp-3 dark:text-gray-400">
                      Create the perfect palette or get inspired by thousands of
                      beautiful color schemes.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col w-full pb-4 space-y-4 h-1/2">
                  <div className="flex items-end flex-col md:flex-row justify-between mt-auto px-4">
                    <Link
                      to={modalValue.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-row space-x-2 transition duration-200 ease-in-out cursor-pointer items-center justify-center rounded-md border-[1.5px] border-black px-8 py-1 md:py-1 text-center font-medium text-black hover:border-blue-700 hover:bg-blue-100 hover:text-blue-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-external-link"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" x2="21" y1="14" y2="3" />
                      </svg>
                      <p>Open</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LinkDetailsModal;
