// import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import Request from "../../utils/API-router";
import { login } from "../../store/features/editProfileSlice";

const Twitter = () => {
  const [, setError] = useState("");
  const [, setLoad] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const path = "candidates"; // User part only has candidates, 
  const cook = "logged_in_candidate"; // User part only has candidates, 

  const responseFacebook = (response) => {
    Request.facebookLogin(path, {
      userID: response.userID,
      accessToken: response.accessToken,
    })
      .then((res) => {
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
        setError("Successfully signed up! Confirm your email.");
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
    <div className="">
      <div
        appId={`${process.env.REACT_APP_FACEBOOK_CLIENT_ID}`}
        autoLoad={false}
        callback={responseFacebook}
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            className="flex items-center w-full px-5 md:px-48 lg:px-24"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 11.9993C24 5.37186 18.6274 -0.000715256 12 -0.000715256C5.37258 -0.000715256 0 5.37186 0 11.9993C0 17.9888 4.38823 22.9533 10.125 23.8535V15.468H7.07813V11.9993H10.125V9.35554C10.125 6.34804 11.9165 4.68679 14.6576 4.68679C15.9705 4.68679 17.3438 4.92116 17.3438 4.92116V7.87429H15.8306C14.3399 7.87429 13.875 8.7993 13.875 9.74828V11.9993H17.2031L16.6711 15.468H13.875V23.8535C19.6118 22.9533 24 17.9888 24 11.9993Z"
                fill="#1877F2"
              />
              <path
                d="M16.6711 15.4687L17.2031 12H13.875V9.74899C13.875 8.8 14.3399 7.875 15.8306 7.875H17.3437V4.92187C17.3437 4.92187 15.9705 4.6875 14.6576 4.6875C11.9165 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4687H10.125V23.8542C10.7359 23.9501 11.3621 24 12 24C12.6379 24 13.2641 23.9501 13.875 23.8542V15.4687H16.6711Z"
                fill="white"
              />
            </svg>
            <span
              className="pl-3 text-sm md:text-base leading-none text-gray-600"
              data-config-id="fb-action"
            >
              Continue with Facebook
            </span>
          </button>
        )}
      />
    </div>
  );
};

export default Twitter;
