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
const SVGCalendarPlus = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 9 5 L 9 6 L 5 6 L 5 28 L 27 28 L 27 6 L 23 6 L 23 5 L 21 5 L 21 6 L 11 6 L 11 5 Z M 7 8 L 9 8 L 9 9 L 11 9 L 11 8 L 21 8 L 21 9 L 23 9 L 23 8 L 25 8 L 25 10 L 7 10 Z M 7 12 L 25 12 L 25 26 L 7 26 Z M 15 14 L 15 18 L 11 18 L 11 20 L 15 20 L 15 24 L 17 24 L 17 20 L 21 20 L 21 18 L 17 18 L 17 14 Z"/></Svg>);
};
export default SVGCalendarPlus;
