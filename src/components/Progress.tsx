import { motion, useScroll, useSpring } from "framer-motion";

export default function Progress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="bg-rose-500 h-full"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
