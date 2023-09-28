import { Link, useLocation } from "react-router-dom";

const ProfileSidebar = ({ setIsSidebarOpen, isSidebarOpen }) => {
  const location = useLocation();
  const name = location?.pathname?.split("/")[2]?.toLocaleLowerCase();
  return (
    <div className="flex w-full flex-col overflow-y-scroll md:mb-10 md:h-auto md:overflow-y-hidden md:rounded-lg md:border-[0.6px] md:border-gray-200 md:shadow-md">
      <div className="flex flex-row justify-end border-b border-gray-200 p-6 py-4 text-center md:hidden">
        <Link
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          type="button"
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#18181b"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-left"
          >
            <line x1="19" x2="5" y1="12" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </Link>
      </div>
      <div className="border-b border-gray-200 bg-cover bg-center bg-no-repeat p-6 py-8 text-center md:hidden">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          className="mx-auto block h-24 w-24  rounded-full object-cover p-1 shadow-md dark:shadow-gray-800"
          alt=""
        />
        <h5 className="mb-0 mt-5 text-xl font-semibold">Thomas Brewer</h5>
        <p className="mb-0 text-slate-400">Senior Web Developer</p>
      </div>
      <div className="border-b border-gray-200 p-6 py-6 text-center">
        <ul className="flex list-none flex-col space-y-4  text-zinc-900">
          <li className="">
            <Link
              className={`flex items-center font-normal   ${
                name === "personal-info" && "text-blue-500"
              }`}
              to={"/profile/personal-info"}
            >
              <span className="mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={`${name === "personal-info" ? "#3b82f6" : "#18181b"}`}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-user-2"
                >
                  <circle cx="12" cy="8" r="5"></circle>
                  <path d="M20 21a8 8 0 1 0-16 0"></path>
                </svg>
              </span>{" "}
              Personal Info
            </Link>
          </li>
          <li className="">
            <Link
              className={`flex items-center font-normal  ${
                name === "social-media" && "text-blue-500"
              }`}
              to={"/profile/social-media"}
            >
              <span className="mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={`${name === "social-media" ? "#3b82f6" : "#18181b"}`}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-link"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </span>{" "}
              Social Media
            </Link>
          </li>
          <li className="">
            <Link
              className={`flex items-center font-normal  ${
                name === "resume" && "text-blue-500"
              }`}
              to={"/profile/resume"}
            >
              <span className="mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={`${name === "resume" ? "#3b82f6" : "#18181b"}`}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-paperclip"
                >
                  <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                </svg>
              </span>{" "}
              Resume
            </Link>
          </li>
        </ul>
      </div>
      <div className="p-6 py-6 text-center">
        <ul className="flex list-none flex-col space-y-4  text-zinc-900">
          <li className="">
            <Link
              className={`flex items-center font-normal  ${
                name === "account-settings" && "text-blue-500"
              }`}
              to={"/profile/account-settings"}
            >
              <span className="mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={`${
                    name === "account-settings" ? "#3b82f6" : "#18181b"
                  }`}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-settings"
                >
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </span>{" "}
              Account Settings
            </Link>
          </li>
          <li className="">
            <Link
              className={`flex items-center font-normal  ${
                name === "update-password" && "text-blue-500"
              }`}
              to={"/profile/update-password"}
            >
              <span className="mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={`${
                    name === "update-password" ? "#3b82f6" : "#18181b"
                  }`}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-lock"
                >
                  <rect
                    width="18"
                    height="11"
                    x="3"
                    y="11"
                    rx="2"
                    ry="2"
                  ></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </span>{" "}
              Change Password
            </Link>
          </li>
          <li className="">
            <Link
              className={`flex items-center font-normal   ${
                name === "update-email" && "text-blue-500"
              }`}
              to={"/profile/update-email"}
            >
              <span className="mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={`${name === "update-email" ? "#3b82f6" : "#18181b"}`}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </span>{" "}
              Change Email
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileSidebar;
