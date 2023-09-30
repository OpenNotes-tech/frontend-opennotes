import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, addError } from "../../store/features/errorSlice";
import { deleteFolder } from "../../store/features/editProfileSlice";
import Request from "../../utils/API-router";

const FolderList = () => {
  const { profile } = useSelector((state) => state.UserProfile); //folders, _id
  let { folderId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteFolder = (id) => {
    dispatch(setLoading(true));
    Request.deleteFolder(profile?._id, id)
      .then((res) => {
        dispatch(deleteFolder(id));
        dispatch(setLoading(false));
        navigate("/bookmark");
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
      });
  };

  return (
    <>
      {profile?.folders?.length ? (
        <div className="flex h-full w-full flex-col py-6">
          {profile?.folders.map((folderElement, index) => (
            <div
              key={index}
              className={`flex flex-row items-center justify-center rounded-sm px-10 lg:hover:bg-slate-200 lg:hover:text-slate-700 ${
                folderElement._id === folderId
                  ? "bg-blue-100 text-blue-500"
                  : "text-slate-600"
              }`}
            >
              <Link
                to={`/bookmark/${folderElement._id}`}
                state={{ folderElement, id: profile?._id }}
                className={`flex w-full items-center justify-between space-x-2 rounded px-5 py-3 text-center text-sm font-medium capitalize focus:outline-none md:px-5 `}
                htmlFor="checkbox"
              >
                {folderElement.name}
              </Link>
              <button
                onClick={() => handleDeleteFolder(folderElement._id)}
                className="h-full w-10 rounded-sm py-3 pl-4 pr-8 lg:hover:bg-rose-200 lg:hover:text-rose-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-trash-2"
                >
                  <path d="M3 6h18" />
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                  <line x1="10" x2="10" y1="11" y2="17" />
                  <line x1="14" x2="14" y1="11" y2="17" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex h-full flex-row items-center justify-center">
          No Bookmark Folder
        </div>
      )}
    </>
  );
};

export default FolderList;
