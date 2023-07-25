import React from "react";
import { motion } from "framer-motion";

export const Loading = () => {
  const containerVariants = {
    animate: {
      y: ["0%", "-50%"], // Bouncing up and down
      transition: {
        yoyo: Infinity, // Repeat the animation indefinitely
        duration: 1.5, // Adjust the duration for the speed of bouncing
        ease: "easeInOut", // Use easeInOut easing for smooth animation
      },
    },
  };

  const circleVariants = {
    animate: {
      y: [0, -20, 0, 20, 0], // Bouncing back going up, down, left, and right
      transition: {
        yoyo: Infinity, // Repeat the animation indefinitely
        duration: 0.5, // Adjust the duration for the speed of bouncing
        ease: "easeInOut", // Use easeInOut easing for smooth animation
      },
    },
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <motion.div
        className="loader-container w-12 h-12 bg-gray-300 rounded-full flex justify-center items-center"
        variants={containerVariants}
        animate="animate"
      >
        <motion.div
          className="loader-circle w-6 h-6 bg-blue-500 rounded-full"
          variants={circleVariants}
          animate="animate"
        />
      </motion.div>
    </div>
  );
};
