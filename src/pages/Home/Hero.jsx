import Search from "../../components/Search";
// import { useNavigate } from "react-router-dom";

const Hero = () => {
  // const navigate = useNavigate();
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (getToggleFilter === false) {
  //     localStorage.setItem("titleSearch", titleSearch);
  //     navigate("/job");
  //   }
  // };
  return (
    <>
      <div
        class="xl:px-16 -mx-4 -mt-16 xl:-mx-0 px-4 md:px-10 relative bg-top bg-cover md:bg-center py-16 overflow-hidden bg-no-repeat text-center h-[450px]"
        style={{
          backgroundImage:
            "url('https://cdn.devdojo.com/images/december2020/couple-on-couch.jpeg')",
        }}
      >
        <div class="absolute inset-0 w-full h-full bg-gray-900 opacity-25"></div>
        <div class="absolute inset-0 w-full h-64 opacity-50 bg-gradient-to-b from-black to-transparent"></div>

        <div class="relative px-4 py-16 mx-auto  text-white max-w-7xl lg:py-16">
          <div class="flex flex-wrap text-white">
            <div class="relative w-full px-4 mx-auto  xl:flex-grow-0 xl:flex-shrink-0">
              <h1 class="mt-0 mb-2 text-lg font-bold text-white sm:text-5xl lg:text-4xl">
                Stunning royalty-free images & royalty-free stock
              </h1>
              <p class="mt-0 mb-4 text-base text-white sm:text-base lg:text-base">
                Over 4.1 million+ high quality stock images, videos and music
                shared by our talented community.
              </p>
            </div>
          </div>
        </div>

        <div class="relative h-48 px-10 -mt-28 lg:h-64">
          <Search />
        </div>
      </div>
    </>
  );
};

export default Hero;
