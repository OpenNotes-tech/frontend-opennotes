// import { Link } from "react-router-dom";

import BookmarkModal from "../../components/BookmarkModal";
import { useSelector, useDispatch } from "react-redux";
import {
  openBookmarkModal,
  openShareModal,
} from "../../store/features/modalSlice";
import ShareModal from "../../components/ShareModal";
import LinkDetailsModal from "./LinkDetailsModal";

const LinkCard = ({ LinkElement }) => {
  const { isBookmarkModalOpen, isShareModalOpen, isDetailsModalOpen } =
    useSelector((state) => state.Modal);
  const dispatch = useDispatch();

  const handleBookmarkModal = () => {
    dispatch(openBookmarkModal());
  };
  const handleShareModal = () => {
    dispatch(openShareModal());
  };

  const handleDetailsModal = () => {
    dispatch(openShareModal());
  };

  return (
    <div class="max-w-sm text-left h-[480px] flex flex-col space-y-6 bg-white border border-gray-200 rounded-2xl shadow-2xl ">
      <div className="h-1/2">
        <a href="/">
          <img
            class="rounded-t-2xl"
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="/">
            <h5 class="mb-2 text-xl  capitalize font-semibold truncate tracking-wide text-gray-900 ">
              Noteworthy technology
            </h5>
          </a>
          <p class="mb-3  font-normal text-gray-700 line-clamp-2 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full pb-4 space-y-4 h-1/2">
        <div className="flex items-end flex-row justify-between mt-auto px-4">
          <button
            type="button"
            className="transition duration-200 ease-in-out cursor-pointer items-center justify-center rounded-md border-[1.5px] border-black px-10 md:px-10 py-1 md:py-1 text-center font-medium text-black hover:border-blue-700 hover:bg-blue-100 hover:text-blue-700"
          >
            Open
          </button>
          <button
            onClick={handleDetailsModal}
            className="transition duration-200 ease-in-out cursor-pointer items-center justify-center rounded-md border-[1.5px] border-black bg-black px-10 py-1 font-medium text-center text-white hover:border-blue-700 hover:bg-blue-700"
            type="button"
          >
            Details
          </button>
          {isDetailsModalOpen && <LinkDetailsModal />}
        </div>
        <div class="flex items-end flex-row justify-between mt-auto px-4">
          <div
            class="nc-PostCardLikeAndComment flex items-center space-x-2 relative"
            data-nc-id="PostCardLikeAndComment"
          >
            <button
              class=" relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs focus:outline-none text-neutral-700 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500"
              title="Liked"
              data-nc-id="PostCardLikeAction"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
              <span class="ml-1 text-neutral-900 dark:text-neutral-200">
                1.9k
              </span>
            </button>
            <div>
              <button onClick={handleShareModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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
              {isShareModalOpen && <ShareModal />}
            </div>
          </div>
          <div
            class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 relative"
            data-nc-id="PostCardSaveAction"
          >
            <button
              onClick={handleBookmarkModal}
              class="nc-NcBookmark relative rounded-full flex items-center justify-center focus:outline-none h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
              data-nc-id="NcBookmark"
              data-nc-bookmark-post-id="DEMO_POSTS_AUDIO_11"
              title="Save to reading list"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
          </div>
          {isBookmarkModalOpen && <BookmarkModal />}
        </div>
      </div>
    </div>
  );
};

export default LinkCard;
