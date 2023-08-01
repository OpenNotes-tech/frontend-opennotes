import React from "react";

const CardList = () => {
  return (
    <div
      class="nc-Card11 relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] h-full"
      data-nc-id="Card11"
    >
      <div class="block flex-shrink-0 relative w-full rounded-t-xl overflow-hidden aspect-w-4 aspect-h-3">
        <div>
          <div
            class="nc-PostFeaturedMedia relative  w-full h-full "
            data-nc-id="PostFeaturedMedia"
          >
            <div class="nc-NcImage absolute inset-0" data-nc-id="NcImage">
              <img
                src="https://images.unsplash.com/photo-1488036106564-87ecb155bb15?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
                class="object-cover w-full h-full"
                alt="nc-imgs"
              />
            </div>
            <div class="absolute inset-0"></div>
          </div>
        </div>
      </div>
      <a class="absolute inset-0" href="/ncmaz/single/this-is-single-slug">
        sd
      </a>
      <span class="absolute top-3 inset-x-3 z-10">
        <div
          class="nc-CategoryBadgeList flex flex-wrap space-x-2"
          data-nc-id="CategoryBadgeList"
        >
          <a
            class="transition-colors hover:text-white duration-300 nc-Badge relative inline-flex px-2.5 py-1 rounded-full font-medium text-xs  text-pink-800 bg-pink-100 hover:bg-pink-800"
            href="/ncmaz/archive/the-demo-archive-slug"
          >
            Tools
          </a>
        </div>
      </span>
      <div class="p-4 flex flex-col flex-grow space-y-3">
        <div
          class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 text-xs leading-none"
          data-nc-id="PostCardMeta"
        >
          <a
            class="relative flex items-center space-x-2"
            href="/ncmaz/author/the-demo-author-slug"
          >
            <div class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900">
              <img
                class="absolute inset-0 w-full h-full object-cover"
                src="/ncmaz/src/data/avatars/4.jpg"
                alt="Falconar Agnes"
              />
              <span class="wil-avatar__name">F</span>
            </div>
            <span class="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
              Falconar Agnes
            </span>
          </a>
          <span class="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
            ·
          </span>
          <span class="text-neutral-500 dark:text-neutral-400 font-normal">
            May 20, 2021
          </span>
        </div>
        <h2 class="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 ">
          <a
            class="line-clamp-2"
            title="New ideas and energized employees fuel Microsoft’s ongoing efforts toward racial equity "
            href="/ncmaz/single/this-is-single-slug"
          >
            New ideas and energized employees fuel Microsoft’s ongoing efforts
            toward racial equity{" "}
          </a>
        </h2>
        <div class="flex items-end justify-between mt-auto">
          <div
            class="nc-PostCardLikeAndComment flex items-center space-x-2 relative"
            data-nc-id="PostCardLikeAndComment"
          >
            <button
              class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs focus:outline-none text-neutral-700 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500"
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
                3.1k
              </span>
            </button>
            <a
              class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex  px-3 h-8 text-xs focus:outline-none"
              title="Comments"
              data-nc-id="PostCardCommentBtn"
              href="/ncmaz/single/this-is-single-slug#comments"
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
              <span class="ml-1 text-neutral-900 dark:text-neutral-200">1</span>
            </a>
          </div>
          <div
            class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 relative"
            data-nc-id="PostCardSaveAction"
          >
            <button
              class="nc-NcBookmark relative rounded-full flex items-center justify-center focus:outline-none h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
              data-nc-id="NcBookmark"
              data-nc-bookmark-post-id="DEMO_POSTS_18"
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

export default CardList;
