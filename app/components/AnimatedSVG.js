import React from 'react';
import styles from './AnimatedSVG.module.css';

const AnimatedSVG = () => {
  return (
    <svg
      width="100%"
      height="200"
      viewBox="0 0 400 200"
      className={styles.animatedSvg}
    >
      <circle
        cx="100"
        cy="100"
        r="80"
        stroke="#3B82F6"
        strokeWidth="5"
        fill="none"
        className={styles.animatedPath}
      />
      <rect
        x="220"
        y="60"
        width="160"
        height="80"
        rx="20"
        stroke="#10B981"
        strokeWidth="5"
        fill="none"
        className={styles.animatedPath}
      />
      <line
        x1="100"
        y1="100"
        x2="300"
        y2="100"
        stroke="#6366F1"
        strokeWidth="5"
        className={styles.animatedPath}
      />
    </svg>
  );
};

export default AnimatedSVG;
