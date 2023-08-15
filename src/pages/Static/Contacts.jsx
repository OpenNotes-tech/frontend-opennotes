import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
const Contacts = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Splide
        className="px-10 "
        options={{
          gap: "1rem",
          arrows: false,
          loop: false,
          speed: 700,
          grabCursor: false,
          mousewheel: true,
          slidesPerView: 0,
          spaceBetween: 0,
          freeMode: false,
          shortSwipes: true,
          longSwipes: false,
          // autoplay: true,
          // pauseOnHover: false,
          // resetProgress: false,
          // grabCursor: true,
          rewind: true,
          height: "4rem",
          width: "70rem",
          // focus: "center",
          perPage: 6,
          wheel: true,
          releaseWheel: true,
          pagination: false,
          direction: "ltr",
          wheelSleep: 10,

          waitForTransition: true,
        }}
        aria-label="My Favorite Images"
      >
        <SplideSlide>
          <a href="/">
            <img
              src={
                "https://images.unsplash.com/photo-1632061253472-9c715a570b6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              }
              alt=" 1"
            />
          </a>
        </SplideSlide>
        <SplideSlide>
          <img
            src={
              "https://images.unsplash.com/photo-1672611797222-025d1ac38da6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            }
            alt=" 2"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src={
              "https://images.unsplash.com/photo-1682685797366-715d29e33f9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            }
            alt=" 2"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src={
              "https://images.unsplash.com/photo-1672611797222-025d1ac38da6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            }
            alt=" 2"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src={
              "https://images.unsplash.com/photo-1632061253472-9c715a570b6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            }
            alt=" 1"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src={
              "https://images.unsplash.com/photo-1672611797222-025d1ac38da6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            }
            alt=" 2"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src={
              "https://images.unsplash.com/photo-1682685797366-715d29e33f9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            }
            alt=" 2"
          />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Contacts;

// import Slider from "../../components/Slider";
// import Navbar from "../../layouts/Navbar";
// import slides from "../../constants/mock.json";
// const Contacts = () => {
//   return (
//     <div className="container px-4 lg:px-0 mx-auto">
//       <Navbar />
//       <section className="relative h-full lg:h-[703px]  overflow-hidden">
//         <Slider slides={slides} />
//       </section>
//     </div>
//   );
// };

// export default Contacts;
