import { Link } from "react-router-dom";

const LinkDetails = () => {
  return (
    <div className="flex md:px-56 container mx-auto mb-20">
      {" "}
      <div className=" w-full ">
        <div className="bg-white shadow rounded ">
          <div className="relative ">
            <img
              className="h-56 shadow rounded-t w-full object-cover object-center "
              src="https://tuk-cdn.s3.amazonaws.com/assets/templates/Job-Portal/jp_24.png "
              alt=" "
            />
            <div className="inset-0 m-auto w-24 h-24 absolute bottom-0 -mb-12 xl:ml-10 rounded border-2 shadow border-white ">
              <img
                className="w-full h-full overflow-hidden object-cover "
                src="https://tuk-cdn.s3.amazonaws.com/assets/templates/Job-Portal/jp_8.png "
                alt=" "
              />
            </div>
          </div>
          <div className="px-5 xl:px-10 pb-10 ">
            <div className="pt-3 xl:pt-5 flex flex-col xl:flex-row items-start xl:items-center justify-between ">
              <div className="text-left xl:text-left mb-3 xl:mb-0 items-center justify-between xl:justify-start ">
                <h2 className="mt-10 text-lg text-gray-800 tracking-normal ">
                  The Cannabis Company
                </h2>
                <p className="text-sm text-gray-600 ">Cannabis done right!</p>
                <p className="text-sm text-gray-600 ">New York, NY</p>
              </div>
              <div className="flex items-start justify-center ">
                <p className="text-sm text-gray-800 ">
                  Posted on:{" "}
                  <span className="font-semibold "> 12 September 2020</span>
                </p>
              </div>
              <div className="flex-col md:flex-row justify-center xl:justify-end flex ">
                <p className="text-sm text-gray-800 ">
                  Category:{" "}
                  <span className="font-semibold underline text-blue-600 cursor-pointer ">
                    Design
                  </span>
                  ,{" "}
                  <span
                    className="font-semibold underline text-blue-600 cursor-pointer
            "
                  >
                    E-Commerce
                  </span>
                  ,{" "}
                  <span className="font-semibold underline text-blue-600 cursor-pointer ">
                    Cannabis
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-4 lg:flex items-center justify-between ">
              <div className="flex items-center flex-no-wrap ">
                <div className="w-6 h-6 bg-cover bg-center rounded-md ">
                  <img
                    src="https://dh-ui.s3.amazonaws.com/assets/boy-smiling_23-2148155640.jpg "
                    alt=" "
                    className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow "
                  />
                </div>
                <div className="w-6 h-6 bg-cover rounded-md -ml-2 ">
                  <img
                    src="https://dh-ui.s3.amazonaws.com/assets/photo-1564061170517-d3907caa96ea.jfif "
                    alt=" "
                    className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow "
                  />
                </div>
                <div className="w-6 h-6 bg-cover rounded-md bg-center -ml-2 ">
                  <img
                    src="https://dh-ui.s3.amazonaws.com/assets/photo-1566753323558-f4e0952af115.jfif "
                    alt=" "
                    className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow "
                  />
                </div>
                <div className="w-6 h-6 bg-cover rounded-md -ml-2 ">
                  <img
                    src="https://dh-ui.s3.amazonaws.com/assets/webapp/ui_elements/avatars/avatar4.jpg "
                    alt=" "
                    className="h-full w-full overflow-hidden object-cover object-center rounded-full border-2 border-white shadow "
                  />
                </div>
                <div className="w-6 h-6 bg-cover rounded-md -ml-2 ">
                  <img
                    src="https://dh-ui.s3.amazonaws.com/assets/photo-1575978108872-9b1429a19a0f.jfif "
                    alt=" "
                    className="h-full w-full overflow-hidden object-cover object-center rounded-full border-2 border-white shadow "
                  />
                </div>
                <p className="ml-2 text-sm text-gray-600 ">
                  5 people from your circle work here
                </p>
              </div>
              <div className="sm:mt-2 mt-2 lg:mt-0 ">
                <Link
                  to={"/job"}
                  className="mr-3 bg-gray-100 focus:outline-none transition duration-150 ease-in-out rounded hover:bg-gray-300 text-blue-500 px-5 py-2 text-sm "
                >
                  Back
                </Link>
                <button className="transition focus:outline-none duration-150 ease-in-out hover:bg-blue-700 bg-blue-600 rounded text-white px-8 py-2 text-sm ">
                  Apply to job
                </button>
              </div>
            </div>
            <div className="lg:text-left text-center mt-6 bg-gray-100 lg:flex rounded border border-gray-300 ">
              <div className="lg:w-1/4 p-4 lg:border-r border-b border-gray-300 ">
                <p className="text-gray-600 ">Experience</p>
                <p className="text-blue-500 font-bold ">More than 3 years</p>
              </div>
              <div className="lg:w-1/4 p-4 lg:border-r border-b border-gray-300 ">
                <p className="text-gray-600 ">Work</p>
                <p className="text-blue-500 font-bold ">On-Site and Remote</p>
              </div>
              <div className="lg:w-1/4 p-4 lg:border-r border-b border-gray-300 ">
                <p className="text-gray-600 ">Employee Type</p>
                <p className="text-blue-500 font-bold ">Full-Time Employees</p>
              </div>
              <div className="lg:w-1/4 p-4 ">
                <p className="text-gray-600 ">Salary Range</p>
                <p className="text-blue-500 font-bold ">$65,000 - $75,000</p>
              </div>
            </div>
            <div className="mt-10 ">
              <div className="flex flex-wrap ">
                <div className="lg:w-8/12 w-full md:pr-8 mb-4 ">
                  <p className="text-xl font-bold ">
                    Junior Front-End Engineer
                  </p>
                  <div>
                    <p className="text-sm text-gray-800 font-semibold pt-3 pb-2 ">
                      Overview
                    </p>
                    <p className="leading-6 text-gray-800 text-sm ">
                      We are building a platform for every team - technical,
                      non-technical, small or big. We are looking for product
                      designers who want to contribute to this challenge from
                      start to finish: understanding how people solve their
                      problems through software, evolving our mental models to
                      facilitate this problem solving, crafting intuitive and
                      beautiful interactions that are a joy to use, and shipping
                      features that impact our business metrics. If you like
                      engaging with complex, powerful tools and forging simple,
                      elegant solutions, we look forward to talking to you.
                    </p>
                    <p className="mt-2 text-sm text-gray-800 font-semibold pt-3 pb-2 ">
                      What you’ll do
                    </p>
                    <ul
                      className="text-gray-800 pl-5 text-sm "
                      style={{ listStyle: "outside" }}
                    >
                      <li>
                        Deeply understand a complex problem space and find
                        simple, powerful design solutions.
                      </li>
                      <li className="pt-2 ">
                        Explore the ideas via mockups, interactive prototypes,
                        usability testing, and written documentation, ensuring
                        that your team converges on the most promising
                        solutions.
                      </li>
                      <li className="pt-2 ">
                        Create beautiful UI designs with Figma, HTML, CSS.
                      </li>
                    </ul>
                    <p className="mt-2 text-sm text-gray-800 font-semibold pt-3 pb-2 ">
                      Who you are
                    </p>
                    <ul
                      className="text-gray-800 pl-5 text-sm "
                      style={{ listStyle: "outside" }}
                    >
                      <li>
                        You’re a UI/UX specialist who cares deeply about
                        user-centric product designs.
                      </li>
                      <li className="pt-2 ">
                        You take a thoughtful approach to decision making;
                        knowing when to move fast and when to do things right.
                      </li>
                      <li className="pt-2 ">
                        You want to work in a product-driven environment.
                      </li>
                    </ul>
                    <p className="mt-2 text-sm text-gray-800 font-semibold pt-3 pb-2 ">
                      Skills at a glance
                    </p>
                    <div className="flex ">
                      <div className="mr-2 bg-gray-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center ">
                        <span className="text-xs text-gray-600 font-normal ">
                          UX Design
                        </span>
                      </div>
                      <div className="mr-2 bg-gray-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center ">
                        <span className="text-xs text-gray-600 font-normal ">
                          React JS
                        </span>
                      </div>
                      <div className="mr-2 bg-gray-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center ">
                        <span className="text-xs text-gray-600 font-normal ">
                          UX Design
                        </span>
                      </div>
                      <div className="mr-2 bg-gray-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center ">
                        <span className="text-xs text-gray-600 font-normal ">
                          React JS
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 flex ">
                      <div className="mr-2 bg-gray-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center ">
                        <span className="text-xs text-gray-600 font-normal ">
                          UX Design
                        </span>
                      </div>
                      <div className="mr-2 bg-gray-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center ">
                        <span className="text-xs text-gray-600 font-normal ">
                          React JS
                        </span>
                      </div>
                      <div className="mr-2 bg-gray-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center ">
                        <span className="text-xs text-gray-600 font-normal ">
                          UX Design
                        </span>
                      </div>
                      <div className="mr-2 bg-gray-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center ">
                        <span className="text-xs text-gray-600 font-normal ">
                          React JS
                        </span>
                      </div>
                    </div>
                    <button className="mt-8 transition focus:outline-none duration-150 ease-in-out hover:bg-blue-700 bg-blue-600 rounded text-white px-8 py-2 text-sm ">
                      Apply to job
                    </button>
                  </div>
                </div>

                <div className="lg:w-1/3 w-full ">
                  <div className="bg-gray-100 rounded mx-auto w-full ">
                    <div className="border-b border-gray-200 p-4 ">
                      <p className="text-base font-bold ">Similar Positions</p>
                    </div>
                    <div className="flex items-center p-4 ">
                      <div className="text-gray-700 bg-gray-100 rounded-lg flex items-center justify-center ">
                        <img
                          className="w-8 h-8 rounded "
                          src="https://tuk-cdn.s3.amazonaws.com/assets/templates/Job-Portal/jp_6.png "
                          alt=" "
                        />
                      </div>
                      <div className="ml-3 ">
                        <p className="text-gray-800 font-normal text-sm leading-5 tracking-normal ">
                          Front-end Developer
                        </p>
                        <p className="text-gray-500 font-normal text-sm leading-5 tracking-normal ">
                          New York - 65k-75k
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 ">
                      <div className="text-gray-700 bg-gray-100 rounded-lg flex items-center justify-center ">
                        <img
                          className="w-8 h-8 rounded "
                          src="https://tuk-cdn.s3.amazonaws.com/assets/templates/Job-Portal/jp_7.png "
                          alt=" "
                        />
                      </div>
                      <div className="ml-3 ">
                        <p className="text-gray-800 font-normal text-sm leading-5 tracking-normal ">
                          Front-end Engineer
                        </p>
                        <p className="text-gray-500 font-normal text-sm leading-5 tracking-normal ">
                          Seattle - 65k-75k
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 ">
                      <div className="text-gray-700 bg-gray-100 rounded-lg flex items-center justify-center ">
                        <img
                          className="w-8 h-8 rounded "
                          src="https://tuk-cdn.s3.amazonaws.com/assets/templates/Job-Portal/jp_6.png "
                          alt=" "
                        />
                      </div>
                      <div className="ml-3 ">
                        <p className="text-gray-800 font-normal text-sm leading-5 tracking-normal ">
                          JS Expert
                        </p>
                        <p className="text-gray-500 font-normal text-sm leading-5 tracking-normal ">
                          Las Vegas - 65k-75k
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 ">
                      <div className="text-gray-700 bg-gray-100 rounded-lg flex items-center justify-center ">
                        <img
                          className="w-8 h-8 rounded "
                          src="https://tuk-cdn.s3.amazonaws.com/assets/templates/Job-Portal/jp_7.png "
                          alt=" "
                        />
                      </div>
                      <div className="ml-3 ">
                        <p className="text-gray-800 font-normal text-sm leading-5 tracking-normal ">
                          React Native Ninja
                        </p>
                        <p className="text-gray-500 font-normal text-sm leading-5 tracking-normal ">
                          San Diego - 65k-75k
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white mt-10 border border-gray-300 rounded mx-auto w-full ">
                    <div className="p-5 ">
                      <div className="h-12 w-12 rounded bg-center bg-cover bg-no-repeat ">
                        <img
                          className="w-full object-cover rounded border-2 border-white shadow "
                          src="https://tuk-cdn.s3.amazonaws.com/assets/templates/Job-Portal/jp_16.png "
                          alt=" "
                        />
                      </div>
                      <div className="mt-1 ">
                        <p className="text-base text-gray-800 font-semibold ">
                          Saul Berenson
                        </p>
                        <div className="flex flex-wrap justify-between items-center ">
                          <p className="text-xs text-gray-600 ">
                            Manager, Human Resources
                          </p>
                        </div>
                        <div className="mt-3 ">
                          <button className="bg-gray-100 focus:outline-none transition duration-150 ease-in-out rounded hover:bg-gray-300 text-blue-500 px-5 py-2 text-sm ">
                            Get in touch
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkDetails;
