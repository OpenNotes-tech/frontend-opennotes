import { Link } from "react-router-dom";

const ProfileChangeEducation = () => {
  return (
    <div className="border-[0.6px] border-gray-200 shadow-md mb-28 rounded-lg lg:-mr-0 sm:-mr-6 bg-white">
      <div className="border-b border-gray-200 px-6 lg:px-10 py-8 flex flex-row justify-between items-center">
        <h1 className="text-xl font-medium">Your Education</h1>
        <Link
          className="lg:mr-10 hover:text-blue-500 text-slate-500 italic"
          to="/profile"
        >
          + Add education
        </Link>
      </div>
      <div className="flex flex-row space-x-6 lg:space-x-8 px-6  lg:px-10 py-8 w-full h-full border-b border-gray-200">
        <div>
          <div className="h-12 w-12 rounded bg-center bg-cover bg-no-repeat">
            <img
              className="w-full object-cover rounded border-2 border-white shadow"
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col space-y-10 lg:space-y-0 justify-between w-full lg:pr-10 lg:items-start items-end">
          <div>
            <h1 className="text-xl font-medium">Unversity of Central Asia</h1>
            <p className="text-gray-600">
              Bachelor's degree - <span>Computer Science</span>
            </p>
            <p className="text-gray-500">
              Sep 2019 - May 2023{" "}
              <span className="italic text-slate-400">(Expected)</span>{" "}
            </p>
          </div>
          <Link
            to={"/profile"}
            className=" hover:text-blue-500 flex flex-row space-x-2 items-center font-normal text-center text-slate-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 18"
              fill="none"
              // style={{ stroke: "#3b82f6" }}
              stroke="#64748b"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-edit-3"
            >
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
            <p className="italic hover:text-blue-500">Edit</p>
          </Link>
        </div>
      </div>
      <div className="flex flex-row space-x-6 lg:space-x-8 px-6  lg:px-10 py-8 w-full h-full border-b border-gray-200">
        <div>
          <div className="h-12 w-12 rounded bg-center bg-cover bg-no-repeat">
            <img
              className="w-full object-cover rounded border-2 border-white shadow"
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col space-y-10 lg:space-y-0 justify-between w-full lg:pr-10 lg:items-start items-end">
          <div>
            <h1 className="text-xl font-medium">Unversity of Central Asia</h1>
            <p className="text-gray-600">
              Bachelor's degree - <span>Computer Science</span>
            </p>
            <p className="text-gray-500">
              Sep 2019 - May 2023{" "}
              <span className="italic text-slate-400">(Expected)</span>{" "}
            </p>
          </div>
          <Link
            to={"/profile"}
            className=" hover:text-blue-500 flex flex-row space-x-2 items-center font-normal text-center text-slate-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 18"
              fill="none"
              // style={{ stroke: "#3b82f6" }}
              stroke="#64748b"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-edit-3"
            >
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
            <p className="italic hover:text-blue-500">Edit</p>
          </Link>
        </div>
      </div>
      <div className="flex flex-row space-x-6 lg:space-x-8 px-6  lg:px-10 py-8 w-full h-full border-b border-gray-200">
        <div>
          <div className="h-12 w-12 rounded bg-center bg-cover bg-no-repeat">
            <img
              className="w-full object-cover rounded border-2 border-white shadow"
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col space-y-10 lg:space-y-0 justify-between w-full lg:pr-10 lg:items-start items-end">
          <div>
            <h1 className="text-xl font-medium">Unversity of Central Asia</h1>
            <p className="text-gray-600">
              Bachelor's degree - <span>Computer Science</span>
            </p>
            <p className="text-gray-500">
              Sep 2019 - May 2023{" "}
              <span className="italic text-slate-400">(Expected)</span>{" "}
            </p>
          </div>
          <Link
            to={"/profile"}
            className=" hover:text-blue-500 flex flex-row space-x-2 items-center font-normal text-center text-slate-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 18"
              fill="none"
              // style={{ stroke: "#3b82f6" }}
              stroke="#64748b"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-edit-3"
            >
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
            <p className="italic hover:text-blue-500">Edit</p>
          </Link>
        </div>
      </div>
      <div className="flex flex-row space-x-6 lg:space-x-8 px-6  lg:px-10 py-8 w-full h-full border-b border-gray-200">
        <div>
          <div className="h-12 w-12 rounded bg-center bg-cover bg-no-repeat">
            <img
              className="w-full object-cover rounded border-2 border-white shadow"
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col space-y-10 lg:space-y-0 justify-between w-full lg:pr-10 lg:items-start items-end">
          <div>
            <h1 className="text-xl font-medium">Unversity of Central Asia</h1>
            <p className="text-gray-600">
              Bachelor's degree - <span>Computer Science</span>
            </p>
            <p className="text-gray-500">
              Sep 2019 - May 2023{" "}
              <span className="italic text-slate-400">(Expected)</span>{" "}
            </p>
          </div>
          <Link
            to={"/profile"}
            className=" hover:text-blue-500 flex flex-row space-x-2 items-center font-normal text-center text-slate-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 18"
              fill="none"
              // style={{ stroke: "#3b82f6" }}
              stroke="#64748b"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-edit-3"
            >
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
            <p className="italic hover:text-blue-500">Edit</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileChangeEducation;
