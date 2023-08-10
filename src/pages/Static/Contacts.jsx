import Slider from "../../components/Slider";
import Navbar from "../../layouts/Navbar";
import slides from "../../constants/mock.json";
const Contacts = () => {
  return (
    <div className="container px-4 lg:px-0 mx-auto">
      <Navbar />
      <section className="relative h-full lg:h-[703px]  overflow-hidden">
        <Slider slides={slides} />
      </section>
    </div>
  );
};

export default Contacts;
