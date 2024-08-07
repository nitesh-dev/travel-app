import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
export default function ClockIcon(props: SvgProps) {
  return (
    <Svg {...props} fill="none" >
      <Path
        d="M23 12C23 18.072 18.072 23 12 23C5.928 23 1 18.072 1 12C1 5.928 5.928 1 12 1C18.072 1 23 5.928 23 12Z"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
      />
      <Path
        d="M16.081 15.4981L12.671 13.4631C12.077 13.1111 11.593 12.2641 11.593 11.5711V7.06116"
        stroke={props.color}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
