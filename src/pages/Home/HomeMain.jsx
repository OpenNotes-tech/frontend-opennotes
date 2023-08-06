// import CategorySearch from "./CategorySearch";
import Footer from "../../layouts/Footer";
import Hero from "./Hero";
import Navbar from "../../layouts/Navbar";
// import Partners from "./Partners";
// import Subscribe from "../../layouts/Subscribe";
import LinkMain from "../Link/LinkMain";

const HomeMain = () => {
  return (
    <div className="container px-4 md:px-0 mx-auto">
      <Navbar />
      <Hero />
      <LinkMain />
      {/* <Subscribe /> */}
      <Footer />
    </div>
  );
};

export default HomeMain;
