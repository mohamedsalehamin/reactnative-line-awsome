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
const SVGRulerHorizontalSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 0 8 L 0 24 L 32 24 L 32 8 Z M 2 10 L 5 10 L 5 17 L 7 17 L 7 10 L 9 10 L 9 14 L 11 14 L 11 10 L 13 10 L 13 17 L 15 17 L 15 10 L 17 10 L 17 14 L 19 14 L 19 10 L 21 10 L 21 17 L 23 17 L 23 10 L 25 10 L 25 14 L 27 14 L 27 10 L 30 10 L 30 22 L 2 22 Z"/></Svg>);
};
export default SVGRulerHorizontalSolid;
