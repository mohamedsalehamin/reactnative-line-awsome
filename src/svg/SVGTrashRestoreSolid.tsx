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
const SVGTrashRestoreSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 14 4 C 13.477 4 12.9415 4.1835 12.5625 4.5625 C 12.1845 4.9405 12 5.477 12 6 L 12 7 L 5 7 L 5 9 L 6.09375 9 L 8 27.09375 L 8.09375 28 L 23.90625 28 L 24 27.09375 L 25.90625 9 L 27 9 L 27 7 L 20 7 L 20 6 C 20 5.477 19.8165 4.9415 19.4375 4.5625 C 19.0595 4.1845 18.523 4 18 4 L 14 4 z M 14 6 L 18 6 L 18 7 L 14 7 L 14 6 z M 8.125 9 L 23.875 9 L 22.09375 26 L 9.90625 26 L 8.125 9 z M 16 12 L 12 16 L 15 16 L 15 23 L 17 23 L 17 16 L 20 16 L 16 12 z"/></Svg>);
};
export default SVGTrashRestoreSolid;
