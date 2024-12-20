import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const CardManager = ({
  children,
  cardContent,
  className,
}: {
  children: React.ReactNode;
  cardContent: React.ReactNode;
  className?: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleCard = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className={cn("relative", className)}>
      <div onClick={toggleCard} className="cursor-pointer">
        {children}
      </div>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
              },
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 10,
              transition: {
                duration: 0.2,
                ease: "easeInOut",
              },
            }}
            className="absolute z-50 p-6 bg-white rounded-lg shadow-xl border border-gray-300"
          >
            {cardContent}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
