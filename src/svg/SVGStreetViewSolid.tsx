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
const SVGStreetViewSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 4 C 13.800781 4 12 5.800781 12 8 C 12 9.113281 12.476563 10.117188 13.21875 10.84375 C 11.886719 11.746094 11 13.28125 11 15 L 11 19.625 L 13 20.625 L 13 25 L 19 25 L 19 20.625 L 21 19.625 L 21 15 C 21 13.28125 20.113281 11.746094 18.78125 10.84375 C 19.523438 10.117188 20 9.113281 20 8 C 20 5.800781 18.199219 4 16 4 Z M 16 6 C 17.117188 6 18 6.882813 18 8 C 18 9.117188 17.117188 10 16 10 C 14.882813 10 14 9.117188 14 8 C 14 6.882813 14.882813 6 16 6 Z M 16 12 C 17.667969 12 19 13.332031 19 15 L 19 18.375 L 17 19.375 L 17 23 L 15 23 L 15 19.375 L 13 18.375 L 13 15 C 13 13.332031 14.332031 12 16 12 Z M 9 18.875 C 6.082031 19.691406 4 21.074219 4 23 C 4 26.28125 10.035156 28 16 28 C 21.964844 28 28 26.28125 28 23 C 28 21.074219 25.917969 19.691406 23 18.875 L 23 20.96875 C 24.902344 21.582031 26 22.375 26 23 C 26 24.195313 22.011719 26 16 26 C 9.988281 26 6 24.195313 6 23 C 6 22.375 7.097656 21.582031 9 20.96875 Z"/></Svg>);
};
export default SVGStreetViewSolid;
