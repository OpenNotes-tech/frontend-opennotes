import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { editUserProfile } from "../../store/features/editProfileSlice";
import { addError, setLoading } from "../../store/features/errorSlice";
import Request from "../../utils/API-router";

const ProfileChangeSocialLinks = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state?.UserProfile);

  const [formData, setFormData] = useState({
    website: profile.website,
    linkedin: profile.linkedin,
    github: profile.github,
    twitter: profile.twitter,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setLoading(true));

    Request.patchProfile(profile._id, formData)
      .then((res) => {
        dispatch(editUserProfile(res.data.doc));
        dispatch(
          addError({
            type: "success",
            error: "Updated Successfully!",
            id: Date.now(),
          }),
        );
        dispatch(setLoading(false));
      })
      .catch((error) => {
        dispatch(
          addError({
            type: "error",
            error: error?.response?.data?.message,
            id: Date.now(),
          }),
        );

        dispatch(setLoading(false));
      })
      .finally((e) => {
        dispatch(setLoading(false));
      });
  };

  return (
    <div className="mb-28 rounded-lg border-[0.6px] border-gray-200 bg-white shadow-md">
      <div className="border-b border-gray-200 px-10 py-8 text-xl font-medium">
        Social Profiles
      </div>
      <div className="flex h-full flex-wrap px-3 md:px-10">
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-y-10 py-10 md:gap-x-6 lg:w-4/5"
        >
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
                className="lucide lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </div>
            <div className="relative h-10 w-full min-w-[200px]">
              <input
                className="peer h-full w-full rounded-[7px] border border-gray-800 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-800 placeholder-transparent outline outline-0 transition-all placeholder:italic placeholder-shown:border placeholder-shown:border-gray-800 placeholder-shown:border-t-gray-800 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:placeholder-gray-400 focus:outline-0 disabled:border-0 disabled:bg-gray-800"
                placeholder="https://twitter.com/username"
                value={formData.twitter}
                onChange={handleChange}
                name="twitter"
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-gray-800 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-gray-700 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-blue-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-900">
                Twitter
              </label>
            </div>
          </div>
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
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </div>
            <div className="relative h-10 w-full min-w-[200px]">
              <input
                className="peer h-full w-full rounded-[7px] border border-gray-800 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-800 placeholder-transparent outline outline-0 transition-all placeholder:italic placeholder-shown:border placeholder-shown:border-gray-800 placeholder-shown:border-t-gray-800 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:placeholder-gray-400 focus:outline-0 disabled:border-0 disabled:bg-gray-800"
                placeholder="https://linkedin.com/username"
                value={formData.linkedin}
                onChange={handleChange}
                name="linkedin"
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-gray-800 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-gray-700 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-blue-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-900">
                LinkedIn
              </label>
            </div>
          </div>
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
                className="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </div>
            <div className="relative h-10 w-full min-w-[200px]">
              <input
                className="peer h-full w-full rounded-[7px] border border-gray-800 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-800 placeholder-transparent outline outline-0 transition-all placeholder:italic placeholder-shown:border placeholder-shown:border-gray-800 placeholder-shown:border-t-gray-800 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:placeholder-gray-400 focus:outline-0 disabled:border-0 disabled:bg-gray-800"
                placeholder="https://github.com/username"
                value={formData.github}
                onChange={handleChange}
                name="github"
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-gray-800 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-gray-700 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-blue-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-900">
                GitHub
              </label>
            </div>
          </div>
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
                className="lucide lucide-globe"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" x2="22" y1="12" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <div className="relative h-10 w-full min-w-[200px]">
              <input
                className="peer h-full w-full rounded-[7px] border border-gray-800 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-800 placeholder-transparent outline outline-0 transition-all placeholder:italic placeholder-shown:border placeholder-shown:border-gray-800 placeholder-shown:border-t-gray-800 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:placeholder-gray-400 focus:outline-0 disabled:border-0 disabled:bg-gray-800"
                placeholder="https://"
                value={formData.website}
                onChange={handleChange}
                name="website"
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-gray-800 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-gray-700 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-blue-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-900">
                Website
              </label>
            </div>
          </div>
          <div className="flex flex-row-reverse flex-wrap">
            <button
              onClick={handleSubmit}
              className="cursor-pointer rounded-md border-[1.5px] border-black bg-black px-4 py-2 text-center font-medium text-white transition duration-200 ease-in-out hover:border-blue-700 hover:bg-blue-700 lg:w-1/6"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileChangeSocialLinks;
