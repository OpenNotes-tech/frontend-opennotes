import React from "react";

const CardList = () => {
  return (
    <div
      class="fixed inset-0 z-50 overflow-y-auto"
      id="headlessui-dialog-114"
      role="dialog"
      aria-modal="true"
      aria-labelledby="headlessui-dialog-title-118"
    >
      <div class="min-h-screen px-1 text-center md:px-4">
        <div
          class="fixed inset-0 bg-neutral-900 bg-opacity-50 dark:bg-opacity-80"
          id="headlessui-dialog-overlay-116"
          aria-hidden="true"
        ></div>
        <span class="inline-block h-screen align-middle" aria-hidden="true">
          &ZeroWidthSpace;
        </span>
        <div class="inline-block w-full my-5 overflow-hidden text-left align-middle transition-all transform bg-white border border-black border-opacity-5 shadow-xl rounded-2xl sm:my-8 dark:bg-neutral-800 dark:border-neutral-700 text-neutral-900 dark:text-neutral-300 max-w-screen-md">
          <div class="py-4 px-6 text-center relative border-b border-neutral-100 dark:border-neutral-700 md:py-5">
            <button
              class="w-8 h-8 flex items-center justify-center rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 absolute left-2 top-1/2 transform -translate-y-1/2 sm:left-4 focus:outline-none"
              tabindex="0"
            >
              <span class="sr-only">Close</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <h3
              class="text-base font-semibold text-neutral-900 lg:text-xl dark:text-neutral-200"
              id="headlessui-dialog-title-118"
            >
              Report Abuse
            </h3>
          </div>
          <div class="py-4 px-6 md:py-5">
            <form action="#">
              <div
                id="headlessui-radiogroup-119"
                role="radiogroup"
                aria-labelledby="headlessui-label-120"
              >
                <label class="sr-only" id="headlessui-label-120" role="none">
                  Problem Plans
                </label>
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-2" role="none">
                  <div
                    class="bg-white border-t border-neutral-50  relative shadow-lg rounded-lg px-3 py-3 cursor-pointer flex sm:px-5 sm:py-4 focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                    id="headlessui-radiogroup-option-121"
                    role="radio"
                    aria-checked="false"
                    tabindex="-1"
                    aria-labelledby="headlessui-label-122"
                  >
                    <div class="flex items-center justify-between w-full">
                      <div class="flex items-center">
                        <div class="text-sm">
                          <p
                            class="font-medium line-clamp-1 text-neutral-900"
                            id="headlessui-label-122"
                          >
                            Violence
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="bg-white border-t border-neutral-50  relative shadow-lg rounded-lg px-3 py-3 cursor-pointer flex sm:px-5 sm:py-4 focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                    id="headlessui-radiogroup-option-123"
                    role="radio"
                    aria-checked="false"
                    tabindex="-1"
                    aria-labelledby="headlessui-label-124"
                  >
                    <div class="flex items-center justify-between w-full">
                      <div class="flex items-center">
                        <div class="text-sm">
                          <p
                            class="font-medium line-clamp-1 text-neutral-900"
                            id="headlessui-label-124"
                          >
                            Trouble
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="bg-white border-t border-neutral-50  relative shadow-lg rounded-lg px-3 py-3 cursor-pointer flex sm:px-5 sm:py-4 focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                    id="headlessui-radiogroup-option-125"
                    role="radio"
                    aria-checked="false"
                    tabindex="-1"
                    aria-labelledby="headlessui-label-126"
                  >
                    <div class="flex items-center justify-between w-full">
                      <div class="flex items-center">
                        <div class="text-sm">
                          <p
                            class="font-medium line-clamp-1 text-neutral-900"
                            id="headlessui-label-126"
                          >
                            Spam
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="bg-primary-6000 text-white dark:bg-primary-700 relative shadow-lg rounded-lg px-3 py-3 cursor-pointer flex sm:px-5 sm:py-4 focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                    id="headlessui-radiogroup-option-127"
                    role="radio"
                    aria-checked="true"
                    tabindex="0"
                    aria-labelledby="headlessui-label-128"
                  >
                    <div class="flex items-center justify-between w-full">
                      <div class="flex items-center">
                        <div class="text-sm">
                          <p
                            class="font-medium line-clamp-1 text-white"
                            id="headlessui-label-128"
                          >
                            Other
                          </p>
                        </div>
                      </div>
                      <div class="flex-shrink-0 text-white">
                        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none">
                          <circle
                            cx="12"
                            cy="12"
                            r="12"
                            fill="#fff"
                            opacity="0.2"
                          ></circle>
                          <path
                            d="M7 13l3 3 7-7"
                            stroke="#fff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-4">
                <h4 class="text-lg font-semibold text-neutral-700 dark:text-neutral-200">
                  Message
                </h4>
                <span class="text-sm text-neutral-6000 dark:text-neutral-400">
                  Please provide any additional information or context that will
                  help us understand and handle the situation.
                </span>
                <textarea
                  class="block w-full text-sm rounded-xl border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 mt-3"
                  rows="4"
                  placeholder="..."
                  required=""
                  id="report-message"
                ></textarea>
              </div>
              <div class="mt-4 space-x-3">
                <button
                  class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                  type="submit"
                >
                  Submit
                </button>
                <button
                  class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base  px-4 py-3 sm:px-6  ttnc-ButtonSecondary font-medium border bg-white border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                  type="button"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardList;
