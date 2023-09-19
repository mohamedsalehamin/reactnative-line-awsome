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
const SVGPowerOffSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 15 4 L 15 16 L 17 16 L 17 4 Z M 12 4.6875 C 7.347656 6.339844 4 10.785156 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 10.785156 24.652344 6.339844 20 4.6875 L 20 6.84375 C 23.527344 8.390625 26 11.910156 26 16 C 26 21.515625 21.515625 26 16 26 C 10.484375 26 6 21.515625 6 16 C 6 11.910156 8.472656 8.390625 12 6.84375 Z"/></Svg>);
};
export default SVGPowerOffSolid;
