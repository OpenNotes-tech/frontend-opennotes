import { useSelector } from "react-redux";
import Search from "../../components/Search";
import { useEffect, useState } from "react";

const Hero = () => {
  const { category } = useSelector((state) => state.Search);
  const [getPhoto, setPhoto] = useState(
    "https://cdn.devdojo.com/images/december2020/couple-on-couch.jpeg"
  );
  useEffect(() => {
    if (category?.split(",")[0] === "Frontend") {
      setPhoto(
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      );
    } else if (category?.split(",")[0] === "Backend") {
      setPhoto(
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      );
    } else if (category?.split(",")[0] === "IT Courses") {
      setPhoto(
        "https://images.unsplash.com/photo-1682685797140-c17807f8f217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      );
    } else if (category?.split(",")[0] === "Mobile") {
      setPhoto(
        "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      );
    } else if (category?.split(",")[0] === "Cyber Security") {
      setPhoto(
        "https://images.unsplash.com/photo-1691544931894-52f012e69000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      );
    } else if (category?.split(",")[0] === "AI / ML / DS") {
      setPhoto(
        "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      );
    } else if (category?.split(",")[0] === "Algorithms") {
      setPhoto(
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80"
      );
    } else if (category?.split(",")[0] === "Blogs") {
      setPhoto(
        "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      );
    } else if (category?.split(",")[0] === "Podcasts") {
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
