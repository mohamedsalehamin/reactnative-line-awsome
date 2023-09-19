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
const SVGToolboxSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 13 5 C 11.90625 5 11 5.90625 11 7 L 11 9 L 2 9 L 2 27 L 30 27 L 30 9 L 21 9 L 21 7 C 21 5.90625 20.09375 5 19 5 Z M 13 7 L 19 7 L 19 9 L 13 9 Z M 4 11 L 28 11 L 28 16 L 24 16 L 24 15 L 20 15 L 20 16 L 12 16 L 12 15 L 8 15 L 8 16 L 4 16 Z M 4 18 L 8 18 L 8 19 L 12 19 L 12 18 L 20 18 L 20 19 L 24 19 L 24 18 L 28 18 L 28 25 L 4 25 Z"/></Svg>);
};
export default SVGToolboxSolid;
