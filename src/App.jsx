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
import LinkDetails from "./pages/Link/LinkDetails";
// import { useSelector } from "react-redux";
const App = () => {
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
      <div className="bg-white dark:bg-slate-800 ">
        <Routes>
          {/* ##########################################    
                      CANDIDATE Routes    
        ############################################### */}
          <Route path="/" exact element={<HomeMain />} ></Route>
          {/* <Route path="/details/:linkId" exact element={<LinkDetails />} /> */}
          <Route path="/bookmark" exact element={<BookmarkMain />} />
          <Route path="/profile" exact element={<ProfileMain />} />
          {/* <Route exact element={<PrivateRouter />}></Route> */}

          {/* #########################################  
                      AUTHENTICATION  
        ############################################# */}
          <Route path="/forgot-password" exact element={<ForgotPassword />} />

          {/* ######################################   
                        STATIC PAGES  
        ########################################## */}
          <Route path="/about" exact element={<About />} />
          <Route exact path="/privacy-policy" element={<Policy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
