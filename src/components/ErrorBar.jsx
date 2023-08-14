import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearError } from "../store/features/errorSlice";

const ErrorBar = () => {
  const { errorMessage, errorType } = useSelector((state) => state.Error);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(clearError());
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {errorMessage && errorType && (
        <div
          id="alert-border-2"
          className={`sticky top-0 flex p-4  z-[999] border-t-4 ${
            errorType === "success"
              ? "text-green-900 border-green-300 bg-green-100"
              : "text-red-900 border-red-300 bg-red-100"
          }`}
          role="alert"
        >
          <div className="ml-3 text-sm font-medium">{errorMessage}</div>
          <button
            type="button"
            className="ml-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 "
            data-dismiss-target="#alert-border-2"
            aria-label="Close"
          ></button>
        </div>
      )}
    </>
  );
};

export default ErrorBar;
