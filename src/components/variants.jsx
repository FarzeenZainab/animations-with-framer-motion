import { motion } from "framer-motion";

const Variants = () => {
  const variants = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
    partiallyVisible: {
      opacity: 0.5,
    },
  };

  const item = {
    hidden: {
      x: 0,
    },
    visible: { x: 10 },
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

      <motion.ul
        className="w-[220px] h-auto p-4 bg-white rounded-lg mt-6"
        initial="hidden"
        animate="visible" // we can pass variants conditionally as per the state
        variants={variants}
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
    </div>
  );
};

export default Variants;
