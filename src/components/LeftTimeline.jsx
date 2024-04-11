import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function LeftTimeline({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { y: "200px", opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration: 0.9,
        ease: "easeInOut",
        type: "spring",
      }}
    >
      {children}
    </motion.div>
  );
}
