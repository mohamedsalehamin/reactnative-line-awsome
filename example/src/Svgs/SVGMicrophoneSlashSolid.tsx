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
const SVGMicrophoneSlashSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 3.71875 2.28125 L 2.28125 3.71875 L 28.28125 29.71875 L 29.71875 28.28125 L 23.4375 22 C 24.398438 20.9375 25 19.542969 25 18 L 25 14 L 23 14 L 23 18 C 23 18.992188 22.636719 19.898438 22.03125 20.59375 L 20.625 19.1875 C 20.863281 18.859375 21 18.4375 21 18 L 21 6 C 21 4.898438 20.101563 4 19 4 L 13 4 C 11.898438 4 11 4.898438 11 6 L 11 9.5625 Z M 13 6 L 19 6 L 19 17.5625 L 13 11.5625 Z M 7 14 L 7 18 C 7 21.308594 9.691406 24 13 24 L 15 24 L 15 26 L 11 26 L 11 28 L 21 28 L 21 26 L 17 26 L 17 24 L 19 24 C 19.253906 24 19.503906 23.96875 19.75 23.9375 L 17.8125 22 L 13 22 C 10.792969 22 9 20.207031 9 18 L 9 14 Z M 11 15.1875 L 11 18 C 11 19.101563 11.898438 20 13 20 L 15.8125 20 L 13.8125 18 L 13 18 L 13 17.1875 Z"/></Svg>);
};
export default SVGMicrophoneSlashSolid;
