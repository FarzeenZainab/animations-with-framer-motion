import { useState } from "react";
import { motion } from "framer-motion";

const MultiVariants = () => {
  const [animationState, setAnimationState] = useState("initial");

  // Define multiple variants
  const boxVariants = {
    initial: { opacity: 0.5, scale: 1 },
    hovered: { opacity: 1, scale: 1.2 },
    clicked: { opacity: 1, scale: 0.8, rotate: 90 },
    exited: { opacity: 0, scale: 0.5 },
  };

  return (
    <div>
      {/* Apply variants to the motion component */}
      <motion.div
        className="w-[100px] h-[100px] bg-white mt-10 p-3 rounded-lg"
        variants={boxVariants}
        initial="initial"
        animate={animationState}
        whileHover="hovered"
        whileTap="clicked"
        exit="exited"
      >
        Animated Box
      </motion.div>

      {/* Buttons to change animation state */}
      <div className="mt-4">
        <button onClick={() => setAnimationState("initial")} className="mr-2">
          Initial
        </button>
        <button onClick={() => setAnimationState("hovered")} className="mr-2">
          Hovered
        </button>
        <button onClick={() => setAnimationState("clicked")} className="mr-2">
          Clicked
        </button>
        <button onClick={() => setAnimationState("exited")} className="mr-2">
          Exited
        </button>
      </div>
    </div>
  );
};

export default MultiVariants;

{
  /*
  
  Multi variants in framer motion helps you to define multiple
  sets of animation states for a component. This is useful when you
  want to have different animations based on different conditions

  Each variant can define a unique state or condition and you can 
  switch between these states dynamically

  Key concepts:
  
  Variant object: an object that contains multiple states (variants) each defining
  a set of animation

  Dynamic controls: You can dynamically change the variant applied based on user
  interaction or other states 

*/
}
