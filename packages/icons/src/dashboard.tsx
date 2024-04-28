import React from "react";

interface IIconProps {
  classes: string;
}

const DashBoardIcon: React.FC<IIconProps> = ({ classes }) => {
  return (
    <svg
      id="icn-dashboard"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
    >
      <rect width="24" height="24" stroke="none" fill="current" opacity="0" />

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
          d="M 9 2 L 4 2 C 2.897 2 2 2.897 2 4 L 2 11 C 2 12.103 2.8970000000000002 13 4 13 L 9 13 C 10.103 13 11 12.103 11 11 L 11 4 C 11 2.897 10.103 2 9 2 z M 20 2 L 15 2 C 13.897 2 13 2.8970000000000002 13 4 L 13 7 C 13 8.103 13.897 9 15 9 L 20 9 C 21.103 9 22 8.103 22 7 L 22 4 C 22 2.897 21.103 2 20 2 z M 9 15 L 4 15 C 2.8970000000000002 15 2 15.897 2 17 L 2 20 C 2 21.103 2.8970000000000002 22 4 22 L 9 22 C 10.103 22 11 21.103 11 20 L 11 17 C 11 15.897 10.103 15 9 15 z M 20 11 L 15 11 C 13.897 11 13 11.897 13 13 L 13 20 C 13 21.103 13.897 22 15 22 L 20 22 C 21.103 22 22 21.103 22 20 L 22 13 C 22 11.897 21.103 11 20 11 z"
          stroke-linecap="round"
        />
      </g>
    </svg>
  );
};

export default DashBoardIcon;
