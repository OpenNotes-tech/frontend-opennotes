import { Outlet } from "react-router-dom";
import BottomTabs from "../../components/BottomTabs";
import FolderList from "./FolderList";

const BookmarkMain = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="hidden flex-col items-center bg-green-100 md:flex md:w-2/5 lg:w-1/5">
          <div className="w-full">delete</div>
          <div className="flex w-full items-center justify-center">
            <FolderList />
          </div>
        </div>
        <div className="w-full bg-gray-200 px-2 md:w-3/5 md:px-0 lg:w-4/5">
          <Outlet />
        </div>
      </div>
      {<BottomTabs />}
    </>
  );
};

export default BookmarkMain;
