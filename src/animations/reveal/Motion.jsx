import { motion } from "framer-motion";
import { fadeUp } from "./variants";

export const Motion = ({
  children,
  variant = fadeUp,
  delay = 0,
  duration = 0.6,
  className = "",
}) => {
  return (
    <motion.div
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
