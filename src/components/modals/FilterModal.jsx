import {
  FrontendOptions,
  CategoryOptions,
  PricingOptions,
  MobileOptions,
  BackendOptions,
  AIOptions,
  SecurityOptions,
  CourseOptions,
  BlogOptions,
  PodcastOptions,
  AlgorithmsOptions,
} from "../../constants/FilterData";
import { closeFilterModal } from "../../store/features/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import Selector from "../Selector";
import { useLocation, useNavigate } from "react-router-dom";
import { generateLinkWithQuery } from "../../components/generateLinkWithQuery";
import { motion, AnimatePresence } from "framer-motion";

export const FilterModal = () => {
  const { isFilterModalOpen } = useSelector((state) => state.Modal);
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const tags = queryParams.get("tags");
  const pricing = queryParams.get("pricing");
  const category = queryParams.get("category");
  const [getCategorySelector, setCategorySelector] = useState([]);
  const [getTagsSelector, setTagsSelector] = useState([]);
  const [getPricingSelector, setPricingSelector] = useState([]);
  const [routeTags, setRouteTags] = useState(tags);
  const [routeCategory, setRouteCategory] = useState(category);
  const [routePricing, setRoutePricing] = useState(pricing);

  const dispatch = useDispatch();
  const modalRef = useRef();

  const handleCategorySelector = (selectedCategory) => {
    const selectedValues = selectedCategory.map((option) => option.value);
    setCategorySelector(selectedCategory);
    const commaSeparatedString = selectedValues.join(",");
    setRouteCategory(commaSeparatedString);
  };
  const handleTagsSelector = (selectedTags) => {
    const selectedValues = selectedTags.map((option) => option.value);
    setTagsSelector(selectedTags);
    const commaSeparatedString = selectedValues.join(",");
    setRouteTags(commaSeparatedString);
  };
  const handlePricingSelector = (selectedPrice) => {
    const selectedValues = selectedPrice.map((option) => option.value);
    setPricingSelector(selectedPrice);
    const commaSeparatedString = selectedValues.join(",");
    setRoutePricing(commaSeparatedString);
  };
  const handleSubmit = (e) => {
    const linkToPage = generateLinkWithQuery(location, {
      tags: routeTags,
      category: routeCategory,
      pricing: routePricing,
    });
    navigate(linkToPage);
    dispatch(closeFilterModal());
  };
  const handleCancel = () => {
    // setTagsSelector([]); // Clear selected skills
    // setCategorySelector([]); // Clear selected locations
    dispatch(closeFilterModal());
  };

  useEffect(() => {
    if (routeCategory) {
      const selectedValues = routeCategory.split(",");
      const selectedOptions = CategoryOptions.filter((option) =>
        selectedValues.includes(option.value),
      );
      setCategorySelector(selectedOptions);
    }
  }, [routeCategory]);

  useEffect(() => {
    if (routePricing) {
      const selectedValues = routePricing.split(",");
      const selectedOptions = PricingOptions.filter((option) =>
        selectedValues.includes(option.value),
      );
      setPricingSelector(selectedOptions);
    }
  }, [routePricing]);

  // Close the modal when the user clicks outside of it
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target === modalRef.current) {
        dispatch(closeFilterModal());
      }
    };
    if (isFilterModalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dispatch, isFilterModalOpen]);

  // Combine selected category options into one array
  const categoryOptions = {
    frontend: FrontendOptions,
    backend: BackendOptions,
    datascience: AIOptions,
    mobile: MobileOptions,
    algorithms: AlgorithmsOptions,
    cybersecurity: SecurityOptions,
    courses: CourseOptions,
    blogs: BlogOptions,
    podcasts: PodcastOptions,
  };

  // Flatten category options and prioritize the options of the first selected category
  const orderedSelectedOptions =
    routeCategory?.length > 0
      ? routeCategory
          ?.split(",")
          ?.flatMap((category, index) => {
            if (index === 0) {
              return categoryOptions[category];
            }
            return [];
          })
          .concat(
            Object.values(categoryOptions)?.flatMap((options) =>
              options.filter(
                (option) =>
                  !categoryOptions[routeCategory?.split(",")[0]]?.includes(
                    option,
                  ),
              ),
            ),
          )
      : Object.values(categoryOptions)?.flat();

  useEffect(() => {
    if (routeTags) {
      const selectedValues = routeTags.split(",");
      const selectedOptions = orderedSelectedOptions.filter((option) =>
        selectedValues.includes(option.value),
      );
      setTagsSelector(selectedOptions);
    }
  }, [routeTags]);

  const dropIn = {
    hidden: {
      y: "100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      // transition: {
      //   duration: 0.1,
      //   type: "spring",
      //   damping: 25,
      //   stiffness: 500,
      // },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  return (
    <>
      <AnimatePresence initial={false} onExitComplete={() => null}>
        {isFilterModalOpen && (
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bottom-0 z-[999] flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none"
          >
            <motion.div
              variants={dropIn}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ damping: 300 }}
              className="relative mx-auto w-full max-w-2xl"
            >
              {/*content*/}
              <div className="relative flex w-full flex-col  rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="border-b border-solid border-slate-200 p-4 md:pt-4">
                  <h1 className="whitespace-nowrap text-center font-serif text-2xl font-medium">
                    Filters
                  </h1>
                </div>
                {/*body*/}
                <div className="grid h-auto gap-x-14 gap-y-10 px-10 py-4 md:grid-cols-2 md:px-8 ">
                  <div className="px-10 md:px-0">
                    <div className="mb-3 text-sm font-semibold text-slate-800">
                      Category
                    </div>
                    <Selector
                      name="category"
                      className="basic-multi-select"
                      options={CategoryOptions}
                      isMulti={true}
                      value={getCategorySelector}
                      onChange={handleCategorySelector}
                    />
                  </div>
                  <div className="px-10 md:px-0 ">
                    <div className="mb-3 text-sm font-semibold text-slate-800">
                      Tags
                    </div>
                    <Selector
                      name="tags"
                      className="basic-multi-select"
                      options={orderedSelectedOptions}
                      isMulti={true}
                      value={getTagsSelector}
                      onChange={handleTagsSelector}
                    />
                  </div>
                  <div className="px-10 md:px-0">
                    <div className="mb-3 text-sm font-semibold text-slate-800">
                      Pricing
                    </div>
                    <Selector
                      name="pricing"
                      className="basic-multi-select"
                      options={PricingOptions}
                      isMulti={true}
                      value={getPricingSelector}
                      onChange={handlePricingSelector}
                    />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex flex-row items-center justify-center space-x-4 rounded-b border-t border-solid border-slate-200 px-6  py-4 md:justify-end md:py-4">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="cursor-pointer items-center justify-center rounded-md border-[1.5px] border-black px-8 py-2 text-center font-medium text-black transition duration-200 ease-in-out hover:border-blue-700 hover:bg-blue-100 hover:text-blue-700 md:px-8 md:py-2"
                  >
                    Cancel
                  </button>
                  <button
                    className="cursor-pointer items-center justify-center rounded-md border-[1.5px] border-black bg-black px-8 py-2 text-center font-medium text-white transition duration-200 ease-in-out hover:border-blue-700 hover:bg-blue-700"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* <div className="fixed inset-0 z-40 bg-black opacity-30"></div> */}
    </>
  );
};
