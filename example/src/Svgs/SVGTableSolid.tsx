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
const SVGTableSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 5 L 5 27 L 27 27 L 27 5 Z M 7 7 L 12 7 L 12 12 L 7 12 Z M 14 7 L 18 7 L 18 12 L 14 12 Z M 20 7 L 25 7 L 25 12 L 20 12 Z M 7 14 L 12 14 L 12 18 L 7 18 Z M 14 14 L 18 14 L 18 18 L 14 18 Z M 20 14 L 25 14 L 25 18 L 20 18 Z M 7 20 L 12 20 L 12 25 L 7 25 Z M 14 20 L 18 20 L 18 25 L 14 25 Z M 20 20 L 25 20 L 25 25 L 20 25 Z"/></Svg>);
};
export default SVGTableSolid;
