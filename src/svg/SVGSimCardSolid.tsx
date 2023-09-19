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
const SVGSimCardSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 9 4 C 8.476563 4 7.941406 4.183594 7.5625 4.5625 C 7.183594 4.941406 7 5.476563 7 6 L 7 26 C 7 26.523438 7.183594 27.058594 7.5625 27.4375 C 7.941406 27.816406 8.476563 28 9 28 L 23 28 C 23.523438 28 24.058594 27.816406 24.4375 27.4375 C 24.816406 27.058594 25 26.523438 25 26 L 25 11.40625 C 25 10.882813 24.722656 10.316406 24.40625 10 L 19 4.59375 C 18.683594 4.277344 18.117188 4 17.59375 4 Z M 9 6 L 17.59375 6 L 23 11.40625 L 23 26 L 9 26 Z M 11 15 L 11 24 L 21 24 L 21 15 Z M 13 17 L 19 17 L 19 22 L 13 22 Z"/></Svg>);
};
export default SVGSimCardSolid;
