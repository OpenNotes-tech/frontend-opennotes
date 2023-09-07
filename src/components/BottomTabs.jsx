import { openExploreModal } from "../store/features/modalSlice";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const BottomTabs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  let tabs = [
    {
      id: "/profile",
      label: "Profile",
      icon: (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 13.7143C10.1814 13.7143 8.43723 12.9918 7.15127 11.7059C5.8653 10.4199 5.14286 8.67577 5.14286 6.85714C5.14286 5.03852 5.8653 3.29437 7.15127 2.00841C8.43723 0.722447 10.1814 0 12 0C13.8186 0 15.5628 0.722447 16.8487 2.00841C18.1347 3.29437 18.8571 5.03852 18.8571 6.85714C18.8571 8.67577 18.1347 10.4199 16.8487 11.7059C15.5628 12.9918 13.8186 13.7143 12 13.7143ZM11.2018 19.2429L10.2054 17.5821C9.8625 17.0089 10.275 16.2857 10.9393 16.2857H13.0554C13.7196 16.2857 14.1321 17.0143 13.7893 17.5821L12.7929 19.2429L14.5821 25.8804L16.5107 18.0107C16.6179 17.5768 17.0357 17.2929 17.4696 17.4054C21.225 18.3482 24 21.7446 24 25.7839C24 26.6946 23.2607 27.4286 22.3554 27.4286H15.2946C15.1821 27.4286 15.0804 27.4071 14.9839 27.3696L15 27.4286H9L9.01607 27.3696C8.91964 27.4071 8.8125 27.4286 8.70536 27.4286H1.64464C0.739286 27.4286 0 26.6893 0 25.7839C0 21.7393 2.78036 18.3429 6.53036 17.4054C6.96429 17.2982 7.38214 17.5821 7.48929 18.0107L9.41786 25.8804L11.2071 19.2429H11.2018Z"
            fill={`${location.pathname === "/profile" ? "#3b82f6" : "#808080"}`}
          />
        </svg>
      ),
    },
    {
      id: "/bookmark",
      label: "Bookmark",
      icon: (
        <svg
          width="20"
          height="24"
          viewBox="0 0 20 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 25.7143V2.85714C0 2.07143 0.28 1.39857 0.84 0.838571C1.39905 0.279524 2.07143 0 2.85714 0H17.1429C17.9286 0 18.6014 0.279524 19.1614 0.838571C19.7205 1.39857 20 2.07143 20 2.85714V25.7143L10 21.4286L0 25.7143ZM2.85714 21.3571L10 18.2857L17.1429 21.3571V2.85714H2.85714V21.3571ZM2.85714 2.85714H17.1429H10H2.85714Z"
            fill={`${
              location.pathname === "/bookmark" ? "#3b82f6" : "#5F5F5F"
            }`}
            fillOpacity="0.8"
          />
        </svg>
      ),
    },
    {
      id: "/",
      label: "Home",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          // fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-home"
          fill={`${location.pathname === "/" ? "#3b82f6" : "none"}`}
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      id: "/menu",
      label: "Menu",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-list fill-blue-500"
          // fill={`${category === "job" ? "#3b82f6" : "#5F5F5F"}`}
        >
          <line x1="8" x2="21" y1="6" y2="6" />
          <line x1="8" x2="21" y1="12" y2="12" />
          <line x1="8" x2="21" y1="18" y2="18" />
          <line x1="3" x2="3.01" y1="6" y2="6" />
          <line x1="3" x2="3.01" y1="12" y2="12" />
          <line x1="3" x2="3.01" y1="18" y2="18" />
        </svg>
      ),
    },
  ];
  const handleTabSubmit = (e, category) => {
    if (category === "/profile") {
      navigate("/profile");
    } else if (category === "/") {
      navigate("/");
    } else if (category === "/bookmark") {
      navigate("/bookmark");
    } else if (category === "/menu") {
      dispatch(openExploreModal());
    }
  };
  return (
    <>
      <aside className="toolbarx fixed bottom-0 z-[999] h-16 w-full shadow-[0_40px_60px_2px_rgba(0.9,0.9,0.9,0.9)] md:hidden">
        <ul className="-ml-8 grid h-full grid-cols-4 justify-center bg-white px-4 text-xs font-normal text-gray-500">
          <li>
            <button
              className={`flex w-full flex-col items-center space-y-1 rounded-tr-xl px-5 py-3 lg:hover:bg-blue-100 ${
                location.pathname === "/profile" && "bg-blue-100 text-blue-500"
              }`}
              onClick={(e) => handleTabSubmit(e, "/profile")}
              alt="sidebar button called interview"
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 13.7143C10.1814 13.7143 8.43723 12.9918 7.15127 11.7059C5.8653 10.4199 5.14286 8.67577 5.14286 6.85714C5.14286 5.03852 5.8653 3.29437 7.15127 2.00841C8.43723 0.722447 10.1814 0 12 0C13.8186 0 15.5628 0.722447 16.8487 2.00841C18.1347 3.29437 18.8571 5.03852 18.8571 6.85714C18.8571 8.67577 18.1347 10.4199 16.8487 11.7059C15.5628 12.9918 13.8186 13.7143 12 13.7143ZM11.2018 19.2429L10.2054 17.5821C9.8625 17.0089 10.275 16.2857 10.9393 16.2857H13.0554C13.7196 16.2857 14.1321 17.0143 13.7893 17.5821L12.7929 19.2429L14.5821 25.8804L16.5107 18.0107C16.6179 17.5768 17.0357 17.2929 17.4696 17.4054C21.225 18.3482 24 21.7446 24 25.7839C24 26.6946 23.2607 27.4286 22.3554 27.4286H15.2946C15.1821 27.4286 15.0804 27.4071 14.9839 27.3696L15 27.4286H9L9.01607 27.3696C8.91964 27.4071 8.8125 27.4286 8.70536 27.4286H1.64464C0.739286 27.4286 0 26.6893 0 25.7839C0 21.7393 2.78036 18.3429 6.53036 17.4054C6.96429 17.2982 7.38214 17.5821 7.48929 18.0107L9.41786 25.8804L11.2071 19.2429H11.2018Z"
                  fill={`${
                    location.pathname === "/profile" ? "#3b82f6" : "#5F5F5F"
                  }`}
                />
              </svg>
              <p>Profile</p>
            </button>
          </li>
          <li>
            <button
              className={`flex w-full flex-col items-center space-y-1 rounded-t-xl px-6 py-3 lg:hover:bg-blue-100 ${
                location.pathname === "/bookmark" && "bg-blue-100 text-blue-500"
              }`}
              onClick={(e) => handleTabSubmit(e, "/bookmark")}
              alt="sidebar button called interview"
            >
              <svg
                width="20"
                height="24"
                viewBox="0 0 20 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 25.7143V2.85714C0 2.07143 0.28 1.39857 0.84 0.838571C1.39905 0.279524 2.07143 0 2.85714 0H17.1429C17.9286 0 18.6014 0.279524 19.1614 0.838571C19.7205 1.39857 20 2.07143 20 2.85714V25.7143L10 21.4286L0 25.7143ZM2.85714 21.3571L10 18.2857L17.1429 21.3571V2.85714H2.85714V21.3571ZM2.85714 2.85714H17.1429H10H2.85714Z"
                  fill={`${
                    location.pathname === "/bookmark" ? "#3b82f6" : "#5F5F5F"
                  }`}
                  fillOpacity="0.8"
                />
              </svg>
              <p>Saved</p>
            </button>
          </li>
          <li>
            <button
              className={`flex w-full flex-col items-center space-y-1 rounded-t-xl px-3 py-3 lg:hover:bg-blue-100 ${
                location.pathname === "/" && "bg-blue-100 text-blue-500"
              }`}
              onClick={(e) => handleTabSubmit(e, "/")}
              alt="sidebar button called interview"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-home"
                // fill={`${category?.split(",")[0] === "" ? "#3b82f6" : "#5F5F5F"}`}
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <p>Home</p>
            </button>
          </li>
          <li>
            <button
              className={`flex w-full flex-col items-center space-y-1 rounded-tl-xl px-5 py-3 lg:hover:bg-blue-100 ${
                location.pathname === "/menu" && "bg-blue-100 text-blue-500"
              }`}
              onClick={(e) => handleTabSubmit(e, "/menu")}
              alt="sidebar button called interview"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-list fill-blue-500"
                // fill={`${category === "job" ? "#3b82f6" : "#5F5F5F"}`}
              >
                <line x1="8" x2="21" y1="6" y2="6" />
                <line x1="8" x2="21" y1="12" y2="12" />
                <line x1="8" x2="21" y1="18" y2="18" />
                <line x1="3" x2="3.01" y1="6" y2="6" />
                <line x1="3" x2="3.01" y1="12" y2="12" />
                <line x1="3" x2="3.01" y1="18" y2="18" />
              </svg>
              <p>Menu</p>
            </button>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default BottomTabs;
