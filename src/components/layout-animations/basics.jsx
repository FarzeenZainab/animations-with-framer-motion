import { motion } from "framer-motion";
import { useState } from "react";
import "./styles.css";

const Basics = () => {
  /**
   * CSS layouts are difficult and expensive to animate
   *
   * Animating a style like height between 100px and 500px is conceptually straightforward
   * but suffers from poor performance because we are triggering the browser layout systems
   * every layout frame
   *
   * Sometimes it doesn't even make sense. What does it actually mean to animate justify-content
   * between flex-start and flex-end?
   *
   * Framer motion cam animate between any css layout by using performant transforms
   * instead of the layout system
   *
   * To enable framer motion's layout animations, we simply set the "layout" prop of a
   * motion component
   *
   * <motion.div layout></motion.div>
   *
   * Any layout change that happens as the result of a re-render will be animated. That could be
   * any combination of:
   *
   * - Reordering of a list
   * - A style set on the component itself, for example a change in width and position
   * - A change in the parent's layout e.g flexbox or grid
   * - or any other change in the component's layout
   */

  /**
   * Scale correction:
   * All layout animations are performed using the transform property,resulting in smooth frame rates
   *
   * Animating layout using transforms can sometimes visually distort children. To correct this
   * distortion, the first child elements of the element can be given layout property
   *
   */

  /**
   * Another feature of framer motion is that it can animate height between
   * 0 to auto and CSS can not do that
   */

  /**
   * The problems of layout animations
   *
   * 1. Performance
   * 2. Discrete rules
   */

  /**
   * Explanation: https://www.youtube.com/watch?v=5-JIu0u42Jc
   */

  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
      {/* 

        What properties are considered as layout changes:
        margins, paddings, flexbox, grid, width, height, transforms,
        borders, position, overflow, table layouts, dynamic content that
        changes size or requires reflow, such as text or images. These
        CSS properties can cause layout changes

        any layout change that happens as the result of a re-render will be animated.

        That could be any combination of:
        - Reordering of a list.
        - A style set on the component itself, for example a change in width or position.
        - A change in the parent's layout, e.g. flexbox or grid.
        - Or any other change in the component's layout.
      
      */}
      <motion.div
        layout
        className="handle"
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
        }}
      ></motion.div>
    </div>
  );
};

export default Basics;
