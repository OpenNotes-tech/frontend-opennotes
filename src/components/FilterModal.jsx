import { useEffect, useState } from "react";

import Switch from "./Switch";
import Selector from "./Selector";

import {
  SkillsOptions,
  LocationOptions,
  CurrencyOptions,
} from "../constants/FilterData";
import CheckBox from "./CheckBox";

export const FilterModal = ({ setToggleFilter }) => {
  const [getCurrency, setCurrency] = useState(CurrencyOptions[0]);
  const [debounceTimeout] = useState(null);
  const [getLocationSelector, setLocationSelector] = useState([]);
  const [getSkillsSelector, setSkillsSelector] = useState([]);
  const [getSwitchRemote, setSwitchRemote] = useState(false);
  const localStorageValue = localStorage.getItem("jobtype");
  const localStorageLevel = localStorage.getItem("Level");
  const [checked, setChecked] = useState({
    fulltime: localStorageValue?.includes("fulltime"),
    contract: localStorageValue?.includes("contract"),
    internship: localStorageValue?.includes("internship"),
    parttime: localStorageValue?.includes("parttime"),
    newgrad: localStorageValue?.includes("newgrad"),
  });
  const [checkedLevel, setCheckedLevel] = useState({
    Senior: localStorageLevel?.includes("Senior"),
    Middle: localStorageLevel?.includes("Middle"),
    Junior: localStorageLevel?.includes("Junior"),
  });

  const handleCheckbox = (e) => {
    const { id, checked: isChecked } = e.target;
    setChecked((prevState) => ({ ...prevState, [id]: isChecked }));
  };
  const handleLevelCheckbox = (e) => {
    const { id, checked: isChecked } = e.target;
    setCheckedLevel((prevState) => ({ ...prevState, [id]: isChecked }));
  };
  const handleCurrencySelector = (selectedCurrency) => {
    setCurrency(selectedCurrency);
  };
  const handleLocationSelector = (selectedLocation) => {
    const selectedValues = selectedLocation.map((option) => option.value);
    setLocationSelector(selectedLocation);
    const commaSeparatedString = selectedValues.join(",");
    localStorage.setItem("Locations", commaSeparatedString);
  };
  const handleSkillsSelector = (selectedSkills) => {
    const selectedValues = selectedSkills.map((option) => option.value);
    setSkillsSelector(selectedSkills);
    const commaSeparatedString = selectedValues.join(",");
    localStorage.setItem("Skills", commaSeparatedString);
  };
  const handleRemoteSwitcher = () => {
    setSwitchRemote(!getSwitchRemote);
    localStorage.setItem("Remote", JSON.stringify(!getSwitchRemote));
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
    const storedValue = localStorage.getItem("Remote");
    if (storedValue) {
      setSwitchRemote(JSON.parse(storedValue));
    }
  }, []);
  useEffect(() => {
    // Get selected jobTypes as an array
    const selectedJobTypes = Object.entries(checked)
      .filter(([_, value]) => value)
      .map(([key]) => key);
    const selectedLevel = Object.entries(checkedLevel)
      .filter(([_, value]) => value)
      .map(([key]) => key);

    // Save selected jobTypes to local storage
    if (selectedJobTypes.length > 0) {
      localStorage.setItem("jobtype", selectedJobTypes.join(","));
    } else {
      localStorage.removeItem("jobtype");
    }
    if (selectedLevel.length > 0) {
      localStorage.setItem("Level", selectedLevel.join(","));
    } else {
      localStorage.removeItem("Level");
    }
  }, [
    checked,
    checkedLevel,
    getCurrency,
    getLocationSelector,
    getSkillsSelector,
    getSwitchRemote,
  ]);

  useEffect(() => {
    return () => {
      // Clear the timeout when the component unmounts
      clearTimeout(debounceTimeout);
    };
  }, [debounceTimeout]);

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
                onClick={() => setToggleFilter(false)}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  );
};
