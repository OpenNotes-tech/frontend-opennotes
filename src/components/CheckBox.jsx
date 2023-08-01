const CheckBox = ({ name, label, value, handleCheckbox }) => {
  return (
    <div className="flex flex-row items-center space-x-3">
      <label
        className="relative flex cursor-pointer items-center rounded-full"
        htmlFor={name}
        data-ripple-dark="true"
      >
        <input
          id={name}
          type="checkbox"
          className="peer relative h-[18px] w-[18px] cursor-pointer appearance-none rounded-md border border-gray-600 transition-all before:content[''] before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
          checked={value}
          onChange={handleCheckbox}
        />
        <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
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
            ></path>
          </svg>
        </div>
      </label>
      <label
        className="cursor-pointer select-none text-base text-slate-600 font-normal ml-2"
        htmlFor={name}
      >
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
