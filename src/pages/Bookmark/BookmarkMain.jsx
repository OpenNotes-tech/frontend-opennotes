import { Outlet } from "react-router-dom";
import FolderList from "./FolderList";

const BookmarkMain = () => {
  return (
    <>
      <div className="flex flex-row h-full">
        <div className="hidden flex-col pt-4 w-screen  items-center bg-green-100 md:flex md:w-2/5 lg:w-1/5">
          <div className="w-full flex flex-row items-center justify-center">Bookmark Folders</div>
          <div className="flex w-full items-center justify-center h-full">
            <FolderList />
          </div>
        </div>
        <div className="w-full h-full bg-gray-200 px-2 md:w-3/5 md:px-0 lg:w-4/5">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default BookmarkMain;
