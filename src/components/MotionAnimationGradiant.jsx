import { motion } from "framer-motion";
import React from "react";

const MotionAnimationGradiant = ({ children }) => {
  return (
    <>
      <motion.div
        className="relative w-[90%] md:w-[80%] lg:w-[70%] xl:w-[50%] rounded-lg overflow-hidden p-[4px]"
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        style={{
          background:
            "linear-gradient(90deg, #00f5a0, #00d9f5, #8a2be2, #ff0080)",
          backgroundSize: "300% 300%",
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default MotionAnimationGradiant;
