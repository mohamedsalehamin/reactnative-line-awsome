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
const SVGGlobeSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 17.96875 6 19.796875 6.585938 21.34375 7.5625 L 20.53125 7.65625 L 20.71875 9.65625 L 19.65625 9.1875 L 18.78125 9.9375 L 18.9375 12 L 21.09375 11.3125 L 23.78125 12.1875 L 23.09375 13.4375 L 21.46875 12.4375 L 19.71875 12.6875 L 18 13.96875 L 17.03125 16.96875 L 18.96875 18.5625 C 18.96875 18.5625 20.957031 18.21875 21.0625 18.21875 C 21.167969 18.21875 21.90625 20.03125 21.90625 20.03125 L 20.3125 25.03125 C 19.011719 25.652344 17.542969 26 16 26 C 15.683594 26 15.371094 25.964844 15.0625 25.9375 L 13.96875 24.03125 L 15.03125 20.03125 L 11 17 L 7.28125 17 L 6.3125 15.03125 L 9 12.90625 L 13 11 L 12.40625 8.34375 L 14.125 7.96875 L 14.9375 9.09375 L 17.9375 8.53125 L 17.40625 6.21875 L 15.1875 6.0625 C 15.453125 6.042969 15.726563 6 16 6 Z M 14.875 6.0625 L 13.3125 6.71875 L 12.5625 6.59375 C 13.300781 6.324219 14.066406 6.152344 14.875 6.0625 Z M 6.0625 16.78125 L 7.03125 17.90625 L 7.03125 19.96875 L 8.90625 22.03125 L 10.0625 22.03125 L 12.90625 25.53125 C 9.132813 24.308594 6.378906 20.890625 6.0625 16.78125 Z"/></Svg>);
};
export default SVGGlobeSolid;
