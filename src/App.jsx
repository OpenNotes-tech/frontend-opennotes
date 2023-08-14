import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

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
import ProfilePreview from "./pages/Profile/ProfilePreview";
import ProfileEmpty from "./pages/Profile/ProfileEmpty";
import ProfileChangeInfo from "./pages/Profile/ProfileChangeInfo";
import ProfileChangeEducation from "./pages/Profile/ProfileChangeEducation";
import ProfileChangeExperience from "./pages/Profile/ProfileChangeExperience";
import ProfileChangeSocialLinks from "./pages/Profile/ProfileChangeSocialLinks";
import ProfileChangeResume from "./pages/Profile/ProfileChangeResume";
import ProfileChangeSettings from "./pages/Profile/ProfileChangeSettings";
import ProfileChangePassword from "./pages/Profile/ProfileChangePassword";
import ProfileChangeEmail from "./pages/Profile/ProfileChangeEmail";
// Link Routes
import LinkMain from "./pages/Link/LinkMain";
import LinkDetailsModal from "./pages/Link/LinkDetailsModal";
// Static Routes
import NotFound from "./pages/Static/NotFound";
import About from "./pages/Static/About";
import Contacts from "./pages/Static/Contacts";
import Policy from "./pages/Static/Policy";
// import SearchMain from "./pages/Search/SearchMain";

const App = () => {
  const candidateIsAuthorized = Cookies.get("logged_in_candidate");
  return (
    <BrowserRouter>
      {/* <ScrollToTop /> */}
      <div className="bg-[#F3F4F6]">
        <Routes>
          {/* ##########################################    
                      CANDIDATE Routes    
        ############################################### */}
          <Route
            path="/"
            exact
            element={<HomeMain cand={candidateIsAuthorized} />}
          />
          <Route path="/:category?" element={<HomeMain />} />
          <Route path="/link" exact element={<LinkMain />} />
          {/* <Route path="/search" exact element={<SearchMain />} /> */}
          <Route path="details/:linkid" exact element={<LinkDetailsModal />} />
          <Route exact element={<PrivateRouter />}>
            <Route path="saved" exact element={<BookmarkMain />} />
            <Route path="profile" exact element={<ProfileMain />}>
              <Route index exact element={<ProfileEmpty />} />
              <Route
                path="preview/:resumeid"
                exact
                element={<ProfilePreview />}
              />
              <Route
                path="personal-info"
                exact
                element={<ProfileChangeInfo />}
              />
              <Route
                path="education"
                exact
                element={<ProfileChangeEducation />}
              />
              <Route
                path="experience"
                exact
                element={<ProfileChangeExperience />}
              />
              <Route
                path="social-media"
                exact
                element={<ProfileChangeSocialLinks />}
              />
              <Route path="resume" exact element={<ProfileChangeResume />} />
              <Route
                path="account-settings"
                exact
                element={<ProfileChangeSettings />}
              />
              <Route
                path="change-password"
                exact
                element={<ProfileChangePassword />}
              />
              <Route
                path="change-email"
                exact
                element={<ProfileChangeEmail />}
              />
            </Route>
          </Route>

          {/* #########################################  
                      AUTHENTICATION  
        ############################################# */}
          <Route path="/forgot-password" exact element={<ForgotPassword />} />

          {/* ######################################   
                        STATIC PAGES  
        ########################################## */}
          <Route path="/contacts" exact element={<Contacts />} />
          <Route path="/about" exact element={<About />} />
          <Route exact path="/privacy-policy" element={<Policy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
