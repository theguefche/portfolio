import { Icon } from "@iconify/react/dist/iconify.js";
import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export function Dock() {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="fixed bottom-5 left-1/2 transform -translate-x-1/2 flex h-16 items-end gap-4 rounded-2xl bg-blue-300 px-4 pb-3"
    >
      {[...Array(4).keys()].map((i) => (
        <AppIcon mouseX={mouseX} key={i} />
      ))}
    </motion.div>
  );
}

function AppIcon({ mouseX }: { mouseX: MotionValue }) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square flex justify-center items-center cursor-pointer w-10 rounded-full bg-blue-100"
    >
      <Icon icon={"mdi:home"} className="w-8 h-8 " />
    </motion.div>
  );
}
