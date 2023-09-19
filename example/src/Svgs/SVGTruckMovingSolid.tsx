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
const SVGTruckMovingSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 1 4 L 1 25 L 4.15625 25 C 4.601563 26.71875 6.148438 28 8 28 C 9.851563 28 11.398438 26.71875 11.84375 25 L 20.15625 25 C 20.601563 26.71875 22.148438 28 24 28 C 25.851563 28 27.398438 26.71875 27.84375 25 L 31 25 L 31 14.59375 L 30.71875 14.28125 L 24.71875 8.28125 L 24.40625 8 L 19 8 L 19 4 Z M 3 6 L 17 6 L 17 23 L 11.84375 23 C 11.398438 21.28125 9.851563 20 8 20 C 6.148438 20 4.601563 21.28125 4.15625 23 L 3 23 Z M 19 10 L 23.5625 10 L 29 15.4375 L 29 23 L 27.84375 23 C 27.398438 21.28125 25.851563 20 24 20 C 22.148438 20 20.601563 21.28125 20.15625 23 L 19 23 Z M 8 22 C 9.117188 22 10 22.882813 10 24 C 10 25.117188 9.117188 26 8 26 C 6.882813 26 6 25.117188 6 24 C 6 22.882813 6.882813 22 8 22 Z M 24 22 C 25.117188 22 26 22.882813 26 24 C 26 25.117188 25.117188 26 24 26 C 22.882813 26 22 25.117188 22 24 C 22 22.882813 22.882813 22 24 22 Z"/></Svg>);
};
export default SVGTruckMovingSolid;
