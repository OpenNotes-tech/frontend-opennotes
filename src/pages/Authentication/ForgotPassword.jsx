const ForgotPassword = () => {
  return (
    <section className="relative bg-white">
      <div className="flex flex-col items-center justify-between px-4 lg:px-10 mx-auto max-w-7xl xl:px-5 lg:flex-row">
        <div className="flex flex-col items-center w-full px-2 lg:px-10 pt-5 pb-20 lg:pt-20 lg:flex-row">
          <div className="relative w-full max-w-md bg-cover lg:max-w-2xl lg:w-6/12">
            <div className="relative flex flex-col items-center justify-center w-full h-full lg:pr-10">
              <img
                src="https://cdn.devdojo.com/images/december2020/taxi-programming.png"
                alt=""
              />
            </div>
          </div>

          <div className="relative z-10 w-full max-w-2xl mt-20 lg:mt-0 lg:w-5/12">
            <div className="relative z-10 flex flex-col items-start justify-start p-10 bg-white shadow-2xl rounded-xl">
              <div className="text-center w-full">
                <h4 className="w-full font-serif text-4xl font-medium leading-snug">
                  Sign In
                </h4>
              </div>
              <div className="flex flex-col w-full">
                <div className="flex flex-row items-center w-full justify-center py-3 mt-6 border rounded cursor-pointer input-group border-slate-300 hover:bg-gray-50">
                  <div className="div">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.9875 12.2242C23.9875 11.2409 23.9059 10.5234 23.7292 9.7793H12.2393V14.2173H18.9836C18.8477 15.3202 18.1134 16.9811 16.4817 18.0972L16.4588 18.2458L20.0917 20.996L20.3434 21.0205C22.6549 18.9344 23.9875 15.8649 23.9875 12.2242Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12.2391 23.9178C15.5433 23.9178 18.3171 22.8548 20.3432 21.0211L16.4815 18.0978C15.4481 18.8021 14.0611 19.2937 12.2391 19.2937C9.00291 19.2937 6.25622 17.2076 5.2771 14.3242L5.13359 14.3361L1.35604 17.193L1.30664 17.3272C3.31906 21.2337 7.45272 23.9178 12.2391 23.9178Z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.27727 14.3248C5.01892 13.5807 4.8694 12.7834 4.8694 11.9596C4.8694 11.1357 5.01892 10.3385 5.26367 9.5944L5.25683 9.43592L1.43194 6.5332L1.3068 6.59137C0.477385 8.21247 0.00146484 10.0329 0.00146484 11.9596C0.00146484 13.8863 0.477385 15.7066 1.3068 17.3277L5.27727 14.3248Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12.2391 4.62403C14.5371 4.62403 16.0871 5.59402 16.971 6.40461L20.4248 3.10928C18.3036 1.1826 15.5433 0 12.2391 0C7.45272 0 3.31906 2.68406 1.30664 6.59057L5.26351 9.59359C6.25622 6.7102 9.00291 4.62403 12.2391 4.62403Z"
                        fill="#EB4335"
                      />
                    </svg>
                  </div>
                  <div className="div">
                    <p className="pl-3 text-sm md:text-base leading-none text-gray-600">
                      Continue with Google
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center py-3 mt-6 border rounded cursor-pointer input-group border-slate-300 hover:bg-gray-50">
                  <div className="div">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24 11.9993C24 5.37186 18.6274 -0.000715256 12 -0.000715256C5.37258 -0.000715256 0 5.37186 0 11.9993C0 17.9888 4.38823 22.9533 10.125 23.8535V15.468H7.07813V11.9993H10.125V9.35554C10.125 6.34804 11.9165 4.68679 14.6576 4.68679C15.9705 4.68679 17.3438 4.92116 17.3438 4.92116V7.87429H15.8306C14.3399 7.87429 13.875 8.7993 13.875 9.74828V11.9993H17.2031L16.6711 15.468H13.875V23.8535C19.6118 22.9533 24 17.9888 24 11.9993Z"
                        fill="#1877F2"
                      />
                      <path
                        d="M16.6711 15.4687L17.2031 12H13.875V9.74899C13.875 8.8 14.3399 7.875 15.8306 7.875H17.3437V4.92187C17.3437 4.92187 15.9705 4.6875 14.6576 4.6875C11.9165 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4687H10.125V23.8542C10.7359 23.9501 11.3621 24 12 24C12.6379 24 13.2641 23.9501 13.875 23.8542V15.4687H16.6711Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="div">
                    <p className="pl-3 text-sm md:text-base leading-none text-gray-600">
                      Continue with Facebook
                    </p>
                  </div>
                </div>
                <div className="inline-flex text-center items-center justify-center -mb-5 w-full">
                  <hr className="w-full h-px my-8 bg-gray-400 border-0 " />
                  <span className="absolute px-3 pb-1 font-medium text-gray-400 -translate-x-1/2 bg-white left-1/2">
                    or
                  </span>
                </div>
              </div>

              <div className="relative w-full mt-6 space-y-8">
                <div className="relative">
                  <label className="absolute px-2 ml-2 -mt-3 font-normal text-gray-900 bg-white">
                    Email Address
                  </label>
                  <input
                    type="text"
                    className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-310 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                    placeholder="john.doe@example.com"
                  />
                </div>
                <div className="relative">
                  <label className="absolute px-2 ml-2 -mt-3 font-normal text-gray-900 bg-white">
                    Password
                  </label>
                  <input
                    type="password"
                    className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-310 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                    placeholder="Password"
                  />
                </div>

                <div className="space-y-2 sm:flex sm:items-center sm:justify-between sm:space-x-2 sm:space-y-0 mt-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="border border-gray-300 rounded h-4 w-4 text-indigo-500"
                    />
                    <span className="ml-2"> Remember me </span>
                  </label>
                  <a
                    href="/"
                    className="font-medium inline-block text-yellow-300 hover:text-yellow-400"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="relative">
                  <a
                    href="#_"
                    className="inline-block w-full px-5 py-4 text-xl font-medium text-center text-white transition duration-200 bg-yellow-300 rounded-lg hover:bg-yellow-400 ease"
                  >
                    Submit
                  </a>
                </div>
              </div>
            </div>
            <svg
              className="absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-4 lg:-ml-12 text-gray-200 fill-current"
              viewBox="0 0 91 91"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="none" strokeWidth="1" fillRule="evenodd">
                <g fillRule="nonzero">
                  <g>
                    <g>
                      <circle cx="3.261" cy="3.445" r="2.72"></circle>
                      <circle cx="15.296" cy="3.445" r="2.719"></circle>
                      <circle cx="27.333" cy="3.445" r="2.72"></circle>
                      <circle cx="39.369" cy="3.445" r="2.72"></circle>
                      <circle cx="51.405" cy="3.445" r="2.72"></circle>
                      <circle cx="63.441" cy="3.445" r="2.72"></circle>
                      <circle cx="75.479" cy="3.445" r="2.72"></circle>
                      <circle cx="87.514" cy="3.445" r="2.719"></circle>
                    </g>
                    <g transform="translate(0 12)">
                      <circle cx="3.261" cy="3.525" r="2.72"></circle>
                      <circle cx="15.296" cy="3.525" r="2.719"></circle>
                      <circle cx="27.333" cy="3.525" r="2.72"></circle>
                      <circle cx="39.369" cy="3.525" r="2.72"></circle>
                      <circle cx="51.405" cy="3.525" r="2.72"></circle>
                      <circle cx="63.441" cy="3.525" r="2.72"></circle>
                      <circle cx="75.479" cy="3.525" r="2.72"></circle>
                      <circle cx="87.514" cy="3.525" r="2.719"></circle>
                    </g>
                    <g transform="translate(0 24)">
                      <circle cx="3.261" cy="3.605" r="2.72"></circle>
                      <circle cx="15.296" cy="3.605" r="2.719"></circle>
                      <circle cx="27.333" cy="3.605" r="2.72"></circle>
                      <circle cx="39.369" cy="3.605" r="2.72"></circle>
                      <circle cx="51.405" cy="3.605" r="2.72"></circle>
                      <circle cx="63.441" cy="3.605" r="2.72"></circle>
                      <circle cx="75.479" cy="3.605" r="2.72"></circle>
                      <circle cx="87.514" cy="3.605" r="2.719"></circle>
                    </g>
                    <g transform="translate(0 36)">
                      <circle cx="3.261" cy="3.686" r="2.72"></circle>
                      <circle cx="15.296" cy="3.686" r="2.719"></circle>
                      <circle cx="27.333" cy="3.686" r="2.72"></circle>
                      <circle cx="39.369" cy="3.686" r="2.72"></circle>
                      <circle cx="51.405" cy="3.686" r="2.72"></circle>
                      <circle cx="63.441" cy="3.686" r="2.72"></circle>
                      <circle cx="75.479" cy="3.686" r="2.72"></circle>
                      <circle cx="87.514" cy="3.686" r="2.719"></circle>
                    </g>
                    <g transform="translate(0 49)">
                      <circle cx="3.261" cy="2.767" r="2.72"></circle>
                      <circle cx="15.296" cy="2.767" r="2.719"></circle>
                      <circle cx="27.333" cy="2.767" r="2.72"></circle>
                      <circle cx="39.369" cy="2.767" r="2.72"></circle>
                      <circle cx="51.405" cy="2.767" r="2.72"></circle>
                      <circle cx="63.441" cy="2.767" r="2.72"></circle>
                      <circle cx="75.479" cy="2.767" r="2.72"></circle>
                      <circle cx="87.514" cy="2.767" r="2.719"></circle>
                    </g>
                    <g transform="translate(0 61)">
                      <circle cx="3.261" cy="2.846" r="2.72"></circle>
                      <circle cx="15.296" cy="2.846" r="2.719"></circle>
                      <circle cx="27.333" cy="2.846" r="2.72"></circle>
                      <circle cx="39.369" cy="2.846" r="2.72"></circle>
                      <circle cx="51.405" cy="2.846" r="2.72"></circle>
                      <circle cx="63.441" cy="2.846" r="2.72"></circle>
                      <circle cx="75.479" cy="2.846" r="2.72"></circle>
                      <circle cx="87.514" cy="2.846" r="2.719"></circle>
                    </g>
                    <g transform="translate(0 73)">
                      <circle cx="3.261" cy="2.926" r="2.72"></circle>
                      <circle cx="15.296" cy="2.926" r="2.719"></circle>
                      <circle cx="27.333" cy="2.926" r="2.72"></circle>
                      <circle cx="39.369" cy="2.926" r="2.72"></circle>
                      <circle cx="51.405" cy="2.926" r="2.72"></circle>
                      <circle cx="63.441" cy="2.926" r="2.72"></circle>
                      <circle cx="75.479" cy="2.926" r="2.72"></circle>
                      <circle cx="87.514" cy="2.926" r="2.719"></circle>
                    </g>
                    <g transform="translate(0 85)">
                      <circle cx="3.261" cy="3.006" r="2.72"></circle>
                      <circle cx="15.296" cy="3.006" r="2.719"></circle>
                      <circle cx="27.333" cy="3.006" r="2.72"></circle>
                      <circle cx="39.369" cy="3.006" r="2.72"></circle>
                      <circle cx="51.405" cy="3.006" r="2.72"></circle>
                      <circle cx="63.441" cy="3.006" r="2.72"></circle>
                      <circle cx="75.479" cy="3.006" r="2.72"></circle>
                      <circle cx="87.514" cy="3.006" r="2.719"></circle>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <svg
              className="absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-4 lg:-mr-12 text-yellow-400 fill-current"
              viewBox="0 0 91 91"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="none" strokeWidth="1" fillRule="evenodd">
                <g fillRule="nonzero">
                  <g>
                    <g>
                      <circle cx="3.261" cy="3.445" r="2.72"></circle>
                      <circle cx="15.296" cy="3.445" r="2.719"></circle>
                      <circle cx="27.333" cy="3.445" r="2.72"></circle>
                      <circle cx="39.369" cy="3.445" r="2.72"></circle>
                      <circle cx="51.405" cy="3.445" r="2.72"></circle>
                      <circle cx="63.441" cy="3.445" r="2.72"></circle>
                      <circle cx="75.479" cy="3.445" r="2.72"></circle>
                      <circle cx="87.514" cy="3.445" r="2.719"></circle>
                    </g>
                    <g transform="translate(0 12)">
                      <circle cx="3.261" cy="3.525" r="2.72"></circle>
                      <circle cx="15.296" cy="3.525" r="2.719"></circle>
                      <circle cx="27.333" cy="3.525" r="2.72"></circle>
                      <circle cx="39.369" cy="3.525" r="2.72"></circle>
                      <circle cx="51.405" cy="3.525" r="2.72"></circle>
                      <circle cx="63.441" cy="3.525" r="2.72"></circle>
                      <circle cx="75.479" cy="3.525" r="2.72"></circle>
                      <circle cx="87.514" cy="3.525" r="2.719"></circle>
                    </g>
                    <g transform="translate(0 24)">
                      <circle cx="3.261" cy="3.605" r="2.72"></circle>
                      <circle cx="15.296" cy="3.605" r="2.719"></circle>
                      <circle cx="27.333" cy="3.605" r="2.72"></circle>
                      <circle cx="39.369" cy="3.605" r="2.72"></circle>
                      <circle cx="51.405" cy="3.605" r="2.72"></circle>
                      <circle cx="63.441" cy="3.605" r="2.72"></circle>
                      <circle cx="75.479" cy="3.605" r="2.72"></circle>
                      <circle cx="87.514" cy="3.605" r="2.719"></circle>
                    </g>
                    <g transform="translate(0 36)">
                      <circle cx="3.261" cy="3.686" r="2.72"></circle>
                      <circle cx="15.296" cy="3.686" r="2.719"></circle>
                      <circle cx="27.333" cy="3.686" r="2.72"></circle>
                      <circle cx="39.369" cy="3.686" r="2.72"></circle>
                      <circle cx="51.405" cy="3.686" r="2.72"></circle>
                      <circle cx="63.441" cy="3.686" r="2.72"></circle>
                      <circle cx="75.479" cy="3.686" r="2.72"></circle>
                      <circle cx="87.514" cy="3.686" r="2.719"></circle>
                    </g>
                    <g transform="translate(0 49)">
                      <circle cx="3.261" cy="2.767" r="2.72"></circle>
                      <circle cx="15.296" cy="2.767" r="2.719"></circle>
                      <circle cx="27.333" cy="2.767" r="2.72"></circle>
                      <circle cx="39.369" cy="2.767" r="2.72"></circle>
                      <circle cx="51.405" cy="2.767" r="2.72"></circle>
                      <circle cx="63.441" cy="2.767" r="2.72"></circle>
                      <circle cx="75.479" cy="2.767" r="2.72"></circle>
                      <circle cx="87.514" cy="2.767" r="2.719"></circle>
                    </g>
                    <g transform="translate(0 61)">
                      <circle cx="3.261" cy="2.846" r="2.72"></circle>
                      <circle cx="15.296" cy="2.846" r="2.719"></circle>
                      <circle cx="27.333" cy="2.846" r="2.72"></circle>
                      <circle cx="39.369" cy="2.846" r="2.72"></circle>
                      <circle cx="51.405" cy="2.846" r="2.72"></circle>
                      <circle cx="63.441" cy="2.846" r="2.72"></circle>
                      <circle cx="75.479" cy="2.846" r="2.72"></circle>
                      <circle cx="87.514" cy="2.846" r="2.719"></circle>
                    </g>
                    <g transform="translate(0 73)">
                      <circle cx="3.261" cy="2.926" r="2.72"></circle>
                      <circle cx="15.296" cy="2.926" r="2.719"></circle>
                      <circle cx="27.333" cy="2.926" r="2.72"></circle>
                      <circle cx="39.369" cy="2.926" r="2.72"></circle>
                      <circle cx="51.405" cy="2.926" r="2.72"></circle>
                      <circle cx="63.441" cy="2.926" r="2.72"></circle>
                      <circle cx="75.479" cy="2.926" r="2.72"></circle>
                      <circle cx="87.514" cy="2.926" r="2.719"></circle>
                    </g>
                    <g transform="translate(0 85)">
                      <circle cx="3.261" cy="3.006" r="2.72"></circle>
                      <circle cx="15.296" cy="3.006" r="2.719"></circle>
                      <circle cx="27.333" cy="3.006" r="2.72"></circle>
                      <circle cx="39.369" cy="3.006" r="2.72"></circle>
                      <circle cx="51.405" cy="3.006" r="2.72"></circle>
                      <circle cx="63.441" cy="3.006" r="2.72"></circle>
                      <circle cx="75.479" cy="3.006" r="2.72"></circle>
                      <circle cx="87.514" cy="3.006" r="2.719"></circle>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
