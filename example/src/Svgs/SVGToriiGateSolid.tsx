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
const SVGToriiGateSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 2.9375 4.96875 L 2.9375 6.78125 L 3.25 7.09375 L 7.25 10.75 L 7.5625 11 L 9 11 L 9 14 L 7 14 L 7 16 L 9 16 L 9 27 L 11 27 L 11 16 L 21 16 L 21 27 L 23 27 L 23 16 L 25 16 L 25 14 L 23 14 L 23 11 L 24.375 11 L 24.6875 10.75 L 28.6875 7.09375 L 29 6.78125 L 29 4.96875 L 27.78125 5.25 C 27.746094 5.257813 23.527344 6 16 6 C 8.472656 6 4.191406 5.257813 4.15625 5.25 Z M 6.78125 7.5625 C 8.894531 7.773438 11.914063 8 16 8 C 20.054688 8 23.058594 7.769531 25.15625 7.5625 L 23.59375 9 L 8.34375 9 Z M 11 11 L 14 11 L 14 14 L 11 14 Z M 18 11 L 21 11 L 21 14 L 18 14 Z"/></Svg>);
};
export default SVGToriiGateSolid;
