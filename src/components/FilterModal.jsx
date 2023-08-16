import {
  setCategoryOption,
  setTagsOption,
  setPricingOption,
  setSearchResult,
  setPagination,
} from "../store/features/searchSlice";
import {
  FrontendOptions,
  CategoryOptions,
  PricingOptions,
  MobileOptions,
  BackendOptions,
  AIOptions,
  SecurityOptions,
  BlogOptions,
  AlgorithmsOptions,
} from "../constants/FilterData";
import { setLoading, setError } from "../store/features/errorSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import SearchAPI from "../utils/SearchAPI";
import Selector from "./Selector";
import Loader from "./Loader";

export const FilterModal = ({ setToggleFilter, getToggleFilter }) => {
  const { query, sort, category, tags, pricing, pageNumber } = useSelector(
    (state) => state.Search
  );
  const loading = useSelector((state) => state.Error.loading);
  const [getLocationSelector, setLocationSelector] = useState([]);
  const [getSkillsSelector, setSkillsSelector] = useState([]);
  const [getPricingSelector, setPricingSelector] = useState([]);

  const dispatch = useDispatch();
  const modalRef = useRef();

  const handleLocationSelector = (selectedLocation) => {
    const selectedValues = selectedLocation.map((option) => option.value);
    setLocationSelector(selectedLocation);
    const commaSeparatedString = selectedValues.join(",");

    dispatch(setCategoryOption(commaSeparatedString)); // this is added to redux
  };
  const handleSkillsSelector = (selectedSkills) => {
    const selectedValues = selectedSkills.map((option) => option.value);
    setSkillsSelector(selectedSkills);
    const commaSeparatedString = selectedValues.join(",");
    dispatch(setTagsOption(commaSeparatedString));
  };
  const handlePricingSelector = (selectedPrice) => {
    const selectedValues = selectedPrice.map((option) => option.value);
    setPricingSelector(selectedPrice);
    const commaSeparatedString = selectedValues.join(",");
    dispatch(setPricingOption(commaSeparatedString));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    SearchAPI.linkSearch(query, sort, category, tags, pricing, pageNumber, 12)
      .then((res) => {
        dispatch(setSearchResult(res.data.data.body));
        dispatch(setPagination({ totalPages: res.data.data.totalPages }));
        dispatch(setLoading(false));
      })
      .catch((error) => {
        dispatch(setError(error?.response?.data?.message));
        dispatch(setLoading(false));
      })
      .finally((e) => {
        dispatch(setLoading(false));
        setToggleFilter(false);
      });
  };
  const handleCancel = () => {
    // setSkillsSelector([]); // Clear selected skills
    // setLocationSelector([]); // Clear selected locations
    setToggleFilter(false); // Close the modal
  };

  useEffect(() => {
    if (category) {
      const selectedValues = category.split(",");
      const selectedOptions = CategoryOptions.filter((option) =>
        selectedValues.includes(option.value)
      );
      setLocationSelector(selectedOptions);
    }
  }, [category]);

  useEffect(() => {
    if (pricing) {
      const selectedValues = pricing.split(",");
      const selectedOptions = PricingOptions.filter((option) =>
        selectedValues.includes(option.value)
      );
      setPricingSelector(selectedOptions);
    }
  }, [pricing]);

  // Close the modal when the user clicks outside of it
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target === modalRef.current) {
        setToggleFilter(false);
      }
    };
    if (getToggleFilter) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [getToggleFilter, setToggleFilter]);

  // Combine selected category options into one array
  const categoryOptions = {
    Mobile: MobileOptions,
    Frontend: FrontendOptions,
    Backend: BackendOptions,
    "Artificial Intelligence": AIOptions,
    "Cyber Security": SecurityOptions,
    Blog: BlogOptions,
    Algorithms: AlgorithmsOptions,
  };

  // Flatten category options and prioritize the options of the first selected category
  const orderedSelectedOptions =
    category.length > 0
      ? category
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
                  !categoryOptions[category?.split(",")[0]]?.includes(option)
              )
            )
          )
      : Object.values(categoryOptions)?.flat();

  useEffect(() => {
    if (tags) {
      const selectedValues = tags.split(",");
      const selectedOptions = orderedSelectedOptions.filter((option) =>
        selectedValues.includes(option.value)
      );
      setSkillsSelector(selectedOptions);
    }
  }, [tags]);

  return (
    <>
      <div
        ref={modalRef}
        className="fixed inset-0 h-screen z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none"
      >
        {loading && <Loader />}
        <div className="relative mx-auto max-w-2xl w-full">
          {/*content*/}
          <div className="relative flex w-full flex-col  rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
            {/*header*/}
            <div className="border-b border-solid border-slate-200 pt-[500px] md:pt-4 p-4">
              <h1 className="text-2xl font-serif whitespace-nowrap text-center font-medium">
                Filters
              </h1>
            </div>
            {/*body*/}
            <div className="grid md:grid-cols-2 h-96 gap-y-10 gap-x-14 px-10 md:px-8 py-4 ">
              <div className="px-10 md:px-0">
                <div className="text-sm text-slate-800 font-semibold mb-3">
                  Category
                </div>
                <Selector
                  name="category"
                  className="basic-multi-select"
                  options={CategoryOptions}
                  isMulti={true}
                  value={getLocationSelector}
                  onChange={handleLocationSelector}
                />
              </div>
              <div className="px-10 md:px-0">
                <div className="text-sm text-slate-800 font-semibold mb-3">
                  Tags
                </div>
                <Selector
                  name="tags"
                  className="basic-multi-select"
                  options={orderedSelectedOptions}
                  isMulti={true}
                  value={getSkillsSelector}
                  onChange={handleSkillsSelector}
                />
              </div>
              <div className="px-10 md:px-0">
                <div className="text-sm text-slate-800 font-semibold mb-3">
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
            <div className="flex items-center flex-row space-x-4 md:justify-end rounded-b border-t border-solid border-slate-200 py-4  justify-center md:py-4 px-6">
              <button
                type="button"
                onClick={handleCancel}
                className="transition duration-200 ease-in-out cursor-pointer items-center justify-center rounded-md border-[1.5px] border-black px-8 md:px-8 py-2 md:py-2 text-center font-medium text-black hover:border-blue-700 hover:bg-blue-100 hover:text-blue-700"
              >
                Cancel
              </button>
              <button
                className="transition duration-200 ease-in-out cursor-pointer items-center justify-center rounded-md border-[1.5px] border-black bg-black px-8 py-2 font-medium text-center text-white hover:border-blue-700 hover:bg-blue-700"
                type="button"
                onClick={handleSubmit}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-30"></div>
    </>
  );
};
