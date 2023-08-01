import { Link } from "react-router-dom";

const ProfileChangeResume = () => {
  return (
    <div className="sm:max-w-lg w-full p-10 border-[0.5px] border-gray-300 shadow-md rounded-xl z-10 mb-28">
      <div className="text-center">
        <h2 className="mt-5 text-3xl font-bold text-gray-900">
          Resume Upload!
        </h2>
      </div>
      <form className="mt-8 space-y-3">
        <div className="grid grid-cols-1 space-y-2">
          <label className="text-sm font-bold text-gray-500 tracking-wide">
            Current Resume
          </label>
          <div className="flex flex-row items-center justify-between w-full  lg:w-80 ">
            <Link
              to={"https://heroicons.com/"}
              target="_blank"
              className="text-blue-500 italic hover:text-blue-300 transition duration-300 ease-in-out"
            >
              Abbosjon_Madiev_Report.pdf
            </Link>
            <Link
              to={"https://heroicons.com/"}
              target="_blank"
              className="italic hover:text-blue-500 transition duration-300 ease-in-out"
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
          <label className="text-sm font-bold text-gray-500 tracking-wide">
            Attach Document
          </label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col rounded-lg border-4 border-dashed items-center w-full h-80 lg:h-72  p-10 group text-center">
              <div className="h-full w-full text-center flex flex-col items-center justify-center">
                <div className="flex flex-auto max-h-48 -ml-20 items-center w-4/5 lg:w-3/5 lg:mx-auto -mt-10">
                  <img
                    className="absolute h-36 object-center "
                    src={
                      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
            className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-200"
          >
            Upload
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileChangeResume;
