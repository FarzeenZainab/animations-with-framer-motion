import { AnimatePresence, motion } from "framer-motion";

import "./App.css";
import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="container">
      {/* simple animations */}

      {/* Basics */}
      <motion.div
        className="size-20 bg-white rounded-full"
        animate={{
          // properties of an element to animate

          // animate the x position of the div
          // x: 100,

          // adding key steps
          x: [0, 100, 50, 120, 180, 200, 0],
        }}
        transition={{
          // defines how smooth or sudden the animation should be
          // they make things on a web page to change smoothly from one look to another

          // will add a delay of 1 sec after page loads then plays the animation
          // this defines how long to wait before the animation starts
          delay: 1,

          // timing function: This defines how transition progress over time
          // for example: starts slow, speeds up and then slow down again
          ease: "backInOut",

          // defines how long the animation takes to complete
          duration: 3,

          // run the animation infinite times
          repeat: Infinity,
          repeatType: "loop",
        }}
      ></motion.div>

      {/* Enter animations */}
      {/* 
            when a motion component is created, it will automatically animate to the values
            in `animate` prop if they are different from those defined in style or initial

            You can set disable enter animation by setting the `initial` prop to false
      */}
      <motion.div
        initial={{
          width: "50px",
          height: "50px",
          backgroundColor: "white",
          x: "-100px",
          y: "100px",
        }}
        animate={{
          x: "100px",
          borderRadius: ["20px", "40px", "20px", "10px", "0px"],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "loop",
        }}
      ></motion.div>

      {/* Exit animations */}
      {/*
          In react when a component is removed from a tree, it's removed instantly.
          Framer motion provides the AnimatePresent component to keep components in the DOM
          while they perform exit animation 
      */}
      <div className="mt-60">
        <AnimatePresence>
          {isVisible && (
            <motion.div
              className=" bg-white rounded-full mb-10"
              initial={{
                width: "0px",
                height: "0px",
                opacity: 0,
              }}
              animate={{
                width: "50px",
                height: "50px",
                opacity: 1,
              }}
              exit={{
                width: 0,
                height: 0,
                backgroundColor: "red",
                opacity: 0,
              }}
              transition={{
                duration: 1,
                ease: "circInOut",
              }}
            ></motion.div>
          )}
        </AnimatePresence>
      </div>

      <button
        onClick={() => {
          setIsVisible((prev) => {
            return !prev;
          });
        }}
      >
        {isVisible ? "Trigger exit animation" : "Show again"}
      </button>

      {/* Wildcard keyframe */}
      <motion.div
        className="size-10 bg-red-100 rounded-full"
        whileHover={{
          backgroundColor: ["null", "#ff0000", "#00ff00"],
          opacity: [null, 0.8, 1],
        }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
}

export default App;
