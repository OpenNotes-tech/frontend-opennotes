import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Tippy from "@tippyjs/react";
import Cookies from "js-cookie";
// import { useHandleClicks } from "../../hooks/useHandleClicks";
import "tippy.js/animations/shift-away.css";
import "tippy.js/dist/tippy.css";
import {
  openBookmarkModal,
  openShareModal,
  openAuthModal,
} from "../../store/features/modalSlice";

const formatLikeCount = (count) => {
  if (count < 1000) {
    return count.toString();
  } else if (count < 10000) {
    return (count / 1000).toFixed(1) + "k";
  } else {
    return (count / 1000).toFixed(0) + "k";
  }
};

const LinkCard = ({ linkElement, handleLike }) => {
  const { profile } = useSelector((state) => state?.UserProfile);
  let isSignedIn = !!Cookies.get("openToken");
  // const { clickSubmit } = useHandleClicks();
  const dispatch = useDispatch();

  let isLiked = null;
  if (isSignedIn && profile?.folders?.length) {
    const likedFolder = profile?.folders?.find(
      (folder) => folder.name === "liked",
    );
    const { bookmarked } = likedFolder;
    isLiked = bookmarked.includes(linkElement._id);
  } else {
    const likedLinkIds = JSON.parse(localStorage.getItem("likedLinkIds")) || [];
    isLiked = likedLinkIds.includes(linkElement._id);
  }

  const isLinkIdInAnyFolder = profile?.folders?.some((folder) => {
    const isLinkInFolder = folder.bookmarked.includes(linkElement._id);
    return isLinkInFolder;
  });

  // let mouseX = useMotionValue(0);
  // let mouseY = useMotionValue(0);

  // function handleMouseMove({ currentTarget, clientX, clientY }) {
  //   let { left, top } = currentTarget.getBoundingClientRect();

  //   mouseX.set(clientX - left);
  //   mouseY.set(clientY - top);
  // }
  const handleBookmarkModal = () => {
    if (Cookies.get("userID") !== undefined) {
      dispatch(openBookmarkModal(linkElement));
    } else {
      dispatch(openAuthModal());
    }
  };
  const handleShareModal = () => {
    if (window.innerWidth <= 768 && navigator.share) {
      // You can adjust the width value for your needs
      navigator
        .share({
          title: linkElement.title,
          text: linkElement.description,
          url: linkElement.url,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      dispatch(openShareModal(linkElement));
    }
  };

  const handleLinkClick = () => {
    // navigate(linkElement.url, { replace: true });
    // handleClick(linkElement._id);
  };

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ stiffness: 300, damping: 10 }}
        // onMouseMove={handleMouseMove}
        className="group relative flex h-[500px] max-w-sm flex-col space-y-6 rounded-2xl border border-gray-200 bg-white text-left shadow-lg lg:hover:shadow-2xl"
      >
        {/* <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-lg:hover:opacity-100"
          style={{
            background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
          }}
        /> */}
        <div className="h-1/2">
          {linkElement.photo ? (
            <img className="rounded-t-2xl" src={linkElement.photo} alt="" />
          ) : (
            <svg
              className="h-12 w-12 text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path>
            </svg>
          )}
          <div className="p-5">
            <h3 className="mb-2 truncate text-xl font-semibold capitalize leading-snug tracking-wide  text-slate-700 ">
              {linkElement.title}
            </h3>
            <p className="mb-3 line-clamp-3 font-slab text-sm font-light leading-relaxed text-slate-400 ">
              {linkElement.description}
            </p>
          </div>
        </div>
        <div className="bottom-0 flex h-1/2 w-full flex-col space-y-4 pb-4">
          <div className="mt-auto flex flex-col space-y-4 px-8 2xl:flex-row 2xl:justify-between 2xl:space-x-2 2xl:space-y-0 2xl:px-4">
            {/* <div className="absolute -bottom-10 flex h-1/2 w-full items-center justify-center bg-black/20 opacity-0 -ml-4 transition-all duration-300 group-lg:hover:bottom-0 group-lg:hover:bg-transparent group-lg:hover:opacity-100">
              <button className="bg-black px-5 py-2 text-white">Add to cart</button>
            </div> */}
            <Link
              className="flex cursor-pointer flex-row items-center justify-center space-x-2 rounded-md border-[1px] border-slate-600 px-8 py-1 text-center font-medium text-slate-600 transition duration-200 ease-in-out md:py-1 lg:hover:border-blue-600 lg:hover:bg-blue-50 lg:hover:text-blue-600"
              to={linkElement.url}
              onClick={handleLinkClick}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-external-link"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" x2="21" y1="14" y2="3" />
              </svg>
              <p>Open</p>
            </Link>
            <Link
              // whileTap={{ scale: 0.9 }}
              className="flex flex-row items-center justify-center space-x-2 rounded-md  bg-slate-100 px-8 py-1 text-center font-medium text-slate-700 shadow-md transition duration-200 ease-in-out  lg:hover:bg-blue-50 lg:hover:text-blue-600"
              // onClick={() => dispatch(openDetailsModal(linkElement))}
              to={"/link-details/" + linkElement._id}
              state={{ data: linkElement }}
              // type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-info"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              <p>Details</p>
            </Link>
          </div>
          <div className="text-blue-gray-900 mt-auto flex flex-row items-end justify-between border-t px-4 pt-3 font-sans text-base font-normal leading-relaxed ">
            <div className=" relative flex items-center space-x-4">
              <Tippy
                content="Like"
                animation="shift-away"
                className="hidden bg-black px-1 font-medium text-white lg:block"
              >
                <button
                  className={`group relative flex h-8 min-w-[68px] items-center justify-center rounded-full  px-3 text-xs leading-none  transition-colors focus:outline-none ${
                    isLiked
                      ? "bg-rose-50 text-rose-600 dark:bg-rose-100 dark:text-rose-600 lg:hover:bg-slate-100  dark:lg:hover:bg-slate-100 "
                      : "bg-slate-100 text-slate-700 dark:bg-gray-100 dark:text-slate-900 lg:hover:bg-rose-50 lg:hover:text-rose-600 dark:lg:hover:bg-rose-100 dark:lg:hover:text-rose-500"
                  }`}
                  title="Liked"
                  onClick={() => handleLike(linkElement._id)}
                  data-nc-id="PostCardLikeAction"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`lucide lucide-heart ${
                      isLiked && "fill-rose-600"
                    }`}
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                  <span className="ml-1">
                    {formatLikeCount(linkElement.like) !== "NaNk"
                      ? formatLikeCount(linkElement.like)
                      : 0}
                  </span>
                </button>
              </Tippy>
              <Tippy
                content="Share"
                animation="shift-away"
                className="hidden bg-black px-1 font-medium text-white lg:block"
              >
                <button
                  onClick={handleShareModal}
                  className="text-slate-6000 rounded-full bg-slate-100 p-[10px] transition-colors dark:bg-gray-100 dark:text-gray-800 lg:hover:bg-teal-50 lg:hover:text-teal-600 dark:lg:hover:bg-teal-100 dark:lg:hover:text-teal-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-share-2"
                  >
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                    <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                  </svg>
                </button>
              </Tippy>
            </div>
            <div className="relative flex items-center space-x-2 text-xs text-slate-600 dark:text-slate-300">
              <Tippy
                content="Bookmark"
                animation="shift-away"
                className="z-[999] hidden bg-black px-1 font-medium text-white lg:block"
              >
                <button
                  onClick={handleBookmarkModal}
                  className={`relative flex items-center justify-center rounded-full bg-slate-100 p-[10px] focus:outline-none dark:bg-gray-100  lg:hover:bg-blue-50  dark:lg:hover:bg-blue-100  ${
                    isLinkIdInAnyFolder
                      ? "text-blue-500"
                      : "text-slate-600 dark:text-slate-900 dark:lg:hover:text-blue-600"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`lucide lucide-bookmark ${
                      isLinkIdInAnyFolder ? "fill-blue-500" : ""
                    }`}
                  >
                    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                  </svg>
                </button>
              </Tippy>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default LinkCard;
