import { motion, useScroll, useSpring } from "framer-motion";

export default function Progress() {
  const { scrollYProgress } = useScroll();
  let scaleX = useSpring(scrollYProgress, {
    bounce: 0,
  });
  return <motion.div className="bg-rose-500 h-3" style={{ scaleX }} />;
}
