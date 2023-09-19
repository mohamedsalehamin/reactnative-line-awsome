import React from 'react';
import Svg, {
  Circle,
  ClipPath,
  Defs,
  Ellipse,
  ForeignObject,
  G,
  Image,
  Line,
  LinearGradient,
  Marker,
  Mask,
  Path,
  Pattern,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Symbol,
  Text,
  TextPath,
  TSpan as Tspan,
  Use,
} from 'react-native-svg'
type ReactFromSVGProps = {
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  style?: any;
};;
const SVGStopwatchSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 13 4 L 13 6 L 19 6 L 19 4 Z M 16 7 C 9.9375 7 5 11.9375 5 18 C 5 24.0625 9.9375 29 16 29 C 22.0625 29 27 24.0625 27 18 C 27 15.082031 25.863281 12.410156 24 10.4375 L 25.71875 8.71875 L 24.28125 7.28125 L 22.46875 9.09375 C 20.65625 7.773438 18.410156 7 16 7 Z M 16 9 C 20.980469 9 25 13.019531 25 18 C 25 22.980469 20.980469 27 16 27 C 11.019531 27 7 22.980469 7 18 C 7 13.019531 11.019531 9 16 9 Z M 15 11 L 15 16.28125 C 14.402344 16.628906 14 17.261719 14 18 C 14 18.738281 14.402344 19.371094 15 19.71875 L 15 21 L 17 21 L 17 19.71875 C 17.597656 19.371094 18 18.738281 18 18 C 18 17.261719 17.597656 16.628906 17 16.28125 L 17 11 Z"/></Svg>);
};
export default SVGStopwatchSolid;
