import { motion } from "framer-motion";

export const FloatingCircle = ({ className, x, y }) => {
  return (
    <motion.div
      className={className}
      animate={{ x, y }}
      transition={{
        duration: 12,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    />
  );
};
