import { Outlet } from "react-router-dom";
import FolderList from "./FolderList";
import { useSelector } from "react-redux";
import ProfileSidebar from "../Profile/ProfileSidebar";

const BookmarkMain = () => {
  const { isProfileModalOpen } = useSelector((state) => state.Modal);
  return (
    <>
      <div className="flex h-full flex-row">
        <div className="block md:hidden">
          {isProfileModalOpen && (
            <div
              className="fixed left-0 top-0 z-40 h-screen w-64 overflow-y-auto border-[0.6px] border-gray-200  bg-white py-4 pb-20 shadow-2xl transition-transform" //-translate-x-full
              id="drawer-navigation"
              tabindex="-1"
              aria-labelledby="drawer-navigation-label"
            >
              <ProfileSidebar />
            </div>
          )}
        </div>
        <div className="hidden w-screen flex-col items-center  bg-green-100 pt-4 md:flex md:w-2/5 lg:w-1/5">
          <div className="flex w-full flex-row items-center justify-center">
            Bookmark Folders
          </div>
          <div className="flex h-full w-full items-center justify-center">
            <FolderList />
          </div>
        </div>
        <div className="h-full w-full bg-gray-200 px-2 md:w-3/5 md:px-0 lg:w-4/5">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default BookmarkMain;
