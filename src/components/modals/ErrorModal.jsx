import { useSelector } from "react-redux";
import Errorbar from "../Error";

const ErrorModal = () => {
  const { errors } = useSelector((state) => state.Error);

  return (
    <>
      <div className="fixed -right-4 top-16 z-[999] h-auto">
        {errors &&
          errors.map((error) => (
            <Errorbar
              type={error.type}
              text={error.error}
              key={error.id}
              id={error.id}
            />
          ))}
      </div>
    </>
  );
};

export default ErrorModal;

// import { addError } from "../store/features/errorSlice";
// const handleSubmit = (type, error) => {
//   const newNotice = { type, error, id: Date.now() };
//   dispatch(addError(newNotice));
// };
