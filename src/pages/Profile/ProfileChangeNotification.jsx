import { Link } from "react-router-dom";

const ProfileChangeNotification = () => {
  return (
    <div className="z-10 mb-28 w-full rounded-xl border-[0.5px] border-gray-300 p-10 shadow-md sm:max-w-lg">
      <div className="text-center">
        <h2 className="mt-5 text-3xl font-bold text-gray-900">
          Resume Upload!
        </h2>
      </div>
      <form className="mt-8 space-y-3">
        <div className="grid grid-cols-1 space-y-2">
          <label className="text-sm font-bold tracking-wide text-gray-500">
            Current Resume
          </label>
          <div className="flex w-full flex-row items-center justify-between  lg:w-80 ">
            <Link
              to={"https://heroicons.com/"}
              target="_blank"
              className="italic text-blue-500 transition duration-300 ease-in-out hover:text-blue-300"
            >
              Abbosjon_Madiev_Report.pdf
            </Link>
            <Link
              to={"https://heroicons.com/"}
              target="_blank"
              className="italic transition duration-300 ease-in-out hover:text-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-trash"
              >
                <path d="M3 6h18"></path>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
              </svg>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 space-y-2">
          <label className="text-sm font-bold tracking-wide text-gray-500">
            Attach Document
          </label>
          <div className="flex w-full items-center justify-center">
            <label className="group flex h-80 w-full flex-col items-center rounded-lg border-4 border-dashed  p-10 text-center lg:h-72">
              <div className="flex h-full w-full flex-col items-center justify-center text-center">
                <div className="-ml-20 -mt-10 flex max-h-48 w-4/5 flex-auto items-center lg:mx-auto lg:w-3/5">
                  <img
                    className="absolute h-36 object-center "
                    src={
                      require("../../assets/images/Upload-resume.svg").default
                    }
                    alt="freepik"
                  />
                </div>
                <p className="pointer-none text-gray-500">
                  <span className="text-sm">Drag and drop</span> files here{" "}
                  <br /> or{" "}
                  <a href="/" id="" className="text-blue-600 hover:underline">
                    select a file
                  </a>{" "}
                  from your computer
                </p>
              </div>
              <input type="file" accept=".doc,.pdf,.docx" className="hidden" />
            </label>
          </div>
        </div>
        <p className="text-sm text-gray-400">
          <span>File type: DOCX, PDF PPTX</span>
        </p>
        <div>
          <button
            type="submit"
            className="focus:shadow-outline my-5 flex w-full cursor-pointer justify-center rounded-full  bg-blue-500 p-4
                                font-semibold  tracking-wide text-gray-100 shadow-lg transition duration-200 ease-in hover:bg-blue-600 focus:outline-none"
          >
            Upload
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileChangeNotification;
