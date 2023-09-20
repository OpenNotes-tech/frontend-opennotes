import { BrowserRouter, Routes, Route } from "react-router-dom";

// Functions
// import PrivateRouter from "./utils/PrivateRouter";
// import ScrollToTop from "./utils/ScrollToTop";
// Authentication Routes
import ForgotPassword from "./pages/Authentication/ForgotPassword";
// Home Pgage Routes
import HomeMain from "./pages/Home/HomeMain";
// User Bookmark Routes
import BookmarkMain from "./pages/Bookmark/BookmarkMain";
// User Profile Routes
import ProfileMain from "./pages/Profile/ProfileMain";

// Static Routes
import NotFound from "./pages/Static/NotFound";
import About from "./pages/Static/About";
import Policy from "./pages/Static/Policy";
import { useEffect } from "react";
import BookmarkEmpty from "./pages/Bookmark/BookmarkEmpty";
import FolderDetails from "./pages/Bookmark/FolderDetails";
// import LinkDetails from "./pages/Link/LinkDetails";
// import { useSelector } from "react-redux";

import { useDispatch, useSelector } from "react-redux";
import { setLoading, addError } from "./store/features/errorSlice";
import Request from "./utils/API-router";
import { authenticate } from "./store/features/editProfileSlice";
import Sponsor from "./pages/Static/Sponsor";
import Cookies from "js-cookie";

const App = () => {
  const { profile } = useSelector((state) => state.UserProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!profile.length && Cookies.get("logged_in_candidate") === "yes") {
      dispatch(setLoading(true));

      Request.getProfile()
        .then((res) => {
          dispatch(authenticate(res.data.data));
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
        })
        .finally(() => {
          dispatch(setLoading(false));
        });
    }
  }, []);

  // let scrollPosition = 0; // Variable to store the scroll position
  // const {
  //   isShareModalOpen,
  //   isBookmarkModalOpen,
  //   isDetailsModalOpen,
  //   isLangModalOpen,
  //   isReportModalOpen,
  //   isAuthModalOpen,
  //   isFilterModalOpen,
  //   isExploreModalOpen,
  // } = useSelector((state) => state.Modal);
  // if (
  //   (((((((isShareModalOpen === isBookmarkModalOpen) === isDetailsModalOpen) ===
  //     isLangModalOpen) ===
  //     isReportModalOpen) ===
  //     isAuthModalOpen) ===
  //     isFilterModalOpen) ===
  //     isExploreModalOpen) ===
  //   true
  // ) {
  //   // document.body.style.setProperty("inset", `-${scrollPosition}px 0px 0px`);
  //   document.body.classList.remove("body-no-scroll");
  //   // window.scrollTo(0, scrollPosition);
  // } else {
  //   scrollPosition = window.scrollY;

  //   // Add the 'body-no-scroll' class to disable scrolling
  //   document.body.classList.add("body-no-scroll");
  //   document.body.style.setProperty("inset", `-${scrollPosition}px 0px 0px`);
  //   document.body.style.setProperty("inset-inline-end", `17px`);
  // }
  useEffect(() => {
    sessionStorage.setItem("_TotalPages", 0);
    sessionStorage.setItem("_PageNumber", 1);
  }, []);

  return (
    <BrowserRouter>
      {/* <ScrollToTop /> */}
      <div className="bg-white dark:bg-slate-800">
        <Routes>
          {/* ##########################################    
                      CANDIDATE Routes    
        ############################################### */}
          <Route path="/" exact element={<HomeMain />}></Route>
          {/* <Route path="/details/:linkId" exact element={<LinkDetails />} /> */}
          <Route path="/profile" exact element={<ProfileMain />} />
          <Route path="bookmark" exact element={<BookmarkMain />}>
            <Route index exact element={<BookmarkEmpty />} />
            <Route path=":folderId" exact element={<FolderDetails />} />
          </Route>

          {/* #########################################  
                      AUTHENTICATION  
        ############################################# */}
          <Route path="/forgot-password" exact element={<ForgotPassword />} />

          {/* ######################################   
                        STATIC PAGES  
        ########################################## */}
          <Route path="/about" exact element={<About />} />
          <Route path="/sponsor" exact element={<Sponsor />} />
          <Route exact path="/privacy-policy" element={<Policy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
