import Search from "../../components/Search";
import { useEffect, useState } from "react";

const Hero = ({ category }) => {
  const [getPhoto, setPhoto] = useState(
    "https://cdn.devdojo.com/images/december2020/couple-on-couch.jpeg"
  );
  useEffect(() => {
    if (category?.split(",")[0] === "frontend") {
      setPhoto(
        "https://cdn.discordapp.com/attachments/945077390839787570/1141938500535599134/aaron.g_who_is_a_topengineer_Frontend_backend_prompt_eng_225f3961-9b73-4270-973c-c1577e848393.png"
      );
    } else if (category?.split(",")[0] === "backend") {
      setPhoto(
        "https://cdn.discordapp.com/attachments/1008571105990160476/1132541745251500103/quan6416_simple_isometric_3d_process_of_development_and_designi_430123ad-6dcd-4d54-9e0b-9e7c21598464.png"
      );
    } else if (category?.split(",")[0] === "courses") {
      setPhoto(
        "https://images.unsplash.com/photo-1682685797140-c17807f8f217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      );
    } else if (category?.split(",")[0] === "mobile") {
      setPhoto(
        "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      );
    } else if (category?.split(",")[0] === "cybersecurity") {
      setPhoto(
        "https://images.unsplash.com/photo-1691544931894-52f012e69000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      );
    } else if (category?.split(",")[0] === "datascience") {
      setPhoto(
        "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      );
    } else if (category?.split(",")[0] === "algorithms") {
      setPhoto(
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80"
      );
    } else if (category?.split(",")[0] === "blogs") {
      setPhoto(
        "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      );
    } else if (category?.split(",")[0] === "podcasts") {
      setPhoto(
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      );
    } else {
      setPhoto(
        "https://cdn.devdojo.com/images/december2020/couple-on-couch.jpeg"
      );
    }
  }, [category]);
  return (
    <>
      <div
        class="xl:px-16 -mx-4 -mt-16 xl:-mx-0 px-4 md:px-10 relative bg-top bg-cover md:bg-center py-16 overflow-hidden bg-no-repeat text-center h-[440px]"
        style={{
          backgroundImage: `url(${getPhoto})`,
        }}
      >
        <div class="absolute inset-0 w-full h-full bg-gray-900 opacity-25"></div>
        <div class="absolute inset-0 w-full h-64 opacity-50 bg-gradient-to-b from-black to-transparent"></div>

        <div class="relative px-4 py-16 mx-auto  text-white max-w-7xl lg:py-16">
          <div class="flex flex-wrap text-white">
            <div class="relative w-full px-4 mx-auto  xl:flex-grow-0 xl:flex-shrink-0">
              <h1 class="mt-0 mb-2 text-lg font-bold text-white sm:text-5xl lg:text-4xl">
                Curated list of resources for designers & developers
              </h1>
              <p class="flex flex-col md:flex-row items-center justify-center mt-0 text-base text-white sm:text-base lg:text-base">
                <p>
                  Over 4.1 million+ high quality unique links shared by our
                  talented community.
                </p>
                <p class="mt-4 md:mt-0 md:ml-8 italic border-2 rounded-full backdrop-saturate-0 drop-shadow-2xl  backdrop-opacity-100 bg-opacity-100 opacity-100 backdrop-blur-xl backdrop-brightness-200 backdrop-contrast-200 backdrop-grayscale backdrop-hue-rotate-30  transition-opacity duration-300 border-white w-36 pb-[2px] items-center text-center animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-sm font-black">
                  BETA version
                </p>
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
