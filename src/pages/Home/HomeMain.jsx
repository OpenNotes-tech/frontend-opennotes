import Footer from "../../layouts/Footer";
import Hero from "./Hero";
import {
  setSearchResult,
  setPagination,
} from "../../store/features/searchSlice";
import { setLoading, setError } from "../../store/features/errorSlice";
import Navbar from "../../layouts/Navbar";
import LinkMain from "../Link/LinkMain";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import SearchAPI from "../../utils/SearchAPI";

const HomeMain = () => {
  const { query, sort, category, tags, pageNumber, pricing } = useSelector(
    (state) => state.Search
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // Send a request to the backend here
    dispatch(setLoading(true));
    SearchAPI.linkSearch(query, sort, category, tags, pricing, pageNumber, 12)
      .then((res) => {
        dispatch(setSearchResult(res.data.data.body));
        dispatch(setPagination({ totalPages: res.data.data.totalPages }));
        dispatch(setLoading(false));
      })
      .catch((error) => {
        dispatch(setError(error?.response?.data?.message));
        dispatch(setLoading(false));
      })
      .finally((e) => {
        dispatch(setLoading(false));
      });
  }, []);

  return (
    <div className="container px-4 md:px-0 mx-auto">
      <Navbar />
      <Hero />
      <LinkMain />
      <Footer />
    </div>
  );
};

export default HomeMain;
