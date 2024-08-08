import { motion } from "framer-motion";

const MultiVariants = () => {
  const items = [
    {
      id: 1,
      label: "Item 1",
    },
    {
      id: 2,
      label: "Item 2",
    },
    {
      id: 3,
      label: "Item 3",
    },
    {
      id: 4,
      label: "Item 4",
    },
    {
      id: 5,
      label: "Item 5",
    },
  ];

  const variants = {
    visible: (index) => ({
      opacity: 1,
      transition: {
        delay: index * 0.3,
        ease: "easeIn",
      },
    }),

    scale: (index) => ({
      scale: [0.85, 1],
      transition: {
        delay: index * 0.4,
        ease: "easeIn",
      },
    }),

    rotate: (index) => ({
      rotate: ["10deg", "0"],
      transition: {
        delay: index * 0.4,
        ease: "easeIn",
      },
    }),

    increaseHeight: (index) => ({
      height: [null, 100 * (index + 1)],
      transition: {
        delay: index * 0.5,
        ease: "easeInOut",
      },
    }),

    hidden: {
      opacity: 0,
    },
  };

  return (
    <motion.div className="flex items-end justify-start gap-x-6">
      {/* Apply variants to the motion component */}
      {items.map((item, index) => {
        return (
          <motion.div
            custom={index}
            key={item.id}
            initial="hidden"
            animate={["visible", "scale", "rotate", "increaseHeight"]}
            variants={variants}
            className="w-[100px] h-[100px] bg-white mt-10 p-3 rounded-lg text-sm"
          >
            Animated Box
          </motion.div>
        );
      })}
    </motion.div>
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
