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
const SVGFemaleSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 2 C 13.800781 2 12 3.800781 12 6 C 12 7.128906 12.488281 8.144531 13.25 8.875 C 13.011719 9.046875 12.792969 9.226563 12.59375 9.4375 C 11.753906 10.328125 11.230469 11.515625 11 12.8125 L 11.03125 12.8125 L 9.03125 22.8125 L 8.78125 24 L 13 24 L 13 30 L 15 30 L 15 24 L 17 24 L 17 30 L 19 30 L 19 24 L 23.21875 24 L 22.96875 22.8125 L 20.96875 12.8125 C 20.738281 11.578125 20.238281 10.402344 19.40625 9.5 C 19.199219 9.273438 18.96875 9.058594 18.71875 8.875 C 19.492188 8.144531 20 7.136719 20 6 C 20 3.800781 18.199219 2 16 2 Z M 16 4 C 17.117188 4 18 4.882813 18 6 C 18 7.117188 17.117188 8 16 8 C 14.882813 8 14 7.117188 14 6 C 14 4.882813 14.882813 4 16 4 Z M 16 10 C 16.828125 10 17.421875 10.316406 17.9375 10.875 C 18.453125 11.433594 18.859375 12.261719 19.03125 13.1875 L 20.78125 22 L 11.21875 22 L 12.96875 13.1875 L 13 13.1875 C 13.175781 12.1875 13.558594 11.347656 14.0625 10.8125 C 14.566406 10.277344 15.152344 10 16 10 Z"/></Svg>);
};
export default SVGFemaleSolid;
