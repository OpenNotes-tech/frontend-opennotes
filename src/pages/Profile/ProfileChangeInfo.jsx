import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addError, setLoading } from "../../store/features/errorSlice";
import { editUserProfile } from "../../store/features/editProfileSlice";
import { BackendOptions } from "../../constants/FilterData";
import Selector from "../../components/Selector";
import Request from "../../utils/API-router";

const ProfileChangeInfo = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state?.UserProfile);
  const [getSkillsSelector, setSkillsSelector] = useState([]);
  const [formData, setFormData] = useState({
    fullName: profile?.fullName,
    email: profile?.email,
    photo: profile?.photo,
    location: profile?.location,
    address: profile?.address,
    phoneNumber: profile?.phoneNumber,
    profession: profile?.profession,
    age: profile?.age,
    gender: profile?.gender,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setLoading(true));

    Request.patchProfile(profile._id, formData)
      .then((res) => {
        dispatch(editUserProfile(res.data.doc));
        dispatch(
          addError({
            type: "success",
            error: "Updated Successfully!",
            id: Date.now(),
          }),
        );
        dispatch(setLoading(false));
      })
      .catch((error) => {
        dispatch(
          addError({
            type: "error",
            error: error?.response?.data?.message,
            id: Date.now(),
          }),
        );

        dispatch(setLoading(false));
      })
      .finally((e) => {
        dispatch(setLoading(false));
      });
  };

  const handleSkillsSelector = (selectedSkills) => {
    const selectedValues = selectedSkills.map((option) => option.value);
    setSkillsSelector(selectedSkills);
    const commaSeparatedString = selectedValues.join(",");
    localStorage.setItem("UserSkills", commaSeparatedString);
  };

  return (
    <>
      <div className="mb-16 rounded-lg border-[0.6px] border-gray-200 bg-white shadow-md sm:-mr-6 lg:-mr-0">
        <div className="flex flex-row items-center justify-between border-b border-gray-200 px-6 py-8 lg:px-10">
          <h1 className="text-xl font-medium">Your Display Information</h1>
        </div>
        <div className="flex flex-col-reverse gap-y-20 border-b border-gray-200 pb-24  pt-10 xl:flex-row xl:gap-y-0 xl:space-x-6 xl:px-10">
          <div className="grid w-full grid-cols-1 gap-y-8 px-10 lg:grid-cols-2 lg:gap-x-10 xl:w-3/4 xl:px-0">
            <div>
              <div className="relative h-10 w-full min-w-[200px]">
                <input
                  className="peer h-full w-full rounded-[7px] border border-gray-800 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-800 placeholder-transparent outline outline-0 transition-all placeholder:italic placeholder-shown:border placeholder-shown:border-gray-800 placeholder-shown:border-t-gray-800 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:placeholder-gray-400 focus:outline-0 disabled:border-0 disabled:bg-gray-800"
                  placeholder="John Doe"
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-gray-800 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-gray-700 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-blue-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-900">
                  Full Name
                </label>
              </div>
            </div>
            <div>
              <div className="relative h-10 w-full min-w-[200px]">
                <input
                  className="peer h-full w-full rounded-[7px] border border-gray-800 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-800 placeholder-transparent outline outline-0 transition-all placeholder:italic placeholder-shown:border placeholder-shown:border-gray-800 placeholder-shown:border-t-gray-800 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:placeholder-gray-400 focus:outline-0 disabled:border-0 disabled:bg-gray-800"
                  placeholder="+996 111 22 3344"
                  type="number"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-gray-800 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-gray-700 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-blue-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-900">
                  Phone Number
                </label>
              </div>
            </div>
            <div>
              <div className="relative h-10 w-full min-w-[200px]">
                <input
                  className="peer h-full w-full rounded-[7px] border border-gray-800 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-800 placeholder-transparent outline outline-0 transition-all placeholder:italic placeholder-shown:border placeholder-shown:border-gray-800 placeholder-shown:border-t-gray-800 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:placeholder-gray-400 focus:outline-0 disabled:border-0 disabled:bg-gray-800"
                  placeholder="123456"
                  type="text"
                  id="profession"
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-gray-800 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-gray-700 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-blue-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-900">
                  Profession
                </label>
              </div>
            </div>
            <div>
              <div className="relative h-10 w-full min-w-[200px]">
                <input
                  className="peer h-full w-full rounded-[7px] border border-gray-800 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-800 placeholder-transparent outline outline-0 transition-all placeholder:italic placeholder-shown:border placeholder-shown:border-gray-800 placeholder-shown:border-t-gray-800 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:placeholder-gray-400 focus:outline-0 disabled:border-0 disabled:bg-gray-800"
                  placeholder="Bishkek"
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-gray-800 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-gray-700 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-blue-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-900">
                  Current Location
                </label>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="">
                <div className="relative w-full min-w-[200px]">
                  <textarea
                    className="peer h-full min-h-[100px] w-full rounded-[7px] border border-gray-800 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-800 placeholder-transparent outline outline-0 transition-all placeholder:italic placeholder-shown:border placeholder-shown:border-gray-800 placeholder-shown:border-t-gray-800 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:placeholder-gray-400 focus:outline-0 disabled:border-0 disabled:bg-gray-800"
                    placeholder="10 Anson Road, International Plaza, #10-11, 079903 Singapore, Singapore"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-gray-800 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-gray-700 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-blue-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-900">
                    Address
                  </label>
                </div>
              </div>
            </div>
            <div className="">
              <button
                type="button"
                onClick={handleSubmit}
                className=" rounded-md border-[1.5px] border-black bg-black px-4 py-2 text-center font-medium text-white transition duration-200 ease-in-out hover:border-blue-700 hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>

          <div className="mx-8 flex flex-col items-center justify-center  space-y-8 rounded-lg border-2 border-dashed border-gray-200 px-5 py-10 shadow-md sm:mx-14 lg:mx-52 xl:mx-0 xl:-mb-12 xl:w-1/4 xl:py-0">
            <img
              src={require("../../assets/images/profile-photo.jpg")}
              alt=""
              className="-mt-2 rounded-lg"
            />
            <div className="">
              <label
                to="/profile/personal-info"
                className="cursor-pointer rounded-md border-[1.5px] border-black bg-black   px-4 py-2 text-center font-medium text-white transition duration-200 ease-in-out hover:border-blue-700 hover:bg-blue-700 lg:w-1/6"
              >
                Change Photo
                <input
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-28 rounded-lg border-[0.6px] border-gray-200 bg-white shadow-md sm:-mr-6 lg:-mr-0">
        <div className="flex flex-row items-center justify-between border-b border-gray-200 py-8 pl-6 pr-4 lg:px-10">
          <h1 className="text-xl font-medium">Your Search Preferences</h1>
        </div>
        <div className="flex flex-row space-x-6 border-b border-gray-200 p-10">
          <div className="grid w-full grid-cols-1 gap-x-10 gap-y-20 lg:grid-cols-2">
            <div>
              <div className="relative h-10 w-full min-w-[200px]">
                <div className="mb-3 text-sm font-semibold text-slate-800">
                  Category
                </div>
                <Selector
                  name="skills"
                  className="basic-multi-select"
                  options={BackendOptions}
                  isMulti={true}
                  value={getSkillsSelector}
                  onChange={handleSkillsSelector}
                />
              </div>
            </div>
            <div>
              <div className="relative h-10 w-full min-w-[200px]">
                <div className="mb-3 text-sm font-semibold text-slate-800">
                  Tags
                </div>
                <Selector
                  name="skills"
                  className="basic-multi-select"
                  options={BackendOptions}
                  isMulti={true}
                  value={getSkillsSelector}
                  onChange={handleSkillsSelector}
                />
              </div>
            </div>

            <div className="">
              <button
                type="button"
                onClick={handleSubmit}
                className="cursor-pointer rounded-md border-[1.5px] border-black bg-black   px-4 py-2 text-center font-medium text-white transition duration-200 ease-in-out hover:border-blue-700 hover:bg-blue-700 lg:w-1/6"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-16 rounded-lg border-[0.6px] border-gray-200 bg-white shadow-md sm:-mr-6 lg:-mr-0">
        <div className="flex flex-row items-center justify-between border-b border-gray-200 py-8 pl-6 pr-4 lg:px-10">
          <h1 className="text-xl font-medium">Your Personal Information</h1>
        </div>
        <div className="flex flex-row space-x-6 border-b border-gray-200 p-10">
          <div className="grid w-full grid-cols-1 gap-x-10 gap-y-8 lg:grid-cols-2">
            <div>
              <div className="relative h-10 w-full min-w-[200px]">
                <input
                  className="peer h-full w-full rounded-[7px] border border-gray-800 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-800 placeholder-transparent outline outline-0 transition-all placeholder:italic placeholder-shown:border placeholder-shown:border-gray-800 placeholder-shown:border-t-gray-800 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:placeholder-gray-400 focus:outline-0 disabled:border-0 disabled:bg-gray-800"
                  placeholder="25"
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-gray-800 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-gray-700 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-blue-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-900">
                  Age
                </label>
              </div>
            </div>
            <div>
              <div className="relative h-10 w-full min-w-[200px]">
                <input
                  className="peer h-full w-full rounded-[7px] border border-gray-800 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-800 placeholder-transparent outline outline-0 transition-all placeholder:italic placeholder-shown:border placeholder-shown:border-gray-800 placeholder-shown:border-t-gray-800 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:placeholder-gray-400 focus:outline-0 disabled:border-0 disabled:bg-gray-800"
                  placeholder="Female"
                  type="text"
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-gray-800 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-gray-700 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-blue-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-900">
                  Gender
                </label>
              </div>
            </div>
            <div>
              <div className="relative h-10 w-full min-w-[200px]">
                <input
                  className="peer h-full w-full rounded-[7px] border border-gray-800 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-800 placeholder-transparent outline outline-0 transition-all placeholder:italic placeholder-shown:border placeholder-shown:border-gray-800 placeholder-shown:border-t-gray-800 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:placeholder-gray-400 focus:outline-0 disabled:border-0 disabled:bg-gray-800"
                  placeholder="https://twitter.com/username"
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-gray-800 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-gray-700 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-blue-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-900">
                  Twitter
                </label>
              </div>
            </div>
            <div>
              <div className="relative h-10 w-full min-w-[200px]">
                <input
                  className="peer h-full w-full rounded-[7px] border border-gray-800 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-800 placeholder-transparent outline outline-0 transition-all placeholder:italic placeholder-shown:border placeholder-shown:border-gray-800 placeholder-shown:border-t-gray-800 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:placeholder-gray-400 focus:outline-0 disabled:border-0 disabled:bg-gray-800"
                  placeholder="https://twitter.com/username"
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-gray-800 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-gray-700 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-blue-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-900">
                  Twitter
                </label>
              </div>
            </div>
            <div className="">
              <button
                type="button"
                onClick={handleSubmit}
                className="cursor-pointer rounded-md border-[1.5px] border-black bg-black   px-4 py-2 text-center font-medium text-white transition duration-200 ease-in-out hover:border-blue-700 hover:bg-blue-700 lg:w-1/6"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileChangeInfo;
