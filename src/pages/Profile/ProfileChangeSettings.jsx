const ProfileChangeSettings = () => {
  return (
    <div className="mb-28 rounded-lg border-[0.6px] border-gray-200 bg-white shadow-md sm:-mr-6 lg:-mr-0">
      <div className="flex flex-row items-center justify-between border-b border-gray-200 py-8 pl-6 pr-4 lg:px-10">
        <h1 className="text-xl font-medium">Your Account Settings</h1>
      </div>
      <div className="flex h-full flex-row justify-between border-b border-gray-200 px-6 py-8 xl:px-10">
        <p>Delete Your Account</p>
        <button className="font-semibold text-red-500">Delete</button>
      </div>
      <div className="flex h-full flex-row justify-between border-b border-gray-200 px-6 py-8 xl:px-10">
        <p>Delete Your Account</p>
        <button className="font-semibold text-red-500">Delete</button>
      </div>
    </div>
  );
};

export default ProfileChangeSettings;
