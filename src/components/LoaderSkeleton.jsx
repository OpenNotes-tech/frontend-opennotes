import React from "react";

const LoaderSkeleton = () => {
  return (
    <div className="flex flex-col space-y-6 pl-4">
      <div
        role="status"
        className=" p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 flex flex-col md:space-y-14 space-y-16 md:py-10 md:px-6 py-20 px-2 w-full"
      >
        <div className="flex lg:flex-row flex-col-reverse items-center lg:justify-between">
          <div className="flex items-center space-x-3">
            <svg
              className="text-gray-200 w-14 h-14"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>
              <div className="h-2.5 bg-gray-200 rounded-full  w-32 mb-2"></div>
              <div className="w-48 h-2 bg-gray-200 rounded-full "></div>
            </div>
          </div>
          <div className="flex flex-row md:space-x-8 space-x-24 items-center justify-between">
            <div className="h-2.5 bg-gray-200 rounded-full  w-48"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-bookmark"
            >
              <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
            </svg>
          </div>
        </div>
        {/* <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div> */}
        {/* <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div> */}
        {/* <div className="h-2 bg-gray-200 rounded-full "></div> */}

        <div className="flex lg:flex-row flex-col space-y-4 lg:space-y-0 lg:justify-between ml-10 lg:ml-0 items-start lg:items-center ">
          <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
          <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
          <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right"
            >
              <line x1="5" x2="19" y1="12" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
      </div>
      <div
        role="status"
        className=" p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 flex flex-col md:space-y-14 space-y-16 md:py-10 md:px-6 py-20 px-2 w-full"
      >
        <div className="flex lg:flex-row flex-col-reverse items-center lg:justify-between">
          <div className="flex items-center space-x-3">
            <svg
              className="text-gray-200 w-14 h-14"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>
              <div className="h-2.5 bg-gray-200 rounded-full  w-32 mb-2"></div>
              <div className="w-48 h-2 bg-gray-200 rounded-full "></div>
            </div>
          </div>
          <div className="flex flex-row md:space-x-8 space-x-24 items-center justify-between">
            <div className="h-2.5 bg-gray-200 rounded-full  w-48"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-bookmark"
            >
              <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
            </svg>
          </div>
        </div>
        {/* <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div> */}
        {/* <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div> */}
        {/* <div className="h-2 bg-gray-200 rounded-full "></div> */}

        <div className="flex lg:flex-row flex-col space-y-4 lg:space-y-0 lg:justify-between ml-10 lg:ml-0 items-start lg:items-center ">
          <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
          <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
          <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right"
            >
              <line x1="5" x2="19" y1="12" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
      </div>
      <div
        role="status"
        className=" p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 flex flex-col md:space-y-14 space-y-16 md:py-10 md:px-6 py-20 px-2 w-full"
      >
        <div className="flex lg:flex-row flex-col-reverse items-center lg:justify-between">
          <div className="flex items-center space-x-3">
            <svg
              className="text-gray-200 w-14 h-14"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>
              <div className="h-2.5 bg-gray-200 rounded-full  w-32 mb-2"></div>
              <div className="w-48 h-2 bg-gray-200 rounded-full "></div>
            </div>
          </div>
          <div className="flex flex-row md:space-x-8 space-x-24 items-center justify-between">
            <div className="h-2.5 bg-gray-200 rounded-full  w-48"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-bookmark"
            >
              <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
            </svg>
          </div>
        </div>
        {/* <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div> */}
        {/* <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div> */}
        {/* <div className="h-2 bg-gray-200 rounded-full "></div> */}

        <div className="flex lg:flex-row flex-col space-y-4 lg:space-y-0 lg:justify-between ml-10 lg:ml-0 items-start lg:items-center ">
          <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
          <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
          <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right"
            >
              <line x1="5" x2="19" y1="12" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
      </div>
      <div
        role="status"
        className=" p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 flex flex-col md:space-y-14 space-y-16 md:py-10 md:px-6 py-20 px-2 w-full"
      >
        <div className="flex lg:flex-row flex-col-reverse items-center lg:justify-between">
          <div className="flex items-center space-x-3">
            <svg
              className="text-gray-200 w-14 h-14"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>
              <div className="h-2.5 bg-gray-200 rounded-full  w-32 mb-2"></div>
              <div className="w-48 h-2 bg-gray-200 rounded-full "></div>
            </div>
          </div>
          <div className="flex flex-row md:space-x-8 space-x-24 items-center justify-between">
            <div className="h-2.5 bg-gray-200 rounded-full  w-48"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-bookmark"
            >
              <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
            </svg>
          </div>
        </div>
        {/* <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div> */}
        {/* <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div> */}
        {/* <div className="h-2 bg-gray-200 rounded-full "></div> */}

        <div className="flex lg:flex-row flex-col space-y-4 lg:space-y-0 lg:justify-between ml-10 lg:ml-0 items-start lg:items-center ">
          <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
          <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
          <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right"
            >
              <line x1="5" x2="19" y1="12" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoaderSkeleton;
