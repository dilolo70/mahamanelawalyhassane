"use client";import { motion } from "framer-motion";
import React, { useState } from "react";

const AnimationsShowcase: React.FC = () => {
  const [activeAnimation, setActiveAnimation] = useState<number | null>(null);

  const animations = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    render: (
      <motion.div
        key={i}
        className={`w-${10 + (i % 5)} h-${10 + (i % 5)} bg-$
          {i % 2 === 0 ? "blue-500" : "orange-500"} rounded-full`}
        initial={{ opacity: 0 }}
        animate={
          activeAnimation === i
            ? { scale: [1, 1.5, 1], rotate: [0, 360] }
            : { opacity: 0 }
        }
        transition={{ duration: 2 }}
      />
    ),
  }));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-5 bg-gray-900 text-white">
      <div className="grid grid-cols-5 gap-4">
        {animations.map((animation) => (
          <button
            key={animation.id}
            onClick={() => setActiveAnimation(animation.id)}
            className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
          >
            Start Animation {animation.id + 1}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center items-center space-x-4 mt-10">
        {animations.map((animation) => (
          <div key={animation.id}>{animation.render}</div>
        ))}
      </div>
    </div>
  );
};

export default AnimationsShowcase;
