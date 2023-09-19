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
const SVGInfoSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 4 C 13.800781 4 12 5.800781 12 8 C 12 10.199219 13.800781 12 16 12 C 18.199219 12 20 10.199219 20 8 C 20 5.800781 18.199219 4 16 4 Z M 16 6 C 17.117188 6 18 6.882813 18 8 C 18 9.117188 17.117188 10 16 10 C 14.882813 10 14 9.117188 14 8 C 14 6.882813 14.882813 6 16 6 Z M 11 13 L 11 18 L 13 18 L 13 23 L 11 23 L 11 28 L 21 28 L 21 23 L 19 23 L 19 13 Z M 13 15 L 17 15 L 17 25 L 19 25 L 19 26 L 13 26 L 13 25 L 15 25 L 15 16 L 13 16 Z"/></Svg>);
};
export default SVGInfoSolid;
