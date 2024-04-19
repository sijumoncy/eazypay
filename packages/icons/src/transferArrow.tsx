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
      <g transform="matrix(0.83 0 0 0.83 12 12)">
        <g>
          <g transform="matrix(1 0 0 1 -4.1 -2.1)">
            <path
              transform=" translate(-7.5, -9.5)"
              d="M 0.5 9.5 L 14.5 9.5"
              stroke-linecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 4.9 2.9)">
            <path
              transform=" translate(-16.5, -14.5)"
              d="M 9.5 14.5 L 23.5 14.5"
              stroke-linecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 -9.1 -2.1)">
            <path
              transform=" translate(-2.5, -9.5)"
              d="M 4.5 13.5 L 0.5 9.5 L 4.5 5.5"
              stroke-linecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 9.9 2.9)">
            <path
              transform=" translate(-21.5, -14.5)"
              d="M 19.5 18.5 L 23.5 14.5 L 19.5 10.5"
              stroke-linecap="round"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default TransferArrow;
