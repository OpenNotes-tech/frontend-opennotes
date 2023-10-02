import { useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { setLoading, addError } from "../../store/features/errorSlice";
import { editFolder } from "../../store/features/editProfileSlice";
import LoaderSkeleton from "../../components/LoaderSkeleton";
import IconNoResult from "../../components/IconNoResult";
import Request from "../../utils/API-router";
import LinkCard from "../Link/LinkCard";

const FolderDetails = () => {
  const loading = useSelector((state) => state.Error.loading);
  const userId = useSelector((state) => state.UserProfile.profile._id);
  const dispatch = useDispatch();
  const location = useLocation();
  let { folderId } = useParams();
  const [openFolderCreate, setFolderCreate] = useState(false);
  const [isInputFocused, setInputFocused] = useState(false);
  const [fetchResult, setFetchResult] = useState([]);
  const [searchValue, setSearchValue] = useState(
    location?.state?.folderElement?.name,
  );

  useEffect(() => {
    setFetchResult([]);
    dispatch(setLoading(true));

    Request.getFolder(folderId)
      .then((res) => {
        setFetchResult(res.data.links);
        // dispatch(editBookmark({ _id: folderId }));
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
  }, [location.pathname]);

  const handleEditFolder = () => {
    // dispatch(setLoading(true));
    if (searchValue.trim !== "Liked") {
      dispatch(setLoading(true));
      Request.editFolder(userId, folderId, searchValue)
        .then((res) => {
          dispatch(editFolder({ _id: folderId, name: searchValue }));
          dispatch(setLoading(false));
          setFolderCreate(false);
          dispatch(
            addError({
              type: "success",
              error: "Folder Name Edited Successfully!",
              id: Date.now(),
            }),
          );
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
    } else {
      dispatch(
        addError({
          type: "error",
          error: "Folder Name Error!",
          id: Date.now(),
        }),
      );
    }
  };

  useEffect(() => {
    setSearchValue(location?.state?.folderElement?.name);
  }, [location.pathname]);

  //  // Infinite Scrolling
  //  const handleScroll = async () => {
  //   if (
  //     !loading &&
  //     window.innerHeight + document.documentElement.scrollTop + 1 >=
  //       document.documentElement.scrollHeight - 500
  //   ) {
  //     if (
  //       !loading &&
  //       parseInt(sessionStorage.getItem("_PageNumber")) + 1 <=
  //         parseInt(sessionStorage.getItem("_TotalPages"))
  //     ) {
  //       dispatch(setLoading(true));
  //       sessionStorage.setItem(
  //         "_PageNumber",
  //         parseInt(sessionStorage.getItem("_PageNumber")) + 1,
  //       );
  //     }
  //   }
  // };
  // const debouncedHandleScroll = debounce(handleScroll, 50);
  // useEffect(() => {
  //   window.addEventListener("scroll", debouncedHandleScroll);
  //   return () => window.removeEventListener("scroll", debouncedHandleScroll);
  // }, [loading]);

  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full flex-row items-center justify-center space-x-4 bg-rose-100 px-4 py-10">
        {openFolderCreate ? (
          <div className="flex w-full flex-row items-center justify-center space-x-4">
            <div
              className="backdrop-saturate-900 relative flex w-80 items-center  border-2 border-slate-200 bg-white bg-opacity-90 backdrop-blur-lg
            "
            >
              <input
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
                type="search"
                className="h-[40px] w-full rounded-lg bg-slate-900/5 pl-12 pr-14 text-base font-normal text-slate-900 transition duration-300 ease-in-out placeholder:italic focus:bg-slate-100 focus:shadow-xl focus:outline-none"
                placeholder="Folder Name"
              />
              <motion.button
                whileTap={{ scale: 0.9 }}
                type="button"
                onClick={handleEditFolder}
                className="absolute left-3 mr-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  className="lucide lucide-search text-slate-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={isInputFocused ? "#3b82f6" : "#6b7280"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
                </svg>
              </motion.button>
              <div className="absolute right-12 h-full w-[0.5px] bg-gray-500"></div>
              <button
                type="button"
                onClick={() => setFolderCreate(false)}
                className="absolute right-3 px-1 py-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-x text-slate-400"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-row items-center justify-center space-x-4 text-center">
            <h1 className="text-xl capitalize">{searchValue}</h1>
            {location.state?.folderElement.name !== "liked" && (
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setFolderCreate(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-pencil"
                >
                  <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                  <path d="m15 5 4 4" />
                </svg>
              </motion.button>
            )}
          </div>
        )}
      </div>
      <div className="flex flex-col items-center space-y-10 px-4 py-10">
        {fetchResult?.length > 0 && (
          <div className="grid grid-cols-1 gap-y-12 px-3 md:grid-cols-2 md:gap-x-12 md:px-8 lg:grid-cols-3">
            {fetchResult.map((linkElement, index) => (
              <LinkCard key={index} linkElement={linkElement} />
            ))}
          </div>
        )}

        {loading && (
          <div className="h-screen">
            <LoaderSkeleton />
          </div>
        )}

        {!loading && fetchResult?.length === 0 && (
          <div className="flex h-screen justify-center">
            <IconNoResult />
          </div>
        )}
      </div>
    </div>
  );
};

export default FolderDetails;
