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
const SVGKeyboard = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 3 7 C 1.90625 7 1 7.90625 1 9 L 1 23 C 1 24.09375 1.90625 25 3 25 L 29 25 C 30.09375 25 31 24.09375 31 23 L 31 9 C 31 7.90625 30.09375 7 29 7 Z M 3 9 L 29 9 L 29 23 L 3 23 Z M 5 11 L 5 13 L 7 13 L 7 11 Z M 9 11 L 9 13 L 11 13 L 11 11 Z M 13 11 L 13 13 L 15 13 L 15 11 Z M 17 11 L 17 13 L 19 13 L 19 11 Z M 21 11 L 21 13 L 23 13 L 23 11 Z M 25 11 L 25 13 L 27 13 L 27 11 Z M 5 15 L 5 17 L 9 17 L 9 15 Z M 11 15 L 11 17 L 13 17 L 13 15 Z M 15 15 L 15 17 L 17 17 L 17 15 Z M 19 15 L 19 17 L 21 17 L 21 15 Z M 23 15 L 23 17 L 27 17 L 27 15 Z M 5 19 L 5 21 L 9 21 L 9 19 Z M 11 19 L 11 21 L 21 21 L 21 19 Z M 23 19 L 23 21 L 27 21 L 27 19 Z"/></Svg>);
};
export default SVGKeyboard;
