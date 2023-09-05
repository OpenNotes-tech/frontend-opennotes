import BookmarkModal from "./BookmarkModal";
import LinkDetailsModal from "./LinkDetailsModal";
import ShareModal from "./ShareModal";
import UserReport from "./UserReport";
import LangModal from "./LangModal";
import { useSelector } from "react-redux";
import Sign from "../../pages/Authentication/Sign";
import { FilterModal } from "./FilterModal";
import { AnimatePresence } from "framer-motion";
import ExploreMobileModal from "./ExploreMobileModal";
import ErrorModal from "./ErrorModal";

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
  } = useSelector((state) => state.Modal);
  return (
    <>
      <AnimatePresence initial={false} onExitComplete={() => null}>
        {isDetailsModalOpen === true && <LinkDetailsModal />}
        {isShareModalOpen === true && <ShareModal />}
        {isBookmarkModalOpen === true && <BookmarkModal />}
        {isLangModalOpen === true && <LangModal />}
        {isReportModalOpen === true && <UserReport />}
        {isAuthModalOpen === true && <Sign />}
        {isFilterModalOpen === true && <FilterModal />}
        {isExploreModalOpen === true && <ExploreMobileModal />}
      </AnimatePresence>
      {<ErrorModal />}
    </>
  );
};

export default ModalMain;
