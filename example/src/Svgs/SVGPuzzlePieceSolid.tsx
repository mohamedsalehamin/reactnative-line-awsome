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
const SVGPuzzlePieceSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 17 3 C 14.789063 3 13 4.789063 13 7 L 7 7 L 7 12 C 4.789063 12 3 13.789063 3 16 C 3 18.210938 4.789063 20 7 20 L 7 25 L 13 25 C 13 27.210938 14.789063 29 17 29 C 19.210938 29 21 27.210938 21 25 L 27 25 L 27 18 L 25 18 C 23.808594 18 23 17.191406 23 16 C 23 14.808594 23.808594 14 25 14 L 27 14 L 27 7 L 21 7 C 21 4.789063 19.210938 3 17 3 Z M 17 5 C 18.191406 5 19 5.808594 19 7 L 19 9 L 25 9 L 25 12 C 22.789063 12 21 13.789063 21 16 C 21 18.210938 22.789063 20 25 20 L 25 23 L 19 23 L 19 25 C 19 26.191406 18.191406 27 17 27 C 15.808594 27 15 26.191406 15 25 L 15 23 L 9 23 L 9 18 L 7 18 C 5.808594 18 5 17.191406 5 16 C 5 14.808594 5.808594 14 7 14 L 9 14 L 9 9 L 15 9 L 15 7 C 15 5.808594 15.808594 5 17 5 Z"/></Svg>);
};
export default SVGPuzzlePieceSolid;
