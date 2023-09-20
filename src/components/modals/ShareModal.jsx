import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeShareModal } from "../../store/features/modalSlice";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createDropInVariant } from "../../hooks/useAnimationVariants";
import useClickOutside from "../../hooks/useClickOutside";

const ShareModal = () => {
  const { isShareModalOpen, modalValue } = useSelector((state) => state.Modal);
  const dropInVariant = createDropInVariant("100vh");
  const dispatch = useDispatch();
  const modalRef = useRef();
  const [getCopy, setCopy] = useState(false);

  // Close the modal when the user clicks outside of it
  useClickOutside(
    modalRef,
    () => {
      dispatch(closeShareModal());
    },
    isShareModalOpen,
  );

  const handleShareModalToggle = () => {
    dispatch(closeShareModal());
  };

  const handleCopy = () => {
    const textField = document.createElement("textarea");
    textField.innerText = modalValue?.url;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();

    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };

  return (
    <motion.div
      class="raletive fixed inset-0 z-[999] grid h-screen w-screen place-items-center  bg-black bg-opacity-60 p-4 text-center opacity-100 backdrop-blur-sm "
      role="dialog"
      ref={modalRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      aria-modal="true"
    >
      <motion.div
        variants={dropInVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ damping: 300 }}
        class="relative z-[9999] inline-block w-full scale-100 overflow-y-auto overflow-x-hidden text-left align-middle opacity-100 sm:w-auto"
      >
        <div class="xs:w-[480px] relative z-50 mx-auto w-full max-w-full overflow-hidden rounded-xl bg-white p-4 sm:w-[520px] sm:p-6 lg:p-8">
          <div class="flex items-center justify-between">
            <h3 class="md:text-md text-gray-dark text-base font-bold leading-8 md:!text-xl">
              Share with
            </h3>
            <button
              type="button"
              onClick={handleShareModalToggle}
              class="lg:hover:enabled:border-gray-1000 focus:enabled:border-gray-1000 inline-flex h-7 w-7 items-center justify-center rounded-md border border-none border-gray-300 bg-transparent p-0.5 transition duration-200 focus:outline-none focus:!ring-0 focus:ring-gray-900/30  active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                class="h-6 w-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div class="mt-7 flex items-center justify-between">
            <div class="group text-center">
              <Link
                target="_blank"
                to={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                  modalValue?.url,
                )}`}
                rel="noreferrer"
                class="group-lg:hover:shadow-md flex h-12 w-12 items-center justify-center rounded-full text-white transition-all duration-200 sm:h-16 sm:w-16 xl:h-[72px] xl:w-[72px]"
                style={{ backgroundColor: "rgb(106, 10, 181)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                  ></path>
                </svg>
              </Link>
              <p class="text-gray-dark   mt-4 text-xs font-normal sm:text-sm">
                LinkedIn
              </p>
            </div>
            <div class="group text-center">
              <Link
                target="_blank"
                to={`https://telegram.me/share/url?url=${encodeURIComponent(
                  modalValue?.url,
                )}`}
                rel="noreferrer"
                class="group-lg:hover:shadow-md flex h-12 w-12 items-center justify-center rounded-full text-white transition-all duration-200 sm:h-16 sm:w-16 xl:h-[72px] xl:w-[72px]"
                style={{ backgroundColor: "rgb(45, 163, 222)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    fill="currentColor"
                    d="M22.265 2.428a2.048 2.048 0 0 0-2.078-.324L2.266 9.339a2.043 2.043 0 0 0 .104 3.818l3.625 1.261 2.02 6.682c.028.089.068.174.119.252.008.012.019.021.027.033a.988.988 0 0 0 .281.265c.095.063.2.11.31.136l.013.001.006.003c.067.014.135.02.203.02l.018-.003a.992.992 0 0 0 .302-.052c.022-.008.041-.02.063-.03a.994.994 0 0 0 .205-.114l.152-.129 2.702-2.983 4.03 3.122c.355.276.792.427 1.241.427a2.054 2.054 0 0 0 2.008-1.633l3.263-16.017a2.03 2.03 0 0 0-.693-1.97ZM9.37 14.736a.994.994 0 0 0-.272.506l-.31 1.504-.784-2.593 4.065-2.117-2.699 2.7Zm8.302 5.304-4.763-3.69a1 1 0 0 0-1.353.12l-.866.955.306-1.487 7.083-7.083a1 1 0 0 0-1.169-1.593L6.745 12.554 3.02 11.191 20.999 4 17.672 20.04Z"
                  ></path>
                </svg>
              </Link>
              <p class="text-gray-dark   mt-4 text-xs font-normal sm:text-sm">
                Telegram
              </p>
            </div>
            <div class="group text-center">
              <Link
                target="_blank"
                to={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                  modalValue?.url,
                )}`}
                rel="noreferrer"
                class="group-lg:hover:shadow-md flex h-12 w-12 items-center justify-center rounded-full text-white transition-all duration-200 sm:h-16 sm:w-16 xl:h-[72px] xl:w-[72px]"
                style={{ backgroundColor: "rgb(3, 182, 3)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    fill="currentColor"
                    d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 1.7-1.2.2-.4.2-.8.1-1.2l-.4-.2Zm2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2 5.5 0 9.9-4.4 9.9-9.9.1-2.6-1-5.1-2.8-7Zm-2.7 14c-1.3.8-2.8 1.3-4.4 1.3-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3c-2.4-4-1.2-9 2.7-11.5 3.9-2.5 8.9-1.2 11.3 2.6 2.4 3.9 1.3 9-2.6 11.4Z"
                  ></path>
                </svg>
              </Link>
              <p class="text-gray-dark   mt-4 text-xs font-normal sm:text-sm">
                Whatsapp
              </p>
            </div>
            <div class="group text-center">
              <Link
                target="_blank"
                to={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  modalValue?.url,
                )}`}
                rel="noreferrer"
                class="group-lg:hover:shadow-md flex h-12 w-12 items-center justify-center rounded-full text-white transition-all duration-200 sm:h-16 sm:w-16 xl:h-[72px] xl:w-[72px]"
                style={{ backgroundColor: "rgb(29, 161, 242)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    fill="currentColor"
                    d="M22.991 3.95a1 1 0 0 0-1.51-.86 7.48 7.48 0 0 1-1.873.794 5.153 5.153 0 0 0-3.374-1.242 5.232 5.232 0 0 0-5.224 5.063 11.032 11.032 0 0 1-6.814-3.924 1.011 1.011 0 0 0-.857-.365.998.998 0 0 0-.785.5 5.275 5.275 0 0 0-.242 4.769l-.002.002a1.041 1.041 0 0 0-.495.888c-.002.147.007.294.026.44a5.185 5.185 0 0 0 1.568 3.312.999.999 0 0 0-.066.77 5.204 5.204 0 0 0 2.362 2.921 7.465 7.465 0 0 1-3.59.449A1 1 0 0 0 1.45 19.3a12.942 12.942 0 0 0 7.01 2.061 12.788 12.788 0 0 0 12.465-9.363c.353-1.183.533-2.412.535-3.646v-.2A5.77 5.77 0 0 0 22.99 3.95Zm-3.306 3.212a.995.995 0 0 0-.234.702c.01.165.01.331.01.488a10.825 10.825 0 0 1-.455 3.08 10.684 10.684 0 0 1-10.546 7.93c-.859 0-1.715-.101-2.55-.301a9.48 9.48 0 0 0 2.942-1.564 1.001 1.001 0 0 0-.602-1.786 3.208 3.208 0 0 1-2.214-.935c.15-.028.298-.063.446-.105a1 1 0 0 0-.08-1.944 3.197 3.197 0 0 1-2.25-1.725c.18.025.362.04.544.046a1.022 1.022 0 0 0 .984-.696 1 1 0 0 0-.4-1.137 3.196 3.196 0 0 1-1.418-2.871 13.014 13.014 0 0 0 8.208 3.48 1.02 1.02 0 0 0 .818-.36 1 1 0 0 0 .206-.867 3.159 3.159 0 0 1-.087-.729 3.23 3.23 0 0 1 4.506-2.962c.403.176.766.433 1.065.756a.993.993 0 0 0 .921.298 9.27 9.27 0 0 0 1.212-.322 6.679 6.679 0 0 1-1.026 1.524Z"
                  ></path>
                </svg>
              </Link>
              <p class="text-gray-dark   mt-4 text-xs font-normal sm:text-sm">
                Twitter
              </p>
            </div>
            <div class="group text-center">
              <Link
                target="_blank"
                to={`mailto:?subject=Check%20this%20out&body=${encodeURIComponent(
                  modalValue?.url,
                )}`}
                rel="noreferrer"
                class="group-lg:hover:shadow-md flex h-12 w-12 items-center justify-center rounded-full text-white transition-all duration-200 sm:h-16 sm:w-16 xl:h-[72px] xl:w-[72px]"
                style={{ backgroundColor: "rgb(185, 66, 42)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="h-6 w-6"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10Zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3Z"
                  ></path>
                </svg>
              </Link>
              <p class="text-gray-dark   mt-4 text-xs font-normal sm:text-sm">
                Email
              </p>
            </div>
          </div>
          <h3 class="md:text-h3 text-gray-dark mt-8 text-base font-bold leading-8 md:!text-xl">
            Or share with link
          </h3>
          <div class="mt-4 flex w-full items-center justify-between gap-4 rounded-lg bg-gray-100 p-2 sm:px-5 sm:py-4 md:mt-7">
            <p class="text-gray line-clamp-1 w-3/4 select-all overflow-clip text-ellipsis font-normal italic">
              {modalValue?.url}
            </p>
            <button
              type="button"
              class="lg:hover:text-gray-1000 inline-flex h-7 w-7 items-center justify-center rounded-md p-0.5 transition duration-200 focus:outline-none focus:!ring-0 focus:ring-gray-900/30 active:scale-95"
              onClick={handleCopy}
            >
              {getCopy ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#34d399"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check-circle"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-files"
                >
                  <path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" />
                  <path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" />
                  <path d="M15 2v5h5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ShareModal;
