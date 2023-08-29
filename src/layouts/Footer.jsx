import { useDispatch } from "react-redux";
import { openReportModal } from "../store/features/modalSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function detectBrowser() {
  const userAgent = navigator.userAgent;

  if (userAgent.includes("Chrome")) return "Google Chrome";
  // if (userAgent.includes("Firefox")) return "Mozilla Firefox";
  // if (userAgent.includes("Safari")) return "Apple Safari";
  if (userAgent.includes("Edge")) return "Microsoft Edge";
  // Add more browser detections if needed

  return null;
}

const Footer = () => {
  const browserName = detectBrowser();
  const dispatch = useDispatch();
  const handleReportModalToggle = (data) => {
    dispatch(openReportModal(data));
  };

  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", handleInstallPrompt);
    return () =>
      window.removeEventListener("beforeinstallprompt", handleInstallPrompt);
  }, []);

  const handleInstallPrompt = (event) => {
    event.preventDefault();
    setDeferredPrompt(event);
  };

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        setDeferredPrompt(null);
      });
    }
  };

  return (
    <footer class="-mx-4 flex flex-row items-center justify-between bg-gradient-to-r from-gray-700 via-gray-900 to-black pb-24 shadow-xl md:-mx-0 md:px-10 md:pb-0 xl:-mx-0 xl:px-12">
      <div class="mx-auto w-full py-4 md:py-8">
        <div class="flex flex-col items-center justify-center space-y-10 lg:flex-row lg:justify-between lg:space-y-0">
          <Link to={"/"} class="flex items-center lg:pr-4">
            <img
              src={require("../assets/images/logo.svg").default}
              class="mr-3 h-8"
              alt="Flowbite Logo"
            />
            <span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              oootech
            </span>
          </Link>
          <ul class="text-md mb-6 grid grid-cols-2 items-center gap-y-4 space-x-5 font-medium text-gray-500 dark:text-gray-400 sm:mb-0 md:flex md:flex-row md:gap-y-0 md:space-x-4">
            <li>
              <button
                onClick={() => handleReportModalToggle("link")}
                class="relative cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-500 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                Suggest a Link
              </button>
            </li>
            <div className="hidden h-4 w-[0.5px] bg-gray-500 lg:block"></div>
            <li>
              <Link
                to={"/privacy-policy"}
                class="relative cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-500 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                Privacy Policy
              </Link>
            </li>
            <div className="hidden h-4 w-[0.5px] bg-gray-500 lg:block"></div>
            <li>
              <a
                href="/"
                class="relative cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-500 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100 "
              >
                Sponsor us
              </a>
            </li>
            <div className="hidden h-4 w-[0.5px] bg-gray-500 lg:block"></div>
            <li>
              <button
                onClick={() => handleReportModalToggle("admin")}
                class="relative cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-500 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                Contacts
              </button>
            </li>
          </ul>
          <ul className="mb-6 flex flex-col items-center space-y-5 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0 md:flex-row md:space-x-4 md:space-y-0">
            {browserName !== null ? (
              <button onClick={handleInstallClick}>
                <img
                  src={require("../assets/images/pwa-logo.png")}
                  alt=""
                  className="w-32"
                  srcset=""
                />
              </button>
            ) : null}
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
                    className="lucide lucide-instagram transition duration-300 ease-in-out group-hover:text-red-500"
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
                    class="lucide lucide-twitter transition duration-300 ease-in-out group-hover:text-blue-500"
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
                    class="lucide lucide-linkedin transition duration-300 ease-in-out group-hover:text-blue-400"
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
