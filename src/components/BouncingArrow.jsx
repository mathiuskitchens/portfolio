import { motion } from "framer-motion";

const BouncingArrow = () => {
  return (
    <motion.div
      className="flex justify-center mt-20"
      style={{ fontSize: "2rem" }}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: [0, 10, 0] }}
      transition={{
        opacity: { duration: 0.5 },
        y: {
          duration: 1,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }
      }}
    >
      <motion.svg  // Or any other arrow icon/component
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </motion.svg>
    </motion.div>
  );
};

export default BouncingArrow;