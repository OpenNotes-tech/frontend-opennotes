import SearchHero from "../../pages/Search/SearchHero";
import Navbar from "../../layouts/Navbar";
import LinkMain from "../Link/LinkMain";
import Footer from "../../layouts/Footer";

const SearchMain = () => {
  return (
    <div className="container px-4 md:px-0 mx-auto">
      <Navbar />
      <SearchHero />
      <LinkMain />
      {/* <Subscribe /> */}
      <Footer />
    </div>
  );
};

export default SearchMain;
