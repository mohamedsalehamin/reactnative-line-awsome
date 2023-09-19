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
const SVGYahoo = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 7.339844 6.027344 C 7.339844 6.027344 8.125 6.199219 8.78125 6.199219 C 9.4375 6.199219 10.207031 6.015625 10.207031 6.015625 L 16 15.660156 L 21.820313 6 C 21.820313 6 22.449219 6.214844 23.234375 6.214844 C 24.015625 6.214844 24.660156 6.015625 24.660156 6.015625 L 17.214844 18.597656 L 17.414063 27.972656 C 17.414063 27.972656 16.628906 27.757813 16 27.757813 C 15.375 27.757813 14.558594 28 14.558594 28 L 14.785156 18.585938 Z"/></Svg>);
};
export default SVGYahoo;
