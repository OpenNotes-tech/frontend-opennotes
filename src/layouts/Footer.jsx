const Footer = () => {
  return (
    <footer class="bg-white shadow-xl dark:bg-gray-900">
      <div class="w-full max-w-screen-xl mx-auto py-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a href="/" class="flex items-center mb-4 sm:mb-0">
            <img
              src={require("../assets/images/logo.svg").default}
              class="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              oooklink
            </span>
          </a>
          <ul class="flex flex-wrap space-x-4 items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="/" class=" ">
                About
              </a>
            </li>
            <div className="hidden h-4 w-[0.5px] bg-gray-500 lg:block"></div>
            <li>
              <a href="/" class="">
                Privacy Policy
              </a>
            </li>
            <div className="hidden h-4 w-[0.5px] bg-gray-500 lg:block"></div>
            <li>
              <a href="/" class=" ">
                Licensing
              </a>
            </li>
            <div className="hidden h-4 w-[0.5px] bg-gray-500 lg:block"></div>
            <li>
              <a href="/" class="hover:underline">
                Contact
              </a>
            </li>
            <div className="hidden h-4 w-[0.5px] bg-gray-500 lg:block"></div>
            <li className="flex flex-row space-x-4 ">
              <a href="/">
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
                  class="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="/">
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
                  class="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="/">
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
                  class="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="/">
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
                  class="lucide lucide-coffee"
                >
                  <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                  <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                  <line x1="6" x2="6" y1="2" y2="4" />
                  <line x1="10" x2="10" y1="2" y2="4" />
                  <line x1="14" x2="14" y1="2" y2="4" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
