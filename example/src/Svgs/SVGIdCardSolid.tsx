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
const SVGIdCardSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 6 C 3.355469 6 2 7.355469 2 9 L 2 23 C 2 24.644531 3.355469 26 5 26 L 27 26 C 28.644531 26 30 24.644531 30 23 L 30 9 C 30 7.355469 28.644531 6 27 6 Z M 5 8 L 27 8 C 27.566406 8 28 8.433594 28 9 L 28 23 C 28 23.566406 27.566406 24 27 24 L 5 24 C 4.433594 24 4 23.566406 4 23 L 4 9 C 4 8.433594 4.433594 8 5 8 Z M 11 10 C 8.800781 10 7 11.800781 7 14 C 7 15.113281 7.476563 16.117188 8.21875 16.84375 C 6.886719 17.746094 6 19.28125 6 21 L 8 21 C 8 19.332031 9.332031 18 11 18 C 12.667969 18 14 19.332031 14 21 L 16 21 C 16 19.28125 15.113281 17.746094 13.78125 16.84375 C 14.523438 16.117188 15 15.113281 15 14 C 15 11.800781 13.199219 10 11 10 Z M 18 11 L 18 13 L 26 13 L 26 11 Z M 11 12 C 12.117188 12 13 12.882813 13 14 C 13 15.117188 12.117188 16 11 16 C 9.882813 16 9 15.117188 9 14 C 9 12.882813 9.882813 12 11 12 Z M 18 15 L 18 17 L 26 17 L 26 15 Z M 18 19 L 18 21 L 23 21 L 23 19 Z"/></Svg>);
};
export default SVGIdCardSolid;
