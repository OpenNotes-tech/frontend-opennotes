import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
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

const HomeMain = () => {
  const { totalPages, loading } = useSelector((state) => state.Error);
  const [fetchResult, setFetchResult] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const location = useLocation();
  const dispatch = useDispatch();

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
        12
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
        document.documentElement.scrollHeight
    ) {
      if (
        !loading &&
        parseInt(sessionStorage.getItem("_PageNumber")) + 1 <=
          parseInt(sessionStorage.getItem("_TotalPages"))
      ) {
        dispatch(setLoading(true));
        sessionStorage.setItem(
          "_PageNumber",
          parseInt(sessionStorage.getItem("_PageNumber")) + 1
        );
      }
    }
  };
  const debouncedHandleScroll = debounce(handleScroll, 200);
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
    <div ref={filterRef} className="container px-4 md:px-0 mx-auto">
      <Navbar />
      <Hero category={category} />
      <LinkMain
        fetchResult={fetchResult}
        setFetchResult={setFetchResult}
        sort={sort}
        tags={tags}
        pricing={pricing}
        category={category}
        searchQuery={searchQuery}
        pageNumber={pageNumber}
        totalPages={totalPages}
        setTotalPages={setTotalPages}
        setPageNumber={setPageNumber}
      />
      {(parseInt(sessionStorage.getItem("_PageNumber")) ===
        parseInt(sessionStorage.getItem("_TotalPages")) ||
        fetchResult.length === 0) && <Footer />}
      <ModalMain />
      {isFilterSticky && (
        <button
          className="fixed bottom-24 md:bottom-10 right-4 bg-gray-900 p-2 rounded-full shadow-2xl text-white hover:bg-blue-500 transition duration-300 ease-in-out"
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
        </button>
      )}
    </div>
  );
};

export default HomeMain;
