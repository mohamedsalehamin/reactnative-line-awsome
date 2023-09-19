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
const SVGAddressCardSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 3 6 L 3 26 L 29 26 L 29 6 Z M 5 8 L 27 8 L 27 24 L 23.59375 24 C 23.515625 23.863281 23.550781 23.675781 23.4375 23.5625 C 23.058594 23.183594 22.523438 23 22 23 C 21.476563 23 20.941406 23.183594 20.5625 23.5625 C 20.449219 23.675781 20.484375 23.863281 20.40625 24 L 11.59375 24 C 11.515625 23.863281 11.550781 23.675781 11.4375 23.5625 C 11.058594 23.183594 10.523438 23 10 23 C 9.476563 23 8.941406 23.183594 8.5625 23.5625 C 8.449219 23.675781 8.484375 23.863281 8.40625 24 L 5 24 Z M 12 10 C 9.800781 10 8 11.800781 8 14 C 8 15.113281 8.476563 16.117188 9.21875 16.84375 C 7.886719 17.746094 7 19.285156 7 21 L 9 21 C 9 19.34375 10.34375 18 12 18 C 13.65625 18 15 19.34375 15 21 L 17 21 C 17 19.285156 16.113281 17.746094 14.78125 16.84375 C 15.523438 16.117188 16 15.113281 16 14 C 16 11.800781 14.199219 10 12 10 Z M 12 12 C 13.117188 12 14 12.882813 14 14 C 14 15.117188 13.117188 16 12 16 C 10.882813 16 10 15.117188 10 14 C 10 12.882813 10.882813 12 12 12 Z M 19 13 L 19 15 L 25 15 L 25 13 Z M 19 17 L 19 19 L 25 19 L 25 17 Z"/></Svg>);
};
export default SVGAddressCardSolid;
