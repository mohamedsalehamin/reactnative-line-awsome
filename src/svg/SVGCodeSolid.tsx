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
const SVGCodeSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 18 5 L 12 27 L 14 27 L 20 5 Z M 7.9375 6.40625 L 1.1875 15.40625 L 0.75 16 L 1.1875 16.59375 L 7.9375 25.59375 L 9.5625 24.40625 L 3.25 16 L 9.5625 7.59375 Z M 24.0625 6.40625 L 22.4375 7.59375 L 28.75 16 L 22.4375 24.40625 L 24.0625 25.59375 L 30.8125 16.59375 L 31.25 16 L 30.8125 15.40625 Z"/></Svg>);
};
export default SVGCodeSolid;
