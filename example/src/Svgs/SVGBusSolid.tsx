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
const SVGBusSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 9 4 C 6.800781 4 5 5.800781 5 8 L 5 13 L 3 13 L 3 16 L 5 16 L 5 27 C 5 27.550781 5.449219 28 6 28 L 9 28 L 9.34375 27 L 22.65625 27 L 23 28 L 26 28 C 26.550781 28 27 27.550781 27 27 L 27 16 L 29 16 L 29 13 L 27 13 L 27 8 C 27 5.800781 25.199219 4 23 4 Z M 9 6 L 23 6 C 24.117188 6 25 6.882813 25 8 L 7 8 C 7 6.882813 7.882813 6 9 6 Z M 7 10 L 15 10 L 15 17 L 7 17 Z M 17 10 L 25 10 L 25 17 L 17 17 Z M 7 19 L 25 19 L 25 25 L 7 25 Z M 8 21 L 8 23 L 12 23 L 12 21 Z M 20 21 L 20 23 L 24 23 L 24 21 Z"/></Svg>);
};
export default SVGBusSolid;
