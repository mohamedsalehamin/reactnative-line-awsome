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
const SVGErlang = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 2 7 L 2 25 L 6.3203125 25 C 4.2603125 22.35 3 18.84 3 15 C 3 11.92 4.1507813 9.12 6.0507812 7 L 2 7 z M 16 7 C 15.65 7 15.32 7.0408594 15 7.1308594 C 13.27 7.5708594 12 9.14 12 11 L 20 11 C 20 8.79 18.21 7 16 7 z M 25.660156 7 C 27.130156 9.27 28 12.03 28 15 L 26 15 L 24 15 L 18 15 L 16 15 L 15 15 L 12 15 C 12 18.51 13 21.559297 15 23.029297 C 15.31 23.269297 15.64 23.459375 16 23.609375 C 16.6 23.859375 17.27 24 18 24 C 20.97 24 23.569453 22.180703 24.939453 19.470703 L 26.960938 20.480469 L 28.519531 21.259766 C 27.819531 22.659766 26.899062 23.92 25.789062 25 L 30 25 L 30 22 L 30 18 L 30 15 L 30 7 L 25.660156 7 z"/></Svg>);
};
export default SVGErlang;
