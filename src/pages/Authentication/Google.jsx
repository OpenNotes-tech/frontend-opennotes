import { useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { addError, setLoading } from "../../store/features/errorSlice";
import { authenticate } from "../../store/features/editProfileSlice";
import { closeAuthModal } from "../../store/features/modalSlice";
import Request from "../../utils/API-router";

const Google = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: "email",
      });
    };

    gapi.load("client:auth2", start);
  }, []);

  const responseGoogle = (response) => {
    dispatch(setLoading(true));
    Request.googleLogin({ idToken: response.tokenId })
      .then((res) => {
        Cookies.set("userID", res.data.user._id, {
          secure: true,
          expires: new Date(res.data.user.password),
        });
        Cookies.set("openToken", res.data.token, {
          secure: true,
          expires: new Date(res.data.user.password),
        });

        dispatch(authenticate(res?.data?.user));

        dispatch(setLoading(false));
        dispatch(
          addError({
            type: "success",
            error: "Successfully Signed Up!",
            id: Date.now(),
          }),
        );
        setTimeout(() => {
          navigate("/");
          dispatch(closeAuthModal());
        }, 500);
      })
      .catch((error) => {
        dispatch(
          addError({
            type: "error",
            error: error.response?.message,
            id: Date.now(),
          }),
        );
        dispatch(setLoading(false));
      });
  };

  return (
    <div>
      <GoogleLogin
        clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
        onSuccess={responseGoogle}
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className="bg-white-dark/30 flex gap-1 rounded-md bg-slate-100 px-4 py-3 text-slate-700 shadow-none sm:gap-2 lg:hover:bg-slate-200 lg:hover:text-slate-900"
          >
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6"
              viewBox="0 0 256 193"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              preserveAspectRatio="xMidYMid"
            >
              <g>
                <path
                  d="M58.1818182,192.049515 L58.1818182,93.1404244 L27.5066233,65.0770089 L0,49.5040608 L0,174.59497 C0,184.253152 7.82545455,192.049515 17.4545455,192.049515 L58.1818182,192.049515 Z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M197.818182,192.049515 L238.545455,192.049515 C248.203636,192.049515 256,184.224061 256,174.59497 L256,49.5040608 L224.844415,67.3422767 L197.818182,93.1404244 L197.818182,192.049515 Z"
                  fill="#34A853"
                ></path>
                <polygon
                  fill="#EA4335"
                  points="58.1818182 93.1404244 54.0077618 54.4932827 58.1818182 17.5040608 128 69.8676972 197.818182 17.5040608 202.487488 52.4960089 197.818182 93.1404244 128 145.504061"
                ></polygon>
                <path
                  d="M197.818182,17.5040608 L197.818182,93.1404244 L256,49.5040608 L256,26.2313335 C256,4.64587897 231.36,-7.65957557 214.109091,5.28587897 L197.818182,17.5040608 Z"
                  fill="#FBBC04"
                ></path>
                <path
                  d="M0,49.5040608 L26.7588051,69.5731646 L58.1818182,93.1404244 L58.1818182,17.5040608 L41.8909091,5.28587897 C24.6109091,-7.65957557 0,4.64587897 0,26.2313335 L0,49.5040608 Z"
                  fill="#C5221F"
                ></path>
              </g>
            </svg>
            Google
          </button>
        )}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default Google;
