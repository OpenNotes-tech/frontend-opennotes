import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../layouts/Footer";
import Hero from "./Hero";
import { useDispatch } from "react-redux";
import { setLoading, setError } from "../../store/features/errorSlice";
import Navbar from "../../layouts/Navbar";
import LinkMain from "../Link/LinkMain";
import SearchAPI from "../../utils/SearchAPI";
import ModalMain from "../../components/modals/ModalMain";

const HomeMain = () => {
  const [fetchResult, setFetchResult] = useState([]);
  const location = useLocation();
  const dispatch = useDispatch();

  const queryParams = new URLSearchParams(location.search);

  const sort = queryParams.get("sortby");
  const tags = decodeURIComponent(queryParams.get("tags"));
  const pricing = queryParams.get("pricing");
  const category = queryParams.get("category");
  const searchQuery = queryParams.get("search_query");
  const pageNumber = sessionStorage.getItem("_PageNumber");

  useEffect(() => {
    console.log(pageNumber);
    // Send a request to the backend here
    dispatch(setLoading(true));
    SearchAPI.linkSearch(
      searchQuery,
      sort,
      category,
      tags,
      pricing,
      pageNumber,
      12
    )
      .then((res) => {
        setFetchResult(res.data.data.body);
        // dispatch(setPagination({ totalPages: res.data.data.totalPages }));
        dispatch(setLoading(false));
      })
      .catch((error) => {
        dispatch(setError(error?.response?.data?.message));
        dispatch(setLoading(false));
      })
      .finally((e) => {
        dispatch(setLoading(false));
      });
  }, [
    category,
    dispatch,
    fetchResult,
    pageNumber,
    pricing,
    searchQuery,
    sort,
    tags,
  ]);

  return (
    <div className="container px-4 md:px-0 mx-auto">
      <Navbar />
      <Hero category={category} />
      <LinkMain fetchResult={fetchResult} setFetchResult={setFetchResult} />
      <Footer />
      <ModalMain />
    </div>
  );
};

export default HomeMain;
