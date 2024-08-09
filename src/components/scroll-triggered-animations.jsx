import { useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

const ScrollTriggeredAnimations = () => {
  const [scope, animate] = useAnimate();

  /*
    Animations can be triggered when the scope scrolls into view by
    using useAnimate with useInView
  
  */
  const isInView = useInView(scope);

  useEffect(() => {
    animate(scope.current, { opacity: 1 });
  }, [isInView, animate, scope]);

  return (
    <div
      ref={scope}
      className="size-14 bg-white rounded-lg my-[150vh] opacity-0"
    ></div>
  );
};

export default ScrollTriggeredAnimations;
