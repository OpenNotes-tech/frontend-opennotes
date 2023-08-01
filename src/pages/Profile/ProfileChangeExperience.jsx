import { Link } from "react-router-dom";
// import LoaderSkeleton from "../../components/LoaderSkeleton";

const ProfileChangeExperience = () => {
  // const location = useLocation();
  // const name = location?.pathname?.split("/")[2]?.toLocaleLowerCase();
  return (
    <div className="border-[0.6px] border-gray-200 shadow-md mb-28 rounded-lg lg:-mr-0 sm:-mr-6 bg-white">
      <div className="border-b border-gray-200 pl-6 pr-4 lg:px-10 py-8 flex flex-row justify-between items-center">
        <h1 className="text-xl font-medium">Your Work Experience</h1>
        <Link
          className="lg:mr-10 hover:text-blue-500 text-slate-500 italic"
          to="/profile"
        >
          + Add work experience
        </Link>
      </div>
      <div className="flex flex-row space-x-6 lg:space-x-8 px-6 lg:px-10 py-8 h-full border-b border-gray-200">
        <div>
          <div className="h-12 w-12 rounded bg-center bg-cover bg-no-repeat">
            <img
              className="w-full object-cover rounded border-2 border-white shadow"
              src="https://tuk-cdn.s3.amazonaws.com/assets/templates/Job-Portal/jp_6.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col space-y-8">
          <div className="flex lg:flex-row flex-col space-y-10 lg:space-y-0 justify-between lg:pr-10 xl:items-start items-end">
            <div>
              <h1 className="text-xl font-medium">Full-stack Web Developer</h1>
              <p className="text-gray-600">
                University of Central Asia - <span>Bishkek, Kyrgyzstan</span>
              </p>
              <p className="text-gray-500">May 2022 - Present</p>
            </div>
            <Link
              to={"/qwedawd234123"}
              className=" hover:text-blue-500 flex flex-row space-x-2 items-center font-normal text-center text-slate-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 18"
                fill="none"
                // style={{ stroke: "#3b82f6" }}
                stroke="#64748b"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-edit-3"
              >
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
              <p className="italic hover:text-blue-500">Edit</p>
            </Link>
          </div>
          <div className="lg:mr-40">
            ►Developed Single Page Application using React.js, Redux, designed
            responsive web interface with Tailwindcss and prototyped the UI with
            Figma ► Ensuring the high security, designed and developed REST API
            together with cookie based JWT authentication using Express.js and
            MongoDB database. ►Reduced the latency by using AWS S3 for media
            files, Redis caching mechanism, and MongoDB high performing index
            searching
          </div>
        </div>
      </div>
      <div className="flex flex-row space-x-6 lg:space-x-8 px-6 lg:px-10 py-8 h-full border-b border-gray-200">
        <div>
          <div className="h-12 w-12 rounded bg-center bg-cover bg-no-repeat">
            <img
              className="w-full object-cover rounded border-2 border-white shadow"
              src="https://tuk-cdn.s3.amazonaws.com/assets/templates/Job-Portal/jp_6.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col space-y-8">
          <div className="flex lg:flex-row flex-col space-y-10 lg:space-y-0 justify-between lg:pr-10 xl:items-start items-end">
            <div>
              <h1 className="text-xl font-medium">Full-stack Web Developer</h1>
              <p className="text-gray-600">
                University of Central Asia - <span>Bishkek, Kyrgyzstan</span>
              </p>
              <p className="text-gray-500">May 2022 - Present</p>
            </div>
            <Link
              to={"/profile"}
              className=" hover:text-blue-500 flex flex-row space-x-2 items-center font-normal text-center text-slate-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 18"
                fill="none"
                // style={{ stroke: "#3b82f6" }}
                stroke="#64748b"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-edit-3"
              >
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
              <p className="italic hover:text-blue-500">Edit</p>
            </Link>
          </div>
          <div className="lg:mr-40">
            ►Developed Single Page Application using React.js, Redux, designed
            responsive web interface with Tailwindcss and prototyped the UI with
            Figma ► Ensuring the high security, designed and developed REST API
            together with cookie based JWT authentication using Express.js and
            MongoDB database. ►Reduced the latency by using AWS S3 for media
            files, Redis caching mechanism, and MongoDB high performing index
            searching
          </div>
        </div>
      </div>
      <div className="flex flex-row space-x-6 lg:space-x-8 px-6 lg:px-10 py-8 h-full border-b border-gray-200">
        <div>
          <div className="h-12 w-12 rounded bg-center bg-cover bg-no-repeat">
            <img
              className="w-full object-cover rounded border-2 border-white shadow"
              src="https://tuk-cdn.s3.amazonaws.com/assets/templates/Job-Portal/jp_6.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col space-y-8">
          <div className="flex lg:flex-row flex-col space-y-10 lg:space-y-0 justify-between lg:pr-10 xl:items-start items-end">
            <div>
              <h1 className="text-xl font-medium">Full-stack Web Developer</h1>
              <p className="text-gray-600">
                University of Central Asia - <span>Bishkek, Kyrgyzstan</span>
              </p>
              <p className="text-gray-500">May 2022 - Present</p>
            </div>
            <Link
              to={"/profile"}
              className=" hover:text-blue-500 flex flex-row space-x-2 items-center font-normal text-center text-slate-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 18"
                fill="none"
                // style={{ stroke: "#3b82f6" }}
                stroke="#64748b"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-edit-3"
              >
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
              <p className="italic hover:text-blue-500">Edit</p>
            </Link>
          </div>
          <div className="lg:mr-40">
            ►Developed Single Page Application using React.js, Redux, designed
            responsive web interface with Tailwindcss and prototyped the UI with
            Figma ► Ensuring the high security, designed and developed REST API
            together with cookie based JWT authentication using Express.js and
            MongoDB database. ►Reduced the latency by using AWS S3 for media
            files, Redis caching mechanism, and MongoDB high performing index
            searching
          </div>
        </div>
      </div>
      <div className="flex flex-row space-x-6 lg:space-x-8 px-6 lg:px-10 py-8 h-full border-b border-gray-200">
        <div>
          <div className="h-12 w-12 rounded bg-center bg-cover bg-no-repeat">
            <img
              className="w-full object-cover rounded border-2 border-white shadow"
              src="https://tuk-cdn.s3.amazonaws.com/assets/templates/Job-Portal/jp_6.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col space-y-8">
          <div className="flex lg:flex-row flex-col space-y-10 lg:space-y-0 justify-between lg:pr-10 xl:items-start items-end">
            <div>
              <h1 className="text-xl font-medium">Full-stack Web Developer</h1>
              <p className="text-gray-600">
                University of Central Asia - <span>Bishkek, Kyrgyzstan</span>
              </p>
              <p className="text-gray-500">May 2022 - Present</p>
            </div>
            <Link
              to={"/profile"}
              className=" hover:text-blue-500 flex flex-row space-x-2 items-center font-normal text-center text-slate-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 18"
                fill="none"
                // style={{ stroke: "#3b82f6" }}
                stroke="#64748b"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-edit-3"
              >
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
              <p className="italic hover:text-blue-500">Edit</p>
            </Link>
          </div>
          <div className="lg:mr-40">
            ►Developed Single Page Application using React.js, Redux, designed
            responsive web interface with Tailwindcss and prototyped the UI with
            Figma ► Ensuring the high security, designed and developed REST API
            together with cookie based JWT authentication using Express.js and
            MongoDB database. ►Reduced the latency by using AWS S3 for media
            files, Redis caching mechanism, and MongoDB high performing index
            searching
          </div>
        </div>
      </div>
      <div className="flex flex-row space-x-6 lg:space-x-8 px-6 lg:px-10 py-8 h-full border-b border-gray-200">
        <div>
          <div className="h-12 w-12 rounded bg-center bg-cover bg-no-repeat">
            <img
              className="w-full object-cover rounded border-2 border-white shadow"
              src="https://tuk-cdn.s3.amazonaws.com/assets/templates/Job-Portal/jp_6.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col space-y-8">
          <div className="flex lg:flex-row flex-col space-y-10 lg:space-y-0 justify-between lg:pr-10 xl:items-start items-end">
            <div>
              <h1 className="text-xl font-medium">Full-stack Web Developer</h1>
              <p className="text-gray-600">
                University of Central Asia - <span>Bishkek, Kyrgyzstan</span>
              </p>
              <p className="text-gray-500">May 2022 - Present</p>
            </div>
            <Link
              to={"/profile"}
              className=" hover:text-blue-500 flex flex-row space-x-2 items-center font-normal text-center text-slate-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 18"
                fill="none"
                // style={{ stroke: "#3b82f6" }}
                stroke="#64748b"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-edit-3"
              >
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
              <p className="italic hover:text-blue-500">Edit</p>
            </Link>
          </div>
          <div className="lg:mr-40">
            ►Developed Single Page Application using React.js, Redux, designed
            responsive web interface with Tailwindcss and prototyped the UI with
            Figma ► Ensuring the high security, designed and developed REST API
            together with cookie based JWT authentication using Express.js and
            MongoDB database. ►Reduced the latency by using AWS S3 for media
            files, Redis caching mechanism, and MongoDB high performing index
            searching
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileChangeExperience;
