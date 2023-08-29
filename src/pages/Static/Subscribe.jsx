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
                <p className="text-gray-400 mb-8 text-xs" data-config-id="desc">
                  Search for your dream job in your dream company using our job
                  portal. Choose a job, apply, schedule an interview and start
                  your career.
                </p>
              </div>
            </div>
            <div className="mx-auto flex mt-10 justify-center max-w-md flex-wrap">
              <div className="bg-blueGray-100 mb-3 flex w-8/12  rounded pl-3 md:mb-0  md:w-2/3">
                <input
                  className="text-gray-400 border-[0.6px] h-12 border-gray-200  bg-white w-full py-4 pl-3 text-xs font-semibold leading-none outline-none"
                  type="text"
                  placeholder="Type your e-mail"
                />
              </div>

              <button
                className="rounded-r-lg bg-black px-4 md:px-8 h-12 text-center items-center py-0 md:py-4 text-xs md:text-sm font-semibold leading-none text-white hover:bg-blue-700 md:w-auto"
                type="submit"
                data-config-id="primary-action"
              >
                Sign Up
              </button>
            </div>
          </div>
          <div className="absolute -bottom-10 md:bottom-0 right-0 ">
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
