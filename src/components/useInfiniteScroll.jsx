import { useState, useEffect } from "react";

function useInfiniteScroll(fetchFunction, initialData = []) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(initialData);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const loadMore = () => {
    if (page > totalPages) {
      return; // No more pages to load
    }

    setLoading(true);
    fetchFunction(page)
      .then((res) => {
        setData((prevData) => [...prevData, ...res.data.data.body]);
        setTotalPages(res.data.data.totalPages);
        setPage(page + 1);
      })
      .catch((error) => {
        console.error("Error loading data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 100
    ) {
      loadMore();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { loading, data, loadMore };
}

export default useInfiniteScroll;
