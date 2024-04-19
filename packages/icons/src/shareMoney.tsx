import React from "react";

interface IShareMoneyProps {
  classes: string;
}

const ShareMoney: React.FC<IShareMoneyProps> = ({ classes }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="ShareMoney"
      className={classes}
      fill="none"
    >
      <g transform="matrix(0.83 0 0 0.83 12 12)">
        <g>
          <g transform="matrix(1 0 0 1 4.9 8.05)">
            <path
              transform=" translate(-16.9, -20.05)"
              d="M 18.05 22.25 L 15.75 20.05 L 18.05 17.85"
              stroke-linecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 6.75 6.55)">
            <path
              transform=" translate(-18.75, -18.55)"
              d="M 21.75 17.05 C 21.75 18.75 20.45 20.05 18.75 20.05 L 15.75 20.05"
              stroke-linecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 -4.6 -7.95)">
            <path
              transform=" translate(-7.4, -4.05)"
              d="M 6.25 1.84999 L 8.55 4.05 L 6.25 6.25001"
              stroke-linecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 -6.45 -6.45)">
            <path
              transform=" translate(-5.55, -5.55)"
              d="M 2.55 7.05 C 2.55 5.35 3.85 4.05 5.55 4.05 L 8.55 4.05"
              stroke-linecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 -5.25 5.25)">
            <path
              transform=" translate(-6.75, -17.25)"
              d="M 6.75 23.25 C 10.0637 23.25 12.75 20.5637 12.75 17.25 C 12.75 13.9363 10.0637 11.25 6.75 11.25 C 3.43629 11.25 0.75 13.9363 0.75 17.25 C 0.75 20.5637 3.43629 23.25 6.75 23.25 Z"
              stroke-linecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 -5.25 5.35)">
            <path
              transform=" translate(-6.75, -17.35)"
              d="M 5.65 19.25 C 5.85 19.55 6.35 19.75 6.75 19.75 C 7.55 19.75 8.15 19.15 8.15 18.55 C 8.15 17.95 7.55 17.35 6.75 17.35 C 5.95 17.35 5.35 16.75 5.35 16.15 C 5.35 15.55 5.95 14.95 6.75 14.95 C 7.15 14.95 7.45 15.05 7.75 15.35"
              stroke-linecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 -5.25 2.4)">
            <path
              transform=" translate(-6.75, -14.4)"
              d="M 6.75 13.85 L 6.75 14.95"
              stroke-linecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 -5.25 8.3)">
            <path
              transform=" translate(-6.75, -20.3)"
              d="M 6.75 19.75 L 6.75 20.85"
              stroke-linecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 5.25 -5.25)">
            <path
              transform=" translate(-17.25, -6.75)"
              d="M 17.25 12.75 C 20.5637 12.75 23.25 10.0637 23.25 6.74999 C 23.25 3.43628 20.5637 0.749989 17.25 0.749989 C 13.9363 0.749989 11.25 3.43628 11.25 6.74999 C 11.25 10.0637 13.9363 12.75 17.25 12.75 Z"
              stroke-linecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 5.25 -6.85)">
            <path
              transform=" translate(-17.25, -5.15)"
              d="M 15.45 3.74999 L 15.45 4.74999 C 15.45 5.74999 16.25 6.55001 17.25 6.55001 C 18.25 6.55001 19.05 5.74999 19.05 4.74999 L 19.05 3.74999"
              stroke-linecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 5.25 -3.75)">
            <path
              transform=" translate(-17.25, -8.25)"
              d="M 17.25 6.55001 L 17.25 9.95"
              stroke-linecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 5.25 -3.65)">
            <path
              transform=" translate(-17.25, -8.35)"
              d="M 15.45 8.34999 L 19.05 8.34999"
              stroke-linecap="round"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default ShareMoney;
