import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import { addError, setLoading } from "../../store/features/errorSlice";
import { createDropInVariant } from "../../hooks/useAnimationVariants";
import { authenticate } from "../../store/features/editProfileSlice";
import { closeAuthModal } from "../../store/features/modalSlice";
import useClickOutside from "../../hooks/useClickOutside";
import Request from "../../utils/API-router";
import Google from "./Google";
import GitHub from "./GitHub";

const Sign = () => {
  const isAuthModalOpen = useSelector((state) => state.Modal.isAuthModalOpen);
  const dropInVariant = createDropInVariant("100vh");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const modalRef = useRef();

  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(false);
  const [passwordVisible3, setPasswordVisible3] = useState(false);
  const [isAuthSliderOpen, setIsAuthSliderOpen] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const togglePasswordVisibility1 = () => {
    setPasswordVisible1(!passwordVisible1);
  };
  const togglePasswordVisibility2 = () => {
    setPasswordVisible2(!passwordVisible2);
  };
  const togglePasswordVisibility3 = () => {
    setPasswordVisible3(!passwordVisible3);
  };

  const handleAuthModalToggle = () => {
    dispatch(closeAuthModal());
  };

  const handleInput = (event) => {
    setFormData((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setLoading(true));

    if (isAuthSliderOpen) {
      Request.signup(formData)
        .then((res) => {
          Cookies.set("userID", res.data.user._id, {
            secure: true,
            expires: new Date(res.data.user.password),
          });

          Cookies.set("openToken", res.data.token, {
            secure: true,
            expires: new Date(res.data.user.password),
          });
          dispatch(authenticate(res.data.user));
          dispatch(
            addError({
              type: "success",
              error: "Signed Up Successfully!",
              id: Date.now(),
            }),
          );
          dispatch(setLoading(false));
          // Redirect to main page after 3 seconds
          setTimeout(() => {
            navigate("/");
            handleAuthModalToggle();
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
    } else {
      Request.login(formData)
        .then((res) => {
          // localStorage.setItem("userID", res.data.user._id);
          Cookies.set("openToken", res.data.token, {
            secure: true,
            expires: new Date(res.data.user.password),
          });
          Cookies.set("userID", res.data.user._id, {
            secure: true,
            expires: new Date(res.data.user.password),
          });
          dispatch(authenticate(res?.data?.user));
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
            handleAuthModalToggle();
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
    }
  };

  // Close the modal when the user clicks outside of it
  useClickOutside(
    modalRef,
    () => {
      dispatch(closeAuthModal());
    },
    isAuthModalOpen,
  );

  return (
    <motion.div
      data-dialog-backdrop="sign-in-dialog"
      data-dialog-backdrop-close="true"
      ref={modalRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="raletive fixed inset-0 z-[999] grid h-screen w-screen items-end justify-center bg-black bg-opacity-60 opacity-100 backdrop-blur-sm  md:place-items-center md:items-center"
    >
      <motion.div
        variants={dropInVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ damping: 300 }}
        data-dialog="sign-in-dialog"
        className="sticky bottom-0 top-[100vh] mx-auto flex h-[570px] w-screen max-w-[26rem] flex-col rounded-t-xl bg-white bg-clip-border text-slate-700 shadow-md md:relative md:top-0 md:h-[500px] md:rounded-xl"
      >
        <motion.button
          whileTap={{ scale: 0.9 }}
          aria-label="Close panel"
          onClick={handleAuthModalToggle}
          className="absolute -top-6 left-[180px] z-10 hidden h-7 w-7 items-center justify-center rounded-full bg-white text-slate-700 transition duration-200 focus:text-gray-800 focus:shadow-md focus:outline-none md:-top-3 md:left-[405px] md:inline-flex  md:h-8 md:w-8 lg:hover:text-slate-800  lg:hover:shadow-md"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="text-xl"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
          </svg>
        </motion.button>
        <div className="flex items-center justify-between rounded-t-xl bg-slate-200 px-4 py-2 md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleAuthModalToggle}
            className="text-xs font-medium text-blue-500"
          >
            Cancel
          </motion.button>
          <h3 className="text-sm font-semibold">Auth</h3>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleAuthModalToggle}
            className="text-xs font-medium text-blue-500"
          >
            Done
          </motion.button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="mt-6 flex h-[20px] w-[290px] flex-row items-center justify-center rounded-full  bg-slate-200 py-5 text-xs uppercase">
            <button
              onClick={() => setIsAuthSliderOpen(true)}
              className={`cursor-pointer rounded-full px-12 py-2 text-center text-xs font-semibold uppercase  text-slate-700  ${
                isAuthSliderOpen && "bg-slate-700 text-white"
              } `}
            >
              Sign up
            </button>
            <button
              onClick={() => setIsAuthSliderOpen(false)}
              className={`cursor-pointer rounded-full px-12 py-2 text-center text-xs font-semibold uppercase text-slate-700  ${
                !isAuthSliderOpen && "bg-slate-700 text-white"
              } `}
            >
              Log in
            </button>
          </div>
          <ul className="flex justify-center gap-2 px-4 pt-10 sm:gap-5 md:px-10">
            <li>
              <Google isAuthSliderOpen={isAuthSliderOpen} />
            </li>
            <li>
              <GitHub isAuthSliderOpen={isAuthSliderOpen} />
            </li>
            <li>
              <button
                type="button"
                className="flex gap-1 rounded-md bg-slate-100 px-4 py-3 text-slate-700 shadow-none sm:gap-2 lg:hover:bg-slate-200"
              >
                <svg
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  viewBox="0 0 256 209"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  preserveAspectRatio="xMidYMid"
                >
                  <g>
                    <path
                      d="M256,25.4500259 C246.580841,29.6272672 236.458451,32.4504868 225.834156,33.7202333 C236.678503,27.2198053 245.00583,16.9269929 248.927437,4.66307685 C238.779765,10.6812633 227.539325,15.0523376 215.57599,17.408298 C205.994835,7.2006971 192.34506,0.822 177.239197,0.822 C148.232605,0.822 124.716076,24.3375931 124.716076,53.3423116 C124.716076,57.4586875 125.181462,61.4673784 126.076652,65.3112644 C82.4258385,63.1210453 43.7257252,42.211429 17.821398,10.4359288 C13.3005011,18.1929938 10.710443,27.2151234 10.710443,36.8402889 C10.710443,55.061526 19.9835254,71.1374907 34.0762135,80.5557137 C25.4660961,80.2832239 17.3681846,77.9207088 10.2862577,73.9869292 C10.2825122,74.2060448 10.2825122,74.4260967 10.2825122,74.647085 C10.2825122,100.094453 28.3867003,121.322443 52.413563,126.14673 C48.0059695,127.347184 43.3661509,127.988612 38.5755734,127.988612 C35.1914554,127.988612 31.9009766,127.659938 28.694773,127.046602 C35.3777973,147.913145 54.7742053,163.097665 77.7569918,163.52185 C59.7820257,177.607983 37.1354036,186.004604 12.5289147,186.004604 C8.28987161,186.004604 4.10888474,185.75646 0,185.271409 C23.2431033,200.173139 50.8507261,208.867532 80.5109185,208.867532 C177.116529,208.867532 229.943977,128.836982 229.943977,59.4326002 C229.943977,57.1552968 229.893412,54.8901664 229.792282,52.6381454 C240.053257,45.2331635 248.958338,35.9825545 256,25.4500259"
                      fill="#55acee"
                    ></path>
                  </g>
                </svg>
                Twitter
              </button>
            </li>
          </ul>
          <div className="-mb-5 inline-flex w-full items-center justify-center px-5 text-center">
            <hr className="my-8 h-px w-full border-0 bg-slate-400 " />
            <span className="absolute left-1/2 -translate-x-1/2 bg-white px-3 pb-1 font-medium text-slate-600">
              or
            </span>
          </div>
          <form className="w-full" onSubmit={handleSubmit}>
            {isAuthSliderOpen ? (
              <div className="flex w-full flex-col gap-4 p-6">
                <div className="relative h-10 w-full min-w-[200px]">
                  <input
                    onChange={handleInput}
                    required
                    value={formData.email}
                    name="email"
                    type="text"
                    className="peer h-full w-full rounded-[7px] border border-slate-700 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-slate-700 placeholder-transparent outline outline-0 transition-all placeholder:italic placeholder-shown:border placeholder-shown:border-slate-700 placeholder-shown:border-t-slate-700 placeholder-shown:text-slate-400 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:placeholder-slate-400 focus:outline-0 disabled:border-0 disabled:bg-gray-800"
                    placeholder="john.doe@example.com"
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-slate-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-slate-700 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-slate-700 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-slate-400 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-blue-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-900">
                    Email
                  </label>
                </div>
                <div className="relative h-10 w-full min-w-[200px]">
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
                <div className="relative h-10 w-full min-w-[200px]">
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
              </div>
            ) : (
              <div className="flex w-full flex-col gap-4 p-6">
                <div className="relative h-10 w-full min-w-[200px]">
                  <input
                    onChange={handleInput}
                    required
                    value={formData.email}
                    name="email"
                    type="text"
                    className="peer h-full w-full rounded-[7px] border border-slate-700 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-slate-700 placeholder-transparent outline outline-0 transition-all placeholder:italic placeholder-shown:border placeholder-shown:border-slate-700 placeholder-shown:border-t-slate-700 placeholder-shown:text-slate-400 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:placeholder-slate-400 focus:outline-0 disabled:border-0 disabled:bg-gray-800"
                    placeholder="john.doe@example.com"
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-slate-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-slate-700 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-slate-700 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-slate-400 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-blue-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-900">
                    Email
                  </label>
                </div>
                <div className="relative h-10 w-full min-w-[200px]">
                  <button
                    type="button"
                    onClick={togglePasswordVisibility1}
                    className="absolute right-3 top-2/4 grid h-5 w-5 -translate-y-2/4 place-items-center text-slate-500"
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
                    className="peer h-full w-full rounded-[7px] border border-slate-700 border-t-transparent bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-slate-700 placeholder-transparent outline outline-0 transition-all placeholder:italic placeholder-shown:border placeholder-shown:border-slate-700 placeholder-shown:border-t-slate-700 placeholder-shown:text-slate-400 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:placeholder-slate-400 focus:outline-0 disabled:border-0 disabled:bg-gray-800"
                    placeholder="8-15 characters"
                    type={passwordVisible1 ? "text" : "password"}
                    onChange={handleInput}
                    value={formData.password}
                    required
                    name="password"
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-slate-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-slate-700 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-slate-700 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-slate-400 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-blue-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-900">
                    Password
                  </label>
                </div>
                <div className="-ml-2.5 flex items-center justify-between">
                  <div className="inline-flex items-center">
                    <label
                      className="relative flex cursor-pointer items-center rounded-full px-3 py-[10px]"
                      htmlFor="checkbox"
                      data-ripple-dark="true"
                    >
                      <input
                        type="checkbox"
                        className="before:content[''] border-blue-gray-200 before:bg-blue-gray-500 peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 lg:hover:before:opacity-10"
                        id="checkbox"
                      />
                      <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="1"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </label>
                    <label
                      className="mt-px cursor-pointer select-none font-light text-gray-700"
                      htmlFor="checkbox"
                    >
                      Remember Me
                    </label>
                  </div>
                  <div className="flex ">
                    <button
                      type="button"
                      className="text-heading text-sm  underline  focus:outline-none lg:hover:no-underline"
                    >
                      Forgot password?
                    </button>
                  </div>
                </div>
              </div>
            )}
            <div className="w-full p-6 pt-0">
              <button
                className="block w-full select-none rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hover:shadow-lg lg:hover:shadow-blue-500/40"
                type="submit"
                data-ripple-light="true"
              >
                {isAuthSliderOpen ? "Sign up" : "Log in"}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Sign;
