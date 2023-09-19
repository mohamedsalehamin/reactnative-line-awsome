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
const SVGMailBulkSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 6 5 L 6 15 L 2 15 L 2 28 L 19 28 L 19 24 L 30 24 L 30 11 L 23 11 L 23 5 L 6 5 z M 8 7 L 21 7 L 21 11 L 12 11 L 12 15 L 8 15 L 8 7 z M 14 13 L 28 13 L 28 22 L 19 22 L 19 15 L 14 15 L 14 13 z M 23 15 L 23 17 L 26 17 L 26 15 L 23 15 z M 4 17 L 6 17 L 13 17 L 17 17 L 17 18.113281 L 10.960938 21.867188 C 10.681938 22.041188 10.319062 22.042188 10.039062 21.867188 L 4 18.115234 L 4 17 z M 17 20.46875 L 17 26 L 4 26 L 4 20.470703 L 8.9824219 23.566406 C 9.4504219 23.857406 9.976 24.003906 10.5 24.003906 C 11.024 24.003906 11.548625 23.857453 12.015625 23.564453 L 17 20.46875 z"/></Svg>);
};
export default SVGMailBulkSolid;
