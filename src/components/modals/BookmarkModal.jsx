import { closeBookmarkModal } from "../../store/features/modalSlice";
import { createDropInVariant } from "../../hooks/useAnimationVariants";
import useClickOutside from "../../hooks/useClickOutside";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { setLoading, addError } from "../../store/features/errorSlice";
import {
  deleteFolderItem,
  editBookmark,
} from "../../store/features/editProfileSlice";
import Request from "../../utils/API-router";

const BookmarkModal = () => {
  const dropInVariant = createDropInVariant("100vh");
  const { modalValue } = useSelector((state) => state.Modal);
  const { folders, _id } = useSelector((state) => state.UserProfile.profile);
  const [openFolderCreate, setFolderCreate] = useState(false);
  const [isInputFocused, setInputFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const isBookmarkModalOpen = useSelector(
    (state) => state.Modal.isBookmarkModalOpen,
  );
  const dispatch = useDispatch();
  const modalRef = useRef();
  // Close the modal when the user clicks outside of it
  useClickOutside(
    modalRef,
    () => {
      dispatch(closeBookmarkModal());
    },
    isBookmarkModalOpen,
  );

  const handleBookmarkModalToggle = () => {
    dispatch(closeBookmarkModal());
  };

  const handleCheckboxChange = (folderElement) => {
    dispatch(setLoading(true));

    if (!folderElement.bookmarked.includes(modalValue._id)) {
      Request.postBookmark({
        userId: _id,
        folderId: folderElement.id,
        linkId: modalValue._id,
      })
        .then((res) => {
          dispatch(
            editBookmark({ _id: folderElement.id, link: modalValue._id }),
          );
          dispatch(setLoading(false));
          dispatch(
            addError({
              type: "success",
              error: "Bookmarked Successfully!",
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
      Request.removeBookmark(folderElement.id, {
        userId: _id,
        linkId: modalValue._id,
      })
        .then((res) => {
          dispatch(
            editBookmark({ _id: folderElement.id, link: modalValue._id }),
          );
          dispatch(setLoading(false));
          dispatch(
            addError({
              type: "success",
              error: "Removed Successfully!",
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
    }
  };

  const handleAddFolder = (e) => {
    e.preventDefault();

    const isLinkAlreadyBookmarked = folders?.some(
      (folder) => folder.name === searchValue,
    );
    if (!isLinkAlreadyBookmarked && searchValue.trim !== "liked") {
      dispatch(setLoading(true));
      // TODO: check if searchValue.trim is not empty
      Request.postFolder({
        userId: _id,
        folderName: searchValue,
      })
        .then((res) => {
          dispatch(deleteFolderItem(res.data));
          setFolderCreate(false);
          setSearchValue("");
          dispatch(setLoading(false));
          dispatch(
            addError({
              type: "success",
              error: "Created Folder Successfully!",
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
          error: "Folder name Error!",
          id: Date.now(),
        }),
      );
    }
  };

  return (
    <motion.div
      data-dialog-backdrop="sign-in-dialog"
      data-dialog-backdrop-close="true"
      ref={modalRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-100 backdrop-blur-sm "
    >
      <motion.div
        variants={dropInVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ damping: 300 }}
        data-dialog="sign-in-dialog"
        className="relative mx-auto flex w-80 flex-col rounded-xl bg-white bg-clip-border p-4 text-slate-700 shadow-md"
      >
        <button
          aria-label="Close panel"
          onClick={handleBookmarkModalToggle}
          className="absolute -top-3 left-[310px] z-10 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-slate-700 transition duration-200 focus:text-slate-800 focus:shadow-md focus:outline-none md:left-[310px] md:h-8 md:w-8 lg:hover:text-slate-800 lg:hover:shadow-md"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="text-xl"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
          </svg>
        </button>
        <div className="flex h-96 w-full items-center justify-center text-xl font-semibold">
          <div className="flex h-full w-full flex-col items-center justify-center space-y-4">
            <div>
              <p>Save link to...</p>
            </div>
            <div className="flex h-full w-full flex-col space-x-4 overflow-y-auto overflow-x-hidden">
              {folders?.length ? (
                <div className="flex flex-col space-y-2">
                  {folders.map((folderElement, index) => (
                    <div key={index} className="inline-flex items-center">
                      <label
                        className="relative flex cursor-pointer items-center rounded-full px-3 py-[10px]"
                        htmlFor={`checkbox-${index}`}
                        data-ripple-dark="true"
                      >
                        <input
                          type="checkbox"
                          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-gray-300 transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:bg-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 lg:hover:before:opacity-10"
                          id={`checkbox-${index}`}
                          checked={folderElement.bookmarked.includes(
                            modalValue._id,
                          )}
                          onChange={() => handleCheckboxChange(folderElement)}
                        />
                        <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth="1"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </label>
                      <label
                        key={index}
                        className="text-md cursor-pointer select-none font-normal text-slate-700"
                        htmlFor={`checkbox-${index}`}
                      >
                        {folderElement.name}
                      </label>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-row items-center justify-center">
                  No Bookmark Folder
                </div>
              )}
            </div>
            <div className="flex w-full items-center justify-center">
              {openFolderCreate ? (
                <div className="flex w-full flex-row items-center justify-center space-x-4">
                  <form onSubmit={handleAddFolder}>
                    <div
                      className="backdrop-saturate-900 relative flex w-full items-center rounded-full border-2 border-slate-200 bg-white bg-opacity-90 backdrop-blur-lg lg:w-auto lg:flex-1 lg:border-0
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
                        type="submit"
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
                  </form>
                </div>
              ) : (
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="flex flex-row items-center justify-center space-x-2 rounded-md bg-slate-100 px-8 py-1 text-center text-base font-normal text-slate-700 shadow-md transition duration-200 ease-in-out  lg:hover:bg-blue-50 lg:hover:text-blue-600"
                  onClick={() => setFolderCreate(true)}
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-plus"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  <p>Create new folder</p>
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BookmarkModal;
