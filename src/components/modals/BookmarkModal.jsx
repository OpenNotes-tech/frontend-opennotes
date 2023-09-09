import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeBookmarkModal } from "../../store/features/modalSlice";
import { motion } from "framer-motion";
import { createDropInVariant } from "../../hooks/useAnimationVariants";
import useClickOutside from "../../hooks/useClickOutside";

const BookmarkModal = () => {
  const dropInVariant = createDropInVariant("100vh");
  const isBookmarkModalOpen = useSelector(
    (state) => state.Modal.isBookmarkModalOpen,
  );
  const dispatch = useDispatch();
  const modalRef = useRef();

  // Close the modal when the user clicks outside of it
  useClickOutside(
    modalRef,
    () => {
      dispatch(closeBookmarkModal());
    },
    isBookmarkModalOpen,
  );

  const handleBookmarkModalToggle = () => {
    dispatch(closeBookmarkModal());
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
        class="relative mx-auto flex w-full max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border text-slate-700 shadow-md md:max-w-[30rem]"
      >
        <button
          aria-label="Close panel"
          onClick={handleBookmarkModalToggle}
          class="absolute -top-3 left-[310px] z-10 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-slate-700 transition duration-200 focus:text-slate-800 focus:shadow-md focus:outline-none md:left-[465px] md:h-8 md:w-8 lg:hover:text-slate-800 lg:hover:shadow-md"
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
        <div className="flex h-48 items-center justify-center text-xl font-semibold">
          <h1>Coming Soon...</h1>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BookmarkModal;
