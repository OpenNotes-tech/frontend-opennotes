import {
  FrontendOptions,
  MobileOptions,
  BackendOptions,
  AIOptions,
  SecurityOptions,
  CourseOptions,
  BlogOptions,
  PodcastOptions,
  AlgorithmsOptions,
} from "../../constants/FilterData";
import {
  openAuthModal,
  openBookmarkModal,
  openReportModal,
  openShareModal,
} from "../../store/features/modalSlice";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";

import { motion } from "framer-motion";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away.css";
import Cookies from "js-cookie";
import { setLoading, addError } from "../../store/features/errorSlice";
import IconNoResult from "../../components/IconNoResult";
import Request from "../../utils/API-router";

const LinkDetails = () => {
  const { loading } = useSelector((state) => state.Error);
  const { state } = useLocation();
  const dispatch = useDispatch();
  const { linkId } = useParams();
  // const [tagMap, setTagMap] = useState([]);
  const [modalValue, setData] = useState(null);

  const handleBookmarkModal = () => {
    if (Cookies.get("userID") !== undefined) {
      dispatch(openBookmarkModal(modalValue));
    } else {
      dispatch(openAuthModal());
    }
  };

  useEffect(() => {
    if (state?.data) {
      setData(state?.data);
    } else {
      dispatch(setLoading(true));

      Request.getLink(linkId)
        .then((res) => {
          console.log(res.data.data);
          setData(res.data.data);
          dispatch(setLoading(false));
        })
        .catch((error) => {
          dispatch(
            addError({
              type: "error",
              error: error?.message,
              id: Date.now(),
            }),
          );
          dispatch(setLoading(false));
        });
    }
  }, []);

  const handleShareModal = () => {
    // const shareLink = `bestlink.vercel.app/link-details/${linkElement._id}`;
    if (window.innerWidth <= 768 && navigator.share) {
      // You can adjust the width value for your needs
      navigator
        .share({
          title: modalValue.title,
          text: modalValue.description,
          url: modalValue.url,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      dispatch(openShareModal(modalValue));
    }
  };

  // Combine selected category options into one array
  // const categoryOptions = {
  //   frontend: FrontendOptions,
  //   backend: BackendOptions,
  //   datascience: AIOptions,
  //   mobile: MobileOptions,
  //   algorithms: AlgorithmsOptions,
  //   cybersecurity: SecurityOptions,
  //   courses: CourseOptions,
  //   blogs: BlogOptions,
  //   podcasts: PodcastOptions,
  // };

  // useEffect(() => {
  //   if (modalValue.tags) {
  //     const filterDatas = Object.values(categoryOptions)?.flat();
  //     const selectedOptions = filterDatas.filter((option) =>
  //       modalValue.tags.includes(toString(option.value.trim())),
  //     );
  //     // console.log("selectedOptions:", selectedOptions);
  //     setTagMap(selectedOptions);
  //   }
  // }, []);

  return (
    <>
      {modalValue !== null && !loading ? (
        <div className="flex w-full flex-col space-y-5 bg-white px-8 py-6 md:space-y-8  lg:h-auto">
          <div className="flex flex-row items-center justify-evenly space-x-8">
            <img
              className="w-36 rounded-2xl md:w-52"
              src={modalValue.photo}
              alt=""
            />
            <div className="">
              <h5 className="mb-2 flex flex-row justify-center truncate text-center text-xl font-bold capitalize tracking-wide text-gray-900 ">
                {modalValue.title}
              </h5>
              <p className="line-clamp-3 font-normal text-gray-700 dark:text-gray-400">
                {modalValue.description}
              </p>
            </div>
          </div>

          <div className="relative  flex flex-row items-center">
            <div className={`space-x-3`}>
              <div className="my-1 inline-block rounded-full px-4 py-1">
                <div className="flex flex-row items-center gap-x-2 text-lg capitalize">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-tag"
                  >
                    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
                    <path d="M7 7h.01" />
                  </svg>
                  Tags :
                </div>
              </div>
              {modalValue &&
                modalValue.tags.map((linkElement, index) => (
                  <p
                    key={index}
                    className="tag my-1 inline-block rounded-full border-2 px-4 py-1"
                  >
                    {linkElement}
                  </p>
                ))}
            </div>
          </div>

          <div className="space-x-3">
            <div className="my-1 inline-block rounded-full  px-4 py-1">
              <div className="flex flex-row items-center gap-x-2 text-lg capitalize">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-layout-grid"
                >
                  <rect width="7" height="7" x="3" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="14" rx="1" />
                  <rect width="7" height="7" x="3" y="14" rx="1" />
                </svg>
                Cagetory :
              </div>
            </div>
            {modalValue &&
              modalValue.category.map((linkElement, index) => (
                <p
                  key={index}
                  className="my-1 inline-block rounded-full border-2 px-4 py-1 capitalize"
                >
                  {linkElement}
                </p>
              ))}
          </div>
          <div className="flex flex-row justify-evenly">
            <div className="flex flex-row items-center gap-x-2 capitalize">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-dollar-sign"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                <path d="M12 18V6" />
              </svg>
              {modalValue.pricing}
            </div>
            <div className="flex flex-row items-center gap-x-2 capitalize">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-calendar-days"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
                <path d="M8 14h.01" />
                <path d="M12 14h.01" />
                <path d="M16 14h.01" />
                <path d="M8 18h.01" />
                <path d="M12 18h.01" />
                <path d="M16 18h.01" />
              </svg>
              {modalValue.createdAt.split("T")[0]}
            </div>
            <div className="flex flex-row items-center gap-x-2 capitalize">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mouse-pointer-click"
              >
                <path d="m9 9 5 12 1.774-5.226L21 14 9 9z" />
                <path d="m16.071 16.071 4.243 4.243" />
                <path d="m7.188 2.239.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656-2.12 2.122" />
              </svg>
              {modalValue.clickCount}
            </div>
          </div>
          <div className="flex flex-row items-center justify-evenly space-x-40">
            <Link
              to="/"
              className="flex h-10 w-1/3 cursor-pointer flex-row items-center justify-center space-x-2 rounded-md border-[1.5px] border-black px-4 text-center font-medium text-black transition duration-200 ease-in-out md:px-8 md:py-1 lg:hover:border-blue-700 lg:hover:bg-blue-100 lg:hover:text-blue-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-home"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <p>Back</p>
            </Link>
            <Link
              to={modalValue.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-1/3 cursor-pointer flex-row items-center justify-center space-x-2 rounded-md border-[1.5px] border-black px-4 text-center font-medium text-black transition duration-200 ease-in-out md:px-8 md:py-1 lg:hover:border-blue-700 lg:hover:bg-blue-100 lg:hover:text-blue-700"
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
            <button
              onClick={() => dispatch(openReportModal())}
              className="flex h-10 w-1/3 cursor-pointer flex-row items-center justify-center space-x-2 rounded-md border-[1.5px] border-black px-4 text-center font-medium text-black transition duration-200 ease-in-out md:px-8 md:py-1 lg:hover:border-blue-700 lg:hover:bg-blue-100 lg:hover:text-blue-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-send"
              >
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
              <p>Offer Alternative Link</p>
            </button>
          </div>
          <div className="text-blue-gray-900 mt-auto flex flex-row items-end justify-between border-t-2 border-slate-300 px-4 pt-3 font-sans text-base font-normal leading-relaxed antialiased">
            <div
              className=" relative flex items-center space-x-4"
              data-nc-id="PostCardLikeAndComment"
            >
              <Tippy
                content="Like"
                animation="shift-away"
                className="bg-black px-1 font-medium text-white"
              >
                <button
                  className=" group relative flex h-8 min-w-[68px] items-center rounded-full bg-gray-50 px-3 text-xs leading-none text-slate-700 transition-colors focus:outline-none dark:bg-gray-100 dark:text-slate-900 lg:hover:bg-rose-50 lg:hover:text-rose-600 dark:lg:hover:bg-rose-100 dark:lg:hover:text-rose-500"
                  title="Liked"
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
                    className="lucide lucide-heart"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                  <span className="ml-1">1.9k</span>
                </button>
              </Tippy>
              <Tippy
                content="Share"
                animation="shift-away"
                className="bg-black px-1 font-medium text-white"
              >
                <button
                  onClick={handleShareModal}
                  className="text-slate-6000 rounded-full bg-slate-50 p-[10px] transition-colors dark:bg-gray-100 dark:text-gray-800 lg:hover:bg-teal-50 lg:hover:text-teal-600 dark:lg:hover:bg-teal-100 dark:lg:hover:text-teal-800"
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
            <div
              className="relative flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-300"
              data-nc-id="PostCardSaveAction"
            >
              <Tippy
                content="Bookmark"
                animation="shift-away"
                className="z-[999] bg-black px-1 font-medium text-white"
              >
                <button
                  onClick={handleBookmarkModal}
                  className="relative flex items-center justify-center rounded-full bg-gray-50 p-[10px] text-slate-700 focus:outline-none dark:bg-gray-100 dark:text-slate-900 lg:hover:bg-blue-50 lg:hover:text-blue-600 dark:lg:hover:bg-blue-100 dark:lg:hover:text-blue-600"
                  data-nc-id="NcBookmark"
                  data-nc-bookmark-post-id="DEMO_POSTS_AUDIO_11"
                  title="Save to reading list"
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
                    className="lucide lucide-bookmark"
                  >
                    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                  </svg>
                </button>
              </Tippy>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-screen items-center justify-center">
          <IconNoResult />
        </div>
      )}
    </>
  );
};

export default LinkDetails;
