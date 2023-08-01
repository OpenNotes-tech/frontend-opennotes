import { Outlet, Navigate } from "react-router-dom";
import { useLocation } from "react-router";
import Cookies from "js-cookie";

const PrivateRouter = () => {
  const location = useLocation();
  const path = "/signin"; // User part only has candidates,
  const logged_in = Cookies.get("logged_in_candidate"); // User part only has candidates,
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
