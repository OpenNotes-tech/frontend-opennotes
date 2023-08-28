import BookmarkModal from "./BookmarkModal";
import LinkDetailsModal from "./LinkDetailsModal";
import ShareModal from "./ShareModal";
import UserReport from "./UserReport";
import LangModal from "./LangModal";
import { useSelector } from "react-redux";
import Sign from "../../pages/Authentication/Sign";
import { FilterModal } from "./FilterModal";
import ExploreModal from "./ExploreModal";

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
      {<ShareModal />}
      {<BookmarkModal />}
      {<LinkDetailsModal />}
      {<UserReport />}
      {<LangModal />}
      {<Sign />}
      {<FilterModal />}
      <div className="block md:hidden">
        {<ExploreModal />}
      </div>
    </>
  );
};

export default ModalMain;
