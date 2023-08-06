import { Outlet, Navigate, useLocation } from "react-router-dom";
import { openModal } from "../store/features/userAuthSlice";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

const PrivateRouter = () => {
  
  const location = useLocation();
  const dispatch = useDispatch();
  const path = "/signin"; // User part only has candidates,
  const logged_in = Cookies.get("logged_in_candidate"); // User part only has candidates,
  const handleAuthModalToggle = () => {
    dispatch(openModal());
  };
  return (
    <>
      {logged_in ? (
        <Outlet />
      ) : (
        <Navigate to={path} replace state={{ from: location }} />
      )}
    </>
  );
};

export default PrivateRouter;
