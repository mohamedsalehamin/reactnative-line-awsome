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
const SVGCloneSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 9 4 C 6.800781 4 5 5.800781 5 8 C 5 9.113281 5.476563 10.117188 6.21875 10.84375 C 4.886719 11.746094 4 13.28125 4 15 L 4 20.625 L 6 21.625 L 6 28 L 12 28 L 12 21.625 L 14 20.625 L 14 19 L 12 19 L 12 19.375 L 10 20.375 L 10 26 L 8 26 L 8 20.375 L 6 19.375 L 6 15 C 6 13.332031 7.332031 12 9 12 C 10.667969 12 12 13.332031 12 15 L 14 15 C 14 13.28125 13.113281 11.746094 11.78125 10.84375 C 12.523438 10.117188 13 9.113281 13 8 C 13 5.800781 11.199219 4 9 4 Z M 23 4 C 20.800781 4 19 5.800781 19 8 C 19 9.113281 19.476563 10.117188 20.21875 10.84375 C 18.886719 11.746094 18 13.28125 18 15 L 18 20.625 L 20 21.625 L 20 28 L 26 28 L 26 21.625 L 28 20.625 L 28 15 C 28 13.28125 27.113281 11.746094 25.78125 10.84375 C 26.523438 10.117188 27 9.113281 27 8 C 27 5.800781 25.199219 4 23 4 Z M 9 6 C 10.117188 6 11 6.882813 11 8 C 11 9.117188 10.117188 10 9 10 C 7.882813 10 7 9.117188 7 8 C 7 6.882813 7.882813 6 9 6 Z M 23 6 C 24.117188 6 25 6.882813 25 8 C 25 9.117188 24.117188 10 23 10 C 21.882813 10 21 9.117188 21 8 C 21 6.882813 21.882813 6 23 6 Z M 23 12 C 24.667969 12 26 13.332031 26 15 L 26 19.375 L 24 20.375 L 24 26 L 22 26 L 22 20.375 L 20 19.375 L 20 15 C 20 13.332031 21.332031 12 23 12 Z M 15 14.1875 L 15 16 L 11 16 L 11 18 L 15 18 L 15 19.8125 L 17.8125 17 Z"/></Svg>);
};
export default SVGCloneSolid;
