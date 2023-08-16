import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Cookies from "js-cookie";

import { login } from "../../store/features/editProfileSlice";
import Navbar from "../../layouts/Navbar";
import Request from "../../utils/API-router";
import Twitter from "./Twitter";
import Google from "./Google";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [getLoad, setLoad] = useState(false);
  const [getError, setError] = useState("");
  const [getSignin, setSignin] = useState({ email: "", password: "" });

  const path = "candidates"; // User part only has candidates,
  const cook = "logged_in_candidate"; // User part only has candidates,

  const handleInput = (event) => {
    setSignin((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoad(true);

    Request.login(path, getSignin)
      .then((res) => {
        Cookies.set(cook, "yes", {
          secure: true,
          expires: new Date(res?.data?.user?.password),
        });
        dispatch(login(res?.data?.user));
        setError("Signed Up Successfully!");
        setLoad(false);
        // Redirect to main page after 3 seconds
        setTimeout(() => {
          location.state?.from
            ? navigate(location.state.from)
            : navigate("/job");
        }, 2000);
      })
      .catch((error) => {
        setError(error?.response?.data?.message);
        setLoad(false);
      })
      .finally((e) => {
        setLoad(false);
      });
  };

  return (
    <>
      <div className="container px-4 lg:px-0 mx-auto">
        <Navbar loading={getLoad} getError={getError} />
      </div>
      <section className="relative bg-white mr-4 -ml-2 ">
        <div className="flex flex-col items-center justify-between px-5 lg:px-10 mx-auto max-w-7xl xl:px-5 lg:flex-row">
          <div className="flex flex-col items-center w-full px-2 space-x-8 lg:px-10 pt-5 pb-10 lg:pt-10 lg:flex-row">
            <div className="relative w-full max-w-md bg-cover lg:max-w-2xl lg:w-6/12">
              <div className="relative flex flex-col items-center justify-center w-full h-full lg:pr-10">
                <img
                  src="https://cdn.devdojo.com/images/december2020/taxi-programming.png"
                  alt=""
                />
              </div>
            </div>

            <div className="relative z-0 w-full max-w-2xl mt-20 lg:mt-0 lg:w-5/12">
              <div className="relative z-10 flex flex-col items-start justify-start px-10 py-5 bg-white shadow-2xl rounded-xl">
                <div className="text-center w-full">
                  <h4 className="w-full font-serif text-4xl font-medium leading-snug">
                    Sign In
                  </h4>
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex flex-row items-center w-full justify-center py-3 mt-6 border rounded cursor-pointer input-group border-slate-300 hover:bg-gray-50">
                    <Google setError={setError} setLoad={setLoad} />
                  </div>
                  <div className="flex flex-row items-center justify-center py-3 mt-6 border rounded cursor-pointer input-group border-slate-300 hover:bg-gray-50">
                    <Twitter setError={setError} />
                  </div>
                  <div className="inline-flex text-center items-center justify-center -mb-5 w-full">
                    <hr className="w-full h-px my-8 bg-gray-400 border-0 " />
                    <span className="absolute px-3 pb-1 font-medium text-gray-400 -translate-x-1/2 bg-white left-1/2">
                      or
                    </span>
                  </div>
                </div>

                <form
                  className="relative w-full mt-2 space-y-8"
                  onSubmit={handleSubmit}
                >
                  <div className="relative">
                    <label className="absolute px-2 ml-2 -mt-3 font-normal text-gray-900 bg-white">
                      Email Address
                    </label>
                    <input
                      onChange={handleInput}
                      value={getSignin.email}
                      name="email"
                      type="text"
                      className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-310 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div className="relative">
                    <label className="absolute px-2 ml-2 -mt-3 font-normal text-gray-900 bg-white">
                      Password
                    </label>
                    <input
                      onChange={handleInput}
                      value={getSignin.password}
                      required
                      name="password"
                      type="password"
                      className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-310 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                      placeholder="Password"
                    />
                  </div>

                  <div className="space-y-2 sm:flex sm:items-center sm:justify-between sm:space-x-2 sm:space-y-0 mt-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="border border-gray-300 rounded h-4 w-4 text-indigo-500"
                      />
                      <span className="ml-2"> Remember me </span>
                    </label>
                    <a
                      href="/"
                      className="font-medium inline-block text-yellow-300 hover:text-yellow-400"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <div className="relative">
                    <button
                      type="submit"
                      className="inline-block w-full px-5 py-4 text-xl font-medium text-center text-white transition duration-200 bg-yellow-300 rounded-lg hover:bg-yellow-400 ease"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <svg
                className="absolute top-0 left-0 z-0 w-32 h-32 -mt-2 -ml-4 lg:-ml-12 text-gray-200 fill-current"
                viewBox="0 0 91 91"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke="none" strokeWidth="1" fillRule="evenodd">
                  <g fillRule="nonzero">
                    <g>
                      <g>
                        <circle cx="3.261" cy="3.445" r="2.72"></circle>
                        <circle cx="15.296" cy="3.445" r="2.719"></circle>
                        <circle cx="27.333" cy="3.445" r="2.72"></circle>
                        <circle cx="39.369" cy="3.445" r="2.72"></circle>
                        <circle cx="51.405" cy="3.445" r="2.72"></circle>
                        <circle cx="63.441" cy="3.445" r="2.72"></circle>
                        <circle cx="75.479" cy="3.445" r="2.72"></circle>
                        <circle cx="87.514" cy="3.445" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 12)">
                        <circle cx="3.261" cy="3.525" r="2.72"></circle>
                        <circle cx="15.296" cy="3.525" r="2.719"></circle>
                        <circle cx="27.333" cy="3.525" r="2.72"></circle>
                        <circle cx="39.369" cy="3.525" r="2.72"></circle>
                        <circle cx="51.405" cy="3.525" r="2.72"></circle>
                        <circle cx="63.441" cy="3.525" r="2.72"></circle>
                        <circle cx="75.479" cy="3.525" r="2.72"></circle>
                        <circle cx="87.514" cy="3.525" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 24)">
                        <circle cx="3.261" cy="3.605" r="2.72"></circle>
                        <circle cx="15.296" cy="3.605" r="2.719"></circle>
                        <circle cx="27.333" cy="3.605" r="2.72"></circle>
                        <circle cx="39.369" cy="3.605" r="2.72"></circle>
                        <circle cx="51.405" cy="3.605" r="2.72"></circle>
                        <circle cx="63.441" cy="3.605" r="2.72"></circle>
                        <circle cx="75.479" cy="3.605" r="2.72"></circle>
                        <circle cx="87.514" cy="3.605" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 36)">
                        <circle cx="3.261" cy="3.686" r="2.72"></circle>
                        <circle cx="15.296" cy="3.686" r="2.719"></circle>
                        <circle cx="27.333" cy="3.686" r="2.72"></circle>
                        <circle cx="39.369" cy="3.686" r="2.72"></circle>
                        <circle cx="51.405" cy="3.686" r="2.72"></circle>
                        <circle cx="63.441" cy="3.686" r="2.72"></circle>
                        <circle cx="75.479" cy="3.686" r="2.72"></circle>
                        <circle cx="87.514" cy="3.686" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 49)">
                        <circle cx="3.261" cy="2.767" r="2.72"></circle>
                        <circle cx="15.296" cy="2.767" r="2.719"></circle>
                        <circle cx="27.333" cy="2.767" r="2.72"></circle>
                        <circle cx="39.369" cy="2.767" r="2.72"></circle>
                        <circle cx="51.405" cy="2.767" r="2.72"></circle>
                        <circle cx="63.441" cy="2.767" r="2.72"></circle>
                        <circle cx="75.479" cy="2.767" r="2.72"></circle>
                        <circle cx="87.514" cy="2.767" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 61)">
                        <circle cx="3.261" cy="2.846" r="2.72"></circle>
                        <circle cx="15.296" cy="2.846" r="2.719"></circle>
                        <circle cx="27.333" cy="2.846" r="2.72"></circle>
                        <circle cx="39.369" cy="2.846" r="2.72"></circle>
                        <circle cx="51.405" cy="2.846" r="2.72"></circle>
                        <circle cx="63.441" cy="2.846" r="2.72"></circle>
                        <circle cx="75.479" cy="2.846" r="2.72"></circle>
                        <circle cx="87.514" cy="2.846" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 73)">
                        <circle cx="3.261" cy="2.926" r="2.72"></circle>
                        <circle cx="15.296" cy="2.926" r="2.719"></circle>
                        <circle cx="27.333" cy="2.926" r="2.72"></circle>
                        <circle cx="39.369" cy="2.926" r="2.72"></circle>
                        <circle cx="51.405" cy="2.926" r="2.72"></circle>
                        <circle cx="63.441" cy="2.926" r="2.72"></circle>
                        <circle cx="75.479" cy="2.926" r="2.72"></circle>
                        <circle cx="87.514" cy="2.926" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 85)">
                        <circle cx="3.261" cy="3.006" r="2.72"></circle>
                        <circle cx="15.296" cy="3.006" r="2.719"></circle>
                        <circle cx="27.333" cy="3.006" r="2.72"></circle>
                        <circle cx="39.369" cy="3.006" r="2.72"></circle>
                        <circle cx="51.405" cy="3.006" r="2.72"></circle>
                        <circle cx="63.441" cy="3.006" r="2.72"></circle>
                        <circle cx="75.479" cy="3.006" r="2.72"></circle>
                        <circle cx="87.514" cy="3.006" r="2.719"></circle>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <svg
                className="absolute bottom-0 right-0 z-0 w-32 h-32 -mb-2 -mr-4 lg:-mr-12 text-yellow-400 fill-current"
                viewBox="0 0 91 91"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke="none" strokeWidth="1" fillRule="evenodd">
                  <g fillRule="nonzero">
                    <g>
                      <g>
                        <circle cx="3.261" cy="3.445" r="2.72"></circle>
                        <circle cx="15.296" cy="3.445" r="2.719"></circle>
                        <circle cx="27.333" cy="3.445" r="2.72"></circle>
                        <circle cx="39.369" cy="3.445" r="2.72"></circle>
                        <circle cx="51.405" cy="3.445" r="2.72"></circle>
                        <circle cx="63.441" cy="3.445" r="2.72"></circle>
                        <circle cx="75.479" cy="3.445" r="2.72"></circle>
                        <circle cx="87.514" cy="3.445" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 12)">
                        <circle cx="3.261" cy="3.525" r="2.72"></circle>
                        <circle cx="15.296" cy="3.525" r="2.719"></circle>
                        <circle cx="27.333" cy="3.525" r="2.72"></circle>
                        <circle cx="39.369" cy="3.525" r="2.72"></circle>
                        <circle cx="51.405" cy="3.525" r="2.72"></circle>
                        <circle cx="63.441" cy="3.525" r="2.72"></circle>
                        <circle cx="75.479" cy="3.525" r="2.72"></circle>
                        <circle cx="87.514" cy="3.525" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 24)">
                        <circle cx="3.261" cy="3.605" r="2.72"></circle>
                        <circle cx="15.296" cy="3.605" r="2.719"></circle>
                        <circle cx="27.333" cy="3.605" r="2.72"></circle>
                        <circle cx="39.369" cy="3.605" r="2.72"></circle>
                        <circle cx="51.405" cy="3.605" r="2.72"></circle>
                        <circle cx="63.441" cy="3.605" r="2.72"></circle>
                        <circle cx="75.479" cy="3.605" r="2.72"></circle>
                        <circle cx="87.514" cy="3.605" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 36)">
                        <circle cx="3.261" cy="3.686" r="2.72"></circle>
                        <circle cx="15.296" cy="3.686" r="2.719"></circle>
                        <circle cx="27.333" cy="3.686" r="2.72"></circle>
                        <circle cx="39.369" cy="3.686" r="2.72"></circle>
                        <circle cx="51.405" cy="3.686" r="2.72"></circle>
                        <circle cx="63.441" cy="3.686" r="2.72"></circle>
                        <circle cx="75.479" cy="3.686" r="2.72"></circle>
                        <circle cx="87.514" cy="3.686" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 49)">
                        <circle cx="3.261" cy="2.767" r="2.72"></circle>
                        <circle cx="15.296" cy="2.767" r="2.719"></circle>
                        <circle cx="27.333" cy="2.767" r="2.72"></circle>
                        <circle cx="39.369" cy="2.767" r="2.72"></circle>
                        <circle cx="51.405" cy="2.767" r="2.72"></circle>
                        <circle cx="63.441" cy="2.767" r="2.72"></circle>
                        <circle cx="75.479" cy="2.767" r="2.72"></circle>
                        <circle cx="87.514" cy="2.767" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 61)">
                        <circle cx="3.261" cy="2.846" r="2.72"></circle>
                        <circle cx="15.296" cy="2.846" r="2.719"></circle>
                        <circle cx="27.333" cy="2.846" r="2.72"></circle>
                        <circle cx="39.369" cy="2.846" r="2.72"></circle>
                        <circle cx="51.405" cy="2.846" r="2.72"></circle>
                        <circle cx="63.441" cy="2.846" r="2.72"></circle>
                        <circle cx="75.479" cy="2.846" r="2.72"></circle>
                        <circle cx="87.514" cy="2.846" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 73)">
                        <circle cx="3.261" cy="2.926" r="2.72"></circle>
                        <circle cx="15.296" cy="2.926" r="2.719"></circle>
                        <circle cx="27.333" cy="2.926" r="2.72"></circle>
                        <circle cx="39.369" cy="2.926" r="2.72"></circle>
                        <circle cx="51.405" cy="2.926" r="2.72"></circle>
                        <circle cx="63.441" cy="2.926" r="2.72"></circle>
                        <circle cx="75.479" cy="2.926" r="2.72"></circle>
                        <circle cx="87.514" cy="2.926" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 85)">
                        <circle cx="3.261" cy="3.006" r="2.72"></circle>
                        <circle cx="15.296" cy="3.006" r="2.719"></circle>
                        <circle cx="27.333" cy="3.006" r="2.72"></circle>
                        <circle cx="39.369" cy="3.006" r="2.72"></circle>
                        <circle cx="51.405" cy="3.006" r="2.72"></circle>
                        <circle cx="63.441" cy="3.006" r="2.72"></circle>
                        <circle cx="75.479" cy="3.006" r="2.72"></circle>
                        <circle cx="87.514" cy="3.006" r="2.719"></circle>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
