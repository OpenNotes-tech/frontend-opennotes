import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  openBookmarkModal,
  openShareModal,
  openDetailsModal,
} from "../../store/features/modalSlice";
// import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const LinkCard = ({ linkElement }) => {
  const dispatch = useDispatch();
  // let mouseX = useMotionValue(0);
  // let mouseY = useMotionValue(0);

  // function handleMouseMove({ currentTarget, clientX, clientY }) {
  //   let { left, top } = currentTarget.getBoundingClientRect();

  //   mouseX.set(clientX - left);
  //   mouseY.set(clientY - top);
  // }
  const handleBookmarkModal = () => {
    dispatch(openBookmarkModal());
  };
  const handleShareModal = () => {
    if (window.innerWidth <= 768 && navigator.share) {
      // You can adjust the width value for your needs
      navigator
        .share({
          title: linkElement.title,
          text: linkElement.description,
          url: linkElement.url,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      dispatch(openShareModal(linkElement));
    }
  };

  const handleDetailsModal = () => {
    dispatch(openDetailsModal(linkElement));
  };

  return (
    <>
      <div
        // onMouseMove={handleMouseMove}
        class=" group relative  flex h-[500px] max-w-sm flex-col space-y-6 rounded-2xl border border-gray-200 bg-white text-left shadow-2xl "
      >
        {/* <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
          }}
        /> */}
        <div className="h-1/2">
          {linkElement.photo ? (
            <img class="rounded-t-2xl" src={linkElement.photo} alt="" />
          ) : (
            <svg
              class="h-12 w-12 text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path>
            </svg>
          )}
          <div class="p-5">
            <h5 class="text-blue-gray-900 mb-2 truncate font-sans text-xl font-bold capitalize leading-snug  tracking-normal antialiased   ">
              {linkElement.title}
            </h5>
            <p class="mb-3 line-clamp-3 font-sans text-base font-normal leading-relaxed text-gray-700  antialiased ">
              Create the perfect palette or get inspired by thousands of
              beautiful color schemes.
            </p>
          </div>
        </div>
        <div className="flex h-1/2 w-full flex-col space-y-4 pb-4">
          <div className="mt-auto flex flex-col justify-between space-y-4 px-4 xl:flex-row xl:space-y-0">
            <Link
              className="flex cursor-pointer flex-row items-center justify-center space-x-2 rounded-md border-[1.5px] border-black px-8 py-1 text-center font-medium text-black transition duration-200 ease-in-out hover:border-blue-700 hover:bg-blue-100 hover:text-blue-700 md:py-1"
              to={linkElement.url}
              target="_blank"
              rel="noopener noreferrer"
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
            <button
              className="flex cursor-pointer flex-row items-center justify-center space-x-2 rounded-md border-[1.5px] border-black bg-black px-8 py-1 text-center font-medium text-white transition duration-200 ease-in-out hover:border-blue-600 hover:bg-blue-600"
              onClick={handleDetailsModal}
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-info"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              <p>Details</p>
            </button>
          </div>
          <div class="text-blue-gray-900 mt-auto flex flex-row items-end justify-between border-t px-4 pt-3 font-sans text-base font-normal leading-relaxed antialiased">
            <div
              class=" relative flex items-center space-x-4"
              data-nc-id="PostCardLikeAndComment"
            >
              <Tippy
                content="Like"
                animation="shift-away"
                className="bg-black px-1 font-medium text-white"
              >
                <button
                  class=" group relative flex h-8 min-w-[68px] items-center rounded-full bg-gray-50 px-3 text-xs leading-none text-neutral-700 transition-colors hover:bg-rose-50 hover:text-rose-600 focus:outline-none dark:bg-gray-100 dark:text-neutral-900 dark:hover:bg-rose-100 dark:hover:text-rose-500"
                  title="Liked"
                  data-nc-id="PostCardLikeAction"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-heart"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                  <span class="ml-1">1.9k</span>
                </button>
              </Tippy>
              <Tippy
                content="Share"
                animation="shift-away"
                className="bg-black px-1 font-medium text-white"
              >
                <button
                  onClick={handleShareModal}
                  className="text-neutral-6000 rounded-full bg-neutral-50 p-[10px] transition-colors hover:bg-teal-50 hover:text-teal-600 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-teal-100 dark:hover:text-teal-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-share-2"
                  >
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                    <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                  </svg>
                </button>
              </Tippy>
            </div>
            <div
              class="relative flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300"
              data-nc-id="PostCardSaveAction"
            >
              <Tippy
                content="Bookmark"
                animation="shift-away"
                className="z-[999] bg-black px-1 font-medium text-white"
              >
                <button
                  onClick={handleBookmarkModal}
                  class="relative flex items-center justify-center rounded-full bg-gray-50 p-[10px] text-neutral-700 hover:bg-blue-50 hover:text-blue-600 focus:outline-none dark:bg-gray-100 dark:text-neutral-900 dark:hover:bg-blue-100 dark:hover:text-blue-600"
                  data-nc-id="NcBookmark"
                  data-nc-bookmark-post-id="DEMO_POSTS_AUDIO_11"
                  title="Save to reading list"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-bookmark"
                  >
                    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                  </svg>
                </button>
              </Tippy>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinkCard;
