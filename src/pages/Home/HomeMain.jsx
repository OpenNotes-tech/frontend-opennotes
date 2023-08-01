// import CategorySearch from "./CategorySearch";
import { FilterModal } from "../../components/FilterModal";
import { useState } from "react";
import Footer from "../../layouts/Footer";
import Hero from "./Hero";
import Navbar from "../../layouts/Navbar";
// import Partners from "./Partners";
import Subscribe from "../../layouts/Subscribe";
import LinkMain from "../Link/LinkMain";
import CardList from "../../components/CardList";

const HomeMain = () => {
  const [getToggleFilter, setToggleFilter] = useState(false);
  return (
    <div className="container px-4 md:px-0 mx-auto">
      <Navbar />
      <Hero
      setToggleFilter={setToggleFilter}
      getToggleFilter={getToggleFilter}
       />
      <LinkMain/>
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

export default HomeMain;
