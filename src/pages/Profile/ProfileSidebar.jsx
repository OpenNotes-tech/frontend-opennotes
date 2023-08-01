import { Link, useLocation } from "react-router-dom";

const ProfileSidebar = ({ setIsSidebarOpen, isSidebarOpen }) => {
  const location = useLocation();
  const name = location?.pathname?.split("/")[2]?.toLocaleLowerCase();
  return (
    <div className="md:border-[0.6px] md:border-gray-200 md:mb-10 md:shadow-md md:rounded-lg flex flex-col w-full md:h-[670px] md:overflow-y-hidden overflow-y-scroll">
      <div className="md:hidden text-center py-4 p-6 border-b border-gray-200 justify-end flex flex-row">
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
      <div className="text-center py-8 p-6 border-b border-gray-200  bg-center bg-cover bg-no-repeat">
        <img
          src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="h-24 w-24 p-1 shadow-md  dark:shadow-gray-800 mx-auto object-cover rounded-full block"
          alt=""
        />
        <h5 className="mt-5 text-xl font-semibold mb-0">Thomas Brewer</h5>
        <p className="text-slate-400 mb-0">Senior Web Developer</p>
      </div>
      <div className="text-center py-6 p-6 border-b border-gray-200">
        <ul className="list-none flex flex-col space-y-4  text-zinc-900">
          <li className="">
            <Link
              className={`flex items-center font-normal  ${
                name === "preview" && "text-blue-500"
              }`}
              to={"/profile/preview/resumeid"}
            >
              <span className="mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={`${name === "preview" ? "#3b82f6" : "#18181b"}`}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-user-2"
                >
                  <circle cx="12" cy="8" r="5"></circle>
                  <path d="M20 21a8 8 0 1 0-16 0"></path>
                </svg>
              </span>{" "}
              Preview
            </Link>
          </li>
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
                  className="lucide lucide-activity"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </span>{" "}
              Personal Info
            </Link>
          </li>
          <li className="">
            <Link
              className={`flex items-center font-normal  ${
                name === "education" && "text-blue-500"
              }`}
              to={"/profile/education"}
            >
              <span className="mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={`${name === "education" ? "#3b82f6" : "#18181b"}`}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-graduation-cap"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </span>{" "}
              Education
            </Link>
          </li>
          <li className="">
            <Link
              className={`flex items-center font-normal  ${
                name === "experience" && "text-blue-500"
              }`}
              to={"/profile/experience"}
            >
              <span className="mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={`${name === "experience" ? "#3b82f6" : "#18181b"}`}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-briefcase"
                >
                  <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </span>{" "}
              Experience
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
      <div className="text-center py-6 p-6">
        <ul className="list-none flex flex-col space-y-4  text-zinc-900">
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
                name === "change-password" && "text-blue-500"
              }`}
              to={"/profile/change-password"}
            >
              <span className="mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={`${
                    name === "change-password" ? "#3b82f6" : "#18181b"
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
                name === "change-email" && "text-blue-500"
              }`}
              to={"/profile/change-email"}
            >
              <span className="mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={`${name === "change-email" ? "#3b82f6" : "#18181b"}`}
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
