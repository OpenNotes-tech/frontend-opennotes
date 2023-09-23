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
  const [fetchResult, setFetchResult] = useState([]);
  const [searchValue, setSearchValue] = useState(
    location?.state?.folderElement?.name,
  );

  useEffect(() => {
    setFetchResult([]);
    dispatch(setLoading(true));

    Request.getFolder(folderId)
      .then((res) => {
        // console.log(res);
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
    dispatch(setLoading(true));
    Request.editFolder(userId, folderId, searchValue)
      .then((res) => {
        console.log(res);
        dispatch(editFolder({ _id: folderId, name: searchValue }));
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
  };

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

  const handleInputSubmit = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full flex-row items-center justify-center space-x-4 bg-rose-100 px-4 py-10">
        {openFolderCreate ? (
          <div className="flex w-full flex-row items-center justify-center space-x-4">
            <form onSubmit={handleEditFolder}>
              <input
                value={searchValue}
                onChange={handleInputSubmit}
                type="search"
                className="h-8 w-full rounded-md bg-slate-900/5 px-5 text-base font-normal text-slate-900 transition duration-300 ease-in-out placeholder:italic focus:bg-slate-100 focus:shadow-xl focus:outline-none"
                placeholder="Name"
              />
            </form>
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="flex flex-row items-center justify-center space-x-2 rounded-lg  bg-slate-100 p-1 text-center font-medium text-slate-700 shadow-md transition duration-200 ease-in-out  lg:hover:bg-blue-50 lg:hover:text-blue-600"
              onClick={() => setFolderCreate(false)}
              type="button"
            >
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
                className="lucide lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </motion.button>
          </div>
        ) : (
          <div className="flex flex-row items-center justify-center space-x-4">
            <h1 className="text-xl capitalize">
              {location.state?.folderElement?.name}
            </h1>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setFolderCreate(true)}
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
                className="lucide lucide-pencil"
              >
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                <path d="m15 5 4 4" />
              </svg>
            </motion.button>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center space-y-10 px-4 pt-10">
        {fetchResult?.length > 0 && (
          <div className="grid grid-cols-1 gap-y-12 px-3 md:grid-cols-2 md:gap-x-12 md:px-8 lg:grid-cols-3">
            {fetchResult.map((linkElement, index) => (
              <LinkCard key={index} linkElement={linkElement} />
            ))}
          </div>
        )}

        {loading && (
          <div className="trigger visible">
            {parseInt(sessionStorage.getItem("_PageNumber")) ===
              parseInt(sessionStorage.getItem("_TotalPages")) && (
              <LoaderSkeleton />
            )}
          </div>
        )}

        {!loading && fetchResult?.length === 0 && (
          <div className="flex justify-center">
            <IconNoResult />
          </div>
        )}
      </div>
    </div>
  );
};

export default FolderDetails;
