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
const SVGShuttleVanSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 5 C 3.355469 5 2 6.355469 2 8 L 2 25 L 5.15625 25 C 5.601563 26.71875 7.148438 28 9 28 C 10.851563 28 12.398438 26.71875 12.84375 25 L 20.15625 25 C 20.601563 26.71875 22.148438 28 24 28 C 25.851563 28 27.398438 26.71875 27.84375 25 L 31 25 L 31 14.5625 C 31 14 30.828125 13.445313 30.53125 12.96875 L 26.4375 6.40625 C 25.890625 5.53125 24.9375 5 23.90625 5 Z M 5 7 L 10 7 L 10 13 L 4 13 L 4 8 C 4 7.4375 4.4375 7 5 7 Z M 12 7 L 18 7 L 18 13 L 12 13 Z M 20 7 L 23.90625 7 C 24.253906 7 24.566406 7.175781 24.75 7.46875 L 28.1875 13 L 20 13 Z M 4 15 L 29 15 L 29 17 L 26 17 L 26 19 L 29 19 L 29 23 L 27.84375 23 C 27.398438 21.28125 25.851563 20 24 20 C 22.148438 20 20.601563 21.28125 20.15625 23 L 12.84375 23 C 12.398438 21.28125 10.851563 20 9 20 C 7.148438 20 5.601563 21.28125 5.15625 23 L 4 23 Z M 9 22 C 10.117188 22 11 22.882813 11 24 C 11 25.117188 10.117188 26 9 26 C 7.882813 26 7 25.117188 7 24 C 7 22.882813 7.882813 22 9 22 Z M 24 22 C 25.117188 22 26 22.882813 26 24 C 26 25.117188 25.117188 26 24 26 C 22.882813 26 22 25.117188 22 24 C 22 22.882813 22.882813 22 24 22 Z"/></Svg>);
};
export default SVGShuttleVanSolid;
