import CheckBox from "../../components/CheckBox";
import { Link } from "react-router-dom";

const ProfileChangeSettings = () => {
  return (
    <div className="border-[0.6px] border-gray-200 shadow-md mb-28 rounded-lg lg:-mr-0 sm:-mr-6 bg-white">
      <div className="border-b border-gray-200 pl-6 pr-4 lg:px-10 py-8 flex flex-row justify-between items-center">
        <h1 className="text-xl font-medium">Your Account Settings</h1>
      </div>
      <div className="flex flex-col  lg:flex-row space-y-6 lg:space-y-0 xl:space-x-8 px-6 xl:px-10 py-8 h-full border-b border-gray-200">
        <div className="flex flex-col xl:w-2/6 space-y-4">
          <h1 className="text-lg font-semibold">Identity</h1>
          <p className="xl:w-5/6">
            At JoBest, we’re committed to helping companies hire in a more
            inclusive way. Part of that includes asking candidates to share
            demographic information so we can help understand and build their
            pipeline.
          </p>
        </div>
      </div>
      <div className="flex flex-col  lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8 px-6 lg:px-10 py-8 h-full border-b border-gray-200">
        <div className="flex flex-col lg:w-2/6 space-y-4">
          <h1 className="text-lg font-semibold">Race/Ethnicity</h1>
          <p className="lg:w-5/6">
            Part of that includes asking candidates to share demographic
            information so we can help understand and build their pipeline.
          </p>
        </div>
        <div className="flex flex-col space-y-8">
          <CheckBox name={"Black / African-American"} />
          <CheckBox
            name={
              "East Asian (including Chinese, Japanese, Korean, and Mongolian)"
            }
          />
          <CheckBox name={"Hispanic or Latino/a/x"} />
          <CheckBox name={"Middle Eastern"} />
          <CheckBox name={"Native American or Alaskan Native"} />
          <CheckBox name={"Pacific Islander"} />
          <CheckBox name={"White"} />
          <CheckBox name={"Prefer not to say"} />
          <div className="flex lg:flex-row flex-col space-y-10 lg:space-y-0 justify-between lg:pr-10 xl:items-start items-end"></div>
        </div>
      </div>
      <div className="flex flex-col  lg:flex-row space-y-6 lg:space-y-0 xl:space-x-8 px-6 xl:px-10 py-8 h-full border-b border-gray-200">
        <div className="flex flex-col xl:w-2/6 space-y-4">
          <h1 className="text-lg font-semibold">Account Control</h1>
          <p className="xl:w-5/6">
            Part of that includes asking candidates to share demographic
            information so we can help users understand and build their
            pipeline.
          </p>
        </div>
        <div className="flex flex-col space-y-8">
          <Link
            to="/profile/change"
            className="text-red-500 flex flex-row space-x-2 items-center font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ef4444"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-trash-2"
            >
              <path d="M3 6h18"></path>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
              <line x1="10" x2="10" y1="11" y2="17"></line>
              <line x1="14" x2="14" y1="11" y2="17"></line>
            </svg>
            <p>Delete Account</p>
          </Link>
        </div>
        <div>
          <select className="text-base font-semibold rounded border-[1px] border-gray-400 text-black h-9 hidden xl:block w-30 px-5 bg-white hover:border-blue-700 focus:outline-none appearance-none">
            <option>Ready to interview</option>
            <option>Open to offers</option>
            <option>Closed to offers</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProfileChangeSettings;
