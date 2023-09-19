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
const SVGDogSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 20.3125 3 L 20.0625 3.65625 L 17.3125 11 L 9.625 11 C 8.710938 11 7.84375 11.257813 7.125 11.71875 L 4.71875 9.28125 L 3.28125 10.71875 L 5.71875 13.125 C 5.257813 13.84375 5 14.710938 5 15.625 C 5 16.128906 5.085938 16.644531 5.25 17.125 L 5.96875 19.21875 L 5.03125 22.75 L 5 22.875 L 5 28 L 7 28 L 7 23.125 L 7.96875 19.46875 L 8.03125 19.15625 L 7.9375 18.875 L 7.125 16.46875 C 7.035156 16.199219 7 15.910156 7 15.625 C 7 14.15625 8.15625 13 9.625 13 L 17.65625 13 L 21 16.28125 L 21 13.46875 L 19.1875 11.6875 L 21.25 6.15625 L 21.5 6.53125 L 21.78125 7 L 23.65625 7 L 26.71875 9.3125 L 25.875 11 L 22 11 L 22 16.875 L 21.0625 19.6875 L 21 19.84375 L 21 23.125 L 22 27.125 L 22 28 L 24 28 L 24 26.875 L 23 22.875 L 23 20.125 L 23.9375 17.3125 L 24 17.15625 L 24 13 L 27.125 13 L 29.28125 8.6875 L 28.59375 8.1875 L 24.34375 5 L 22.90625 5 L 21.9375 3.46875 L 21.65625 3 Z M 10.21875 18 L 9 22.875 L 9 28 L 11 28 L 11 23.125 L 11.78125 20 L 12.71875 20 C 13.070313 20.234375 14.3125 21 16 21 L 17 21 L 17 23.125 L 18 27.125 L 18 28 L 20 28 L 20 26.875 L 19 22.875 L 19 19 L 16 19 C 14.9375 19 13.5625 18.15625 13.5625 18.15625 L 13.3125 18 Z"/></Svg>);
};
export default SVGDogSolid;
