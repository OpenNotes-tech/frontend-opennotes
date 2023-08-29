import { BrowserRouter, Routes, Route } from "react-router-dom";

// Functions
import PrivateRouter from "./utils/PrivateRouter";
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

const App = () => {
  useEffect(() => {
    sessionStorage.setItem("_TotalPages", 0);
    sessionStorage.setItem("_PageNumber", 1);
  }, []);
  return (
    <BrowserRouter>
      {/* <ScrollToTop /> */}
      <div className="bg-[#F3F4F6] dark:bg-green-400 ">
        <Routes>
          {/* ##########################################    
                      CANDIDATE Routes    
        ############################################### */}
          <Route path="/" exact element={<HomeMain />} />
          <Route exact element={<PrivateRouter />}>
            <Route path="saved" exact element={<BookmarkMain />} />
            <Route path="profile" exact element={<ProfileMain />} />
          </Route>

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
