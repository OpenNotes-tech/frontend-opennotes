import { useEffect, useRef } from "react";
// import { setError, setLoading } from "../../store/features/errorSlice";
import { useSelector, useDispatch } from "react-redux";
import { closeBookmarkModal } from "../../store/features/modalSlice";

const BookmarkModal = () => {
  const isBookmarkModalOpen = useSelector(
    (state) => state.Modal.isBookmarkModalOpen
  );
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
      <div
        data-dialog="sign-in-dialog"
        class="relative mx-auto flex w-full max-w-[20rem] md:max-w-[30rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
      >
        <button
          aria-label="Close panel"
          onClick={handleBookmarkModalToggle}
          class="absolute z-10 inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-white text-gray-600 transition duration-200 focus:outline-none focus:text-gray-800 focus:shadow-md hover:text-gray-800 hover:shadow-md left-[310px] md:left-[465px] -top-3"
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
        <div className="h-48 flex items-center justify-center text-xl font-semibold">
          <h1>Coming Soon...</h1>
        </div>
      </div>
    </div>
  );
};

export default BookmarkModal;
