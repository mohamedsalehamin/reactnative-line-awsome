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
const SVGPencilAltSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 24.6875 4.03125 C 23.851563 4.03125 23.039063 4.367188 22.40625 5 L 22.3125 5.09375 L 21.6875 4.5 L 5.1875 21 L 5.125 21.3125 L 4.03125 26.8125 L 3.71875 28.28125 L 5.1875 27.96875 L 10.6875 26.875 L 11 26.8125 L 27.5 10.3125 L 26.90625 9.71875 L 26.96875 9.65625 L 27 9.59375 C 28.265625 8.328125 28.265625 6.265625 27 5 C 26.367188 4.367188 25.523438 4.03125 24.6875 4.03125 Z M 24.6875 6 C 25 6 25.328125 6.140625 25.59375 6.40625 C 26.128906 6.941406 26.128906 7.652344 25.59375 8.1875 L 25.5 8.28125 L 23.71875 6.5 L 23.8125 6.40625 C 24.078125 6.140625 24.375 6 24.6875 6 Z M 21.71875 7.3125 L 24.6875 10.28125 L 23.25 11.75 L 20.25 8.75 Z M 18.875 10.1875 L 21.8125 13.125 L 11.375 23.59375 L 10.96875 21.78125 L 10.84375 21.15625 L 10.21875 21.03125 L 8.40625 20.625 Z M 6.96875 22.34375 L 9.15625 22.84375 L 9.65625 25.03125 L 7.625 25.4375 L 6.5625 24.375 Z"/></Svg>);
};
export default SVGPencilAltSolid;