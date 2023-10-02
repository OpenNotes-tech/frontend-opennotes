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
import { QueryRoutes } from "../../hooks/useGenerateQueryLink";
import { motion } from "framer-motion";
import { createDropInVariant } from "../../hooks/useAnimationVariants";
import useClickOutside from "../../hooks/useClickOutside";

const FilterModal = () => {
  const { isFilterModalOpen } = useSelector((state) => state.Modal);
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const tags = queryParams.get("tags");
  const pricing = queryParams.get("pricing");
  const category = queryParams.get("category");
  const [rememberFilter, setRememberFilter] = useState(false);
  const [getCategorySelector, setCategorySelector] = useState([]);
  const [getTagsSelector, setTagsSelector] = useState([]);
  const [getPricingSelector, setPricingSelector] = useState([]);
  const [routeTags, setRouteTags] = useState(tags);
  const [routeCategory, setRouteCategory] = useState(category);
  const [routePricing, setRoutePricing] = useState(pricing);

  useEffect(() => {
    if (localStorage.getItem("rememberFilter") === "true") {
      localStorage.setItem("tags", tags);
      localStorage.setItem("category", category);
      localStorage.setItem("pricing", pricing);
    }
  }, [tags, category, pricing]);

  const dispatch = useDispatch();
  const modalRef = useRef();
  useClickOutside(
    modalRef,
    () => {
      dispatch(closeFilterModal());
    },
    isFilterModalOpen,
  );

  const handleCategorySelector = (selectedCategory) => {
    const selectedValues = selectedCategory.map((option) => option.value);
    setCategorySelector(selectedCategory);
    const commaSeparatedString = selectedValues.join(",");
    setRouteCategory(commaSeparatedString);
  };
  const handleTagsSelector = (selectedTags) => {
    const selectedValues = selectedTags.map(
      (option) => option.value.split("_")[0],
    );
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
    const linkToPage = QueryRoutes(location, {
      tags: routeTags,
      category: routeCategory,
      pricing: routePricing,
    });
    navigate(linkToPage);
    localStorage.setItem("tags", tags);
    localStorage.setItem("category", category);
    localStorage.setItem("pricing", pricing);
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
        selectedValues.includes(option.value.split("_")[0]),
      );
      setTagsSelector(selectedOptions);
    }
  }, [routeTags]);

  const dropInVariant = createDropInVariant("100vh");

  // Load filter state from localStorage on component mount
  useEffect(() => {
    const savedFilter = localStorage.getItem("rememberFilter");
    if (savedFilter) {
      setRememberFilter(savedFilter === "true");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("rememberFilter", rememberFilter);
  }, [rememberFilter]);

  const handleCheckboxChange = (event) => {
    setRememberFilter(event.target.checked);
  };

  return (
    <>
      <motion.div
        ref={modalRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="raletive fixed inset-0 bottom-0 z-[999] flex h-screen w-screen place-items-center items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-60 opacity-100 outline-none backdrop-blur-sm  focus:outline-none"
      >
        <motion.div
          variants={dropInVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ damping: 300 }}
          className="relative mx-auto w-full max-w-2xl"
        >
          {/*content*/}
          <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
            {/*header*/}
            <div className="border-b border-solid border-slate-200 p-4 md:pt-4">
              <h1 className="whitespace-nowrap text-center font-serif text-2xl font-medium">
                Filters
              </h1>
            </div>
            {/*body*/}
            <div className="grid h-auto gap-x-14 gap-y-10 px-10 py-4 md:grid-cols-2 md:px-8 ">
              <div className="px-10 md:px-0">
                <div className="mb-3 text-sm font-semibold text-slate-700">
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
                <div className="mb-3 text-sm font-semibold text-slate-700">
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
                <div className="mb-3 text-sm font-semibold text-slate-700">
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
            <div className="-ml-2.5 flex items-center justify-between px-8">
              <div className="inline-flex items-center">
                <label
                  className="relative flex cursor-pointer items-center rounded-full px-3 py-[10px]"
                  htmlFor="checkbox"
                  data-ripple-dark="true"
                >
                  <input
                    type="checkbox"
                    className="before:content[''] border-blue-gray-200 before:bg-blue-gray-500 peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 lg:hover:before:opacity-10"
                    id="checkbox"
                    checked={rememberFilter}
                    onChange={handleCheckboxChange}
                  />
                  <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </label>
                <label
                  className="cursor-pointer select-none text-slate-700"
                  htmlFor="checkbox"
                >
                  Remember my filter
                </label>
              </div>
              <div className="flex ">
                <button
                  type="button"
                  className="text-heading flex flex-row items-center gap-x-2 text-center text-sm  underline  focus:outline-none lg:hover:no-underline"
                >
                  How filter works?{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-info"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                </button>
              </div>
            </div>
            {/*footer*/}
            <div className="flex flex-row items-center justify-center space-x-4 rounded-b border-t border-solid border-slate-200 px-6  py-4 md:justify-end md:py-4">
              <motion.button
                whileTap={{ scale: 0.9 }}
                type="button"
                onClick={handleCancel}
                className="text-blneutral-700 cursor-pointer items-center justify-center rounded-md border-[1.5px] border-slate-700 px-8 py-2 text-center font-medium transition duration-200 ease-in-out md:px-8 md:py-2 lg:hover:border-blue-600 lg:hover:bg-blue-50 lg:hover:text-blue-600"
              >
                Cancel
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="cursor-pointer items-center justify-center rounded-md border-[1.5px] border-slate-700 bg-slate-700 px-8 py-2 text-center font-medium text-white transition duration-200 ease-in-out lg:hover:border-blue-500 lg:hover:bg-blue-500"
                type="button"
                onClick={handleSubmit}
              >
                Apply
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default FilterModal;
