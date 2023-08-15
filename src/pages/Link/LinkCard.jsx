import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  openBookmarkModal,
  openShareModal,
  openDetailsModal,
  setModalValue,
} from "../../store/features/modalSlice";

const LinkCard = ({ linkElement }) => {
  const dispatch = useDispatch();

  dispatch(setModalValue(linkElement));

  const handleBookmarkModal = () => {
    dispatch(openBookmarkModal());
  };
  const handleShareModal = () => {
    dispatch(openShareModal());
  };

  const handleDetailsModal = () => {
    dispatch(openDetailsModal());
  };

  return (
    <div class="max-w-sm text-left h-[500px] flex flex-col space-y-6 bg-white border border-gray-200 rounded-2xl shadow-2xl ">
      <div className="h-1/2">
        <img class="rounded-t-2xl" src={linkElement.photo} alt="" />
        <div class="p-5">
          <h5 class="mb-2 text-xl  capitalize font-bold truncate tracking-wide text-gray-900 ">
            {linkElement.title}
          </h5>
          <p class="mb-3  font-normal text-gray-700 line-clamp-3 dark:text-gray-400">
            Create the perfect palette or get inspired by thousands of beautiful
            color schemes.
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full pb-4 space-y-4 h-1/2">
        <div className="flex items-end flex-row justify-between mt-auto px-4">
          <Link
            to={linkElement.url}
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
          <button
            onClick={handleDetailsModal}
            className="flex flex-row space-x-2 transition duration-200 ease-in-out cursor-pointer items-center justify-center rounded-md border-[1.5px] border-black bg-black px-8 py-1 font-medium text-center text-white hover:border-blue-700 hover:bg-blue-700"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
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
        <div class="flex items-end flex-row justify-between mt-auto px-4 border-t pt-3">
          <div
            class=" flex items-center space-x-4 relative"
            data-nc-id="PostCardLikeAndComment"
          >
            <Tippy
              content="Like"
              animation="shift-away"
              className="bg-black font-medium px-1 text-white"
            >
              <button
                class=" relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs focus:outline-none text-neutral-700 bg-gray-50 dark:text-neutral-900 dark:bg-gray-100 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500"
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
              className="bg-black font-medium px-1 text-white"
            >
              <button
                onClick={handleShareModal}
                className="text-neutral-6000 bg-neutral-50 transition-colors dark:text-gray-800 dark:bg-gray-100 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 p-[10px] rounded-full"
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
            class="flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 relative"
            data-nc-id="PostCardSaveAction"
          >
            <Tippy
              content="Bookmark"
              animation="shift-away"
              className="bg-black font-medium px-1 text-white z-[999]"
            >
              <button
                onClick={handleBookmarkModal}
                class="relative rounded-full flex items-center justify-center focus:outline-none p-[10px] text-neutral-700 bg-gray-50 dark:text-neutral-900 dark:bg-gray-100 hover:bg-blue-50 dark:hover:bg-blue-100 hover:text-blue-600 dark:hover:text-blue-500"
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
  );
};

export default LinkCard;
