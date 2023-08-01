import { useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { gapi } from "gapi-script";
import Cookies from "js-cookie";
import { login } from "../../store/features/editProfileSlice";
import Request from "../../utils/API-router";

const Google = ({ setError, setLoad }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const path = "candidates"; // User part only has candidates, 
  const cook = "logged_in_candidate"; // User part only has candidates, 

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
    setLoad(true);
    Request.googleLogin(path, { idToken: response.tokenId })
      .then((res) => {
        console.log(res);
        Cookies.set(cook, "yes", {
          secure: true,
          expires: new Date(res.data.user.password),
        });

        dispatch(
          login({
            _id: res?.data?.user?._id,
            token: res?.data?.token,
            fullName: res?.data?.user?.fullName,
            email: res?.data?.user?.email,
            skills: res?.data?.user?.skills,
            opentoRoles: res?.data?.user?.opentoRoles,
            country: res?.data?.user?.address?.country,
            city: res?.data?.user?.address?.city,
            phoneNumber: res?.data?.user?.address?.phoneNumber,
            website: res?.data?.user?.socialLinks?.website,
            linkedin: res?.data?.user?.socialLinks?.linkedin,
            github: res?.data?.user?.socialLinks?.github,
            achievement: res?.data?.user?.achievement,
            bio: res?.data?.user?.bio,
            salaryMax: res?.data?.user?.salaryMax,
            salaryMin: res?.data?.user?.salaryMin,
            photo: res?.data?.user?.photo,
            primaryRole: res?.data?.user?.primaryRole,
            resume: res?.data?.user?.resume,
            yearofExperience: res?.data?.user?.yearofExperience,
            education: res?.data?.user?.education,
            experiences: res?.data?.user?.experiences,
            applications: res?.data?.user?.applications,
          })
        );

        setLoad(false);
        setError("Successfully signed up!");
        setTimeout(() => {
          location.state?.from
            ? navigate(location.state.from)
            : navigate("/job");
        }, 2000);
      })
      .catch((error) => {
        setError(error.response?.message);
        setLoad(false);
      });
  };

  return (
    <div className="pb-3">
      <GoogleLogin
        clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className="flex items-center justify-center -mb-3 px-5 md:px-48 lg:px-24"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.9875 12.2242C23.9875 11.2409 23.9059 10.5234 23.7292 9.7793H12.2393V14.2173H18.9836C18.8477 15.3202 18.1134 16.9811 16.4817 18.0972L16.4588 18.2458L20.0917 20.996L20.3434 21.0205C22.6549 18.9344 23.9875 15.8649 23.9875 12.2242Z"
                fill="#4285F4"
              />
              <path
                d="M12.2391 23.9178C15.5433 23.9178 18.3171 22.8548 20.3432 21.0211L16.4815 18.0978C15.4481 18.8021 14.0611 19.2937 12.2391 19.2937C9.00291 19.2937 6.25622 17.2076 5.2771 14.3242L5.13359 14.3361L1.35604 17.193L1.30664 17.3272C3.31906 21.2337 7.45272 23.9178 12.2391 23.9178Z"
                fill="#34A853"
              />
              <path
                d="M5.27727 14.3248C5.01892 13.5807 4.8694 12.7834 4.8694 11.9596C4.8694 11.1357 5.01892 10.3385 5.26367 9.5944L5.25683 9.43592L1.43194 6.5332L1.3068 6.59137C0.477385 8.21247 0.00146484 10.0329 0.00146484 11.9596C0.00146484 13.8863 0.477385 15.7066 1.3068 17.3277L5.27727 14.3248Z"
                fill="#FBBC05"
              />
              <path
                d="M12.2391 4.62403C14.5371 4.62403 16.0871 5.59402 16.971 6.40461L20.4248 3.10928C18.3036 1.1826 15.5433 0 12.2391 0C7.45272 0 3.31906 2.68406 1.30664 6.59057L5.26351 9.59359C6.25622 6.7102 9.00291 4.62403 12.2391 4.62403Z"
                fill="#EB4335"
              />
            </svg>
            <span
              className="pl-3 text-sm md:text-base leading-none text-gray-600"
              data-config-id="google-action"
            >
              Continue with Google
            </span>
          </button>
        )}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default Google;
