import { motion } from "framer-motion";

const Gestures = () => {
  return (
    <div>
      {/*
        framer motion has shortcuts for animating to a set
        of values when gesture start like hover, tap, drag, focus and inView
      */}

      <motion.button
        className="my-[100vh]"
        initial={{ opacity: 0, outline: "none" }}
        whileHover={{
          scale: 1.2,
          transition: {
            // this transition will only apply to whileHover
            duration: 0.12,
          },
        }}
        whileTap={{
          scale: 1,
        }}
        animate={{
          transition: {
            // this transition will only apply to animate
            duration: 0.5,
            delay: 1,
          },
        }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.5,
          },
        }}
        whileFocus={{
          outline: "2px dashed white",
        }}

        // transition object added here will apply its properties to animate & gestures
      >
        Submit
      </motion.button>
    </div>
  );
};

export default Gestures;
