import BottomTabs from "../../components/BottomTabs";
import Navbar from "../../layouts/Navbar";
import FolderList from "./FolderList";
import { Outlet } from "react-router-dom";

const BookmarkMain = () => {
  return (
    <>
      <div className="">
        <Navbar
        // setIsSidebarOpen={setIsSidebarOpen}
        // isSidebarOpen={isSidebarOpen}
        />
        <div className="flex flex-row">
          {/* <div className="block md:hidden">
            {isSidebarOpen && (
                <div
                  className="fixed left-0 top-0 z-40 h-screen w-64 overflow-y-auto border-[0.6px] border-gray-200  bg-white py-4 pb-20 shadow-2xl transition-transform" //-translate-x-full
                  id="drawer-navigation"
                  tabindex="-1"
                  aria-labelledby="drawer-navigation-label"
                >
                  <ProfileSidebar
                    setIsSidebarOpen={setIsSidebarOpen}
                    isSidebarOpen={isSidebarOpen}
                  />
                </div>
              )}
          </div> */}
          <div className="hidden bg-green-100 md:flex flex-col items-center md:w-2/5 lg:w-1/5">
            <div className="w-full">delete</div>
            <div className="flex items-center justify-center w-full">
              <FolderList />
            </div>
          </div>
          <div className="w-full bg-gray-200 px-2 md:w-3/5 md:px-0 lg:w-4/5">
            <Outlet />
          </div>
        </div>
      </div>
      {<BottomTabs />}
    </>
  );
};

export default BookmarkMain;
