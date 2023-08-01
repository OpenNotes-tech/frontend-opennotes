import { Link } from "react-router-dom";
import { useState } from "react";

const ProfilePreview = () => {
  const [isGitHub, setIsGitHub] = useState(false);
  const [isLinkedIn, setIsLinkedIn] = useState(false);
  const [isWeb, setIsWeb] = useState(false);

  return (
    <div className="border-[0.6px] border-gray-200 shadow-md mb-28 rounded-lg bg-white">
      <div className="border-b border-gray-200 px-10 md:px-10 py-8 text-xl font-medium">
        What User Will See
      </div>
      <div className="flex lg:justify-between px-3 md:px-10 py-8 h-full border-b border-gray-200 justify-center">
        <div className="flex flex-col xl:flex-row w-full justify-center xl:justify-between">
          <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-5 lg:space-y-0 items-center">
            <div className="text-center bg-center bg-cover bg-no-repeat">
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="h-20 w-20 p-1 shadow-md  dark:shadow-gray-800 mx-auto object-cover rounded-full block"
                alt=""
              />
            </div>
            <div className="flex flex-col space-y-2 items-center lg:items-start">
              <div className="flex flex-col-reverse lg:flex-row  lg:space-x-6">
                <div>
                  <h5 className=" text-xl font-semibold">Thomas Brewer</h5>
                </div>
                <div className="ml-4 lg:ml-0 my-3 lg:my-0">
                  <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-600">
                    <span className="w-1.5 h-1.5 inline-block bg-blue-700 rounded-full min-w-fit"></span>
                    Active 12h ago
                  </span>
                </div>
              </div>
              <div className="md:-ml-4 lg:-ml-0">
                <div className="flex flex-col lg:flex-row space-x-2 space-y-1 items-center text-sm text-center">
                  <p className="text-slate-400">Senior Web Developer</p>
                  <span className="w-1 h-1 inline-block bg-gray-400 rounded-full mt-[3px]"></span>
                  <p className="text-slate-400">2 years exp</p>
                  <span className="w-1 h-1 inline-block bg-gray-400 rounded-full mt-[3px]"></span>
                  <p className="text-slate-400">Belarus</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-x-4 pt-6 pl-6 md:pl-2 lg:pl-24 xl:pt-2 items-center text-center flex xl:-mt-9">
            <Link
              to={"/profile/preview"}
              onMouseOver={() => setIsGitHub(true)}
              onMouseOut={() => setIsGitHub(false)}
              className="inline-flex items-center text-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill={isGitHub ? "#3b82f6" : "none"}
                stroke={isGitHub ? "#3b82f6" : "#1f2937"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github"
                style={{ transition: "stroke 0.2s ease-in-out" }}
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </Link>
            <Link
              to={"/profile/preview"}
              onMouseOver={() => setIsLinkedIn(true)}
              onMouseOut={() => setIsLinkedIn(false)}
              className="inline-flex items-center text-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill={isLinkedIn ? "#3b82f6" : "none"}
                stroke={isLinkedIn ? "#3b82f6" : "#1f2937"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin"
                style={{ transition: "stroke 0.2s ease-in-out" }}
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </Link>
            <Link
              to={"/profile/preview"}
              onMouseOver={() => setIsWeb(true)}
              onMouseOut={() => setIsWeb(false)}
              className="inline-flex items-center text-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16 "
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke={isWeb ? "#3b82f6" : "#1f2937"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-globe"
                style={{ transition: "stroke 0.2s ease-in-out" }}
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" x2="22" y1="12" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </Link>
            <Link
              to={"/profile/preview"}
              className="inline-flex items-center text-center gap-1.5 py-[6px]  px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:text-blue-500 transition-colors duration-400 ease-in-out"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between px-6  md:px-10 py-8 h-full border-b border-gray-200 ">
        <div className="-ml-1 text-sm pb-2 text-gray-400 flex flex-row space-x-2 items-center text-center">
          <span className=" flex items-center justify-center  bg-gray-200 rounded-full ">
            <svg
              aria-hidden="true"
              className="w-3 h-3 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>

          <p className="text-xs">Looking For</p>
        </div>
        <ol className="flex flex-row border-l border-gray-300">
          <li>
            <div className="pl-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
              voluptate magnam fugit maiores exercitationem incidunt, odit
              accusamus quia error soluta distinctio consectetur autem
              aspernatur quaerat id adipisci facilis excepturi eligendi.
            </div>
          </li>
        </ol>
      </div>
      <div className="flex flex-wrap justify-between px-6 md:px-10 py-8 h-full border-b border-gray-200 ">
        <div className="-ml-1 text-sm pb-2 text-gray-400 flex flex-row space-x-2 items-center text-center">
          <span className=" flex items-center justify-center  bg-gray-200 rounded-full ">
            <svg
              aria-hidden="true"
              className="w-3 h-3 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>

          <p className="text-xs">Achievements</p>
        </div>
        <ol className="flex flex-row border-l border-gray-300">
          <li>
            <div className="pl-4">
              2022 International Collegiate Programming Contest (ICPC) NERC
              Finalist 2020 1st / 2700 International Digital Economy Olympiad
              (IDEO) 2021 28th / 900 International Data Analysis Olympiad (IDAO)
              2021 6th / 1300 Auto Inland Vehicle Insurance prediction Challenge
              Google Developers Student Club Machine Learning Developer
            </div>
          </li>
        </ol>
      </div>
      <div className="bg-white border-b border-gray-200">
        <div className="pl-6 pr-4 lg:px-10 py-8 flex flex-row justify-between items-center">
          <div className="-ml-1 text-sm pb-2 text-gray-400 flex flex-row space-x-2 items-center text-center">
            <span className=" flex items-center justify-center  bg-gray-200 rounded-full ">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>

            <p className="text-xs">Experience</p>
          </div>
        </div>
        <div className="flex flex-row space-x-6 lg:space-x-8 px-4 lg:px-10 py-8 h-full">
          <div>
            <div className="h-12 w-12 rounded bg-center bg-cover bg-no-repeat">
              <img
                className="w-full object-cover rounded border-2 border-white shadow"
                src="https://tuk-cdn.s3.amazonaws.com/assets/templates/Job-Portal/jp_6.png"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col space-y-8 pr-3 ">
            <div className="flex lg:flex-row flex-col space-y-10 lg:space-y-0 justify-between lg:pr-10 xl:items-start items-end">
              <div>
                <h1 className="text-xl font-medium">
                  Full-stack Web Developer
                </h1>
                <p className="text-gray-600">
                  University of Central Asia - <span>Bishkek, Kyrgyzstan</span>
                </p>
                <p className="text-gray-500">May 2022 - Present</p>
              </div>
              <div className=" hover:text-blue-500  flex-row space-x-2 items-center font-normal text-center text-slate-500 hidden xl:block">
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-2 rounded">
                  AWS
                </span>
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-2 rounded">
                  Docker
                </span>
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-2 rounded">
                  Linux
                </span>
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-2 rounded">
                  CI/CD
                </span>
              </div>
            </div>
            <div className=" hover:text-blue-500 flex flex-row space-x-2 items-center font-normal text-center -ml-14 lg:-ml-0 text-slate-500  xl:hidden">
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-2 rounded">
                AWS
              </span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-2 rounded">
                Docker
              </span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-2 rounded">
                Linux
              </span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-2 rounded">
                CI/CD
              </span>
            </div>
            <div className="-ml-14 lg:-ml-0 xl:mr-40">
              ►Developed Single Page Application using React.js, Redux, designed
              responsive web interface with Tailwindcss and prototyped the UI
              with Figma ► Ensuring the high security, designed and developed
              REST API together with cookie based JWT authentication using
              Express.js and MongoDB database. ►Reduced the latency by using AWS
              S3 for media files, Redis caching mechanism, and MongoDB high
              performing index searching
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-6 lg:space-x-8 px-4 lg:px-10 py-8 h-full">
          <div>
            <div className="h-12 w-12 rounded bg-center bg-cover bg-no-repeat">
              <img
                className="w-full object-cover rounded border-2 border-white shadow"
                src="https://tuk-cdn.s3.amazonaws.com/assets/templates/Job-Portal/jp_6.png"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col space-y-8 pr-3 ">
            <div className="flex lg:flex-row flex-col space-y-10 lg:space-y-0 justify-between lg:pr-10 xl:items-start items-end">
              <div>
                <h1 className="text-xl font-medium">
                  Full-stack Web Developer
                </h1>
                <p className="text-gray-600">
                  University of Central Asia - <span>Bishkek, Kyrgyzstan</span>
                </p>
                <p className="text-gray-500">May 2022 - Present</p>
              </div>
              <div className=" hover:text-blue-500  flex-row space-x-2 items-center font-normal text-center text-slate-500 hidden xl:block">
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-2 rounded">
                  Deep Learning
                </span>
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-2 rounded">
                  Computer Vision
                </span>

                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-2 rounded">
                  TensorFlow
                </span>
              </div>
            </div>
            <div className=" hover:text-blue-500 flex flex-row space-x-2 items-center font-normal text-center -ml-14 lg:-ml-0 text-slate-500  xl:hidden">
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-2 rounded">
                Deep Learning
              </span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-2 rounded">
                Python
              </span>

              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-2 rounded">
                TensorFlow
              </span>
            </div>
            <div className="-ml-14 lg:-ml-0 xl:mr-40">
              ►Developed Single Page Application using React.js, Redux, designed
              responsive web interface with Tailwindcss and prototyped the UI
              with Figma ► Ensuring the high security, designed and developed
              REST API together with cookie based JWT authentication using
              Express.js and MongoDB database. ►Reduced the latency by using AWS
              S3 for media files, Redis caching mechanism, and MongoDB high
              performing index searching
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-6 lg:space-x-8 px-4 lg:px-10 py-8 h-full">
          <div>
            <div className="h-12 w-12 rounded bg-center bg-cover bg-no-repeat">
              <img
                className="w-full object-cover rounded border-2 border-white shadow"
                src="https://tuk-cdn.s3.amazonaws.com/assets/templates/Job-Portal/jp_6.png"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col space-y-8 pr-3 ">
            <div className="flex lg:flex-row flex-col space-y-10 lg:space-y-0 justify-between lg:pr-10 xl:items-start items-end">
              <div>
                <h1 className="text-xl font-medium">
                  Full-stack Web Developer
                </h1>
                <p className="text-gray-600">
                  University of Central Asia - <span>Bishkek, Kyrgyzstan</span>
                </p>
                <p className="text-gray-500">May 2022 - Present</p>
              </div>
              <div className=" hover:text-blue-500  flex-row space-x-2 items-center font-normal text-center text-slate-500 hidden xl:block">
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-2 rounded">
                  C++
                </span>
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-2 rounded">
                  .NET
                </span>
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-2 rounded">
                  ASP.NET
                </span>
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-2 rounded">
                  MySQL
                </span>
              </div>
            </div>
            <div className=" hover:text-blue-500 flex flex-row space-x-2 items-center font-normal text-center -ml-14 lg:-ml-0 text-slate-500  xl:hidden">
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-2 rounded">
                C++
              </span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-2 rounded">
                .NET
              </span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-2 rounded">
                ASP.NET
              </span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-2 rounded">
                MySQL
              </span>
            </div>
            <div className="-ml-14 lg:-ml-0 xl:mr-40">
              ►Developed Single Page Application using React.js, Redux, designed
              responsive web interface with Tailwindcss and prototyped the UI
              with Figma ► Ensuring the high security, designed and developed
              REST API together with cookie based JWT authentication using
              Express.js and MongoDB database. ►Reduced the latency by using AWS
              S3 for media files, Redis caching mechanism, and MongoDB high
              performing index searching
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-6 lg:space-x-8 px-4 lg:px-10 py-8 h-full">
          <div>
            <div className="h-12 w-12 rounded bg-center bg-cover bg-no-repeat">
              <img
                className="w-full object-cover rounded border-2 border-white shadow"
                src="https://tuk-cdn.s3.amazonaws.com/assets/templates/Job-Portal/jp_6.png"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col space-y-8 pr-3 ">
            <div className="flex lg:flex-row flex-col space-y-10 lg:space-y-0 justify-between lg:pr-10 xl:items-start items-end">
              <div>
                <h1 className="text-xl font-medium">
                  Full-stack Web Developer
                </h1>
                <p className="text-gray-600">
                  University of Central Asia - <span>Bishkek, Kyrgyzstan</span>
                </p>
                <p className="text-gray-500">May 2022 - Present</p>
              </div>
              <div className=" hover:text-blue-500  flex-row space-x-2 items-center font-normal text-center text-slate-500 hidden xl:block">
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-2 rounded">
                  React
                </span>
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-2 rounded">
                  Node.js
                </span>
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-2 rounded">
                  Tailwind
                </span>
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-2 rounded">
                  Go
                </span>
              </div>
            </div>
            <div className=" hover:text-blue-500 flex flex-row space-x-2 items-center font-normal text-center -ml-14 lg:-ml-0 text-slate-500  xl:hidden">
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-2 rounded">
                React
              </span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-2 rounded">
                Node.js
              </span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-2 rounded">
                Tailwind
              </span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-2 rounded">
                Go
              </span>
            </div>
            <div className="-ml-14 lg:-ml-0 xl:mr-40">
              ►Developed Single Page Application using React.js, Redux, designed
              responsive web interface with Tailwindcss and prototyped the UI
              with Figma ► Ensuring the high security, designed and developed
              REST API together with cookie based JWT authentication using
              Express.js and MongoDB database. ►Reduced the latency by using AWS
              S3 for media files, Redis caching mechanism, and MongoDB high
              performing index searching
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border-b border-gray-200">
        <div className=" pl-6 pr-4 lg:px-10 py-8 flex flex-row justify-between items-center">
          <div className="-ml-1 text-sm pb-2 text-gray-400 flex flex-row space-x-2 items-center text-center">
            <span className=" flex items-center justify-center  bg-gray-200 rounded-full ">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>

            <p className="text-xs">Education</p>
          </div>
        </div>
        <div className="flex flex-row space-x-6 lg:space-x-8 px-6  lg:px-10 py-8 w-full h-full border-b border-gray-200">
          <div>
            <div className="h-12 w-12 rounded bg-center bg-cover bg-no-repeat">
              <img
                className="w-full object-cover rounded border-2 border-white shadow"
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
          </div>
          <div className="flex lg:flex-row flex-col space-y-10 lg:space-y-0 justify-between w-full lg:pr-10 lg:items-start items-end">
            <div>
              <h1 className="text-xl font-medium">Unversity of Central Asia</h1>
              <p className="text-gray-600">
                Bachelor's degree - <span>Computer Science</span>
              </p>
              <p className="text-gray-500">
                Sep 2019 - May 2023{" "}
                <span className="italic text-slate-400">(Expected)</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200">
        <div className=" pl-6 pr-4 lg:px-10 py-10 flex flex-row justify-between items-center">
          <div className="-ml-1 text-sm pb-2 text-gray-400 flex flex-row space-x-2 items-center text-center">
            <span className=" flex items-center justify-center  bg-gray-200 rounded-full ">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>

            <p className="text-xs">Skills</p>
          </div>
        </div>
        <div className="pb-8 px-6 space-x-2">
          <p className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1.5 rounded border-2 inline-block my-1">
            React Native
          </p>
          <p className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1.5 rounded border-2 inline-block my-1">
            Testing
          </p>
          <p className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1.5 rounded border-2 inline-block my-1">
            MongoDB
          </p>
          <p className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1.5 rounded border-2 inline-block my-1">
            React
          </p>
          <p className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1.5 rounded border-2 inline-block my-1">
            Redis
          </p>
          <p className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1.5 rounded border-2 inline-block my-1">
            Amazon Web Services
          </p>
          <p className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1.5 rounded border-2 inline-block my-1">
            Express.js
          </p>
          <p className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1.5 rounded border-2 inline-block my-1">
            Redux
          </p>
          <p className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1.5 rounded border-2 inline-block my-1">
            Security
          </p>
          <p className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1.5 rounded border-2 inline-block my-1">
            Restful APIs
          </p>
          <p className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1.5 rounded border-2 inline-block my-1">
            Figma
          </p>
          <p className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1.5 rounded border-2 inline-block my-1">
            Tailwind CSS
          </p>
          <p className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1.5 rounded border-2 inline-block my-1">
            Machine Learning
          </p>
          <p className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1.5 rounded border-2 inline-block my-1">
            Computer Vision
          </p>
          <p className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1.5 rounded border-2 inline-block my-1">
            Django
          </p>
          <p className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1.5 rounded border-2 inline-block my-1">
            Numpy
          </p>
          <p className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1.5 rounded border-2 inline-block my-1">
            Pandas
          </p>
          <p className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1.5 rounded border-2 inline-block my-1">
            .NET
          </p>
          <p className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1.5 rounded border-2 inline-block my-1">
            TypeScript
          </p>

          <p className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1.5 rounded border-2 inline-block my-1">
            Natural Language Processing
          </p>
          <p className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1.5 rounded border-2 inline-block my-1">
            Python
          </p>
          <p className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1.5 rounded border-2 inline-block my-1">
            Web Development
          </p>
          <p className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1.5 rounded border-2 inline-block my-1">
            Git & Github
          </p>
          <p className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1.5 rounded border-2 inline-block my-1">
            Travis Ci
          </p>
          <p className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1.5 rounded border-2 inline-block my-1">
            Docker / Docker Compose / Kubernetes
          </p>
          <p className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1.5 rounded border-2 inline-block my-1">
            Full-Stack Web Development (Node/Redux/React)
          </p>
          <p className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1.5 rounded border-2 inline-block my-1">
            MERN Stack
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePreview;
