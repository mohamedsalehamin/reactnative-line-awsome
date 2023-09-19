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
const SVGPython = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 5 C 11.011719 5 11 7 11 7 L 11 11 L 17 11 L 17 12 L 7 12 C 7 12 4 11.539063 4 17 C 4 22.460938 7 22 7 22 L 10 22 L 10 20.375 C 10 17.964844 11.964844 16 14.375 16 L 17.625 16 C 19.484375 16 21 15.484375 21 13.625 L 21 7 C 21 7 20.988281 5 16 5 Z M 13 7 C 13.550781 7 14 7.449219 14 8 C 14 8.550781 13.550781 9 13 9 C 12.449219 9 12 8.550781 12 8 C 12 7.449219 12.449219 7 13 7 Z M 22 11 L 22 13.625 C 22 16.035156 20.035156 17 17.625 17 L 14.375 17 C 12.515625 17 11 18.515625 11 20.375 L 11 26 C 11 26 11.0625 28 16 28 C 20.9375 28 21 26 21 26 L 21 22 L 15 22 L 15 21 L 25 21 C 25 21 28 21.503906 28 16 C 28 10.496094 25 11 25 11 Z M 19 24 C 19.550781 24 20 24.449219 20 25 C 20 25.550781 19.550781 26 19 26 C 18.449219 26 18 25.550781 18 25 C 18 24.449219 18.449219 24 19 24 Z"/></Svg>);
};
export default SVGPython;
