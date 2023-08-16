import { useEffect, useRef, useState } from "react";
import {
  setCategoryOption,
  setTagsOption,
  setPricingOption,
  setSearchResult,
  setPagination,
} from "../../store/features/searchSlice";
import { FrontendOptions } from "../../constants/FilterData";
import { setLoading, setError } from "../../store/features/errorSlice";
import { useDispatch, useSelector } from "react-redux";
import SearchAPI from "../../utils/SearchAPI";
import CheckBox from "../../components/CheckBox";
import Selector from "../../components/Selector";

const SearchHero = () => {
  const { query, sort, category, tags, pricing, pageNumber } = useSelector(
    (state) => state.Search
  );
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isTagsOpen, setIsTagsOpen] = useState(false);
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [getSkillsSelector, setSkillsSelector] = useState([]);
  const dispatch = useDispatch();
  const [checkedType, setCheckedType] = useState({
    Free: pricing?.includes("Free"),
    Paid: pricing?.includes("Paid"),
    Freemium: pricing?.includes("Freemium"),
  });

  const [checkedCategory, setCheckedCategory] = useState({
    Frontend: category?.includes("Frontend"),
    Backend: category?.includes("Backend"),
    Mobile: category?.includes("Mobile"),
  });

  const CategoryRef = useRef();
  const TypeRef = useRef();
  const TagsRef = useRef();

  const handleSkillsSelector = (selectedSkills) => {
    const selectedValues = selectedSkills.map((option) => option.value);
    setSkillsSelector(selectedSkills);
    const commaSeparatedString = selectedValues.join(",");
    dispatch(setTagsOption(commaSeparatedString));
  };

  const handleTypeCheckbox = (e) => {
    const { id, checked: isChecked } = e.target;
    setCheckedType((prevState) => ({ ...prevState, [id]: isChecked }));
  };
  const handleCategoryCheckbox = (e) => {
    const { id, checked: isChecked } = e.target;
    setCheckedCategory((prevState) => ({ ...prevState, [id]: isChecked }));
  };
  const toggleCategoryDropdown = () => {
    setIsCategoryOpen((prevState) => !prevState);
  };
  const toggleTypeDropdown = () => {
    setIsTypeOpen((prevState) => !prevState);
  };
  const toggleTagsDropdown = () => {
    setIsTagsOpen((prevState) => !prevState);
  };

  const handleClickOutside = (toggleState, ref, setToggleState) => {
    const handleClick = (e) => {
      if (toggleState && ref.current && !ref.current.contains(e.target)) {
        setToggleState(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  };

  useEffect(
    () => handleClickOutside(isCategoryOpen, CategoryRef, setIsCategoryOpen),
    [isCategoryOpen]
  );
  useEffect(
    () => handleClickOutside(isTagsOpen, TagsRef, setIsTagsOpen),
    [isTagsOpen]
  );
  useEffect(
    () => handleClickOutside(isTypeOpen, TypeRef, setIsTypeOpen),
    [isTypeOpen]
  );

  useEffect(() => {
    const selectedCategory = Object.entries(checkedCategory)
      .filter(([_, value]) => value)
      .map(([key]) => key);

    const selectedTypes = Object.entries(checkedType)
      .filter(([_, value]) => value)
      .map(([key]) => key);

    // Save selected jobTypes to local storage
    dispatch(setCategoryOption(selectedCategory.join(",")));
    dispatch(setPricingOption(selectedTypes.join(",")));
  }, [checkedCategory, checkedType, dispatch]);

  const handleTagsSubmit = (e) => {
    e.preventDefault();
    dispatch(setTagsOption(isTagsOpen));

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
      });
  };

  const handleCategorySubmit = (e) => {
    e.preventDefault();
    dispatch(setCategoryOption(e.target.value));

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
      });
  };

  return (
    <>
      <div class="xl:px-16 -mx-4 xl:-mx-0 px-4 md:px-10 items-center text-center h-[200px]">
        <div className="flex flex-row items-center space-x-6 border-b py-4 pb-4">
          <div ref={CategoryRef}>
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="raletive inline-flex items-center  font-semibold text-base transition duration-300 ease-in-out  px-4 py-[8px] text-center rounded-full focus:outline-none text-slate-600 hover:bg-slate-200"
              type="button"
              onClick={toggleCategoryDropdown}
            >
              Category{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                className={`lucide lucide-chevron-down ml-2.5 ${
                  isCategoryOpen ? "transform rotate-180" : ""
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {isCategoryOpen && (
              <div className="mt-4 absolute origin-bottom-right z-10 bg-white divide-y divide-gray-100 rounded-lg w-44 shadow-2xl">
                <div className="divide-y divide-gray-300 rounded bg-white ring-1 ring-black ring-opacity-5">
                  <div className="space-y-1 p-2">
                    <ul className="space-y-2">
                      <li>
                        <label className="flex items-center">
                          <CheckBox
                            value={checkedCategory?.Frontend}
                            handleCheckbox={handleCategoryCheckbox}
                            label="Frontend"
                            name="Frontend"
                          />
                        </label>
                      </li>
                      <li>
                        <label className="flex items-center">
                          <CheckBox
                            value={checkedCategory?.Backend}
                            handleCheckbox={handleCategoryCheckbox}
                            label="Backend"
                            name="Backend"
                          />
                        </label>
                      </li>
                      <li>
                        <label className="flex items-center">
                          <CheckBox
                            value={checkedCategory?.Mobile}
                            handleCheckbox={handleCategoryCheckbox}
                            label="Mobile"
                            name="Mobile"
                          />
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div ref={TagsRef}>
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="raletive inline-flex items-center  font-semibold text-base transition duration-300 ease-in-out  px-4 py-[8px] text-center rounded-full focus:outline-none text-slate-600 hover:bg-slate-200"
              type="button"
              onClick={toggleTagsDropdown}
            >
              Tags{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                className={`lucide lucide-chevron-down ml-2.5 ${
                  isTagsOpen ? "transform rotate-180" : ""
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {isTagsOpen && (
              <div
                id="dropdown"
                className="mt-4 absolute origin-bottom-right z-10 bg-white divide-y divide-gray-100 rounded-lg w-96 h-80 shadow-2xl"
              >
                <div className="p-8">
                  <Selector
                    name="tags"
                    className="basic-multi-select"
                    options={FrontendOptions}
                    isMulti={true}
                    value={getSkillsSelector}
                    onChange={handleSkillsSelector}
                  />
                </div>
              </div>
            )}
          </div>
          <div ref={TypeRef}>
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="raletive inline-flex items-center  font-semibold text-base transition duration-300 ease-in-out  px-4 py-[8px] text-center rounded-full focus:outline-none text-slate-600 hover:bg-slate-200"
              type="button"
              onClick={toggleTypeDropdown}
            >
              Type{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                className={`lucide lucide-chevron-down ml-2.5 ${
                  isTypeOpen ? "transform rotate-180" : ""
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {isTypeOpen && (
              <div
                id="dropdown"
                className="mt-4 absolute origin-bottom-right z-10 bg-white divide-y divide-gray-100 rounded-lg w-44 shadow-2xl"
              >
                <div className="divide-y divide-gray-300 rounded bg-white ring-1 ring-black ring-opacity-5">
                  <div className="space-y-1 p-2">
                    <ul className="space-y-2">
                      <li>
                        <label className="flex items-center">
                          <CheckBox
                            value={checkedType?.Free}
                            handleCheckbox={handleTypeCheckbox}
                            label="Free"
                            name="Free"
                          />
                        </label>
                      </li>
                      <li>
                        <label className="flex items-center">
                          <CheckBox
                            value={checkedType?.Paid}
                            handleCheckbox={handleTypeCheckbox}
                            label="Paid"
                            name="Paid"
                          />
                        </label>
                      </li>
                      <li>
                        <label className="flex items-center">
                          <CheckBox
                            value={checkedType?.Freemium}
                            handleCheckbox={handleTypeCheckbox}
                            label="Freemium"
                            name="Freemium"
                          />
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchHero;
