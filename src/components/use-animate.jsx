import {
  motion,
  useAnimate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useCallback, useEffect } from "react";

const UseAnimate = () => {
  // allows us to animate elements will more control how the animation
  // should progress, stop or sequence

  // returns two arguments, a scope red and an animate function
  const [scope, animate] = useAnimate();

  // ==========================================================
  // Animating Content Example:
  // ==========================================================
  const count = useMotionValue(0);
  const rounded = useTransform(count, (value) => Math.round(value));

  const handleAnimate = useCallback(async () => {
    // use can pass any css selector here
    await animate(
      "li",
      {
        opacity: 0,
      },
      {
        delay: 1,
      }
    );

    // This selector is 'li', but we're not selecting all li
    // elements on the page, only those that are a child of the scoped element
    await animate(
      "li",
      {
        opacity: 1,
      },
      {
        delay: 1,
      }
    );

    const controls = animate(count, 100, { duration: 50 });

    return () => controls.stop();
  }, [animate, count]);

  useEffect(() => {
    handleAnimate();
  }, [handleAnimate]);

  return (
    <div>
      {/* 
      
        Manual controls:

        Declarative animations are ideal for most UI interactions.
        But sometimes we need to orchestrate more complex sequences.

        The useAnimate hook can be used to:

        - Animate any HTML/SVG element
        - Create complex sequences of animations
        - Control animation with time, speed, play(), pause() and other playback controls

        When the component calling useAnimate is removed, all animations started 
        with its returned animate function will be cleaned up automatically

        useAnimate() vs <motion.div/>:
        Declarative animations via motion components tend to be simple to write and
        maintain. However, imperative animations via useAnimate() are very powerful, allowing:

        - Complex animation sequencing
        - Playback controls (pause/play etc)
        - Animate MotionValues directly
        - Animating "black box" components, where you don't have direct access to
          rendered components, via DOM selectors

      */}
      <div ref={scope}>
        <ul className="text-white">
          <li className="opacity-0">Item 1</li>
          <li className="opacity-0">Item 2</li>
          <li className="opacity-0">Item 3</li>
        </ul>
        <button onClick={handleAnimate} className="mt-6">
          Trigger animation
        </button>
      </div>
      {/* 
        Animate single values
        It is possible to use useAnimate  to animate single values or a signle MotionValue

        What is a MotionValue?
        Motion value tracks the state and velocity  of animating values

        All motion components  internally uses  MotionValues to track  the state and velocity  of an animating value
      */}
      {/* 
          Animate content:
          We can render the current value of a MotionValue by passing it as a motion component's child
      */}
      {/* Example */}
      <motion.div className="text-4xl text-white mt-10 font-bold">
        {rounded}
      </motion.div>
    </div>
  );
};

export default UseAnimate;
