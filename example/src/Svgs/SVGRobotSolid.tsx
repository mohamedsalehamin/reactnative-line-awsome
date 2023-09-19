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
const SVGRobotSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 1 C 14.894531 1 14 1.894531 14 3 C 14 3.738281 14.402344 4.371094 15 4.71875 L 15 7 L 10 7 C 7.25 7 5 9.25 5 12 L 5 14 L 2 14 L 2 22 L 5 22 L 5 27 L 27 27 L 27 22 L 30 22 L 30 14 L 27 14 L 27 12 C 27 9.25 24.75 7 22 7 L 17 7 L 17 4.71875 C 17.597656 4.371094 18 3.738281 18 3 C 18 1.894531 17.105469 1 16 1 Z M 10 9 L 22 9 C 23.667969 9 25 10.332031 25 12 L 25 25 L 23 25 L 23 20 L 9 20 L 9 25 L 7 25 L 7 12 C 7 10.332031 8.332031 9 10 9 Z M 12 13 C 10.894531 13 10 13.894531 10 15 C 10 16.105469 10.894531 17 12 17 C 13.105469 17 14 16.105469 14 15 C 14 13.894531 13.105469 13 12 13 Z M 20 13 C 18.894531 13 18 13.894531 18 15 C 18 16.105469 18.894531 17 20 17 C 21.105469 17 22 16.105469 22 15 C 22 13.894531 21.105469 13 20 13 Z M 4 16 L 5 16 L 5 20 L 4 20 Z M 27 16 L 28 16 L 28 20 L 27 20 Z M 11 22 L 13 22 L 13 25 L 11 25 Z M 15 22 L 17 22 L 17 25 L 15 25 Z M 19 22 L 21 22 L 21 25 L 19 25 Z"/></Svg>);
};
export default SVGRobotSolid;
