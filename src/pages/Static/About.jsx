import Footer from "../../layouts/Footer";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      {/*  Page content */}
      <main className="grow">
        {/*  Page sections */}
        <section>
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="pb-12 pt-32 md:pb-20 md:pt-40">
              {/* Section header */}
              <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
                <h1 className="h1 mb-4 text-3xl font-bold">
                  We enable developers to build amazing things
                </h1>
                <p className="text-xl text-gray-600">
                  We have transformed product development, making it faster,
                  simpler... better! That's why in just three years we now help
                  more developers build projects than anyone else.
                </p>
              </div>

              <figure className="flex items-start justify-center">
                <img
                  className="rounded shadow-2xl"
                  src={"https://preview.cruip.com/simple/images/about-01.jpg"}
                  width="768"
                  height="432"
                  alt="About us"
                />
              </figure>
            </div>
          </div>
        </section>
        <section>
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="pb-12 md:pb-20">
              <div className="mx-auto max-w-3xl">
                <h3 className="h3 mb-3">Our story</h3>
                <p className="mb-8 text-lg text-gray-600">
                  Aenean sed adipiscing diam donec adipiscing tristique risus
                  nec feugiat auctor urna nunc id cursus metus aliquam eleifend,
                  arcu dictum varius duis at consectetur lorem donec massa
                  sapien, sed risus ultricies tristique nulla aliquet. Morbi
                  tristique senectus et netus et, nibh nisl condimentum id
                  venenatis a condimentum vitae sapien.
                </p>
                <p className="mb-8 text-lg text-gray-600">
                  Quam pellentesque nec nam aliquam sem et tortor consequat,
                  pellentesque adipiscing commodo elit at imperdiet. Semper
                  auctor neque vitae tempus quam pellentesque nec. Amet dictum
                  sit amet justo donec enim diam varius sit amet mattis
                  vulputate enim nulla aliquet porttitor.
                </p>
              </div>

              <div className="sm:flex">
                <figure className="mb-8 flex max-w-none shrink-0 sm:mb-0 sm:max-w-xs lg:max-w-none">
                  <img
                    className="grow self-start rounded"
                    src={"https://preview.cruip.com/simple/images/about-02.jpg"}
                    width="435"
                    height="326"
                    alt="About us 02"
                  />
                </figure>
                <div className="sm:ml-8 lg:ml-16">
                  <h4 className="h4 mb-2">2017 - 2020</h4>
                  <p className="mb-8 text-lg text-gray-600">
                    Quam pellentesque nec nam aliquam sem et tortor consequat,
                    pellentesque adipiscing commodo elit at imperdiet. Semper
                    auctor neque vitae tempus quam pellentesque nec. Amet dictum
                    sit amet justo donec enim diam varius sit amet mattis
                    vulputate enim nulla aliquet porttitor.
                  </p>
                  <div className="mb-8  flex">
                    <img
                      className="mr-4 shrink-0 self-start rounded-full shadow-lg"
                      src={
                        "https://preview.cruip.com/simple/images/about-logo.png"
                      }
                      width="40"
                      height="40"
                      alt="Logo"
                    />
                    <div>
                      <blockquote className="italic text-gray-600">
                        “ I love this product and would recommend it to anyone.
                        Could be not easier to use, and our multiple websites
                        are wonderful. We get nice comments all the time. “
                      </blockquote>
                      <div className="mt-2 text-sm font-medium text-gray-600">
                        <cite className="not-italic text-gray-900">
                          Micheal Osman
                        </cite>{" "}
                        ·{" "}
                        <a className="text-blue-600" href="#0">
                          New York Times
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mx-auto max-w-3xl">
                <p className="text-lg text-gray-600">
                  Aenean sed adipiscing diam donec adipiscing tristique risus
                  nec feugiat auctor urna nunc id cursus metus aliquam eleifend,
                  arcu dictum varius duis at consectetur lorem donec massa
                  sapien, sed risus ultricies tristique nulla aliquet. Morbi
                  tristique senectus et netus et, nibh nisl condimentum id
                  venenatis a condimentum vitae sapien.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="border-t border-gray-200 py-12 md:py-20">
              {/* Section header */}
              <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
                <h1 className="h2 mb-4">Developing a global mindset</h1>
                <p className="text-xl text-gray-600">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
                  cupidatat.
                </p>
              </div>

              {/* World illustration */}
              <div className="flex flex-col items-center pb-12 pt-16 md:pb-16 md:pt-20">
                <div className="relative">
                  {/* Halo effect */}
                  <svg
                    className="pointer-events-none absolute inset-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
                    width="800"
                    height="800"
                    viewBox="0 0 800 800"
                    style={{ maxWidth: "200%" }}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g className="fill-current text-gray-400 opacity-75">
                      <circle className="pulse" cx="400" cy="400" r="200" />
                      <circle
                        className="pulse pulse-1"
                        cx="400"
                        cy="400"
                        r="200"
                      />
                      <circle
                        className="pulse pulse-2"
                        cx="400"
                        cy="400"
                        r="200"
                      />
                    </g>
                  </svg>
                  {/* White box */}
                  <svg
                    className="absolute h-auto w-32 rounded-full shadow-xl"
                    viewBox="0 0 128 48"
                    style={{ width: "32%", top: "20%", right: "-16%" }}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      className="fill-current text-white"
                      width="128"
                      height="48"
                      rx="24"
                    />
                  </svg>
                  {/* Globe image */}
                  <img
                    className="relative rounded-full shadow-xl"
                    src={"https://preview.cruip.com/simple/images/planet.png"}
                    width="400"
                    height="400"
                    alt="Planet"
                  />
                  {/* Static dots */}
                  <svg
                    className="absolute top-0 h-auto w-full"
                    viewBox="0 0 400 400"
                    style={{ left: "12%" }}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <filter
                        x="-41.7%"
                        y="-34.2%"
                        width="183.3%"
                        height="185.6%"
                        filterUnits="objectBoundingBox"
                        id="world-ill-a"
                      >
                        <feOffset
                          dy="4"
                          in="SourceAlpha"
                          result="shadowOffsetOuter1"
                        />
                        <feGaussianBlur
                          stdDeviation="6"
                          in="shadowOffsetOuter1"
                          result="shadowBlurOuter1"
                        />
                        <feColorMatrix
                          values="0 0 0 0 0 0 0 0 0 0.439215686 0 0 0 0 0.956862745 0 0 0 0.32 0"
                          in="shadowBlurOuter1"
                        />
                      </filter>
                      <filter
                        x="-83.3%"
                        y="-68.5%"
                        width="266.7%"
                        height="271.2%"
                        filterUnits="objectBoundingBox"
                        id="world-ill-c"
                      >
                        <feOffset
                          dy="4"
                          in="SourceAlpha"
                          result="shadowOffsetOuter1"
                        />
                        <feGaussianBlur
                          stdDeviation="6"
                          in="shadowOffsetOuter1"
                          result="shadowBlurOuter1"
                        />
                        <feColorMatrix
                          values="0 0 0 0 0 0 0 0 0 0.439215686 0 0 0 0 0.956862745 0 0 0 0.32 0"
                          in="shadowBlurOuter1"
                        />
                      </filter>
                      <filter
                        x="-7.3%"
                        y="-23.8%"
                        width="114.5%"
                        height="147.6%"
                        filterUnits="objectBoundingBox"
                        id="world-ill-e"
                      >
                        <feGaussianBlur stdDeviation="2" in="SourceGraphic" />
                      </filter>
                      <ellipse
                        id="world-ill-b"
                        cx="51"
                        cy="175.402"
                        rx="24"
                        ry="23.364"
                      />
                      <ellipse
                        id="world-ill-d"
                        cx="246"
                        cy="256.201"
                        rx="12"
                        ry="11.682"
                      />
                      <linearGradient
                        x1="50%"
                        y1="0%"
                        x2="50%"
                        y2="100%"
                        id="world-ill-f"
                      >
                        <stop stopColor="#0070F4" stopOpacity="0" offset="0%" />
                        <stop
                          stopColor="#0070F4"
                          stopOpacity=".64"
                          offset="52.449%"
                        />
                        <stop
                          stopColor="#0070F4"
                          stopOpacity="0"
                          offset="100%"
                        />
                      </linearGradient>
                    </defs>
                    <g
                      transform="translate(0 -.818)"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <use
                        fill="#000"
                        filter="url(#world-ill-a)"
                        xlinkHref="#world-ill-b"
                      />
                      <use fill="#0070F4" xlinkHref="#world-ill-b" />
                      <use
                        fill="#000"
                        filter="url(#world-ill-c)"
                        xlinkHref="#world-ill-d"
                      />
                      <use fill="#0070F4" xlinkHref="#world-ill-d" />
                      <ellipse
                        fillOpacity=".32"
                        fill="#0070F4"
                        cx="293"
                        cy="142.303"
                        rx="8"
                        ry="7.788"
                      />
                      <ellipse
                        fillOpacity=".64"
                        fill="#0070F4"
                        cx="250"
                        cy="187.083"
                        rx="6"
                        ry="5.841"
                      />
                      <ellipse
                        fillOpacity=".64"
                        fill="#0070F4"
                        cx="13"
                        cy="233.811"
                        rx="2"
                        ry="1.947"
                      />
                      <ellipse
                        fill="#0070F4"
                        cx="29"
                        cy="114.072"
                        rx="2"
                        ry="1.947"
                      />
                      <path
                        d="M258 256.2l87-29.204"
                        stroke="#666"
                        strokeWidth="2"
                        opacity=".16"
                        filter="url(#world-ill-e)"
                      />
                      <path
                        d="M258 251.333c111.333-40.237 141-75.282 89-105.136M136 103.364c66.667 4.543 104.667 32.45 114 83.72"
                        stroke="url(#world-ill-f)"
                        strokeWidth="2"
                        strokeDasharray="2"
                      />
                    </g>
                  </svg>
                  {/* Dynamic dots */}
                  <svg
                    className="absolute max-w-full"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    style={{ width: "12%", top: "45%", left: "50%" }}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g className="fill-current text-blue-600">
                      <circle
                        className="pulse pulse-mini pulse-1"
                        cx="24"
                        cy="24"
                        r="8"
                      />
                      <circle
                        className="pulse pulse-mini pulse-2"
                        cx="24"
                        cy="24"
                        r="8"
                      />
                      <circle cx="24" cy="24" r="8" />
                    </g>
                  </svg>
                  <svg
                    className="absolute max-w-full"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    style={{ width: "12%", top: "19%", left: "46%" }}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g className="fill-current text-blue-600">
                      <circle
                        className="pulse pulse-mini"
                        cx="24"
                        cy="24"
                        r="8"
                      />
                      <circle
                        className="pulse pulse-mini pulse-2"
                        cx="24"
                        cy="24"
                        r="8"
                      />
                      <circle cx="24" cy="24" r="8" />
                    </g>
                  </svg>
                  {/* Avatars */}
                  <img
                    className="animate-float absolute max-w-full transform"
                    src={
                      "https://preview.cruip.com/simple/images/planet-avatar-03.png"
                    }
                    width="287"
                    height="86"
                    alt="Planet avatar 03"
                    style={{ width: "71.75%", top: "-4%", left: "-23.5%" }}
                  />
                  <img
                    className="animate-float animation-delay-1000 absolute max-w-full transform"
                    src={
                      "https://preview.cruip.com/simple/images/planet-avatar-04.png"
                    }
                    width="256"
                    height="126"
                    alt="Planet avatar 04"
                    style={{ width: "64%", bottom: "2%", right: "-18%" }}
                  />
                  <img
                    className="animate-float animation-delay-1000 absolute max-w-full transform"
                    src={
                      "https://preview.cruip.com/simple/images/planet-avatar-05.png"
                    }
                    width="296"
                    height="78"
                    alt="Planet avatar 05"
                    style={{ width: "74%", top: "-5%", right: "-22%" }}
                  />
                  {/* White box */}
                  <svg
                    className="absolute h-auto w-32 rounded-full shadow-xl"
                    viewBox="0 0 128 48"
                    style={{ width: "32%", top: "35%", left: "-25%" }}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      className="fill-current text-white"
                      width="128"
                      height="48"
                      rx="24"
                    />
                  </svg>
                  {/* White box */}
                  <svg
                    className="absolute h-auto w-32 rounded-full shadow-xl"
                    viewBox="0 0 128 48"
                    style={{ width: "32%", top: "52%", right: "-41%" }}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      className="fill-current text-white"
                      width="128"
                      height="48"
                      rx="24"
                    />
                  </svg>
                  {/* Blue icon */}
                  <svg
                    className="absolute h-auto w-16 max-w-full rounded-full shadow-xl"
                    viewBox="0 0 64 64"
                    style={{ width: "16%", top: "7%", right: "-12%" }}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="fill-current text-blue-600"
                      cx="32"
                      cy="32"
                      r="32"
                    />
                    <path
                      className="fill-current text-white"
                      d="M35.233 22L32 27.6 28.766 22H18l14 24.25L46 22z"
                    />
                    <path
                      className="fill-current text-blue-300"
                      d="M35.233 22L32 27.6 28.766 22H23.6L32 36.548 40.4 22z"
                    />
                  </svg>
                  {/* Black icon */}
                  <svg
                    className="absolute h-auto w-16 max-w-full rounded-full shadow-xl"
                    viewBox="0 0 64 64"
                    style={{ width: "16%", bottom: "12%", left: "-17%" }}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="fill-current text-gray-800"
                      cx="32"
                      cy="32"
                      r="32"
                    />
                    <g
                      transform="translate(.582 .055)"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g transform="rotate(45 -6.35 52.885)">
                        <path
                          className="fill-current text-gray-300"
                          d="M5-1h2v7H5zM5 16h2v7H5z"
                        />
                        <circle
                          className="stroke-current text-white"
                          strokeWidth="2"
                          strokeLinecap="square"
                          cx="6"
                          cy="11"
                          r="6"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>

              {/* Items */}
              <div className="mx-auto grid max-w-sm items-start gap-8 pt-8 md:max-w-2xl md:grid-cols-2 md:gap-16 md:pt-12 lg:max-w-5xl lg:grid-cols-3">
                {/* 1st item */}
                <div className="text-center">
                  <div className="h3 mb-1">2012</div>
                  <div className="text-gray-600">
                    Lorem ipsum is placeholder text commonly used tristique
                    senectus et netus.
                  </div>
                </div>

                {/* 2nd item */}
                <div className="text-center">
                  <div className="h3 mb-1">$20M</div>
                  <div className="text-gray-600">
                    Lorem ipsum is placeholder text commonly used tristique
                    senectus et netus.
                  </div>
                </div>

                {/* 3rd item */}
                <div className="text-center">
                  <div className="h3 mb-1">250M+</div>
                  <div className="text-gray-600">
                    Lorem ipsum is placeholder text commonly used tristique
                    senectus et netus.
                  </div>
                </div>

                {/* 4th item */}
                <div className="text-center">
                  <div className="h3 mb-1">2700+</div>
                  <div className="text-gray-600">
                    Lorem ipsum is placeholder text commonly used tristique
                    senectus et netus.
                  </div>
                </div>

                {/* 5th item */}
                <div className="text-center">
                  <div className="h3 mb-1">400K</div>
                  <div className="text-gray-600">
                    Lorem ipsum is placeholder text commonly used tristique
                    senectus et netus.
                  </div>
                </div>

                {/* 6th item */}
                <div className="text-center">
                  <div className="h3 mb-1">Millions</div>
                  <div className="text-gray-600">
                    Lorem ipsum is placeholder text commonly used tristique
                    senectus et netus.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="border-t border-gray-200 bg-gradient-to-b from-gray-100 to-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="py-12 md:py-20">
              {/* Section header */}
              <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
                <h2 className="h2">The humans behind the product</h2>
              </div>

              {/* Team members */}
              <div
                className="-my-6 mx-auto max-w-sm sm:-mx-3 sm:-my-8 sm:flex sm:max-w-5xl sm:flex-wrap sm:justify-center"
                data-aos-id-team
              >
                {/* 1st member */}
                <div
                  className="py-6 sm:w-1/2 sm:px-3 sm:py-8 md:w-1/3"
                  data-aos="zoom-y-out"
                  data-aos-anchor="[data-aos-id-team]"
                >
                  <div className="flex flex-col items-center">
                    <img
                      className="mb-4 rounded-full"
                      src={
                        "https://preview.cruip.com/simple/images/team-member-01.jpg"
                      }
                      width="120"
                      height="120"
                      alt="Team member 01"
                    />
                    <h4 className="mb-1 text-xl font-bold">Mark Lamprecht</h4>
                    <div className="mb-2 font-medium text-blue-600">
                      CEO & Co-founder
                    </div>
                    <p className="mb-3 text-center text-gray-600">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum sint occaecat cupidatat.
                    </p>
                    <div className="text-sm font-medium text-gray-600">
                      <a className="text-gray-900 hover:underline" href="#0">
                        Twitter
                      </a>{" "}
                      ·{" "}
                      <a className="text-gray-900 hover:underline" href="#0">
                        GitHub
                      </a>{" "}
                      ·{" "}
                      <a className="text-gray-900 hover:underline" href="#0">
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>

                {/* 2nd member */}
                <div
                  className="py-6 sm:w-1/2 sm:px-3 sm:py-8 md:w-1/3"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                  data-aos-anchor="[data-aos-id-team]"
                >
                  <div className="flex flex-col items-center">
                    <img
                      className="mb-4 rounded-full"
                      src={
                        "https://preview.cruip.com/simple/images/team-member-02.jpg"
                      }
                      width="120"
                      height="120"
                      alt="Team member 02"
                    />
                    <h4 className="mb-1 text-xl font-bold">
                      Jessie Pietrasiak
                    </h4>
                    <div className="mb-2 font-medium text-blue-600">
                      CTO & Co-founder
                    </div>
                    <p className="mb-3 text-center text-gray-600">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum sint occaecat cupidatat.
                    </p>
                    <div className="text-sm font-medium text-gray-600">
                      <a className="text-gray-900 hover:underline" href="#0">
                        Twitter
                      </a>{" "}
                      ·{" "}
                      <a className="text-gray-900 hover:underline" href="#0">
                        GitHub
                      </a>{" "}
                      ·{" "}
                      <a className="text-gray-900 hover:underline" href="#0">
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>

                {/* 3rd member */}
                <div
                  className="py-6 sm:w-1/2 sm:px-3 sm:py-8 md:w-1/3"
                  data-aos="zoom-y-out"
                  data-aos-delay="300"
                  data-aos-anchor="[data-aos-id-team]"
                >
                  <div className="flex flex-col items-center">
                    <img
                      className="mb-4 rounded-full"
                      src={
                        "https://preview.cruip.com/simple/images/team-member-03.jpg"
                      }
                      width="120"
                      height="120"
                      alt="Team member 03"
                    />
                    <h4 className="mb-1 text-xl font-bold">Marina Hoffman</h4>
                    <div className="mb-2 font-medium text-blue-600">
                      Community Manager
                    </div>
                    <p className="mb-3 text-center text-gray-600">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum sint occaecat cupidatat.
                    </p>
                    <div className="text-sm font-medium text-gray-600">
                      <a className="text-gray-900 hover:underline" href="#0">
                        Twitter
                      </a>{" "}
                      ·{" "}
                      <a className="text-gray-900 hover:underline" href="#0">
                        GitHub
                      </a>{" "}
                      ·{" "}
                      <a className="text-gray-900 hover:underline" href="#0">
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
    // <div className=" mx-auto px-4 lg:px-0">
    //   <div className="flex w-full flex-wrap overflow-hidden bg-blue-50 pb-20 md:py-[105px] md:pb-0">
    //     <div className=" mx-auto w-full px-4">
    //       <div className="mb-16 flex items-center justify-around">
    //         <div className="px-4">
    //           <button className="mr-2 hidden h-16 w-16 flex-shrink-0 border-2 border-blue-900 text-blue-900 lg:block lg:hover:bg-blue-100">
    //             <svg
    //               className="mx-auto"
    //               width="12"
    //               height="16"
    //               viewBox="0 0 12 16"
    //               fill="none"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 d="M8.75 0L11.25 2.5L5.75 8L11.25 13.5L8.75 16L0.75 8L8.75 0Z"
    //                 fill="currentColor"
    //               ></path>
    //             </svg>
    //           </button>
    //         </div>
    //         <div className="bg-white">
    //           <div className="-mx-4 flex flex-wrap">
    //             <div className="w-full px-12 py-10 lg:mb-0 lg:w-3/5 lg:px-4 lg:py-20">
    //               <div className="mx-auto lg:max-w-md">
    //                 <span className="text-blue-400" data-config-id="title1">
    //                   UI Designer
    //                 </span>
    //                 <h2
    //                   className="font-heading mb-6 mt-2 text-4xl font-bold text-blue-800"
    //                   data-config-id="name1"
    //                 >
    //                   Sara Harris
    //                 </h2>
    //                 <p
    //                   className="mb-6 text-lg text-gray-500"
    //                   data-config-id="desc1"
    //                 >
    //                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //                   Pellentesque massa nibh, pulvinar vitae aliquet nec,
    //                   accumsan aliquet orci.
    //                 </p>
    //                 <div className="flex items-center">
    //                   <a
    //                     className="mr-4 inline-flex h-12 w-12 items-center justify-center bg-blue-50 text-blue-500"
    //                     href="/"
    //                   >
    //                     <svg
    //                       width="10"
    //                       height="18"
    //                       viewBox="0 0 10 18"
    //                       fill="none"
    //                       xmlns="http://www.w3.org/2000/svg"
    //                     >
    //                       <path
    //                         fillRule="evenodd"
    //                         clipRule="evenodd"
    //                         d="M6.63494 17.7272V9.766H9.3583L9.76688 6.66243H6.63494V4.68126C6.63494 3.78299 6.88821 3.17083 8.20297 3.17083L9.87712 3.17015V0.394215C9.5876 0.357312 8.59378 0.272705 7.43708 0.272705C5.0217 0.272705 3.3681 1.71878 3.3681 4.37389V6.66243H0.636475V9.766H3.3681V17.7272H6.63494Z"
    //                         fill="currentColor"
    //                       ></path>
    //                     </svg>
    //                   </a>
    //                   <a
    //                     className="mr-4 inline-flex h-12 w-12 items-center justify-center bg-blue-50 text-blue-500"
    //                     href="/"
    //                   >
    //                     <svg
    //                       width="19"
    //                       height="16"
    //                       viewBox="0 0 19 16"
    //                       fill="none"
    //                       xmlns="http://www.w3.org/2000/svg"
    //                     >
    //                       <path
    //                         fillRule="evenodd"
    //                         clipRule="evenodd"
    //                         d="M18.8184 2.14598C18.1358 2.44844 17.4034 2.65356 16.6339 2.74513C17.4196 2.27462 18.0211 1.52831 18.3061 0.641769C17.5691 1.0775 16.7556 1.39389 15.8887 1.56541C15.1946 0.82489 14.2072 0.363647 13.112 0.363647C11.011 0.363647 9.30746 2.06719 9.30746 4.16707C9.30746 4.46489 9.34107 4.75577 9.40598 5.03392C6.24459 4.87513 3.44128 3.3605 1.56507 1.05895C1.2371 1.61986 1.05053 2.27344 1.05053 2.9711C1.05053 4.29107 1.72268 5.45574 2.74249 6.13713C2.11901 6.11628 1.53262 5.94477 1.01925 5.65968V5.70719C1.01925 7.5498 2.3311 9.08762 4.07056 9.43762C3.75186 9.52337 3.4158 9.57089 3.06813 9.57089C2.82246 9.57089 2.58489 9.54656 2.35195 9.50019C2.83634 11.0125 4.24092 12.1123 5.90507 12.1424C4.60365 13.1623 2.96268 13.7683 1.18034 13.7683C0.873252 13.7683 0.570767 13.7498 0.272949 13.7162C1.9568 14.7974 3.95586 15.4279 6.1044 15.4279C13.1028 15.4279 16.9283 9.63116 16.9283 4.60398L16.9155 4.11147C17.663 3.57834 18.3096 2.90853 18.8184 2.14598Z"
    //                         fill="currentColor"
    //                       ></path>
    //                     </svg>
    //                   </a>
    //                   <a
    //                     className="mr-4 inline-flex h-12 w-12 items-center justify-center bg-blue-50 text-blue-500"
    //                     href="/"
    //                   >
    //                     <svg
    //                       width="24"
    //                       height="24"
    //                       viewBox="0 0 24 24"
    //                       fill="none"
    //                       xmlns="http://www.w3.org/2000/svg"
    //                     >
    //                       <path
    //                         fillRule="evenodd"
    //                         clipRule="evenodd"
    //                         d="M7.60045 2.18176H16.399C19.3871 2.18176 21.8181 4.61276 21.818 7.60069V16.3992C21.818 19.3871 19.3871 21.8181 16.399 21.8181H7.60045C4.61252 21.8181 2.18164 19.3872 2.18164 16.3992V7.60069C2.18164 4.61276 4.61252 2.18176 7.60045 2.18176ZM16.3991 20.0759C18.4265 20.0759 20.0759 18.4266 20.0759 16.3992H20.0758V7.60069C20.0758 5.57343 18.4263 3.924 16.399 3.924H7.60045C5.57319 3.924 3.92387 5.57343 3.92387 7.60069V16.3992C3.92387 18.4266 5.57319 20.076 7.60045 20.0759H16.3991ZM6.85696 12.0001C6.85696 9.16418 9.16401 6.85709 11.9998 6.85709C14.8356 6.85709 17.1427 9.16418 17.1427 12.0001C17.1427 14.8358 14.8356 17.1428 11.9998 17.1428C9.16401 17.1428 6.85696 14.8358 6.85696 12.0001ZM8.6278 11.9999C8.6278 13.8592 10.1406 15.3718 11.9998 15.3718C13.8591 15.3718 15.3718 13.8592 15.3718 11.9999C15.3718 10.1405 13.8592 8.62784 11.9998 8.62784C10.1404 8.62784 8.6278 10.1405 8.6278 11.9999Z"
    //                         fill="currentColor"
    //                       ></path>
    //                     </svg>
    //                   </a>
    //                   <a
    //                     className="mr-4 inline-flex h-12 w-12 items-center justify-center bg-blue-50 text-blue-500"
    //                     href="/"
    //                   >
    //                     <svg
    //                       width="18"
    //                       height="18"
    //                       viewBox="0 0 18 18"
    //                       fill="none"
    //                       xmlns="http://www.w3.org/2000/svg"
    //                     >
    //                       <path
    //                         d="M9 0C4.0275 0 0 4.13211 0 9.22838C0 13.3065 2.5785 16.7648 6.15375 17.9841C6.60375 18.0709 6.76875 17.7853 6.76875 17.5403C6.76875 17.3212 6.76125 16.7405 6.7575 15.9712C4.254 16.5277 3.726 14.7332 3.726 14.7332C3.3165 13.6681 2.72475 13.3832 2.72475 13.3832C1.9095 12.8111 2.78775 12.8229 2.78775 12.8229C3.6915 12.887 4.16625 13.7737 4.16625 13.7737C4.96875 15.1847 6.273 14.777 6.7875 14.5414C6.8685 13.9443 7.10025 13.5381 7.3575 13.3073C5.35875 13.0764 3.258 12.2829 3.258 8.74709C3.258 7.73988 3.60675 6.91659 4.18425 6.27095C4.083 6.03774 3.77925 5.0994 4.263 3.82846C4.263 3.82846 5.01675 3.58116 6.738 4.77462C7.458 4.56958 8.223 4.46785 8.988 4.46315C9.753 4.46785 10.518 4.56958 11.238 4.77462C12.948 3.58116 13.7017 3.82846 13.7017 3.82846C14.1855 5.0994 13.8818 6.03774 13.7917 6.27095C14.3655 6.91659 14.7142 7.73988 14.7142 8.74709C14.7142 12.2923 12.6105 13.0725 10.608 13.2995C10.923 13.5765 11.2155 14.1423 11.2155 15.0071C11.2155 16.242 11.2043 17.2344 11.2043 17.5341C11.2043 17.7759 11.3617 18.0647 11.823 17.9723C15.4237 16.7609 18 13.3002 18 9.22838C18 4.13211 13.9703 0 9 0Z"
    //                         fill="currentColor"
    //                       ></path>
    //                     </svg>
    //                   </a>
    //                   <a
    //                     className="inline-flex h-12 w-12 items-center justify-center bg-blue-50 text-blue-500"
    //                     href="/"
    //                   >
    //                     <svg
    //                       width="18"
    //                       height="18"
    //                       viewBox="0 0 18 18"
    //                       fill="none"
    //                       xmlns="http://www.w3.org/2000/svg"
    //                     >
    //                       <path
    //                         d="M16.2 0H1.8C0.81 0 0 0.81 0 1.8V16.2C0 17.19 0.81 18 1.8 18H16.2C17.19 18 18 17.19 18 16.2V1.8C18 0.81 17.19 0 16.2 0ZM5.4 15.3H2.7V7.2H5.4V15.3ZM4.05 5.67C3.15 5.67 2.43 4.95 2.43 4.05C2.43 3.15 3.15 2.43 4.05 2.43C4.95 2.43 5.67 3.15 5.67 4.05C5.67 4.95 4.95 5.67 4.05 5.67ZM15.3 15.3H12.6V10.53C12.6 9.81004 11.97 9.18 11.25 9.18C10.53 9.18 9.9 9.81004 9.9 10.53V15.3H7.2V7.2H9.9V8.28C10.35 7.56 11.34 7.02 12.15 7.02C13.86 7.02 15.3 8.46 15.3 10.17V15.3Z"
    //                         fill="currentColor"
    //                       ></path>
    //                     </svg>
    //                   </a>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="w-full px-4 lg:w-2/5">
    //               <div className="mb-12 h-full lg:mb-0">
    //                 <img
    //                   className="h-full w-full object-cover"
    //                   src="https://images.unsplash.com/photo-1612282131240-6e878907d0f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1008&amp;q=80"
    //                   alt=""
    //                   data-config-id="image1"
    //                 />
    //               </div>
    //               <div className="text-center lg:hidden">
    //                 <button className="h-14 w-14 border-2 border-blue-900 text-blue-900">
    //                   <svg
    //                     className="mx-auto"
    //                     width="12"
    //                     height="16"
    //                     viewBox="0 0 12 16"
    //                     fill="none"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                   >
    //                     <path
    //                       d="M8.75 0L11.25 2.5L5.75 8L11.25 13.5L8.75 16L0.75 8L8.75 0Z"
    //                       fill="currentColor"
    //                     ></path>
    //                   </svg>
    //                 </button>
    //                 <button className="h-14 w-14 border-2 border-blue-900 text-blue-900">
    //                   <svg
    //                     className="mx-auto"
    //                     width="12"
    //                     height="16"
    //                     viewBox="0 0 12 16"
    //                     fill="none"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                   >
    //                     <path
    //                       d="M3.25 0L0.75 2.5L6.25 8L0.75 13.5L3.25 16L11.25 8L3.25 0Z"
    //                       fill="currentColor"
    //                     ></path>
    //                   </svg>
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="px-4">
    //           <button className="ml-2 hidden h-16 w-16 flex-shrink-0 border-2 border-blue-900 text-blue-900 lg:block lg:hover:bg-blue-100">
    //             <svg
    //               className="mx-auto"
    //               width="12"
    //               height="16"
    //               viewBox="0 0 12 16"
    //               fill="none"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 d="M3.25 0L0.75 2.5L6.25 8L0.75 13.5L3.25 16L11.25 8L3.25 0Z"
    //                 fill="currentColor"
    //               ></path>
    //             </svg>
    //           </button>
    //         </div>
    //       </div>
    //       <div className="hidden items-center justify-center lg:flex">
    //         <button className="mr-10 inline-block h-3 w-3 bg-blue-500"></button>
    //         <button className="mr-10 inline-block h-1 w-1 rounded-full bg-blue-300"></button>
    //         <button className="mr-10 inline-block h-1 w-1 rounded-full bg-blue-300"></button>
    //         <button className="mr-10 inline-block h-1 w-1 rounded-full bg-blue-300"></button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default About;
