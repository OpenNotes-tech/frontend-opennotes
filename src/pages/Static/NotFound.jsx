import { Link } from "react-router-dom";
import "../../assets/css/icon-noresult.css";
const NotFound = () => {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto text-center">
        <img
          className="mb-4 mx-auto md:max-w-md"
          src="https://shuffle.dev/metis-assets/illustrations/error2.png"
          alt=""
          data-config-id="image"
        />
        <span
          className="text-4xl text-blue-600 font-bold font-heading"
          data-config-id="header"
        >
          Error 404
        </span>
        <h2
          className="mb-2 text-4xl font-bold font-heading"
          data-config-id="subheader"
        >
          Something went wrong!
        </h2>
        <p className="mb-6 text-blueGray-400" data-config-id="desc">
          Sorry, but we are unable to open this page.
        </p>
        <div>
          <Link
            className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
            to={"/"}
            data-config-id="primary-action"
          >
            Go back to Homepage
          </Link>
          <Link
            className="block sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-800 text-center font-semibold leading-none bg-blueGray-50 hover:bg-blueGray-100 rounded"
            to={"/"}
            data-config-id="secondary-action"
          >
            Try Again
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
