import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import Sign from "../pages/Authentication/Sign";
import { openAuthModal, closeAuthModal } from "../store/features/modalSlice";

const PrivateRouter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasSignedIn, setHasSignedIn] = useState(false);
  const logged_in = Cookies.get("logged_in_candidate");
  const location = useLocation();
  const dispatch = useDispatch();
  const isAuthModalOpen = useSelector((state) => state.Modal.isAuthModalOpen);

  useEffect(() => {
    setIsModalOpen(isAuthModalOpen);
  }, [isAuthModalOpen]);

  useEffect(() => {
    if (!logged_in && !hasSignedIn) {
      dispatch(openAuthModal());
    }
  }, [dispatch, logged_in, hasSignedIn]);

  const closeModalAndRenderOutlet = () => {
    dispatch(closeAuthModal());
    setHasSignedIn(true);
  };

  if (!logged_in && isModalOpen && !hasSignedIn) {
    return <Sign />;
  }

  if (!logged_in && !hasSignedIn) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PrivateRouter;
