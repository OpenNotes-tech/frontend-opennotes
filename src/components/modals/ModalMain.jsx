import BookmarkModal from "./BookmarkModal";
import ExploreModal from "./ExploreModal";
import FilterModal from "./FilterModal";
import ShareModal from "./ShareModal";
import UserReport from "./UserReport";
import LangModal from "./LangModal";

const ModalMain = () => {
    const isDetailsModalOpen = sessionStorage.getItem("_IsDetailsModalOpen");
    const isShareModalOpen = sessionStorage.getItem("_IsShareModalOpen");
    const isBookmarkModalOpen = sessionStorage.getItem("_IsBookmarkModalOpen");
  return (
    <>
      {isShareModalOpen === true && <ShareModal />}
      {/* <UserReport />
      <LangModal />
      <FilterModal />
      <ExploreModal />
      <BookmarkModal /> */}
    </>
  );
};

export default ModalMain;
