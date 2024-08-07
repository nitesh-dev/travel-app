import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
export default function ClockFillIcon(props: SvgProps) {
  return <Svg fill="none" {...props}>
    <Path
      fill={props.color}
      d="M20.737 5.535 14.119.905c-1.803-1.264-4.572-1.195-6.307.15L2.056 5.545C.908 6.442 0 8.281 0 9.728v7.927c0 2.93 2.378 5.32 5.308 5.32h12.384A5.31 5.31 0 0 0 23 17.666v-7.79c0-1.55-1-3.458-2.263-4.342Zm-8.375 12.844c0 .471-.391.862-.862.862a.868.868 0 0 1-.862-.862v-3.447c0-.47.391-.861.862-.861s.862.39.862.861v3.447Z"
    />
  </Svg>;
}
