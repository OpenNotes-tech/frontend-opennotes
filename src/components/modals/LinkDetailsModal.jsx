import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { closeDetailsModal } from "../../store/features/modalSlice";

const LinkDetailsModal = () => {
  const { isDetailsModalOpen, modalValue } = useSelector(
    (state) => state.Modal
  );
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
  console.log(modalValue);
  return (
    <>
      {isDetailsModalOpen && (
        <div
          data-dialog-backdrop="sign-in-dialog"
          data-dialog-backdrop-close="true"
          ref={modalRef}
          class="raletive fixed inset-0 z-[999]  grid   w-screen place-items-center bg-black bg-opacity-60 opacity-100 backdrop-blur-sm transition-opacity duration-300"
        >
          <div
            data-dialog="sign-in-dialog"
            class="relative mx-auto flex w-full  md:max-w-[50rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
          >
            <button
              aria-label="Close panel"
              onClick={handleDetailsModalToggle}
              class="absolute z-10 inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-white text-gray-600 transition duration-200 focus:outline-none focus:text-gray-800 focus:shadow-md hover:text-gray-800 hover:shadow-md left-56 md:left-[790px] -top-3"
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
            <div className="flex flex-col py-6 w-full px-8 space-y-5 md:space-y-8  md:h-[600px]">
              <div className="flex flex-row space-x-4 items-center justify-evenly">
                <img
                  class="rounded-2xl w-36 md:w-52"
                  src={modalValue.photo}
                  alt=""
                />
                <h5 class="mb-2 text-xl  capitalize font-bold truncate tracking-wide text-gray-900 ">
                  {modalValue.title}
                </h5>
              </div>
              <div className="flex flex-row space-x-4">
                <p class="font-normal text-gray-700 line-clamp-3 dark:text-gray-400">
                  Create the perfect palette or get inspired by thousands of
                  beautiful color schemes.
                </p>
                <Link
                  to={modalValue.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row space-x-2 transition duration-200 ease-in-out cursor-pointer items-center justify-center rounded-md border-[1.5px] border-black px-4 md:px-8 md:py-1 h-10 text-center font-medium text-black hover:border-blue-700 hover:bg-blue-100 hover:text-blue-700"
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
              <div className="space-x-3">
                <p>Tags:</p>
                {modalValue &&
                  modalValue.tags.map((linkElement, index) => (
                    <a
                      key={index}
                      href="/"
                      className="border-2 px-4 py-1 inline-block my-1 rounded-full"
                    >
                      {linkElement}
                    </a>
                  ))}
              </div>
              <div className="space-x-3">
                <p>Category:</p>
                {modalValue &&
                  modalValue.category.map((linkElement, index) => (
                    <a
                      key={index}
                      href="/"
                      className="border-2 px-4 py-1 inline-block my-1 rounded-full"
                    >
                      {linkElement}
                    </a>
                  ))}
              </div>
              <div className="grid grid-cols-2">
                <div>
                  <p className="font-semibold text-lg">Click Count:</p>
                  {modalValue.clickCount}
                </div>
                <div>
                  <p className="font-semibold text-lg">Pricing:</p>
                  {modalValue.pricing}
                </div>
                <div>
                  <p className="font-semibold text-lg">Rating:</p>
                  {modalValue.rating}
                </div>
                <div>
                  <p className="font-semibold text-lg">Created Date:</p>
                  {modalValue.createdAt.split("T")[0]}
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
