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
const SVGUserMdSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 8.4375 6 L 8.15625 6.46875 C 8.15625 6.46875 5 11.652344 5 20 L 5 21 L 11.09375 21 C 11.027344 21.324219 11 21.65625 11 22 C 11 24.75 13.25 27 16 27 C 18.75 27 21 24.75 21 22 C 21 21.65625 20.972656 21.324219 20.90625 21 L 27 21 L 27 20 C 27 15.390625 26.222656 12.011719 25.4375 9.78125 C 24.652344 7.550781 23.8125 6.40625 23.8125 6.40625 L 23.5 6 Z M 9.65625 8 L 22.375 8 C 22.519531 8.207031 22.949219 8.730469 23.5625 10.46875 C 24.210938 12.308594 24.792969 15.199219 24.90625 19 L 20 19 C 19.085938 17.789063 17.625 17 16 17 C 14.375 17 12.914063 17.789063 12 19 L 7.09375 19 C 7.320313 12.351563 9.324219 8.570313 9.65625 8 Z M 15 10 L 15 12 L 13 12 L 13 14 L 15 14 L 15 16 L 17 16 L 17 14 L 19 14 L 19 12 L 17 12 L 17 10 Z M 16 19 C 17.667969 19 19 20.332031 19 22 C 19 23.667969 17.667969 25 16 25 C 14.332031 25 13 23.667969 13 22 C 13 20.332031 14.332031 19 16 19 Z M 16 21 C 15.449219 21 15 21.449219 15 22 C 15 22.550781 15.449219 23 16 23 C 16.550781 23 17 22.550781 17 22 C 17 21.449219 16.550781 21 16 21 Z"/></Svg>);
};
export default SVGUserMdSolid;
