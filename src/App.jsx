import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Suspense, lazy, useEffect } from "react";
import Cookies from "js-cookie";

import { setLoading, addError } from "./store/features/errorSlice";
import { authenticate } from "./store/features/editProfileSlice";
import HomeMain from "./pages/Home/HomeMain";
import Request from "./utils/API-router";
import LinkDetails from "./pages/Link/LinkDetails";

// Home/Bookmark/Profile Pgage Routes
const ForgotPassword = lazy(() =>
  import("./pages/Authentication/ForgotPassword"),
);
const ResetPassword = lazy(() =>
  import("./pages/Authentication/ResetPassword"),
);
const FolderDetails = lazy(() => import("./pages/Bookmark/FolderDetails"));
const BookmarkEmpty = lazy(() => import("./pages/Bookmark/BookmarkEmpty"));
const BookmarkMain = lazy(() => import("./pages/Bookmark/BookmarkMain"));
const ProfileMain = lazy(() => import("./pages/Profile/ProfileMain"));
const ProfileEmpty = lazy(() => import("./pages/Profile/ProfileEmpty"));
const ProfileChangeInfo = lazy(() =>
  import("./pages/Profile/ProfileChangeInfo"),
);
const ProfileChangeSocialLinks = lazy(() =>
  import("./pages/Profile/ProfileChangeSocialLinks"),
);
const ProfileChangePassword = lazy(() =>
  import("./pages/Profile/ProfileChangePassword"),
);
const ProfileChangeSettings = lazy(() =>
  import("./pages/Profile/ProfileChangeSettings"),
);
const ProfileChangeEmail = lazy(() =>
  import("./pages/Profile/ProfileChangeEmail"),
);

// Static Routes
const NotFound = lazy(() => import("./pages/Static/NotFound"));
const Sponsor = lazy(() => import("./pages/Static/Sponsor"));
const Policy = lazy(() => import("./pages/Static/Policy"));
const About = lazy(() => import("./pages/Static/About"));

const App = () => {
  const { profile } = useSelector((state) => state.UserProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!profile.length && Cookies.get("userID") !== undefined) {
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

  useEffect(() => {
    sessionStorage.setItem("_TotalPages", 0);
    sessionStorage.setItem("_PageNumber", 1);
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

  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <div className="dark:bg-slate-800">
          <Routes>
            <Route path="/" exact element={<HomeMain />}></Route>
            <Route path="profile" exact element={<ProfileMain />}>
              <Route index exact element={<ProfileEmpty />} />
              <Route
                path="personal-info" //:userId
                exact
                element={<ProfileChangeInfo />}
              />
              <Route
                path="social-media"
                exact
                element={<ProfileChangeSocialLinks />}
              />
              <Route
                path="account-settings"
                exact
                element={<ProfileChangeSettings />}
              />
              <Route
                path="update-password"
                exact
                element={<ProfileChangePassword />}
              />
              <Route
                path="update-email"
                exact
                element={<ProfileChangeEmail />}
              />
            </Route>
            <Route path="bookmark" exact element={<BookmarkMain />}>
              <Route index exact element={<BookmarkEmpty />} />
              <Route path=":folderId" exact element={<FolderDetails />} />
            </Route>
            <Route path="/forgot-password" exact element={<ForgotPassword />} />
            <Route
              path="/link-details/:linkId"
              exact
              element={<LinkDetails />}
            />
            <Route
              path="/reset-password/:token"
              exact
              element={<ResetPassword />}
            />
            <Route exact path="/privacy-policy" element={<Policy />} />
            <Route path="/sponsor" exact element={<Sponsor />} />
            <Route path="/about" exact element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
