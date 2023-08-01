const Switch = ({ label, value, onChange }) => {
  return (
    <label className="relative inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        checked={value}
        onChange={onChange}
        className="peer sr-only"
      />
      <div className="peer h-6 w-11 rounded-full bg-gray-300 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-500 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none"></div>
      {/* dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800 */}
      <span className="ml-3 text-base font-normal ">{label}</span>
    </label>
  );
};

export default Switch;
