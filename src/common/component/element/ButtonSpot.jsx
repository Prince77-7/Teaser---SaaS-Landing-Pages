'use client'
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import clsx from "clsx";


export const ButtonSpot = ({title, className}) => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { width } = e.target.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;
  
      spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
    };
  
    const handleMouseLeave = () => {
      spanRef.current.animate(
        { left: "50%" },
        { duration: 100, fill: "forwards" }
      );
    };
  
    const btn = btnRef.current;
  
    if (btn) {
      btn.addEventListener("mousemove", handleMouseMove);
      btn.addEventListener("mouseleave", handleMouseLeave);
    }
  
    return () => {
      const btn = btnRef.current;
  
      if (btn) {
        btn.removeEventListener("mousemove", handleMouseMove);
        btn.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);
  
  // Check if the gold background class is applied
  const isGoldButton = className?.includes('bg-gold-600');

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      className={clsx(
        className, // Apply passed classes first
        // Default styles (only apply if not overridden by className)
        'relative w-full group max-w-xs overflow-hidden rounded-full px-4 py-2 text-base font-medium',
        // Apply default bg/text colors only if not a gold button
        !isGoldButton && 'bg-slate-950 dark:bg-neutral-100 text-white'
      )}
    >
      {/* Apply mix-blend-difference only if NOT a gold button */}
      <span className={clsx("pointer-events-none relative z-10", !isGoldButton && 'mix-blend-difference')}>
        {title}
      </span>

      {/* Adjust hover span background based on button type */}
      <span
        ref={spanRef}
        className={clsx(
          "pointer-events-none absolute left-[50%] top-[50%] h-16 rounded-full -translate-x-[50%] -translate-y-[50%] transition-all duration-500 group-hover:w-16 w-0",
          isGoldButton ? 'bg-gold-800' : 'bg-slate-100 dark:bg-neutral-950' // Darker gold for hover on gold button
        )}
      />
    </motion.button>
  );
};
