const Subscribe = () => {
  return (
    <section
      className="bg-top bg-no-repeat py-20"
      style={{
        backgroundImage: "url('://shuffle.dev/metis-assets/elements/blob.svg')",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="relative px-4 py-20 lg:p-20">
          <div className="absolute left-0 top-0 -mt-8">
            <img
              className="h-16"
              src="https://shuffle.dev/metis-assets/elements/dots-left.svg"
              alt=""
            />
          </div>
          <div className="mx-auto max-w-lg">
            <div className="flex flex-col md:flex-row md:space-x-10">
              <div>
                <h2 className="font-heading mb-4 text-xl font-bold lg:text-4xl">
                  <span data-config-id="header1">Subscribe to our </span>
                  <span className="text-blue-600" data-config-id="header2">
                    Newsletter!
                  </span>
                </h2>
                <p className="mb-8 text-xs text-gray-400" data-config-id="desc">
                  Search for your dream job in your dream company using our job
                  portal. Choose a job, apply, schedule an interview and start
                  your career.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-10 flex max-w-md flex-wrap justify-center">
              <div className="bg-blueGray-100 mb-3 flex w-8/12  rounded pl-3 md:mb-0  md:w-2/3">
                <input
                  className="h-12 w-full border-[0.6px] border-gray-200  bg-white py-4 pl-3 text-xs font-semibold leading-none text-gray-400 outline-none"
                  type="text"
                  placeholder="Type your e-mail"
                />
              </div>

              <button
                className="h-12 items-center rounded-r-lg bg-black px-4 py-0 text-center text-xs font-semibold leading-none text-white md:w-auto md:px-8 md:py-4 md:text-sm lg:hover:bg-blue-700"
                type="submit"
                data-config-id="primary-action"
              >
                Sign Up
              </button>
            </div>
          </div>
          <div className="absolute -bottom-10 right-0 md:bottom-0 ">
            <img
              className="h-16"
              src="https://shuffle.dev/metis-assets/elements/dots-right.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
