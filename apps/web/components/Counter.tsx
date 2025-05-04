import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

export function Counter({ value }: { value: number }) {
  const controls = useAnimation();
  const [count, setCount] = useState(0);

  const handleEnter = () => {
    controls.start({
      x: value,
      transition: { duration: 1.5, ease: "easeOut" },
    });
  };

  const handleLeave = () => {
    controls.set({ x: 0 }); // Reset to 0 so re-animates
    setCount(0);
  };

  const handleUpdate = (latest: { x: number }) => {
    if (typeof latest.x === "number") {
      setCount(Math.round(latest.x));
    }
  };

  return (
    <motion.span
      initial={{ x: 0 }}
      animate={controls}
      onViewportEnter={handleEnter}
      onViewportLeave={handleLeave}
      onUpdate={handleUpdate}
      viewport={{ amount: 0.5 }} // Trigger when 50% visible
    >
      {count}
    </motion.span>
  );
}
