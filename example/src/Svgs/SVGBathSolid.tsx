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
const SVGBathSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 26 4 C 23.789063 4 22 5.789063 22 8 L 20 8 L 20 10 L 26 10 L 26 8 L 24 8 C 24 6.808594 24.808594 6 26 6 C 27.191406 6 28 6.808594 28 8 L 28 14 L 1 14 L 1 16 L 2.1875 16 L 3.71875 23.59375 L 3.71875 23.625 C 3.949219 24.65625 4.714844 25.503906 5.71875 25.84375 L 5 28 L 7 28 L 7.65625 26 L 24.34375 26 L 25 28 L 27 28 L 26.28125 25.84375 C 27.328125 25.523438 28.140625 24.683594 28.375 23.625 L 28.375 23.59375 L 29.8125 16 L 31 16 L 31 14 L 30 14 L 30 8 C 30 5.789063 28.210938 4 26 4 Z M 4.21875 16 L 27.8125 16 L 26.40625 23.21875 C 26.289063 23.652344 25.921875 24 25.40625 24 L 6.6875 24 C 6.152344 24 5.789063 23.644531 5.6875 23.1875 Z"/></Svg>);
};
export default SVGBathSolid;
