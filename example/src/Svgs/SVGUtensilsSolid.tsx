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
const SVGUtensilsSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 11 5 C 9.363281 5 8.136719 6.210938 7.3125 7.5625 C 6.488281 8.914063 6 10.515625 6 12 C 6 14.582031 7.78125 16.464844 10 16.90625 L 10 28 L 12 28 L 12 16.90625 C 14.21875 16.464844 16 14.582031 16 12 C 16 10.515625 15.511719 8.914063 14.6875 7.5625 C 13.863281 6.210938 12.636719 5 11 5 Z M 18 5 L 18 12 C 18 13.851563 19.28125 15.398438 21 15.84375 L 21 28 L 23 28 L 23 15.84375 C 24.71875 15.398438 26 13.851563 26 12 L 26 5 L 24 5 L 24 12 C 24 13.117188 23.117188 14 22 14 C 20.882813 14 20 13.117188 20 12 L 20 5 Z M 21 5 L 21 12 C 21 12.550781 21.449219 13 22 13 C 22.550781 13 23 12.550781 23 12 L 23 5 Z M 11 7 C 11.574219 7 12.34375 7.566406 12.96875 8.59375 C 13.59375 9.621094 14 10.996094 14 12 C 14 14.003906 12.75 15 11 15 C 9.25 15 8 14.003906 8 12 C 8 10.996094 8.40625 9.621094 9.03125 8.59375 C 9.65625 7.566406 10.425781 7 11 7 Z"/></Svg>);
};
export default SVGUtensilsSolid;
