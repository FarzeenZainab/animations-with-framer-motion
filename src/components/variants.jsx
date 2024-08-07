import { useState } from "react";
import { motion } from "framer-motion";

const Variants = () => {
  const [isVisible, setIsVisible] = useState(false);

  const variants = {
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      x: 0,
    },
    visible: { x: 12, opacity: 1 },
  };
  return (
    <div>
      {/* 
            Setting animate as an object is useful for simple,
            single component animations. But sometimes we want to create
            animations that propagates throughout the DOM. and orchestrate
            those animations in declarative way.

            We can do so with variants

            Variants are sets of pre-defined targets
        */}
      <motion.div
        className="w-[150px] h-[60px] bg-white rounded-lg"
        initial="hidden"
        animate="visible" // we can pass variants conditionally as per the state
        variants={variants}
      ></motion.div>

      {/* 
            Propagation:
            If a motion component has children, changes in variant will flow
            down through the component hierarchy until a child component defines
            its own animate property
        */}

      {/* 
          Orchestration:
          By default, all these animations will start simultaneosly. But by usings variants
          we gain extra transition props like when, delayChildren, and staggerChildren that
          can let parents orchestrate the execution of child animations
        
        */}

      <motion.div>
        <motion.ul
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={variants}
          className="w-[220px] h-auto p-4 bg-white rounded-lg mt-6"
        >
          <motion.li className="mb-2" variants={item}>
            Menu item 1
          </motion.li>
          <motion.li className="mb-2" variants={item}>
            Menu item 2
          </motion.li>
          <motion.li className="mb-2" variants={item}>
            Menu item 3
          </motion.li>
          <motion.li className="mb-2" variants={item}>
            Menu item 4
          </motion.li>
          <motion.li className="mb-2" variants={item}>
            Menu item 5
          </motion.li>
        </motion.ul>
      </motion.div>

      <button
        onClick={() =>
          setIsVisible((prev) => {
            return !prev;
          })
        }
        className="mt-8"
      >
        Toggle
      </button>
    </div>
  );
};

export default Variants;
