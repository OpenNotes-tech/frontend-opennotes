const ProfileChangeSettings = () => {
  return (
    <div className="mb-28 rounded-lg border-[0.6px] border-gray-200 bg-white shadow-md sm:-mr-6 lg:-mr-0">
      <div className="flex flex-row items-center justify-between border-b border-gray-200 py-8 pl-6 pr-4 lg:px-10">
        <h1 className="text-xl font-medium">Your Account Settings</h1>
      </div>
      <div className="flex h-full  flex-col space-y-6 border-b border-gray-200 px-6 py-8 lg:flex-row lg:space-y-0 xl:space-x-8 xl:px-10">
        <div className="flex flex-col space-y-4 xl:w-2/6">
          <h1 className="text-lg font-semibold">Identity</h1>
          <p className="xl:w-5/6">
            At JoBest, we’re committed to helping companies hire in a more
            inclusive way. Part of that includes asking candidates to share
            demographic information so we can help recruiters understand and
            build their pipeline.
          </p>
        </div>
        <div className="flex flex-col space-y-8">
          {/* <Selectbox /> */}
          {/* <Selectbox /> */}
        </div>
      </div>
      <div className="flex h-full  flex-col space-y-6 border-b border-gray-200 px-6 py-8 lg:flex-row lg:space-x-8 lg:space-y-0 lg:px-10">
        <div className="flex flex-col space-y-4 lg:w-2/6">
          <h1 className="text-lg font-semibold">Race/Ethnicity</h1>
          <p className="lg:w-5/6">
            Part of that includes asking candidates to share demographic
            information so we can help recruiters understand and build their
            pipeline.
          </p>
        </div>
        {/* <div className="flex flex-col space-y-8">
          <CheckBox name={"Black / African-American"} />
          <CheckBox
            name={
              "East Asian (including Chinese, Japanese, Korean, and Mongolian)"
            }
          />
          <CheckBox name={"Hispanic or Latino/a/x"} />
          <CheckBox name={"Middle Eastern"} />
          <CheckBox name={"Native American or Alaskan Native"} />
          <CheckBox name={"Pacific Islander"} />
          <CheckBox name={"White"} />
          <CheckBox name={"Prefer not to say"} />
          <div className="flex lg:flex-row flex-col space-y-10 lg:space-y-0 justify-between lg:pr-10 xl:items-start items-end"></div>
        </div> */}
      </div>
      <div className="flex h-full flex-row justify-between border-b border-gray-200 px-6 py-8 xl:px-10">
        <p>Delete Your Account</p>
        <button className="font-semibold text-red-500">Delete</button>
      </div>
    </div>
  );
};

export default ProfileChangeSettings;
