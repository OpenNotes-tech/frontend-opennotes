import Cookies from "js-cookie";
import { clickLike } from "../store/features/editProfileSlice";
import { setLoading, addError } from "../store/features/errorSlice";
import Request from "../utils/API-router";
import { useDispatch } from "react-redux";

export function useHandleLikes() {
  const dispatch = useDispatch();
  let isSignedIn = !!Cookies.get("openToken");

  const likeSubmit = (linkId, userId, fetchResult, setFetchResult) => {
    dispatch(setLoading(true));
    let action = null;
    let likedLinkIds = null;
    let isAlreadyLiked = null;

    if (!isSignedIn) {
      // Check if the link is already liked
      likedLinkIds = JSON.parse(localStorage.getItem("likedLinkIds")) || [];
      isAlreadyLiked = likedLinkIds.includes(linkId);

      // Determine the action based on whether it's already liked or not
      action = isAlreadyLiked ? "dislike" : "like";
    }

    // Send the action to the backend
    Request.postLike(linkId, { action, userId })
      .then((res) => {
        // Assuming res.data contains updated like count for the card
        const updatedFetchResult = fetchResult.map((item) => {
          if (item._id === linkId) {
            // Update the like count for the specific card and set liked based on the action
            return {
              ...item,
              like: res.data.data.linkLike,
              liked: res.data.data.action === "like",
            };
          }
          return item;
        });

        // Update the state with the updated fetchResult
        setFetchResult(updatedFetchResult);

        if (res.data.data.action === "like") {
          if (isSignedIn) {
            dispatch(
              clickLike({
                linkId: linkId,
                likedFolderId: res.data.data.likeFolderId,
              }),
            );
          } else {
            // Add the link ID to local storage if it's a like action
            likedLinkIds.push(linkId);
          }
          dispatch(
            addError({
              type: "success",
              error: 'you "liked" the link!',
              id: Date.now(),
            }),
          );
        } else {
          // Remove the link ID from local storage if it's a dislike action
          if (isSignedIn) {
            dispatch(
              clickLike({
                linkId: linkId,
                likedFolderId: res.data.data.likeFolderId,
              }),
            );
          } else {
            likedLinkIds.splice(likedLinkIds.indexOf(linkId), 1);
          }
          dispatch(
            addError({
              type: "success",
              error: 'you "disliked" the link!',
              id: Date.now(),
            }),
          );
        }

        if (!isSignedIn) {
          // Update the local storage with the updated likedLinkIds
          localStorage.setItem("likedLinkIds", JSON.stringify(likedLinkIds));
        }

        // Update the session storage or other relevant data
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
      });
  };

  return { likeSubmit };
}
