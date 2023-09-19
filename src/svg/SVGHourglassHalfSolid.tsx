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
const SVGHourglassHalfSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 7 4 L 7 6 L 9 6 L 9 10 C 9 12.542969 10.367188 14.773438 12.40625 16 C 10.367188 17.226563 9 19.457031 9 22 L 9 26 L 7 26 L 7 28 L 25 28 L 25 26 L 23 26 L 23 22 C 23 19.457031 21.632813 17.226563 19.59375 16 C 21.632813 14.773438 23 12.542969 23 10 L 23 6 L 25 6 L 25 4 Z M 11 6 L 21 6 L 21 10 C 21 12.773438 18.773438 15 16 15 C 13.226563 15 11 12.773438 11 10 Z M 12.15625 11 C 12.601563 12.722656 14.136719 14 16 14 C 17.863281 14 19.398438 12.722656 19.84375 11 Z M 16 17 C 18.773438 17 21 19.226563 21 22 L 21 26 L 20 26 C 20 23.789063 18.210938 22 16 22 C 13.789063 22 12 23.789063 12 26 L 11 26 L 11 22 C 11 19.226563 13.226563 17 16 17 Z"/></Svg>);
};
export default SVGHourglassHalfSolid;
