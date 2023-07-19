import React from "react";
import { motion } from "framer-motion";

export const Loading = () => {
  const containerVariants = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
      transition: {
        yoyo: Infinity,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const circleVariants = {
    initial: {
      y: 0,
      x: 0,
    },
    animate: {
      y: [0, -20, 0, 20, 0], // Bouncing back going up, down, left, and right
      x: [0, 20, 0, -20, 0], // Bouncing back going right, left, right, and left
      transition: {
        yoyo: Infinity,
        duration: 0.5, // Adjust the duration for faster speed
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <motion.div
        className="loader-container w-12 h-12 bg-gray-300 rounded-full flex justify-center items-center"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="loader-circle w-6 h-6 bg-blue-500 rounded-full"
          variants={circleVariants}
          initial="initial"
          animate="animate"
        />
      </motion.div>
    </div>
  );
};
