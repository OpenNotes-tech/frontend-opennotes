const LoaderSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-y-12 pb-16 md:grid-cols-2 md:gap-x-12 md:pb-10 lg:grid-cols-3 xl:grid-cols-4">
      <div
        role="status"
        class=" animate-pulse rounded-xl border border-gray-200 p-4 shadow md:p-6"
      >
        <div class="mb-4 flex h-48 items-center justify-center rounded bg-gray-300 ">
          <svg
            class="h-12 w-12 text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 640 512"
          >
            <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path>
          </svg>
        </div>
        <div class="mb-4 h-2.5 w-48  rounded-full bg-gray-200"></div>
        <div class="mb-2.5 h-2 rounded-full  bg-gray-200"></div>
        <div class="mb-2.5 h-2 rounded-full  bg-gray-200"></div>
        <div class="h-2 rounded-full bg-gray-200 "></div>
        <div class="mt-4 flex items-center space-x-3">
          <svg
            class="h-10 w-10 text-gray-200 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
          <div>
            <div class="mb-2 h-2.5 w-32  rounded-full bg-gray-200"></div>
            <div class="h-2 w-48 rounded-full bg-gray-200 "></div>
          </div>
        </div>
      </div>

      <div
        role="status"
        class="hidden  animate-pulse rounded-xl border border-gray-200 p-4 shadow md:block md:p-6 "
      >
        <div class="mb-4 flex h-48 items-center justify-center rounded bg-gray-300 ">
          <svg
            class="h-12 w-12 text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 640 512"
          >
            <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path>
          </svg>
        </div>
        <div class="mb-4 h-2.5 w-48  rounded-full bg-gray-200"></div>
        <div class="mb-2.5 h-2 rounded-full  bg-gray-200"></div>
        <div class="mb-2.5 h-2 rounded-full  bg-gray-200"></div>
        <div class="h-2 rounded-full bg-gray-200 "></div>
        <div class="mt-4 flex items-center space-x-3">
          <svg
            class="h-10 w-10 text-gray-200 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
          <div>
            <div class="mb-2 h-2.5 w-32  rounded-full bg-gray-200"></div>
            <div class="h-2 w-48 rounded-full bg-gray-200 "></div>
          </div>
        </div>
        <span class="sr-only">Loading...</span>
      </div>

      <div
        role="status"
        class="hidden  animate-pulse rounded-xl border border-gray-200 p-4 shadow md:p-6 lg:block "
      >
        <div class="mb-4 flex h-48 items-center justify-center rounded bg-gray-300 ">
          <svg
            class="h-12 w-12 text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 640 512"
          >
            <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path>
          </svg>
        </div>
        <div class="mb-4 h-2.5 w-48  rounded-full bg-gray-200"></div>
        <div class="mb-2.5 h-2 rounded-full  bg-gray-200"></div>
        <div class="mb-2.5 h-2 rounded-full  bg-gray-200"></div>
        <div class="h-2 rounded-full bg-gray-200 "></div>
        <div class="mt-4 flex items-center space-x-3">
          <svg
            class="h-10 w-10 text-gray-200 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
          <div>
            <div class="mb-2 h-2.5 w-32  rounded-full bg-gray-200"></div>
            <div class="h-2 w-48 rounded-full bg-gray-200 "></div>
          </div>
        </div>
        <span class="sr-only">Loading...</span>
      </div>

      <div
        role="status"
        class="hidden  animate-pulse  rounded-xl border border-gray-200 p-4 shadow md:p-6 xl:block "
      >
        <div class="mb-4 flex h-48 items-center justify-center rounded bg-gray-300 ">
          <svg
            class="h-12 w-12 text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 640 512"
          >
            <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path>
          </svg>
        </div>
        <div class="mb-4 h-2.5 w-48  rounded-full bg-gray-200"></div>
        <div class="mb-2.5 h-2 rounded-full  bg-gray-200"></div>
        <div class="mb-2.5 h-2 rounded-full  bg-gray-200"></div>
        <div class="h-2 rounded-full bg-gray-200 "></div>
        <div class="mt-4 flex items-center space-x-3">
          <svg
            class="h-10 w-10 text-gray-200 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
          <div>
            <div class="mb-2 h-2.5 w-32  rounded-full bg-gray-200"></div>
            <div class="h-2 w-48 rounded-full bg-gray-200 "></div>
          </div>
        </div>
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default LoaderSkeleton;
