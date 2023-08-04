import SearchHero from "../../pages/Search/SearchHero";
import Navbar from "../../layouts/Navbar";
import LinkMain from "../Link/LinkMain";
import Footer from "../../layouts/Footer";
import { FilterModal } from "../../components/FilterModal";
import { useState } from "react";

const SearchMain = () => {
  const [getToggleFilter, setToggleFilter] = useState(false);
  return (
    <div className="container px-4 md:px-0 mx-auto">
      <Navbar />
      <SearchHero />
      <LinkMain />
      {/* <Subscribe /> */}
      <Footer />
      {getToggleFilter ? (
        <>
          <FilterModal setToggleFilter={setToggleFilter} />
        </>
      ) : null}
    </div>
  );
};

export default SearchMain;
