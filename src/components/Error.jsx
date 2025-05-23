import { useState, useEffect } from "react";
import "../assets/css/errorbar.css";
import { useDispatch } from "react-redux";
import { clearError } from "../store/features/errorSlice";
import { motion, AnimatePresence } from "framer-motion";

function Errorbar({ type, text, id }) {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      dispatch(clearError(id));
    }, 5000);

    return () => clearTimeout(timer);
  }, [text, type]);

  const bgColor = (type) => {
    switch (type) {
      case "success":
        return "bg-green-100 text-green-900 border-green-200";
      case "error":
        return "border-red-200 bg-red-100 text-red-900";
      default:
        return "border-blue-200 bg-blue-100 text-blue-900";
    }
  };

  const handleClose = () => {
    setVisible(false);
    dispatch(clearError(id));
  };

  let dropInVariant = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      // transition: {
      //   duration: 0.1,
      //   type: "spring",
      //   damping: 25,
      //   stiffness: 500,
      // },
    },
    exit: {
      x: 100,
      opacity: 0,
    },
  };

  return (
    <>
      <AnimatePresence initial={false} onExitComplete={() => null}>
        {visible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`raletive z-[999] mr-8 mt-2 flex h-fit w-56 flex-col justify-between rounded-md border md:mr-12 md:w-96 xl:mr-16 ${bgColor(
              type,
            )}`}
          >
            <div
              variants={dropInVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ damping: 300 }}
            >
              <div className="flex justify-between p-2 md:p-4">
                <div className="flex">
                  <div className="mr-3 pt-1">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                    >
                      <path d="M8.445 12.6675A.9.9 0 0 0 7.1424 13.91l2.5726 2.7448c.3679.3856.9884.3689 1.335-.036l5.591-7.0366a.9.9 0 0 0-1.3674-1.1705l-4.6548 5.9132a.4.4 0 0 1-.607.0252l-1.567-1.6826zM1.9995 12c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm leading-6 md:text-base md:font-medium">
                      {text}
                    </h4>
                  </div>
                </div>
                <div>
                  <button
                    onClick={handleClose}
                    type="button"
                    className={`rounded-md focus:outline-none focus:ring-2  ${
                      type === "success"
                        ? "focus:ring-green-500"
                        : type === "error"
                        ? "focus:ring-red-500"
                        : "focus:ring-blue-500"
                    }`}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                    >
                      <path d="M17.6555 6.3331a.9.9 0 0 1 .001 1.2728l-4.1032 4.1085a.4.4 0 0 0 0 .5653l4.1031 4.1088a.9002.9002 0 0 1 .0797 1.1807l-.0806.092a.9.9 0 0 1-1.2728-.0009l-4.1006-4.1068a.4.4 0 0 0-.5662 0l-4.099 4.1068a.9.9 0 1 1-1.2738-1.2718l4.1027-4.1089a.4.4 0 0 0 0-.5652L6.343 7.6059a.9002.9002 0 0 1-.0796-1.1807l.0806-.092a.9.9 0 0 1 1.2728.0009l4.099 4.1055a.4.4 0 0 0 .5662 0l4.1006-4.1055a.9.9 0 0 1 1.2728-.001z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div
                className={`absolute bottom-0 h-2 w-full rounded-b-md ${
                  type === "success"
                    ? "shim-green"
                    : type === "error"
                    ? "shim-red"
                    : "shim-blue"
                }`}
              ></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Errorbar;
