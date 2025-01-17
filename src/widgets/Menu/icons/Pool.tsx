import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="17.612" height="24" viewBox="0 0 17.612 24" {...props}>
      <g transform="translate(0)">
        <g transform="translate(0 0)">
          <path
            d="M-386.972,13.555c-.64-.795-1.215-1.5-1.663-2.09-.021-.045-.064-.068-.085-.091a.522.522,0,0,0-.768.091c-.448.591-1.023,1.295-1.663,2.09-2.814,3.475-6.716,8.29-6.716,12.31a9.653,9.653,0,0,0,2.58,6.632,8.591,8.591,0,0,0,6.226,2.748,8.505,8.505,0,0,0,6.226-2.748,9.653,9.653,0,0,0,2.58-6.632C-380.255,21.845-384.157,17.03-386.972,13.555Zm3.369,18.1a7.462,7.462,0,0,1-5.458,2.43,7.527,7.527,0,0,1-5.458-2.408,8.5,8.5,0,0,1-2.26-5.815c0-3.589,3.753-8.222,6.46-11.561.448-.568.874-1.09,1.258-1.59.384.5.81,1.022,1.258,1.567,2.708,3.339,6.46,7.949,6.46,11.561A8.544,8.544,0,0,1-383.6,31.657Z"
            transform="translate(397.867 -11.246)"
            fill="#404041"
          />
        </g>
        <g transform="translate(4.65 6.31)">
          <g transform="translate(0 0)">
            <path
              d="M-287.171,157.036h-3.464V151.46l-4.849,7.806h3.464v5.576Z"
              transform="translate(295.484 -151.46)"
              fill="#404041"
            />
          </g>
        </g>
      </g>
    </Svg>
  );
};

export default Icon;
