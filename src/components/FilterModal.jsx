import {
  setCategoryOption,
  setTags,
  setSearchResult,
} from "../store/features/searchSlice";
import { SkillsOptions, LocationOptions } from "../constants/FilterData";
import { setLoading, setError } from "../store/features/errorSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SearchAPI from "../utils/SearchAPI";
import Selector from "./Selector";

export const FilterModal = ({ setToggleFilter }) => {
  const { query, sort, category, tags } = useSelector((state) => state.Search);
  const [debounceTimeout] = useState(null);
  const [getLocationSelector, setLocationSelector] = useState([]);
  const [getSkillsSelector, setSkillsSelector] = useState([]);

  const dispatch = useDispatch();

  const handleLocationSelector = (selectedLocation) => {
    const selectedValues = selectedLocation.map((option) => option.value);
    setLocationSelector(selectedLocation);
    const commaSeparatedString = selectedValues.join(",");
    localStorage.setItem("Locations", commaSeparatedString);

    dispatch(setCategoryOption(commaSeparatedString)); // this is added to redux
  };
  const handleSkillsSelector = (selectedSkills) => {
    const selectedValues = selectedSkills.map((option) => option.value);
    setSkillsSelector(selectedSkills);
    const commaSeparatedString = selectedValues.join(",");
    localStorage.setItem("Skills", commaSeparatedString);

    dispatch(setTags(commaSeparatedString)); // this adds data to redux
  };

  useEffect(() => {
    const savedLocations = localStorage.getItem("Locations");
    if (savedLocations) {
      const selectedValues = savedLocations.split(",");
      const selectedOptions = LocationOptions.filter((option) =>
        selectedValues.includes(option.value)
      );
      setLocationSelector(selectedOptions);
    }
  }, []);

  useEffect(() => {
    return () => {
      // Clear the timeout when the component unmounts
      clearTimeout(debounceTimeout);
    };
  }, [debounceTimeout]);

  const handleSubmit = (e) => {
    e.preventDefault();

    SearchAPI.linkSearch(query, sort, category, tags)
      .then((res) => {
        dispatch(setSearchResult(res.data.data.body));
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
      <div className="fixed inset-0 h-screen z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
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
                  Location
                </div>
                <Selector
                  name="location"
                  className="basic-multi-select"
                  options={LocationOptions}
                  isMulti={true}
                  value={getLocationSelector}
                  onChange={handleLocationSelector}
                />
              </div>
              <div className="px-10 md:px-0">
                <div className="text-sm text-slate-800 font-semibold mb-3">
                  Skills
                </div>
                <Selector
                  name="skill"
                  className="basic-multi-select"
                  options={SkillsOptions}
                  isMulti={true}
                  value={getSkillsSelector}
                  onChange={handleSkillsSelector}
                />
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center flex-row space-x-4 md:justify-end rounded-b border-t border-solid border-slate-200 py-4  justify-center md:py-4 px-6">
              <button
                type="button"
                onClick={() => setToggleFilter(false)}
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
