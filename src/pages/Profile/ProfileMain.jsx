import { useState } from "react";
import Navbar from "../../layouts/Navbar";
// import Sidebar from "../../layouts/Sidebar";
import ProfileSidebar from "./ProfileSidebar";
import { Outlet } from "react-router-dom";

const ProfileMain = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="container px-4 lg:px-0 mx-auto">
      <Navbar
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />

      <div className="flex flex-wrap mt-10">
        <div className="md:w-1/6 w-full">{/* <Sidebar /> */}</div>
        <div className="md:w-5/6 w-full space-y-10 lg:-ml-12 xl:-ml-20">
          <div className="md:ml-4 text-4xl font-semibold">
            <h1>Your Profile</h1>
          </div>
          <div className="flex flex-wrap lg:-mr-16">
            <div className="block md:hidden">
              {isSidebarOpen && (
                <div
                  className="fixed top-0 left-0 z-40 w-64 h-screen py-4 overflow-y-auto transition-transform  bg-white border-[0.6px] border-gray-200 pb-20 shadow-2xl" //-translate-x-full
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
            <div className="lg:w-3/12 xl:w-1/5 md:w-2/5 hidden md:block">
              <ProfileSidebar />
            </div>
            <div className="lg:w-9/12 xl:w-4/5 md:w-3/5 w-full px-2 md:px-6">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMain;
