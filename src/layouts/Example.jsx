import React from "react";

const Example = () => {
  {
    /* <button
            onClick={(e) => handleCategorySubmit(e, "/")}
            className={`px-4 py-2 hover:bg-gray-200 rounded-full flex flex-row space-x-2 ${
              category?.split(",")[0] === "" && "bg-blue-100 text-blue-500"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-home"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <p>Home</p>
          </button>
          <button
            onClick={(e) => handleCategorySubmit(e, "/frontend")}
            className={`px-4 py-2 hover:bg-gray-200 rounded-full flex flex-row space-x-2 ${
              category?.split(",")[0] === "Frontend" &&
              "bg-blue-100 text-blue-500"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-palette"
            >
              <circle cx="13.5" cy="6.5" r=".5" />
              <circle cx="17.5" cy="10.5" r=".5" />
              <circle cx="8.5" cy="7.5" r=".5" />
              <circle cx="6.5" cy="12.5" r=".5" />
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
            </svg>
            <p>Frontend</p>
          </button>
          <button
            onClick={(e) => handleCategorySubmit(e, "/backend")}
            className={`px-4 py-2 hover:bg-gray-200 rounded-full flex flex-row space-x-2 ${
              category?.split(",")[0] === "Backend" &&
              "bg-blue-100 text-blue-500"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-server"
            >
              <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
              <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
              <line x1="6" x2="6.01" y1="6" y2="6" />
              <line x1="6" x2="6.01" y1="18" y2="18" />
            </svg>{" "}
            <p>Backend</p>
          </button>
          <button
            onClick={(e) => handleCategorySubmit(e, "/mobile")}
            className={`px-4 py-2 hover:bg-gray-200 rounded-full flex flex-row space-x-2 ${
              category?.split(",")[0] === "Mobile" &&
              "bg-blue-100 text-blue-500"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-smartphone"
            >
              <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
              <path d="M12 18h.01" />
            </svg>{" "}
            <p>Mobile</p>
          </button>
          <button
            onClick={(e) => handleCategorySubmit(e, "/courses")}
            className={`px-4 py-2 hover:bg-gray-200 rounded-full flex flex-row space-x-2 ${
              category?.split(",")[0] === "Courses" &&
              "bg-blue-100 text-blue-500"
            }`}
          >
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
              class="lucide lucide-graduation-cap"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>{" "}
            <p>Courses</p>
          </button>
          <button
            onClick={(e) => handleCategorySubmit(e, "/cybersecurity")}
            className={`px-4 py-2 hover:bg-gray-200 rounded-full flex flex-row space-x-2 ${
              category?.split(",")[0] === "Cybersecurity" &&
              "bg-blue-100 text-blue-500"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-fingerprint"
            >
              <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4" />
              <path d="M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2" />
              <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
              <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
              <path d="M8.65 22c.21-.66.45-1.32.57-2" />
              <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
              <path d="M2 16h.01" />
              <path d="M21.8 16c.2-2 .131-5.354 0-6" />
              <path d="M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2" />
            </svg>{" "}
            <p>Cyber Security</p>
          </button>
          <button
            onClick={(e) => handleCategorySubmit(e, "/datascience")}
            className={`px-4 py-2 hover:bg-gray-200 rounded-full flex flex-row space-x-2 ${
              category?.split(",")[0] === "Datascience" &&
              "bg-blue-100 text-blue-500"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-brain-circuit"
            >
              <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z" />
              <path d="M16 8V5c0-1.1.9-2 2-2" />
              <path d="M12 13h4" />
              <path d="M12 18h6a2 2 0 0 1 2 2v1" />
              <path d="M12 8h8" />
              <path d="M20.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
              <path d="M16.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
              <path d="M20.5 21a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
              <path d="M18.5 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
            </svg>{" "}
            <p>Data Science</p>
          </button> */
  }
  return <div>Example</div>;
};

export default Example;
