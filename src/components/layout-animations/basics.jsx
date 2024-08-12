const basics = () => {
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
  return <div>basics</div>;
};

export default basics;
