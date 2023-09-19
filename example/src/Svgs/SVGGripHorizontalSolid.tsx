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
const SVGGripHorizontalSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 2 7 L 2 15 L 10 15 L 10 7 L 2 7 z M 12 7 L 12 15 L 20 15 L 20 7 L 12 7 z M 22 7 L 22 15 L 30 15 L 30 7 L 22 7 z M 4 9 L 8 9 L 8 13 L 4 13 L 4 9 z M 14 9 L 18 9 L 18 13 L 14 13 L 14 9 z M 24 9 L 28 9 L 28 13 L 24 13 L 24 9 z M 2 17 L 2 25 L 10 25 L 10 17 L 2 17 z M 12 17 L 12 25 L 20 25 L 20 17 L 12 17 z M 22 17 L 22 25 L 30 25 L 30 17 L 22 17 z M 4 19 L 8 19 L 8 23 L 4 23 L 4 19 z M 14 19 L 18 19 L 18 23 L 14 23 L 14 19 z M 24 19 L 28 19 L 28 23 L 24 23 L 24 19 z"/></Svg>);
};
export default SVGGripHorizontalSolid;
