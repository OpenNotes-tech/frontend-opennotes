import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../layouts/Footer";
import Hero from "./Hero";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoading,
  setError,
  setTotalPages,
} from "../../store/features/errorSlice";
import Navbar from "../../layouts/Navbar";
import LinkMain from "../Link/LinkMain";
import SearchAPI from "../../utils/SearchAPI";
import ModalMain from "../../components/modals/ModalMain";
import debounce from "lodash/debounce";
import { motion } from "framer-motion";
import { generateLinkWithQuery } from "../../hooks/useGenerateQueryLink";

const HomeMain = () => {
  const { loading } = useSelector((state) => state.Error);
  const [fetchResult, setFetchResult] = useState([]);
  const bottomBoundaryRef = useRef(null);
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
          if (parseInt(sessionStorage.getItem("_PageNumber")) === 1) {
            setFetchResult(res.data.data.body);
          } else {
            setFetchResult((prevResults) => [
              ...prevResults,
              ...res.data.data.body,
            ]);
          }

          dispatch(setTotalPages(res.data.data.totalPages));
          // console.log(res);
          sessionStorage.setItem("_TotalPages", res.data.data.totalPages);
          dispatch(setLoading(false));
        })
        .catch((error) => {
          dispatch(setError(error?.response?.data?.message));
          dispatch(setLoading(false));
        })
        .finally((e) => {
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

  // Infinite Scrolling
  const handleScroll = async () => {
    if (
      !loading &&
      window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight - 200
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
          bottomBoundaryRef={bottomBoundaryRef}
          category={category}
        />
        {(parseInt(sessionStorage.getItem("_PageNumber")) ===
          parseInt(sessionStorage.getItem("_TotalPages")) ||
          fetchResult.length === 0) && <Footer />}
        {isFilterSticky && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-20 right-4 rounded-full bg-neutral-700 p-2 text-white shadow-2xl transition duration-300 ease-in-out hover:bg-blue-500 md:bottom-10 lg:bottom-20"
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
