import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import debounce from "lodash/debounce";

import { setLoading, addError } from "../../store/features/errorSlice";
import { openAuthModal } from "../../store/features/modalSlice";
import { QueryRoutes } from "../../hooks/useGenerateQueryLink";
import { useHandleLikes } from "../../hooks/useHandleLike";
import SearchAPI from "../../utils/SearchAPI";
import Footer from "../../layouts/Footer";
import LinkMain from "../Link/LinkMain";
import Hero from "./Hero";

const HomeMain = () => {
  const { loading } = useSelector((state) => state.Error);
  const { profile } = useSelector((state) => state?.UserProfile);

  const [fetchResult, setFetchResult] = useState([]);
  const { likeSubmit } = useHandleLikes();

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
    if (location.search?.includes("?code=") === true) {
      dispatch(openAuthModal());
    }
  }, [location.search?.includes("?code=") === true]);

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

      const linkToPage = QueryRoutes(location, queryParams);
      navigate(linkToPage);
    }
  }, []);

  // #######      Main Fetching       #######
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
          if (parseInt(sessionStorage.getItem("_PageNumber")) === 1) {
            setFetchResult(res.data.data.body);
          } else {
            setFetchResult((prevResults) => [
              ...prevResults,
              ...res.data.data.body,
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
    likeSubmit(linkId, profile?._id, fetchResult, setFetchResult);
  };

  // #######    Infinite Scrolling   #############
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
        dispatch(setLoading(false));
      }
    }
  };
  const debouncedHandleScroll = debounce(handleScroll, 50);
  useEffect(() => {
    window.addEventListener("scroll", debouncedHandleScroll);
    return () => window.removeEventListener("scroll", debouncedHandleScroll);
  }, [loading]);

  // #######     Scroll to Top   #######
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
        <Hero category={category} />
        <LinkMain
          fetchResult={fetchResult}
          sort={sort}
          category={category}
          handleLike={handleLike}
        />
        {(parseInt(sessionStorage.getItem("_PageNumber")) ===
          parseInt(sessionStorage.getItem("_TotalPages")) ||
          fetchResult.length === 0) && <Footer />}
        {isFilterSticky && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-20 right-4 rounded-full bg-slate-700 p-2 text-white shadow-2xl transition duration-300 ease-in-out md:bottom-10 lg:bottom-20 lg:hover:bg-blue-500"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
    </>
  );
};

export default HomeMain;
