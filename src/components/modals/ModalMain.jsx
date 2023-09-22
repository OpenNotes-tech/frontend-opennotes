import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { Suspense, lazy } from "react";
import ErrorModal from "./ErrorModal";
const ExploreMobileModal = lazy(() => import("./ExploreMobileModal"));
const Sign = lazy(() => import("../../pages/Authentication/Sign"));
const LinkDetailsModal = lazy(() => import("./LinkDetailsModal"));
const NewsletterModal = lazy(() => import("./NewsletterModal"));
const BookmarkModal = lazy(() => import("./BookmarkModal"));
const FilterModal = lazy(() => import("./FilterModal"));
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
      <AnimatePresence initial={false} onExitComplete={() => null}>
        <Suspense fallback={null}>
          {isDetailsModalOpen === true && <LinkDetailsModal />}
          {isShareModalOpen === true && <ShareModal />}
          {isBookmarkModalOpen === true && <BookmarkModal />}
          {isLangModalOpen === true && <LangModal />}
          {isReportModalOpen === true && <UserReport />}
          {isAuthModalOpen === true && <Sign />}
          {isFilterModalOpen === true && <FilterModal />}
          {isExploreModalOpen === true && <ExploreMobileModal />}
          {isNewsModalOpen === true && <NewsletterModal />}
        </Suspense>
      </AnimatePresence>
      {<ErrorModal />}
    </>
  );
};

export default ModalMain;
