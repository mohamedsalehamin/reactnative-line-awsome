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
const SVGObjectUngroupSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 5 L 5 9 L 6 9 L 6 19 L 5 19 L 5 23 L 9 23 L 9 22 L 11 22 L 11 24 L 10 24 L 10 28 L 14 28 L 14 27 L 24 27 L 24 28 L 28 28 L 28 24 L 27 24 L 27 14 L 28 14 L 28 10 L 24 10 L 24 11 L 22 11 L 22 9 L 23 9 L 23 5 L 19 5 L 19 6 L 9 6 L 9 5 Z M 9 8 L 19 8 L 19 9 L 20 9 L 20 19 L 19 19 L 19 20 L 9 20 L 9 19 L 8 19 L 8 9 L 9 9 Z M 22 13 L 24 13 L 24 14 L 25 14 L 25 24 L 24 24 L 24 25 L 14 25 L 14 24 L 13 24 L 13 22 L 19 22 L 19 23 L 23 23 L 23 19 L 22 19 Z"/></Svg>);
};
export default SVGObjectUngroupSolid;
