import BookmarkModal from "./BookmarkModal";
import LinkDetailsModal from "./LinkDetailsModal";
import ShareModal from "./ShareModal";
import UserReport from "./UserReport";
import LangModal from "./LangModal";
import { useSelector } from "react-redux";
import Sign from "../../pages/Authentication/Sign";
import { FilterModal } from "./FilterModal";

const ModalMain = () => {
  const {
    isShareModalOpen,
    isBookmarkModalOpen,
    isDetailsModalOpen,
    isLangModalOpen,
    isReportModalOpen,
    isAuthModalOpen,
    isFilterModalOpen,
  } = useSelector((state) => state.Modal);
  return (
    <>
      {isShareModalOpen === true && <ShareModal />}
      {isBookmarkModalOpen === true && <BookmarkModal />}
      {isDetailsModalOpen === true && <LinkDetailsModal />}
      {isReportModalOpen === true && <UserReport />}
      {isLangModalOpen === true && <LangModal />}
      {isAuthModalOpen === true && <Sign />}
      {isFilterModalOpen === true && <FilterModal />}
    </>
  );
};

export default ModalMain;
