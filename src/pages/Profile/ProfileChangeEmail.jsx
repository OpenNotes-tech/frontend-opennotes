import { Link } from "react-router-dom";

const ProfileChangeEmail = () => {
  return (
    <div className="border-[0.6px] border-gray-200 shadow-md mb-28 rounded-lg bg-white">
      <div className="border-b border-gray-200 px-10 py-8 text-xl font-medium">
        Change Email
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
                className="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>
            <div className="relative h-10 w-full min-w-[200px]">
              <input
                className="peer h-full w-full rounded-[7px] border placeholder-transparent placeholder:italic focus:placeholder-gray-400 border-gray-800 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-800 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-800 placeholder-shown:border-t-gray-800 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-800"
                placeholder="john.doe@example.com"
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-800 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-700 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-900">
                Email
              </label>
            </div>
          </div>
          <div className="flex flex-wrap flex-row-reverse">
            <Link
              to="/profile"
              className="cursor-pointer lg:w-1/6   text-center rounded-md border-[1.5px] border-black bg-black px-4 py-2 font-medium text-white hover:border-blue-700 hover:bg-blue-700"
            >
              Save
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileChangeEmail;
