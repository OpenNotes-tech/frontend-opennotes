import { useSelector } from "react-redux";
import Notice from "./First";

const Fourth = () => {
  const { errors } = useSelector((state) => state.Error);

  return (
    <>
      {errors &&
        errors.map((error) => (
          <Notice
            type={error.type}
            text={error.error}
            key={error.id}
            id={error.id}
          />
        ))}
    </>
  );
};

export default Fourth;

// import { addError } from "../store/features/errorSlice";
// const handleSubmit = (type, error) => {
//   const newNotice = { type, error, id: Date.now() };
//   dispatch(addError(newNotice));
// };