import Select from "react-select";
import makeAnimated from "react-select/animated";
const animatedComponents = makeAnimated();

// const colorStyles = {
//   option: (styles, { data }) => {
//     return {
//       ...styles,
//       backgroundColor: data.color,
//     };
//   },
// };
const Selector = ({
  value,
  onChange,
  options,
  name,
  isMulti = false,
  className = "basic-multi-select",
  defaultValue,
}) => {
  return (
    <Select
      isMulti={isMulti}
      // styles={colorStyles}
      name={name}
      value={value}
      onChange={onChange}
      options={options}
      className={`${className} w-full`}
      classNamePrefix="select"
      defaultValue={defaultValue}
      // placeholder={'default: All'}
      components={animatedComponents}
    />
  );
};

export default Selector;
