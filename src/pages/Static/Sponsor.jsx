import Navbar from "../../layouts/Navbar";

const Sponsor = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col space-y-40 bg-gray-800 py-32">
        <div className="flex flex-col items-center justify-center space-y-4 text-white">
          <h2
            className="font-heading mb-8 text-5xl font-bold text-white md:mb-14 lg:text-6xl 2xl:text-7xl"
            data-config-id="header"
          >
            Sponsor Us
          </h2>
          <p>
            Get your product in front of 100k+ creative professionals who visit
            us per month.
          </p>
        </div>
        <div className="flex flex-row items-center justify-evenly space-x-3 ">
          <div className="flex flex-row items-center justify-between space-x-6 rounded-lg bg-lime-200 px-14 py-2">
            <div className="rounded-lg bg-lime-100 p-2">
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
                className="lucide lucide-user"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div>
              <p className="text-xs">Unique Users</p>
              <p className="text-2xl">200K+</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between space-x-6 rounded-lg bg-lime-200 px-14 py-2">
            <div className="rounded-lg bg-lime-100 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-view"
              >
                <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
                <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
                <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
              </svg>
            </div>
            <div>
              <p className="text-xs">Page Views / Month</p>
              <p className="text-2xl">10M+</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between space-x-6 rounded-lg bg-lime-200 px-14 py-2">
            <div className="rounded-lg bg-lime-100 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-trending-up"
              >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
              </svg>
            </div>
            <div>
              <p className="text-xs">Growth Rate</p>
              <p className="text-2xl">10K+</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between space-x-6 rounded-lg bg-lime-200 px-14 py-2">
            <div className="rounded-lg bg-lime-100 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-at-sign"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
              </svg>
            </div>
            <div>
              <p className="text-xs">Newsletter Subscribers</p>
              <p className="text-2xl">100K+</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center ">
          <h2 className="mb-2 text-lg font-semibold text-white">
            Who’s the Audience?
          </h2>
          <ul className="max-w-lg list-inside space-y-1 text-gray-400">
            <li className="flex items-center">
              <svg
                className="mr-2 h-3.5 w-3.5 flex-shrink-0 text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Designers: Brand, Graphic, Product, UI, UX, and Web Designers
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-3.5 w-3.5 flex-shrink-0 text-rose-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Developers: Web, Mobile, Desktop, Game, Cybersecurity, Blockchain
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-3.5 w-3.5 flex-shrink-0 text-blue-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Engineers: Cloud, QA, Machine Learning, Data, DevOps, SRE
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-3.5 w-3.5 flex-shrink-0 text-yellow-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Creaters: content creators, marketers, artists, and makers
            </li>
          </ul>
        </div>

        <section className="">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center md:mb-24">
              <h2
                className="font-heading mb-8 text-5xl font-bold text-white md:mb-14 lg:text-6xl 2xl:text-7xl"
                data-config-id="header"
              >
                Choose a plan
              </h2>
              <p className="text-lg text-gray-200" data-config-id="desc">
                The quick brown fox jumps over the lazy dog.
              </p>
            </div>
            <div className="mx-auto max-w-7xl">
              <div className="mb-8 rounded-3xl bg-gray-600 p-6 lg:p-12">
                <div className="-mx-4 flex flex-wrap items-center">
                  <div className="mb-10 w-full px-4 lg:mb-0 lg:w-1/6">
                    <h3
                      className="font-heading text-3xl font-bold text-white"
                      data-config-id="title1"
                    >
                      Start
                    </h3>
                  </div>
                  <div className="mb-10 w-full px-4 md:w-1/2 lg:mb-0 lg:w-2/6">
                    <ul className="text-base text-white lg:text-lg">
                      <li className="mb-6 flex items-center">
                        <svg
                          className="mr-6 h-4 w-5"
                          width="20"
                          height="16"
                          viewBox="0 0 20 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                            fill="white"
                          ></path>
                        </svg>
                        <span data-config-id="b1-1">Complete files</span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <svg
                          className="mr-6 h-4 w-5"
                          width="20"
                          height="16"
                          viewBox="0 0 20 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                            fill="white"
                          ></path>
                        </svg>
                        <span data-config-id="b1-2">10GB cloud storage</span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <svg
                          className="mr-6 h-4 w-5"
                          width="20"
                          height="16"
                          viewBox="0 0 20 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                            fill="white"
                          ></path>
                          <path
                            d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                            fill="white"
                          ></path>
                        </svg>
                        <span data-config-id="b1-3">5 team members</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mb-10 w-full border-gray-500 px-4 text-center md:w-1/2 lg:mb-0 lg:w-2/6 lg:border-l">
                    <h3
                      className="mb-3 text-lg font-bold text-blue-500"
                      data-config-id="disc1"
                    >
                      20% off for students*
                    </h3>
                    <div className="mb-1 flex justify-center font-bold text-white">
                      <span
                        className="mr-1 inline-block self-start text-xl"
                        data-config-id="cur1"
                      >
                        $
                      </span>
                      <p className="self-end text-5xl" data-config-id="price1">
                        9.90
                      </p>
                    </div>
                    <p
                      className="mb-10 text-lg text-white"
                      data-config-id="cyc1"
                    >
                      /Month
                    </p>
                  </div>
                  <div className="w-full px-4 text-center lg:w-1/6 lg:text-right">
                    <a
                      className="inline-block w-full rounded-full bg-blue-500 px-6 py-4 text-center font-bold text-white transition duration-200 hover:bg-blue-600"
                      href="/"
                      data-config-id="primary-action-1"
                    >
                      Buy now
                    </a>
                  </div>
                </div>
              </div>
              <div className="mb-8 rounded-3xl bg-blue-500 p-6 lg:p-12">
                <div className="-mx-4 flex flex-wrap items-center">
                  <div className="mb-10 w-full px-4 lg:mb-0 lg:w-1/6">
                    <h3
                      className="font-heading text-3xl font-bold text-white"
                      data-config-id="title2"
                    >
                      Pro
                    </h3>
                  </div>
                  <div className="mb-10 w-full px-4 md:w-1/2 lg:mb-0 lg:w-2/6">
                    <ul className="text-base text-white lg:text-lg">
                      <li className="mb-6 flex items-center">
                        <svg
                          className="mr-6 h-4 w-5"
                          width="20"
                          height="16"
                          viewBox="0 0 20 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                            fill="white"
                          ></path>
                        </svg>
                        <span data-config-id="b2-1">Complete files</span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <svg
                          className="mr-6 h-4 w-5"
                          width="20"
                          height="16"
                          viewBox="0 0 20 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                            fill="white"
                          ></path>
                        </svg>
                        <span data-config-id="b2-2">10GB cloud storage</span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <svg
                          className="mr-6 h-4 w-5"
                          width="20"
                          height="16"
                          viewBox="0 0 20 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                            fill="white"
                          ></path>
                        </svg>
                        <span data-config-id="b2-3">5 team members</span>
                      </li>
                    </ul>
                  </div>
                  <div className="border-blueGray-400 mb-10 w-full px-4 text-center md:w-1/2 lg:mb-0 lg:w-2/6 lg:border-l">
                    <h3
                      className="mb-3 text-lg font-bold text-yellow-400"
                      data-config-id="disc2"
                    >
                      20% off for students*
                    </h3>
                    <div className="mb-1 flex justify-center font-bold text-white">
                      <span
                        className="mr-1 inline-block self-start text-xl"
                        data-config-id="cur2"
                      >
                        $
                      </span>
                      <p className="self-end text-5xl" data-config-id="price2">
                        19.90
                      </p>
                    </div>
                    <p
                      className="mb-10 text-lg text-white"
                      data-config-id="cyc2"
                    >
                      /Month
                    </p>
                  </div>
                  <div className="w-full px-4 text-center lg:w-1/6 lg:text-right">
                    <a
                      className="border-blueGray-200 hover:border-blueGray-300 inline-block w-full rounded-full border px-6 py-4 text-center font-bold text-white"
                      href="/"
                      data-config-id="primary-action-2"
                    >
                      Buy now
                    </a>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl bg-gray-600 p-6 lg:p-12">
                <div className="-mx-4 flex flex-wrap items-center">
                  <div className="mb-10 w-full px-4 lg:mb-0 lg:w-1/6">
                    <h3
                      className="font-heading text-3xl font-bold text-white"
                      data-config-id="title3"
                    >
                      Business
                    </h3>
                  </div>
                  <div className="mb-10 w-full px-4 md:w-1/2 lg:mb-0 lg:w-2/6">
                    <ul className="text-base text-white lg:text-lg">
                      <li className="mb-6 flex items-center">
                        <svg
                          className="mr-6 h-4 w-5"
                          width="20"
                          height="16"
                          viewBox="0 0 20 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                            fill="white"
                          ></path>
                        </svg>
                        <span data-config-id="b3-1">Complete files</span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <svg
                          className="mr-6 h-4 w-5"
                          width="20"
                          height="16"
                          viewBox="0 0 20 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                            fill="white"
                          ></path>
                        </svg>
                        <span data-config-id="b3-2">10GB cloud storage</span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <svg
                          className="mr-6 h-4 w-5"
                          width="20"
                          height="16"
                          viewBox="0 0 20 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                            fill="white"
                          ></path>
                        </svg>
                        <span data-config-id="b3-3">5 team members</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mb-10 w-full border-gray-500 px-4 text-center md:w-1/2 lg:mb-0 lg:w-2/6 lg:border-l">
                    <h3
                      className="mb-3 text-lg font-bold text-blue-500"
                      data-config-id="disc3"
                    >
                      20% off for students*
                    </h3>
                    <div className="mb-1 flex justify-center font-bold text-white">
                      <span
                        className="mr-1 inline-block self-start text-xl"
                        data-config-id="cur3"
                      >
                        $
                      </span>
                      <p className="self-end text-5xl" data-config-id="price3">
                        9.90
                      </p>
                    </div>
                    <p
                      className="mb-10 text-lg text-white"
                      data-config-id="cyc3"
                    >
                      /Month
                    </p>
                  </div>
                  <div className="w-full px-4 text-center lg:w-1/6 lg:text-right">
                    <a
                      className="inline-block w-full rounded-full bg-blue-500 px-6 py-4 text-center font-bold text-white transition duration-200 hover:bg-blue-600"
                      href="/"
                      data-config-id="primary-action-3"
                    >
                      Buy now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sponsor;
