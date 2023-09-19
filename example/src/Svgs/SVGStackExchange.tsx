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
const SVGStackExchange = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 9 4 C 6.800781 4 5 5.800781 5 8 L 5 22 C 5 24.199219 6.800781 26 9 26 L 17 26 L 17 30.21875 L 18.5625 30.21875 L 18.875 29.90625 L 22.5625 26 L 23 26 C 25.199219 26 27 24.199219 27 22 L 27 8 C 27 5.800781 25.199219 4 23 4 Z M 9 6 L 23 6 C 24.117188 6 25 6.882813 25 8 L 25 9 L 7 9 L 7 8 C 7 6.882813 7.882813 6 9 6 Z M 7 11 L 25 11 L 25 14 L 7 14 Z M 7 16 L 25 16 L 25 19 L 7 19 Z M 7 21 L 25 21 L 25 22 C 25 23.117188 24.117188 24 23 24 L 21.6875 24 L 21.40625 24.3125 L 19 26.84375 L 19 24 L 9 24 C 7.882813 24 7 23.117188 7 22 Z"/></Svg>);
};
export default SVGStackExchange;
