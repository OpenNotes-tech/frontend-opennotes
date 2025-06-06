import { useState } from "react";
import { useDispatch } from "react-redux";
import { addError, setLoading } from "../../store/features/errorSlice";
import Request from "../../utils/API-router";

const ProfileChangePassword = () => {
  const dispatch = useDispatch();
  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(false);
  const [passwordVisible3, setPasswordVisible3] = useState(false);

  const [formData, setFormData] = useState({
    passwordCurrent: "",
    password: "",
    confirmPassword: "",
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

    Request.updatePassword(formData)
      .then((res) => {
        dispatch(
          addError({
            type: "success",
            error: "Password Updated Successfully!",
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

  const togglePasswordVisibility1 = () => {
    setPasswordVisible1(!passwordVisible1);
  };
  const togglePasswordVisibility2 = () => {
    setPasswordVisible2(!passwordVisible2);
  };
  const togglePasswordVisibility3 = () => {
    setPasswordVisible3(!passwordVisible3);
  };

  return (
    <div className="mb-28 rounded-lg border-[0.6px] border-gray-200 bg-white shadow-md">
      <div className="border-b border-gray-200 px-10 py-8 text-xl font-medium">
        Change Password
      </div>
      <div className="flex h-full flex-wrap px-3 md:px-10">
        <div className="flex w-full flex-col gap-y-10 py-10 md:gap-x-6 lg:w-4/5">
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
                className="lucide lucide-key"
              >
                <circle cx="7.5" cy="15.5" r="5.5"></circle>
                <path d="m21 2-9.6 9.6"></path>
                <path d="m15.5 7.5 3 3L22 7l-3-3"></path>
              </svg>
            </div>
            <div className="relative h-10 w-full min-w-[200px]">
              <button
                onClick={togglePasswordVisibility1}
                className="text-blue-gray-500 absolute right-3 top-2/4 grid h-5 w-5 -translate-y-2/4 place-items-center"
              >
                {passwordVisible1 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#18181b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-eye-off"
                  >
                    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                    <line x1="2" x2="22" y1="2" y2="22"></line>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#18181b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-eye"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                )}
              </button>

              <input
                className="peer h-full w-full rounded-[7px] border border-gray-800 border-t-transparent bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-gray-800 placeholder-transparent outline outline-0 transition-all placeholder:italic placeholder-shown:border placeholder-shown:border-gray-800 placeholder-shown:border-t-gray-800 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:placeholder-gray-400 focus:outline-0 disabled:border-0 disabled:bg-gray-800"
                placeholder="8-15 characters"
                type={passwordVisible1 ? "text" : "password"}
                value={formData.passwordCurrent}
                onChange={handleChange}
                name="passwordCurrent"
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-gray-800 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-gray-700 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-blue-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-900">
                Old Password
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
                className="lucide lucide-lock"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <div className="relative h-10 w-full min-w-[200px]">
              <button
                onClick={togglePasswordVisibility2}
                className="text-blue-gray-500 absolute right-3 top-2/4 grid h-5 w-5 -translate-y-2/4 place-items-center"
              >
                {passwordVisible2 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#18181b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-eye-off"
                  >
                    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                    <line x1="2" x2="22" y1="2" y2="22"></line>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#18181b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-eye"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                )}
              </button>
              <input
                className="peer h-full w-full rounded-[7px] border border-gray-800 border-t-transparent bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-gray-800 placeholder-transparent outline outline-0 transition-all placeholder:italic placeholder-shown:border placeholder-shown:border-gray-800 placeholder-shown:border-t-gray-800 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:placeholder-gray-400 focus:outline-0 disabled:border-0 disabled:bg-gray-800"
                placeholder="8-15 characters including at least 3 numbers and 1 symbol."
                type={passwordVisible2 ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                name="password"
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-gray-800 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-gray-700 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-blue-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-900">
                New Password
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
                className="lucide lucide-lock"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <div className="relative h-10 w-full min-w-[200px]">
              <button
                onClick={togglePasswordVisibility3}
                className="text-blue-gray-500 absolute right-3 top-2/4 grid h-5 w-5 -translate-y-2/4 place-items-center"
              >
                {passwordVisible3 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#18181b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-eye-off transition-all duration-300 ease-in-out"
                  >
                    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                    <line x1="2" x2="22" y1="2" y2="22"></line>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#18181b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-eye "
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                )}
              </button>

              <input
                className="peer h-full w-full rounded-[7px] border border-gray-800 border-t-transparent bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-gray-800 placeholder-transparent outline outline-0 transition-all placeholder:italic placeholder-shown:border placeholder-shown:border-gray-800 placeholder-shown:border-t-gray-800 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:placeholder-gray-400 focus:outline-0 disabled:border-0 disabled:bg-gray-800"
                placeholder="8-15 characters including at least 3 numbers and 1 symbol."
                type={passwordVisible3 ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={handleChange}
                name="confirmPassword"
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-gray-800 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-gray-700 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-blue-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-900">
                Confirm New Password
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
        </div>
      </div>
    </div>
  );
};

export default ProfileChangePassword;
