import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { addError, setLoading } from "../../store/features/errorSlice";
import Request from "../../utils/API-router";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useParams();
  const [passwordVisible2, setPasswordVisible2] = useState(false);
  const [passwordVisible3, setPasswordVisible3] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleInput = (event) => {
    setFormData((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const togglePasswordVisibility2 = () => {
    setPasswordVisible2(!passwordVisible2);
  };
  const togglePasswordVisibility3 = () => {
    setPasswordVisible3(!passwordVisible3);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setLoading(true));

    Request.resetPassword(token, formData)
      .then((res) => {
        dispatch(
          addError({
            type: "success",
            error: "Logged In Successfully!",
            id: Date.now(),
          }),
        );
        dispatch(setLoading(false));
        // Redirect to main page after 3 seconds
        setTimeout(() => {
          navigate("/");
        }, 500);
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
    <div className="flex h-screen items-center justify-center bg-white">
      <form
        className="flex w-full max-w-[400px] flex-col gap-4 p-6"
        onSubmit={handleSubmit}
      >
        <div className="relative h-10 w-full min-w-[300px]">
          <button
            type="button"
            onClick={togglePasswordVisibility2}
            className="absolute right-3 top-2/4 grid h-5 w-5 -translate-y-2/4 place-items-center text-slate-500"
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
            onChange={handleInput}
            required
            value={formData.password}
            name="password"
            className="peer h-full w-full rounded-[7px] border border-slate-700 border-t-transparent bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-slate-700 placeholder-transparent outline outline-0 transition-all placeholder:italic placeholder-shown:border placeholder-shown:border-slate-700 placeholder-shown:border-t-slate-700 placeholder-shown:text-slate-400 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:placeholder-slate-400 focus:outline-0 disabled:border-0 disabled:bg-gray-800"
            placeholder="8-15 characters including at least 3 numbers and 1 symbol."
            type={passwordVisible2 ? "text" : "password"}
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-slate-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-slate-700 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-slate-700 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-slate-400 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-blue-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-900">
            New Password
          </label>
        </div>
        <div className="relative h-10 w-full min-w-[300px]">
          <button
            type="button"
            onClick={togglePasswordVisibility3}
            className="absolute right-3 top-2/4 grid h-5 w-5 -translate-y-2/4 place-items-center text-slate-500"
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
            onChange={handleInput}
            required
            value={formData.confirmPassword}
            name="confirmPassword"
            className="peer h-full w-full rounded-[7px] border border-slate-700 border-t-transparent bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-slate-700 placeholder-transparent outline outline-0 transition-all placeholder:italic placeholder-shown:border placeholder-shown:border-slate-700 placeholder-shown:border-t-slate-700 placeholder-shown:text-slate-400 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:placeholder-slate-400 focus:outline-0 disabled:border-0 disabled:bg-gray-800"
            placeholder="8-15 characters including at least 3 numbers and 1 symbol."
            type={passwordVisible3 ? "text" : "password"}
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-slate-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-slate-700 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-slate-700 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-slate-400 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-blue-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-900">
            Confirm New Password
          </label>
        </div>
        <div className="w-full p-6 pt-0">
          <button
            className="block w-full select-none rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hover:shadow-lg lg:hover:shadow-blue-500/40"
            type="submit"
            data-ripple-light="true"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
