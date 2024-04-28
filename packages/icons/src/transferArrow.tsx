import React from "react";

interface ITransferProps {
  classes: string;
}

const TransferArrow: React.FC<ITransferProps> = ({ classes }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="transfer"
      className={classes}
      fill="current"
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
            rotate: "135deg"
          }}
          transform=" translate(-12.03, -12)"
          d="M 8 2 L 8 8 L 10.292969 5.7070312 L 19.585938 15.001953 L 21.001953 13.585938 L 11.707031 4.2929688 L 14 2 L 8 2 z M 4.4726562 9.0585938 L 3.0585938 10.472656 L 12.292969 19.707031 L 10 22 L 16 22 L 16 16 L 13.707031 18.292969 L 4.4726562 9.0585938 z"
          stroke-linecap="round"
        />
      </g>
    </svg>
  );
};

export default TransferArrow;
