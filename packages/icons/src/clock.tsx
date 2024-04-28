import React from "react";

interface IClockProps {
  classes: string;
}

const Clock: React.FC<IClockProps> = ({ classes }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="clock"
      className={classes}
    >
      <g transform="matrix(1 0 0 1 12 12)">
        <path
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeDashoffset: 0,
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            fill: "current",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform=" translate(-12, -12)"
          d="M 12 2 C 6.477 2 2 6.477 2 12 C 2 17.523 6.477 22 12 22 C 17.523 22 22 17.523 22 12 C 22 6.477 17.523 2 12 2 z M 15.293 16.707 L 11 12.414 L 11 6 L 13 6 L 13 11.586 L 16.707 15.293 L 15.293 16.707 z"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default Clock;
