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
const SVGServerSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 3 6 L 3 26 L 29 26 L 29 6 Z M 5 8 L 27 8 L 27 12 L 5 12 Z M 7 9 L 7 11 L 15 11 L 15 9 Z M 24 9 C 23.449219 9 23 9.449219 23 10 C 23 10.550781 23.449219 11 24 11 C 24.550781 11 25 10.550781 25 10 C 25 9.449219 24.550781 9 24 9 Z M 5 14 L 27 14 L 27 18 L 5 18 Z M 7 15 L 7 17 L 15 17 L 15 15 Z M 24 15 C 23.449219 15 23 15.449219 23 16 C 23 16.550781 23.449219 17 24 17 C 24.550781 17 25 16.550781 25 16 C 25 15.449219 24.550781 15 24 15 Z M 5 20 L 27 20 L 27 24 L 5 24 Z M 7 21 L 7 23 L 15 23 L 15 21 Z M 24 21 C 23.449219 21 23 21.449219 23 22 C 23 22.550781 23.449219 23 24 23 C 24.550781 23 25 22.550781 25 22 C 25 21.449219 24.550781 21 24 21 Z"/></Svg>);
};
export default SVGServerSolid;
