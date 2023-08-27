import Search from "../../components/Search";
import { useEffect, useState } from "react";

const Hero = ({ category }) => {
  const [getPhoto, setPhoto] = useState(
    "https://cdn.devdojo.com/images/december2020/couple-on-couch.jpeg",
  );
  useEffect(() => {
    if (category?.split(",")[0] === "frontend") {
      setPhoto(
        "https://cdn.discordapp.com/attachments/945077390839787570/1141938500535599134/aaron.g_who_is_a_topengineer_Frontend_backend_prompt_eng_225f3961-9b73-4270-973c-c1577e848393.png",
      );
    } else if (category?.split(",")[0] === "backend") {
      setPhoto(
        "https://cdn.discordapp.com/attachments/1008571105990160476/1132541745251500103/quan6416_simple_isometric_3d_process_of_development_and_designi_430123ad-6dcd-4d54-9e0b-9e7c21598464.png",
      );
    } else if (category?.split(",")[0] === "courses") {
      setPhoto(
        "https://images.unsplash.com/photo-1682685797140-c17807f8f217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      );
    } else if (category?.split(",")[0] === "mobile") {
      setPhoto(
        "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      );
    } else if (category?.split(",")[0] === "cybersecurity") {
      setPhoto(
        "https://images.unsplash.com/photo-1691544931894-52f012e69000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      );
    } else if (category?.split(",")[0] === "datascience") {
      setPhoto(
        "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      );
    } else if (category?.split(",")[0] === "algorithms") {
      setPhoto(
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80",
      );
    } else if (category?.split(",")[0] === "blogs") {
      setPhoto(
        "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      );
    } else if (category?.split(",")[0] === "podcasts") {
      setPhoto(
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      );
    } else {
      setPhoto(
        "https://cdn.devdojo.com/images/december2020/couple-on-couch.jpeg",
      );
    }
  }, [category]);
  return (
    <>
      <div
        class="relative -mx-4 -mt-16 h-[440px] overflow-hidden  bg-cover bg-top bg-no-repeat px-4 py-16 text-center md:-mx-0 md:bg-center md:px-10 xl:px-16"
        style={{
          backgroundImage: `url(${getPhoto})`,
        }}
      >
        <div class="absolute inset-0 h-full w-full bg-gray-900 opacity-25"></div>
        <div class="absolute inset-0 h-64 w-full bg-gradient-to-b from-black to-transparent opacity-50"></div>

        <div class="relative mx-auto max-w-7xl px-4  py-16 text-white lg:py-16">
          <div class="flex flex-wrap text-white">
            <div class="relative mx-auto w-full px-4">
              <h1 class=" mb-2 text-lg font-bold text-white md:text-2xl  lg:text-4xl">
                Curated list of resources for designers & developers
              </h1>
              <p class="flex flex-col items-center justify-center text-sm text-white md:flex-row lg:text-base">
                <p>
                  Over 4.1 million+ high quality unique links shared by our
                  talented community.
                </p>
                <p class="text-blue-gray-900 mt-4 w-20 animate-text items-center rounded-full border-2 border-white bg-opacity-100 bg-gradient-to-r from-[#FB0058] to-[#00B7FF] bg-clip-text text-center  font-serif text-base font-bold italic leading-relaxed text-transparent antialiased opacity-100  drop-shadow-2xl backdrop-blur-xl backdrop-brightness-200 backdrop-contrast-200  backdrop-grayscale backdrop-hue-rotate-30 backdrop-opacity-100 backdrop-saturate-0 transition-opacity duration-300 md:ml-8 md:mt-0 ">
                  BETA
                </p>
              </p>
            </div>
          </div>
        </div>

        <div class="relative -mt-28 h-48 px-10 lg:h-64">
          <Search />
        </div>
      </div>
    </>
  );
};

export default Hero;
