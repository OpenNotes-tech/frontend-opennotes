// import { Link } from "react-router-dom";

const LinkCard = ({ LinkElement }) => {
  return (
    <div class="max-w-sm text-left h-[440px] flex flex-col space-y-10 bg-white border border-gray-200 rounded-2xl shadow-2xl dark:bg-gray-800 dark:border-gray-700">
      <div>
        <a href="/">
          <img
            class="rounded-t-2xl"
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="/">
            <h5 class="mb-2 text-xl  capitalize font-semibold truncate tracking-wide text-gray-900 dark:text-white">
              Noteworthy technology 
            </h5>
          </a>
          <p class="mb-3  font-normal text-gray-700 line-clamp-2 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
      <div>
        <div class="flex items-end justify-between mt-auto px-4">
          <div
            class="nc-PostCardLikeAndComment flex items-center space-x-2 relative"
            data-nc-id="PostCardLikeAndComment"
          >
            <button
              class=" relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs focus:outline-none text-neutral-700 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500"
              title="Liked"
              data-nc-id="PostCardLikeAction"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="ml-1 text-neutral-900 dark:text-neutral-200">
                1.9k
              </span>
            </button>
            <a
              class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex  px-3 h-8 text-xs focus:outline-none"
              title="Comments"
              data-nc-id="PostCardCommentBtn"
              href="/ncmaz/single-audio/this-is-single-slug#comments"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"
                ></path>
              </svg>
              <span class="ml-1 text-neutral-900 dark:text-neutral-200">
                39
              </span>
            </a>
          </div>
          <div
            class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 relative"
            data-nc-id="PostCardSaveAction"
          >
            <button
              class="nc-NcBookmark relative rounded-full flex items-center justify-center focus:outline-none h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
              data-nc-id="NcBookmark"
              data-nc-bookmark-post-id="DEMO_POSTS_AUDIO_11"
              title="Save to reading list"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  aria-hidden="true"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkCard;
