import { useState } from "react";
import { Link } from "react-router-dom";

const ProfileChangePassword = () => {
  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(false);
  const [passwordVisible3, setPasswordVisible3] = useState(false);

  const togglePasswordVisibility1 = () => {
    setPasswordVisible1(!passwordVisible1);
  };
  const togglePasswordVisibility2 = () => {
    setPasswordVisible2(!passwordVisible2);
  };
  const togglePasswordVisibility3 = () => {
    setPasswordVisible3(!passwordVisible3);
  };
  return (
    <div className="border-[0.6px] border-gray-200 shadow-md mb-28 rounded-lg bg-white">
      <div className="border-b border-gray-200 px-10 py-8 text-xl font-medium">
        Change Password
      </div>
      <div className="flex flex-wrap px-3 md:px-10 h-full">
        <div className="flex flex-col w-full lg:w-4/5 md:gap-x-6 gap-y-10 py-10">
          <div className="flex flex-row items-center space-x-4 md:space-x-8">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#18181b"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-key"
              >
                <circle cx="7.5" cy="15.5" r="5.5"></circle>
                <path d="m21 2-9.6 9.6"></path>
                <path d="m15.5 7.5 3 3L22 7l-3-3"></path>
              </svg>
            </div>
            <div className="relative h-10 w-full min-w-[200px]">
              <button
                onClick={togglePasswordVisibility1}
                className="absolute top-2/4 right-3 grid h-5 w-5 -translate-y-2/4 place-items-center text-blue-gray-500"
              >
                {passwordVisible1 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#18181b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-eye-off"
                  >
                    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                    <line x1="2" x2="22" y1="2" y2="22"></line>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#18181b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-eye"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                )}
              </button>

              <input
                className="peer h-full w-full rounded-[7px] !pr-9 border placeholder-transparent placeholder:italic focus:placeholder-gray-400 border-gray-800 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-800 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-800 placeholder-shown:border-t-gray-800 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-800"
                placeholder="8-15 characters"
                type={passwordVisible1 ? "text" : "password"}
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-800 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-700 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-900">
                Old Password
              </label>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-4 md:space-x-8">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#18181b"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-lock"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <div className="relative h-10 w-full min-w-[200px]">
              <button
                onClick={togglePasswordVisibility2}
                className="absolute top-2/4 right-3 grid h-5 w-5 -translate-y-2/4 place-items-center text-blue-gray-500"
              >
                {passwordVisible2 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#18181b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-eye-off"
                  >
                    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                    <line x1="2" x2="22" y1="2" y2="22"></line>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#18181b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-eye"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                )}
              </button>
              <input
                className="peer h-full w-full rounded-[7px] !pr-9 border placeholder-transparent placeholder:italic focus:placeholder-gray-400 border-gray-800 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-800 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-800 placeholder-shown:border-t-gray-800 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-800"
                placeholder="8-15 characters including at least 3 numbers and 1 symbol."
                type={passwordVisible2 ? "text" : "password"}
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-800 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-700 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-900">
                New Password
              </label>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-4 md:space-x-8">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#18181b"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-lock"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <div className="relative h-10 w-full min-w-[200px]">
              <button
                onClick={togglePasswordVisibility3}
                className="absolute top-2/4 right-3 grid h-5 w-5 -translate-y-2/4 place-items-center text-blue-gray-500"
              >
                {passwordVisible3 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#18181b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-eye-off transition-all duration-300 ease-in-out"
                  >
                    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                    <line x1="2" x2="22" y1="2" y2="22"></line>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#18181b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-eye "
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                )}
              </button>

              <input
                className="peer h-full w-full rounded-[7px] !pr-9 border placeholder-transparent placeholder:italic focus:placeholder-gray-400 border-gray-800 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-800 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-800 placeholder-shown:border-t-gray-800 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-800"
                placeholder="8-15 characters including at least 3 numbers and 1 symbol."
                type={passwordVisible3 ? "text" : "password"}
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-800 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-700 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-900">
                Confirm New Password
              </label>
            </div>
          </div>

          <div className="flex flex-wrap flex-row-reverse">
            <Link
              to="/profile"
              className="transition duration-200 ease-in-out cursor-pointer lg:w-1/6 text-center rounded-md border-[1.5px] border-black bg-black px-4 py-2 font-medium text-white hover:border-blue-700 hover:bg-blue-700"
            >
              Save
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileChangePassword;
