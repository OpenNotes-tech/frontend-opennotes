import { Link, useNavigate, useLocation } from "react-router-dom";
import { closeAuthModal } from "../../store/features/modalSlice";
import { login, signup } from "../../store/features/editProfileSlice";
import { setError, setLoading } from "../../store/features/errorSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import Request from "../../utils/API-router";
import Cookies from "js-cookie";
import Google from "./Google";
import GitHub from "./GitHub";

const Sign = () => {
  const isAuthModalOpen = useSelector((state) => state.Modal.isAuthModalOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const modalRef = useRef();

  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(false);
  const [passwordVisible3, setPasswordVisible3] = useState(false);
  const [isAuthSliderOpen, setIsAuthSliderOpen] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
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
    navigate(location.pathname);
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
          Cookies.set("logged_in_candidate", "yes", {
            secure: true,
            expires: new Date(res.data.user.password),
          });
          dispatch(
            signup({
              email: res.data.user.email,
              fullName: res.data.user.fullName,
              token: res.data.token,
              _id: res.data.user._id,
            })
          );
          dispatch(
            setError({ message: "Signed Up Successfully!", type: "success" })
          );
          dispatch(setLoading(false));
          // Redirect to main page after 3 seconds
          setTimeout(() => {
            location.state?.from
              ? navigate(location.state.from)
              : navigate("/");
            handleAuthModalToggle();
          }, 2000);
        })
        .catch((error) => {
          dispatch(
            setError({
              message: error?.response?.data?.message,
              type: "error",
            })
          );

          dispatch(setLoading(false));
        })
        .finally((e) => {
          dispatch(setLoading(false));
        });
    } else {
      Request.login(formData)
        .then((res) => {
          Cookies.set("logged_in_candidate", "yes", {
            secure: true,
            expires: new Date(res?.data?.user?.password),
          });
          dispatch(login(res?.data?.user));
          dispatch(
            setError({ message: "Logged In Successfully!", type: "success" })
          );
          dispatch(setLoading(false));
          // Redirect to main page after 3 seconds
          setTimeout(() => {
            location.state?.from
              ? navigate(location.state.from)
              : navigate("/");
            handleAuthModalToggle();
          }, 2000);
        })
        .catch((error) => {
          dispatch(
            setError({
              message: error?.response?.data?.message,
              type: "error",
            })
          );
          dispatch(setLoading(false));
        })
        .finally((e) => {
          dispatch(setLoading(false));
        });
    }
  };

  // Close the modal when the user clicks outside of it
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target === modalRef.current) {
        dispatch(closeAuthModal());
      }
    };
    if (isAuthModalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dispatch, isAuthModalOpen]);

  return (
    <div
      data-dialog-backdrop="sign-in-dialog"
      data-dialog-backdrop-close="true"
      ref={modalRef}
      class="raletive fixed inset-0 z-[999] grid h-screen w-screen md:place-items-center bg-black bg-opacity-60 opacity-100 backdrop-blur-sm transition-opacity duration-300"
    >
      <div
        data-dialog="sign-in-dialog"
        class="md:relative mx-auto flex w-full sticky top-[100vh] md:top-0 h-[500px] max-w-[26rem] flex-col rounded-t-xl md:rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
      >
        <button
          aria-label="Close panel"
          onClick={handleAuthModalToggle}
          class="absolute z-10 inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-white text-gray-600 transition duration-200 focus:outline-none focus:text-gray-800 focus:shadow-md hover:text-gray-800 hover:shadow-md left-[180px] md:left-[405px] -top-6  md:-top-3"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            class="text-xl"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
          </svg>
        </button>
        <div className="flex flex-col justify-center items-center">
          <div className="rounded-full uppercase text-xs flex flex-row bg-gray-300 mt-6 py-5  items-center justify-center w-[290px] h-[20px]">
            <Link
              onClick={() => setIsAuthSliderOpen(true)}
              className={`cursor-pointer text-center rounded-full text-black px-12 py-2  font-medium  ${
                isAuthSliderOpen && "text-white bg-black"
              } `}
            >
              Sign up
            </Link>
            <Link
              onClick={() => setIsAuthSliderOpen(false)}
              className={`cursor-pointer text-center rounded-full text-black px-12 py-2 font-medium  ${
                !isAuthSliderOpen && "text-white bg-black"
              } `}
            >
              Log in
            </Link>
          </div>
          <ul class="flex justify-center gap-2 sm:gap-5 px-4 md:px-10 pt-10">
            <li>
              <Google />
            </li>
            <li>
              <GitHub />
            </li>
            <li>
              <button
                type="button"
                class="px-4 py-3 flex gap-1 bg-white-dark/30 text-black shadow-none hover:bg-slate-100 bg-slate-200 rounded-md sm:gap-2"
              >
                <svg
                  class="h-5 w-5 sm:h-6 sm:w-6"
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
          <div className="inline-flex text-center items-center justify-center -mb-5 w-full px-5">
            <hr className="w-full h-px my-8 bg-gray-400 border-0 " />
            <span className="absolute px-3 pb-1 font-medium text-gray-400 -translate-x-1/2 bg-white left-1/2">
              or
            </span>
          </div>
          <form className="w-full" onSubmit={handleSubmit}>
            {isAuthSliderOpen ? (
              <div class="flex flex-col gap-4 p-6 w-full">
                <div className="relative h-10 w-full min-w-[200px]">
                  <input
                    onChange={handleInput}
                    required
                    value={formData.email}
                    name="email"
                    type="text"
                    className="peer h-full w-full rounded-[7px] border placeholder-transparent placeholder:italic focus:placeholder-gray-400 border-gray-800 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-800 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-800 placeholder-shown:border-t-gray-800 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-800"
                    placeholder="john.doe@example.com"
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-800 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-700 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-900">
                    Email
                  </label>
                </div>
                <div className="relative h-10 w-full min-w-[200px]">
                  <button
                    type="button"
                    onClick={togglePasswordVisibility2}
                    className="absolute top-2/4 right-3 grid h-5 w-5 -translate-y-2/4 place-items-center text-blue-gray-500"
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
                    className="peer h-full w-full rounded-[7px] !pr-9 border placeholder-transparent placeholder:italic focus:placeholder-gray-400 border-gray-800 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-800 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-800 placeholder-shown:border-t-gray-800 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-800"
                    placeholder="8-15 characters including at least 3 numbers and 1 symbol."
                    type={passwordVisible2 ? "text" : "password"}
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-800 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-700 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-900">
                    New Password
                  </label>
                </div>
                <div className="relative h-10 w-full min-w-[200px]">
                  <button
                    type="button"
                    onClick={togglePasswordVisibility3}
                    className="absolute top-2/4 right-3 grid h-5 w-5 -translate-y-2/4 place-items-center text-blue-gray-500"
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
                    className="peer h-full w-full rounded-[7px] !pr-9 border placeholder-transparent placeholder:italic focus:placeholder-gray-400 border-gray-800 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-800 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-800 placeholder-shown:border-t-gray-800 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-800"
                    placeholder="8-15 characters including at least 3 numbers and 1 symbol."
                    type={passwordVisible3 ? "text" : "password"}
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-800 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-700 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-900">
                    Confirm New Password
                  </label>
                </div>
              </div>
            ) : (
              <div class="flex flex-col gap-4 p-6 w-full">
                <div className="relative h-10 w-full min-w-[200px]">
                  <input
                    onChange={handleInput}
                    value={formData.email}
                    name="email"
                    type="text"
                    className="peer h-full w-full rounded-[7px] border placeholder-transparent placeholder:italic focus:placeholder-gray-400 border-gray-800 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-800 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-800 placeholder-shown:border-t-gray-800 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-800"
                    placeholder="john.doe@example.com"
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-800 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-700 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-900">
                    Email
                  </label>
                </div>
                <div className="relative h-10 w-full min-w-[200px]">
                  <button
                    type="button"
                    onClick={togglePasswordVisibility1}
                    className="absolute top-2/4 right-3 grid h-5 w-5 -translate-y-2/4 place-items-center text-blue-gray-500"
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
                    className="peer h-full w-full rounded-[7px] !pr-9 border placeholder-transparent placeholder:italic focus:placeholder-gray-400 border-gray-800 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-800 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-800 placeholder-shown:border-t-gray-800 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-800"
                    placeholder="8-15 characters"
                    type={passwordVisible1 ? "text" : "password"}
                    onChange={handleInput}
                    value={formData.password}
                    required
                    name="password"
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-800 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-700 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-900">
                    Password
                  </label>
                </div>
                <div class="flex items-center justify-between -ml-2.5">
                  <div class="inline-flex items-center">
                    <label
                      class="relative flex cursor-pointer items-center rounded-full px-3 py-[10px]"
                      for="checkbox"
                      data-ripple-dark="true"
                    >
                      <input
                        type="checkbox"
                        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
                        id="checkbox"
                      />
                      <span class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="1"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </label>
                    <label
                      class="mt-px cursor-pointer select-none font-light text-gray-700"
                      for="checkbox"
                    >
                      Remember Me
                    </label>
                  </div>
                  <div class="flex ">
                    <button
                      type="button"
                      class="text-sm underline  text-heading  hover:no-underline focus:outline-none"
                    >
                      Forgot password?
                    </button>
                  </div>
                </div>
              </div>
            )}
            <div class="p-6 pt-0 w-full">
              <button
                class="block w-full select-none rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="submit"
                data-ripple-light="true"
              >
                {isAuthSliderOpen ? "Sign up" : "Log in"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sign;
