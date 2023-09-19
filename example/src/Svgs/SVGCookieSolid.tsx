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
const SVGCookieSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 3 C 8.832 3 3 8.832 3 16 C 3 23.168 8.832 29 16 29 C 23.168 29 29 23.168 29 16 C 29 8.832 23.168 3 16 3 z M 16 5 C 22.065 5 27 9.935 27 16 C 27 22.065 22.065 27 16 27 C 9.935 27 5 22.065 5 16 C 5 9.935 9.935 5 16 5 z M 14 9 A 1 1 0 0 0 14 11 A 1 1 0 0 0 14 9 z M 19.5 10 A 1.5 1.5 0 0 0 19.5 13 A 1.5 1.5 0 0 0 19.5 10 z M 11 13 A 2 2 0 0 0 11 17 A 2 2 0 0 0 11 13 z M 17 15 A 1 1 0 0 0 17 17 A 1 1 0 0 0 17 15 z M 22 16 A 1 1 0 0 0 22 18 A 1 1 0 0 0 22 16 z M 12.5 19 A 1.5 1.5 0 0 0 12.5 22 A 1.5 1.5 0 0 0 12.5 19 z M 19.5 20 A 1.5 1.5 0 0 0 19.5 23 A 1.5 1.5 0 0 0 19.5 20 z"/></Svg>);
};
export default SVGCookieSolid;
