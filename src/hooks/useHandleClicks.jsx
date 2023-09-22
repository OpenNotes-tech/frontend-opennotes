import { setLoading, addError } from "../store/features/errorSlice";
import Request from "../utils/API-router";
import { useDispatch } from "react-redux";

export function useHandleClicks() {
  const dispatch = useDispatch();

  const clickSubmit = (linkId) => {
    dispatch(setLoading(true));

    // Send the action to the backend
    Request.postClick(linkId)
      .then((res) => {
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

  return { clickSubmit };
}
