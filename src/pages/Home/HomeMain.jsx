import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../layouts/Footer";
import Hero from "./Hero";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, addError } from "../../store/features/errorSlice";
import Navbar from "../../layouts/Navbar";
import LinkMain from "../Link/LinkMain";
import SearchAPI from "../../utils/SearchAPI";
import ModalMain from "../../components/modals/ModalMain";
import debounce from "lodash/debounce";
import { motion } from "framer-motion";
import { generateLinkWithQuery } from "../../hooks/useGenerateQueryLink";
import Request from "../../utils/API-router";

const HomeMain = () => {
  const { loading } = useSelector((state) => state.Error);
  const [fetchResult, setFetchResult] = useState([]);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const sort = queryParams.get("sortby");
  const tags = queryParams.get("tags");
  const pricing = queryParams.get("pricing");
  const category = queryParams.get("category");
  const searchQuery = queryParams.get("search_query");

  useEffect(() => {
    sessionStorage.setItem("_TotalPages", 0);
    sessionStorage.setItem("_PageNumber", 1);
    setFetchResult([]);
  }, [category, tags, sort, searchQuery, pricing]);

  useEffect(() => {
    if (localStorage.getItem("rememberFilter") === "true") {
      const rememberedTags = localStorage.getItem("tags");
      const rememberedCategory = localStorage.getItem("category");
      const rememberedPricing = localStorage.getItem("pricing");

      const queryParams = {};

      if (rememberedTags !== "null") {
        queryParams.tags = rememberedTags;
      }

      if (rememberedCategory !== "null") {
        queryParams.category = rememberedCategory;
      }

      if (rememberedPricing !== "null") {
        queryParams.pricing = rememberedPricing;
      }

      const linkToPage = generateLinkWithQuery(location, queryParams);
      navigate(linkToPage);
    }
  }, []);

  // Main Fetching
  useEffect(() => {
    if (fetchResult) {
      dispatch(setLoading(true));

      SearchAPI.linkSearch(
        searchQuery,
        sort,
        category,
        tags,
        pricing,
        parseInt(sessionStorage.getItem("_PageNumber")),
        12,
      )
        .then((res) => {
          console.log(res);
          const updatedResults = res.data.data.body.map((item) => {
            // Retrieve liked link IDs from local storage
            const likedLinkIds =
              JSON.parse(localStorage.getItem("likedLinkIds")) || [];

            // Check if the link ID is in the likedLinkIds array and set the "liked" attribute accordingly
            return {
              ...item,
              liked: likedLinkIds.includes(item._id),
            };
          });

          if (parseInt(sessionStorage.getItem("_PageNumber")) === 1) {
            setFetchResult(updatedResults);
          } else {
            setFetchResult((prevResults) => [
              ...prevResults,
              ...updatedResults,
            ]);
          }
          sessionStorage.setItem("_TotalPages", res.data.data.totalPages);
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
  }, [
    category,
    parseInt(sessionStorage.getItem("_PageNumber")),
    pricing,
    searchQuery,
    sort,
    tags,
  ]);

  const handleLike = (linkId) => {
    dispatch(setLoading(true));

    // Check if the link is already liked
    const likedLinkIds = JSON.parse(localStorage.getItem("likedLinkIds")) || [];
    const isAlreadyLiked = likedLinkIds.includes(linkId);

    // Determine the action based on whether it's already liked or not
    const action = isAlreadyLiked ? "dislike" : "like";

    // Send the action to the backend
    Request.postLike(linkId, action)
      .then((res) => {
        // Assuming res.data contains updated like count for the card
        const updatedFetchResult = fetchResult.map((item) => {
          if (item._id === linkId) {
            // Update the like count for the specific card and set liked based on the action
            return {
              ...item,
              like: res.data.data.like,
              liked: action === "like",
            };
          }
          return item;
        });

        // Update the state with the updated fetchResult
        setFetchResult(updatedFetchResult);

        if (action === "like") {
          // Add the link ID to local storage if it's a like action
          likedLinkIds.push(linkId);
        } else {
          // Remove the link ID from local storage if it's a dislike action
          likedLinkIds.splice(likedLinkIds.indexOf(linkId), 1);
        }

        // Update the local storage with the updated likedLinkIds
        localStorage.setItem("likedLinkIds", JSON.stringify(likedLinkIds));

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
  const handleClick = (linkId) => {
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

  // Infinite Scrolling
  const handleScroll = async () => {
    if (
      !loading &&
      window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight - 500
    ) {
      if (
        !loading &&
        parseInt(sessionStorage.getItem("_PageNumber")) + 1 <=
          parseInt(sessionStorage.getItem("_TotalPages"))
      ) {
        dispatch(setLoading(true));
        sessionStorage.setItem(
          "_PageNumber",
          parseInt(sessionStorage.getItem("_PageNumber")) + 1,
        );
      }
    }
  };
  const debouncedHandleScroll = debounce(handleScroll, 50);
  useEffect(() => {
    window.addEventListener("scroll", debouncedHandleScroll);
    return () => window.removeEventListener("scroll", debouncedHandleScroll);
  }, [loading]);

  // Scroll to Top
  const filterRef = useRef(null);
  const [isFilterSticky, setIsFilterSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (filterRef.current) {
        const filterRect = filterRef.current.getBoundingClientRect();
        setIsFilterSticky(filterRect.top <= 0);
      }

      // Additional logic to hide the button when scrolling to the top
      if (window.scrollY <= 300) {
        setIsFilterSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [filterRef]);
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div
        // animate={{
        //   // scaleY: isAuthModalOpen ? 0.98 : 1,
        //   // scaleX: isAuthModalOpen ? 0.97 : 1,
        //   scale: isAuthModalOpen ? 0.99 : 1,
        //   opacity: isAuthModalOpen ? 0.9 : 1,
        // }}
        // transition={{ type: "spring", bounce: 0, duration: 0.4 }}
        ref={filterRef}
        className="px-4 md:px-0"
      >
        <Navbar />
        <Hero category={category} />
        <LinkMain
          fetchResult={fetchResult}
          sort={sort}
          category={category}
          handleLike={handleLike}
          handleClick={handleClick}
        />
        {(parseInt(sessionStorage.getItem("_PageNumber")) ===
          parseInt(sessionStorage.getItem("_TotalPages")) ||
          fetchResult.length === 0) && <Footer />}
        {isFilterSticky && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-20 right-4 rounded-full bg-slate-700 p-2 text-white shadow-2xl transition duration-300 ease-in-out md:bottom-10 lg:bottom-20 lg:hover:bg-blue-500"
            onClick={handleScrollToTop}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-up"
            >
              <line x1="12" x2="12" y1="19" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </motion.button>
        )}
      </div>
      <ModalMain />
    </>
  );
};

export default HomeMain;
