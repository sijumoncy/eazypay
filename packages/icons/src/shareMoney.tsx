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
    >
      <g transform="matrix(0.83 0 0 0.83 12 12)">
        <g>
          <g transform="matrix(1 0 0 1 -3 -1)">
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
              transform=" translate(-9, -11)"
              d="M 8.5 9 L 12 9 L 12 7 L 10 7 L 10 6 L 8 6 L 8 7.05 C 6.741303613687948 7.305585876323375 5.88106565814898 8.473367212042811 6.010144528390645 9.751248027435288 C 6.13922339863231 11.029128842827765 7.215617242830673 12.001290804836358 8.5 12 L 9.5 12 C 9.776142374915397 12 10 12.223857625084603 10 12.5 C 10 12.776142374915397 9.776142374915397 13 9.5 13 L 6 13 L 6 15 L 8 15 L 8 16 L 10 16 L 10 14.95 C 11.258696386312051 14.694414123676623 12.118934341851016 13.526632787957187 11.989855471609353 12.248751972564712 C 11.86077660136769 10.970871157172235 10.784382757169325 9.998709195163642 9.5 10 L 8.5 10 C 8.223857625084603 10 8 9.776142374915397 8 9.5 C 8 9.223857625084603 8.223857625084603 9 8.5 9 z"
              stroke-linecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 0 -1)">
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
              transform=" translate(-12, -11)"
              d="M 23.707 10.293 L 13.707 0.29299999999999926 C 13.421005745627319 0.007092084422404221 12.990963383880661 -0.07842190600764476 12.6173454419887 0.07632202188785409 C 12.24372750009674 0.23106594978335293 12.00008634801375 0.5956041020631742 12 1.0000000000000004 L 12 3 L 1 3 C 0.44771525016920655 3 0 3.4477152501692068 0 4 L 0 18 C 0 18.552284749830793 0.44771525016920655 19 1 19 L 12 19 L 12 21 C 12 21.552284749830793 12.447715250169207 22 13 22 C 13.552284749830793 22 14 21.552284749830793 14 21 L 14 18 C 14 17.447715250169207 13.552284749830793 17 13 17 L 2 17 L 2 5 L 13 5 C 13.552284749830793 5 14 4.552284749830793 14 4 L 14 3.414 L 21.586 11 L 18.586 14 L 21.413999999999998 14 L 23.706999999999997 11.708 C 23.89477704303009 11.520431742857731 24.00028665641577 11.265909248099067 24.00028665641577 11.000499999999999 C 24.00028665641577 10.735090751900932 23.89477704303009 10.480568257142266 23.706999999999997 10.293 z"
              stroke-linecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 8 8)">
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
              transform=" translate(-20, -20)"
              d="M 22.293 16.293 L 20 18.586 L 17.707 16.293 L 16.293 17.708 L 18.586 20 L 16.293 22.293 L 17.707 23.708 L 20 21.414 L 22.293 23.708000000000002 L 23.707 22.293000000000003 L 21.414 20 L 23.707 17.708 L 22.293 16.293 z"
              stroke-linecap="round"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default ShareMoney;
