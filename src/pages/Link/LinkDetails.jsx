import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  closeDetailsModal,
  openBookmarkModal,
  openShareModal,
} from "../../store/features/modalSlice";
import { motion } from "framer-motion";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away.css";
import { createDropInVariant } from "../../hooks/useAnimationVariants";
import useClickOutside from "../../hooks/useClickOutside";

const LinkDetails = () => {
  const { state } = useLocation();
  return (
    <div className="flex w-full flex-col space-y-5 px-8 py-6 md:h-[600px]  md:space-y-8">
      <div className="flex flex-row items-center justify-evenly space-x-4">
        <img class="w-36 rounded-2xl md:w-52" src={state.photo} alt="" />
        <h5 class="mb-2 truncate  text-xl font-bold capitalize tracking-wide text-gray-900 ">
          {state.title}
        </h5>
      </div>
      <div className="flex flex-row space-x-4">
        <p class="line-clamp-3 font-normal text-gray-700 dark:text-gray-400">
          Create the perfect palette or get inspired by thousands of beautiful
          color schemes.
        </p>
        <Link
          to={state.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 cursor-pointer flex-row items-center justify-center space-x-2 rounded-md border-[1.5px] border-black px-4 text-center font-medium text-black transition duration-200 ease-in-out md:px-8 md:py-1 lg:hover:border-blue-700 lg:hover:bg-blue-100 lg:hover:text-blue-700"
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
        {state &&
          state.tags.map((linkElement, index) => (
            <a
              key={index}
              href="/"
              className="my-1 inline-block rounded-full border-2 px-4 py-1"
            >
              {linkElement}
            </a>
          ))}
      </div>

      <div className="space-x-3">
        <p>Category:</p>
        {state &&
          state.category.map((linkElement, index) => (
            <a
              key={index}
              href="/"
              className="my-1 inline-block rounded-full border-2 px-4 py-1"
            >
              {linkElement}
            </a>
          ))}
      </div>
      <div className="grid grid-cols-2">
        <div>
          <p className="text-lg font-semibold">Search:</p>
          {state.searchText}
        </div>

        <div>
          <p className="text-lg font-semibold">Pricing:</p>
          {state.pricing}
        </div>

        <div>
          <p className="text-lg font-semibold">Created Date:</p>
          {state.createdAt}
        </div>
        <div>
          <p className="text-lg font-semibold">Created Date:</p>
          {state.clickCount}
        </div>
      </div>
      <div class="text-blue-gray-900 mt-auto flex flex-row items-end justify-between border-t px-4 pt-3 font-sans text-base font-normal leading-relaxed antialiased">
        {/* <div
      class=" relative flex items-center space-x-4"
      data-nc-id="PostCardLikeAndComment"
    >
      <Tippy
        content="Like"
        animation="shift-away"
        className="bg-black px-1 font-medium text-white"
      >
        <button
          class=" group relative flex h-8 min-w-[68px] items-center rounded-full bg-gray-50 px-3 text-xs leading-none text-slate-700 transition-colors lg:hover:bg-rose-50 lg:hover:text-rose-600 focus:outline-none dark:bg-gray-100 dark:text-slate-900 dark:lg:hover:bg-rose-100 dark:lg:hover:text-rose-500"
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
          className="text-slate-6000 rounded-full bg-slate-50 p-[10px] transition-colors lg:hover:bg-teal-50 lg:hover:text-teal-600 dark:bg-gray-100 dark:text-gray-800 dark:lg:hover:bg-teal-100 dark:lg:hover:text-teal-800"
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
      class="relative flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-300"
      data-nc-id="PostCardSaveAction"
    >
      <Tippy
        content="Bookmark"
        animation="shift-away"
        className="z-[999] bg-black px-1 font-medium text-white"
      >
        <button
          onClick={handleBookmarkModal}
          class="relative flex items-center justify-center rounded-full bg-gray-50 p-[10px] text-slate-700 lg:hover:bg-blue-50 lg:hover:text-blue-600 focus:outline-none dark:bg-gray-100 dark:text-slate-900 dark:lg:hover:bg-blue-100 dark:lg:hover:text-blue-600"
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
    </div> */}
      </div>
    </div>
  );
};

export default LinkDetails;
