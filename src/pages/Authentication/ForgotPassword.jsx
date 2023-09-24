import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { addError, setLoading } from "../../store/features/errorSlice";
import Request from "../../utils/API-router";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [getEmail, setEmail] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setLoading(true));

    Request.forgotPassword({ email: getEmail })
      .then((res) => {
        dispatch(
          addError({
            type: "success",
            error: "Email is sent successfully!",
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
    <div className="flex h-screen flex-col items-center justify-center space-y-4">
      Forgot Password
      <div className="relative flex h-10 w-full min-w-[300px] max-w-[24rem]">
        <input
          onChange={(event) => setEmail(event.target.value)}
          value={getEmail}
          required
          name="email"
          type="text"
          placeholder="john.doe@example.com"
          className="border-blue-gray-200 text-blue-gray-700 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 disabled:bg-blue-gray-50 peer h-full w-full rounded-[7px] border border-t-transparent bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0"
        />
        <button
          className="peer-placeholder-shown:bg-blue-gray-500 !absolute right-1 top-1 z-10 select-none rounded bg-blue-500 px-4 py-2 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
          type="button"
          onClick={(event) => handleSubmit(event)}
          data-ripple-light="true"
        >
          Send
        </button>
        <label className="before:content[' '] after:content[' '] text-blue-gray-400 before:border-blue-gray-200 after:border-blue-gray-200 peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-blue-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent">
          Email Address
        </label>
      </div>
    </div>
  );
};

export default ForgotPassword;
