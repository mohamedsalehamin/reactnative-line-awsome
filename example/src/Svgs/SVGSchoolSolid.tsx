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
const SVGSchoolSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 4 L 3 7 L 3 9 L 16 6 L 29 9 L 29 7 Z M 10 10 C 6.773438 10 3.625 11.3125 3.625 11.3125 L 3 11.59375 L 3 27 L 14.28125 27 C 14.628906 27.597656 15.261719 28 16 28 C 16.738281 28 17.371094 27.597656 17.71875 27 L 29 27 L 29 11.59375 L 28.375 11.3125 C 28.375 11.3125 25.226563 10 22 10 C 19.082031 10 16.519531 10.980469 16 11.1875 C 15.480469 10.980469 12.917969 10 10 10 Z M 10 12 C 11.933594 12 14 12.625 15 12.96875 L 15 24.09375 C 13.886719 23.726563 12.058594 23.21875 10 23.21875 C 7.898438 23.21875 6.1875 23.703125 5 24.09375 L 5 12.96875 C 5.769531 12.691406 7.800781 12 10 12 Z M 22 12 C 24.199219 12 26.230469 12.691406 27 12.96875 L 27 24.09375 C 25.8125 23.703125 24.101563 23.21875 22 23.21875 C 19.941406 23.21875 18.113281 23.726563 17 24.09375 L 17 12.96875 C 18 12.625 20.066406 12 22 12 Z"/></Svg>);
};
export default SVGSchoolSolid;
