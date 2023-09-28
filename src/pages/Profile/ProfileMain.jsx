import { useState } from "react";
import Navbar from "../../layouts/Navbar";
import ProfileSidebar from "./ProfileSidebar";
import { Outlet } from "react-router-dom";

const ProfileMain = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 lg:px-0">
      <Navbar
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />

      <div className="mt-10 flex flex-wrap">
        <div className="w-full space-y-10 md:px-24">
          <div className="flex flex-wrap lg:-mr-16">
            <div className="block md:hidden">
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
            </div>
            <div className="hidden md:block md:w-2/5 lg:w-3/12 xl:w-1/5">
              <ProfileSidebar />
            </div>
            <div className="w-full px-2 md:w-3/5 md:px-6 lg:w-9/12 xl:w-4/5">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMain;
