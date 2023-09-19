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
const SVGForwardSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 15 5 L 15 12.375 L 6.59375 6.1875 L 5 5.03125 L 5 26.96875 L 6.59375 25.8125 L 15 19.625 L 15 27 L 16.59375 25.8125 L 28.59375 16.8125 L 29.65625 16 L 28.59375 15.1875 L 16.59375 6.1875 Z M 7 8.96875 L 15.40625 15.15625 L 16.53125 16 L 15.40625 16.84375 L 7 23.03125 Z M 17 9 L 26.3125 16 L 17 23 Z"/></Svg>);
};
export default SVGForwardSolid;
