import * as React from "react";
import { motion } from "framer-motion";
const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(0, 0, 0, 1)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "url(#a)",
  },
  visible1: {
    opacity: 1,
    pathLength: 1,
    fill: "url(#b)",
  },
  visible2: {
    opacity: 1,
    pathLength: 1,
    fill: "url(#c)",
  },
};

export const Example = () => (
  <>
    <div className="mt-1 h-full w-full">
      <motion.svg
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1.2 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 110,
        }}
        width="32"
        height="32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient x1="95.059%" y1="50%" x2="5.575%" y2="50%" id="a">
            <stop stopColor="#55FBDC" offset="0%" />
            <stop stopColor="#08F" offset="100%" />
          </linearGradient>
          <linearGradient x1="95.059%" y1="50%" x2="5.575%" y2="50%" id="b">
            <stop stopColor="#2ED4FF" offset="0%" />
            <stop stopColor="#08F" offset="98.277%" />
          </linearGradient>
          <linearGradient x1="48.165%" y1="66.639%" x2="0%" y2="0%" id="c">
            <stop stopColor="#4F40DC" stopOpacity=".24" offset="0%" />
            <stop stopColor="#3525D3" offset="100%" />
          </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
          <motion.path
            d="M6 2h17a7 7 0 0 1 0 14H2V6a4 4 0 0 1 4-4z"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
          />
          <motion.path
            variants={icon}
            initial="hidden"
            animate="visible1"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            d="M2 16h21a7 7 0 0 1 0 14H6a4 4 0 0 1-4-4V16z"
          />
          <motion.path
            variants={icon}
            initial="hidden"
            animate="visible2"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 1, ease: [1, 0, 0.8, 1] },
            }}
            d="M6 2h12v28H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4z"
            opacity=".64"
          />
        </g>
      </motion.svg>
    </div>
  </>
);
