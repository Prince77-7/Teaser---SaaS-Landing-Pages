'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate, useMotionValue, useTransform } from 'framer-motion';
import clsx from 'clsx';

const AnimatedCreditScoreGauge = ({ 
    baseScore = 500, 
    targetScore = 780, 
    scoreRange = { min: 300, max: 850 },
    // Remove fixed size, let container control it
    strokeWidth = 12 // Slightly thinner stroke for better label spacing
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // SVG dimensions - use viewBox for scaling
  const width = 250; // Base width for viewBox calculations
  const height = width / 2;
  const radius = (width - strokeWidth * 2) / 2; // Adjusted for padding
  const circumference = radius * Math.PI; // Semi-circle
  const centerX = width / 2;
  const centerY = height;

  // Normalize score (0 to 1)
  const normalizeScore = (score) => Math.max(0, Math.min(1, (score - scoreRange.min) / (scoreRange.max - scoreRange.min)));
  
  // Calculate stroke-dashoffset (0 is full, circumference is empty)
  const scoreToOffset = (score) => {
    const normalized = normalizeScore(score);
    return circumference * (1 - normalized);
  };

  // Score range thresholds (example based on FICO)
  const ranges = {
    poor: scoreRange.min, 
    fair: 580,
    good: 670,
    veryGood: 740,
    excellent: 800,
    max: scoreRange.max
  };

  // Function to get position on the arc
  const getPositionOnArc = (score, offsetRadius) => {
    const normalized = normalizeScore(score);
    const angle = Math.PI * normalized; // Corrected angle calculation (0 to PI maps left to right)
    const x = centerX - Math.cos(angle) * offsetRadius;
    const y = centerY - Math.sin(angle) * offsetRadius;
    return { x, y };
  };

  // Motion values for animation
  const count = useMotionValue(baseScore);
  const roundedCount = useTransform(count, latest => Math.round(latest));
  const offset = useMotionValue(scoreToOffset(baseScore));

  useEffect(() => {
    if (isInView) {
      const numberAnimation = animate(count, targetScore, { duration: 2.5, ease: "easeOut" });
      const gaugeAnimation = animate(offset, scoreToOffset(targetScore), { duration: 2.5, ease: "easeOut" });
      return () => {
        numberAnimation.stop();
        gaugeAnimation.stop();
      };
    }
    // Include scoreToOffset in dependencies as it's used in the effect
  }, [isInView, baseScore, targetScore, count, offset, scoreRange, scoreToOffset]); 

  return (
    // Container controls the actual size - make it responsive
    <div ref={ref} className="relative w-[250px] sm:w-[300px] md:w-[350px] mx-auto"> 
      <svg 
        width="100%" // SVG scales with container
        viewBox={`0 0 ${width} ${height + strokeWidth * 1.5}`} // Adjusted viewBox height for labels
        className="overflow-visible" // Allow labels outside
      >
        <defs>
          {/* Gold Gradient for the progress bar */}
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-gold-400, #fbbf24)" />
            <stop offset="100%" stopColor="var(--color-gold-600, #b18717)" />
          </linearGradient>
           {/* Optional: Subtle shadow filter */}
           <filter id="gauge-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.1" />
          </filter>
        </defs>

        {/* Background track */}
        <path
          d={`M ${strokeWidth} ${height} A ${radius} ${radius} 0 0 1 ${width - strokeWidth} ${height}`}
          fill="none"
          strokeWidth={strokeWidth}
          className="stroke-neutral-200 dark:stroke-neutral-700"
          strokeLinecap="round"
        />

        {/* Foreground track (animated) */}
        <motion.path
          d={`M ${strokeWidth} ${height} A ${radius} ${radius} 0 0 1 ${width - strokeWidth} ${height}`}
          fill="none"
          stroke="url(#goldGradient)" // Apply gradient
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
            // rotate: 180, // Temporarily removed rotation
            // transformOrigin: `${centerX}px ${centerY}px` // Temporarily removed origin
          }}
          // filter="url(#gauge-shadow)" // Optional shadow
        />

        {/* Score Range Ticks and Labels */}
        {Object.entries(ranges).map(([key, score]) => {
          // Skip min/max labels if too close to ends
          if (key === 'poor' || key === 'max') return null; 
          const labelPos = getPositionOnArc(score, radius + strokeWidth * 1.5); // Position labels outside
          const tickStartPos = getPositionOnArc(score, radius - strokeWidth / 2);
          const tickEndPos = getPositionOnArc(score, radius + strokeWidth / 2);
          const textAnchor = labelPos.x < centerX ? 'end' : labelPos.x > centerX ? 'start' : 'middle';
          return (
            <g key={key}>
              <line 
                x1={tickStartPos.x}
                y1={tickStartPos.y}
                x2={tickEndPos.x}
                y2={tickEndPos.y}
                className="stroke-neutral-400 dark:stroke-neutral-500"
                strokeWidth="1"
              />
              <text 
                x={labelPos.x}
                y={labelPos.y + 3} // Adjust vertical position slightly
                textAnchor={textAnchor}
                className="text-[8px] sm:text-[9px] fill-neutral-500 dark:fill-neutral-400 font-medium"
              >
                {score} ({key.charAt(0).toUpperCase() + key.slice(1).replace('Very','V.')}) {/* Abbreviate */}
              </text>
            </g>
          );
        })}

      </svg>
      {/* Animated Score Number - Centered Below Gauge */}
      <div className="absolute bottom-[-20px] left-0 right-0 flex flex-col items-center pointer-events-none">
         <motion.h1 
            // Responsive text size
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold-600 dark:text-gold-400 tabular-nums"
         >
            {roundedCount}
         </motion.h1>
         <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">Credit Score</p>
      </div>
    </div>
  );
};

export default AnimatedCreditScoreGauge; 