import { Link, useLocation } from "react-router-dom";
import "../../assets/css/icon-noresult.css";
const NotFound = () => {
  const location = useLocation();
  return (
    <div className="flex h-screen flex-col items-center justify-center text-center">
      <img
        className="mx-auto mb-4 md:max-w-md"
        src="https://shuffle.dev/metis-assets/illustrations/error2.png"
        alt=""
        data-config-id="image"
      />
      <span
        className="font-heading text-4xl font-bold text-blue-600"
        data-config-id="header"
      >
        Error 404
      </span>
      <h2
        className="font-heading mb-2 text-4xl font-bold"
        data-config-id="subheader"
      >
        Something went wrong!
      </h2>
      <p className="text-blueGray-400 mb-6" data-config-id="desc">
        Sorry, but we are unable to open this page.
      </p>
      <div>
        <Link
          className="mb-4 block rounded bg-blue-600 px-8 py-4 text-center text-xs font-semibold leading-none text-white sm:mb-0 sm:mr-3 sm:inline-block lg:hover:bg-blue-700"
          to={"/"}
          data-config-id="primary-action"
        >
          Go back to Homepage
        </Link>
        <Link
          className="text-blueGray-500 lg:hover:text-blueGray-800 bg-blueGray-50 lg:hover:bg-blueGray-100 block rounded px-8 py-4 text-center text-xs font-semibold leading-none sm:inline-block"
          to={location.pathname}
          data-config-id="secondary-action"
        >
          Try Again
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
