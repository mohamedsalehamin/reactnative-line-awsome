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
const SVGHdd = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 6.21875 6 L 3 18.875 L 3 26 L 29 26 L 29 18.875 L 25.78125 6 Z M 7.78125 8 L 24.21875 8 L 26.71875 18 L 5.28125 18 Z M 5 20 L 27 20 L 27 24 L 5 24 Z M 24 21 C 23.449219 21 23 21.449219 23 22 C 23 22.550781 23.449219 23 24 23 C 24.550781 23 25 22.550781 25 22 C 25 21.449219 24.550781 21 24 21 Z"/></Svg>);
};
export default SVGHdd;
