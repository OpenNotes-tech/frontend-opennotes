import { useDispatch, useSelector } from "react-redux";
import { openReportModal } from "../store/features/modalSlice";
import UserReport from "../components/UserReport";
import { Link } from "react-router-dom";

const Footer = () => {
  const isReportModalOpen = useSelector(
    (state) => state.Modal.isReportModalOpen
  );
  const dispatch = useDispatch();
  const handleReportModalToggle = () => {
    dispatch(openReportModal("link"));
  };

  return (
    <footer class="flex flex-row items-center justify-between -mx-4 xl:-mx-0 px-4 md:px-10 xl:px-12 shadow-xl bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <div class="w-full mx-auto py-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a href="/" class="flex items-center mb-4 sm:mb-0">
            <img
              src={require("../assets/images/logo.svg").default}
              class="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              oootech
            </span>
          </a>
          <ul class="flex flex-wrap space-x-4 items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <button
                onClick={handleReportModalToggle}
                class="cursor-pointer relative after:absolute after:bg-gray-500 after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
              >
                Suggest a Link
              </button>
              {isReportModalOpen && <UserReport />}
            </li>
            <div className="hidden h-4 w-[0.5px] bg-gray-500 lg:block"></div>
            <li>
              <Link
                to={"/privacy-policy"}
                class="cursor-pointer relative after:absolute after:bg-gray-500 after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
              >
                Privacy Policy
              </Link>
            </li>
            <div className="hidden h-4 w-[0.5px] bg-gray-500 lg:block"></div>
            <li>
              <a
                href="/"
                class="cursor-pointer relative after:absolute after:bg-gray-500 after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 "
              >
                Sponsor
              </a>
            </li>
            <div className="hidden h-4 w-[0.5px] bg-gray-500 lg:block"></div>
            <li>
              <Link
                to="/contacts"
                class="cursor-pointer relative after:absolute after:bg-gray-500 after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
              >
                Contact
              </Link>
            </li>
            <div className="hidden h-4 w-[0.5px] bg-gray-500 lg:block"></div>
            <li className="flex flex-row space-x-4 ">
              <Link
                to={"https://instagram.com/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram group-hover:text-red-500 transition ease-in-out duration-300"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </span>
              </Link>
              <Link
                to={"https://twitter.com"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-twitter group-hover:text-blue-500 transition ease-in-out duration-300"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </span>
              </Link>
              <Link
                to={"https://www.linkedin.com"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-linkedin group-hover:text-blue-400 transition ease-in-out duration-300"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </span>
              </Link>
              <Link
                to={"https://www.buymeacoffee.com"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../assets/images/bmc-logo.svg").default}
                  alt=""
                  srcset=""
                  className="h-[22px] "
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
