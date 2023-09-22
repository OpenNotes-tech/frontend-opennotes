import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeNewsModal } from "../../store/features/modalSlice";
import { motion } from "framer-motion";
import { createDropInVariant } from "../../hooks/useAnimationVariants";
import useClickOutside from "../../hooks/useClickOutside";

const NewsletterModal = () => {
  const isLangModalOpen = useSelector((state) => state.Modal.isLangModalOpen);
  const dropInVariant = createDropInVariant("100vh");
  const dispatch = useDispatch();
  const modalRef = useRef();

  // Close the modal when the user clicks outside of it
  useClickOutside(
    modalRef,
    () => {
      dispatch(closeNewsModal());
    },
    isLangModalOpen,
  );

  const handleNewsModalToggle = () => {
    dispatch(closeNewsModal());
  };

  return (
    <motion.div
      data-dialog-backdrop="sign-in-dialog"
      data-dialog-backdrop-close="true"
      ref={modalRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      class="raletive fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-100 backdrop-blur-sm "
    >
      <motion.div
        variants={dropInVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ damping: 300 }}
        data-dialog="sign-in-dialog"
        class="relative flex max-w-[60rem] flex-row rounded-xl bg-white bg-clip-border text-slate-700 shadow-md"
      >
        <button
          aria-label="Close panel"
          onClick={handleNewsModalToggle}
          class="absolute -top-3 left-[300px] z-10 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-slate-700 transition duration-200 focus:text-slate-800 focus:shadow-md focus:outline-none md:left-[950px] md:h-8 md:w-8 lg:hover:text-slate-800 lg:hover:shadow-md"
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
        <div className="w-3/6">
          <img
            src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fnewsletter.jpg&w=750&q=75"
            alt="Hello"
            className="rounded-l-xl"
          />
        </div>
        <div className="flex w-3/6 flex-col items-center justify-center space-y-8">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <p>SUBSCRIBE NOW</p>
            <h2>And Get Offer On New Collection</h2>
            <p className="px-20 text-xs">
              Do subscribe the ChawkBazar to receive updates on new arrivals,
              special offers & our promotions
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div class="relative flex h-10 w-full min-w-[300px] max-w-[24rem]">
              <input
                type="email"
                class="border-blue-gray-200 text-blue-gray-700 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 disabled:bg-blue-gray-50 peer h-full w-full rounded-[7px] border border-t-transparent bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0"
                placeholder=" "
                required
              />
              <button
                class="peer-placeholder-shown:bg-blue-gray-500 !absolute right-1 top-1 z-10 select-none rounded bg-blue-500 px-4 py-2 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
                type="button"
                data-ripple-light="true"
              >
                Subscribe
              </button>
              <label class="before:content[' '] after:content[' '] text-blue-gray-400 before:border-blue-gray-200 after:border-blue-gray-200 peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-blue-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent">
                Email Address
              </label>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default NewsletterModal;
