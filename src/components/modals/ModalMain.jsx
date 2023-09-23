import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { Suspense, lazy } from "react";
const ExploreMobileModal = lazy(() => import("./ExploreMobileModal"));
const Sign = lazy(() => import("../../pages/Authentication/Sign"));
const LinkDetailsModal = lazy(() => import("./LinkDetailsModal"));
const NewsletterModal = lazy(() => import("./NewsletterModal"));
const BookmarkModal = lazy(() => import("./BookmarkModal"));
const FilterModal = lazy(() => import("./FilterModal"));
const ErrorModal = lazy(() => import("./ErrorModal"));
const ShareModal = lazy(() => import("./ShareModal"));
const UserReport = lazy(() => import("./UserReport"));
const LangModal = lazy(() => import("./LangModal"));

const ModalMain = () => {
  const {
    isShareModalOpen,
    isBookmarkModalOpen,
    isDetailsModalOpen,
    isLangModalOpen,
    isReportModalOpen,
    isAuthModalOpen,
    isFilterModalOpen,
    isExploreModalOpen,
    isNewsModalOpen,
  } = useSelector((state) => state.Modal);

  return (
    <>
      <Suspense fallback={null}>
        <AnimatePresence initial={false} onExitComplete={() => null}>
          {isDetailsModalOpen === true && <LinkDetailsModal />}
          {isShareModalOpen === true && <ShareModal />}
          {isBookmarkModalOpen === true && <BookmarkModal />}
          {isLangModalOpen === true && <LangModal />}
          {isReportModalOpen === true && <UserReport />}
          {isAuthModalOpen === true && <Sign />}
          {isFilterModalOpen === true && <FilterModal />}
          {isExploreModalOpen === true && <ExploreMobileModal />}
          {isNewsModalOpen === true && <NewsletterModal />}
        </AnimatePresence>
        {<ErrorModal />}
      </Suspense>
    </>
  );
};

export default ModalMain;
