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
const SVGFlagCheckeredSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 4 L 5 28 L 7 28 L 7 20 L 27 20 L 27 4 Z M 7 6 L 10 6 L 10 9 L 13 9 L 13 6 L 16 6 L 16 9 L 19 9 L 19 6 L 22 6 L 22 9 L 25 9 L 25 12 L 22 12 L 22 15 L 25 15 L 25 18 L 22 18 L 22 15 L 19 15 L 19 18 L 16 18 L 16 15 L 13 15 L 13 18 L 10 18 L 10 15 L 7 15 L 7 12 L 10 12 L 10 9 L 7 9 Z M 10 12 L 10 15 L 13 15 L 13 12 Z M 13 12 L 16 12 L 16 9 L 13 9 Z M 16 12 L 16 15 L 19 15 L 19 12 Z M 19 12 L 22 12 L 22 9 L 19 9 Z"/></Svg>);
};
export default SVGFlagCheckeredSolid;
