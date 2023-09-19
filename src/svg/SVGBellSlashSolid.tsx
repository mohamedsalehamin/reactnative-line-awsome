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
const SVGBellSlashSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 3.71875 2.28125 L 2.28125 3.71875 L 28.28125 29.71875 L 29.71875 28.28125 L 26 24.5625 L 26 23 L 25 23 C 24.449219 23 24 22.550781 24 22 L 24 13.28125 C 24 9.453125 21.417969 6.203125 17.96875 5.28125 C 17.980469 5.1875 18 5.097656 18 5 C 18 3.894531 17.105469 3 16 3 C 14.894531 3 14 3.894531 14 5 C 14 5.085938 14.019531 5.167969 14.03125 5.25 C 12.691406 5.589844 11.457031 6.261719 10.4375 7.25 C 10.136719 7.539063 9.871094 7.863281 9.625 8.1875 Z M 15.5625 7 C 15.765625 6.984375 15.984375 6.992188 16.1875 7 C 19.394531 7.097656 22 9.910156 22 13.28125 L 22 20.5625 L 11.0625 9.625 C 11.285156 9.296875 11.519531 8.96875 11.8125 8.6875 C 12.839844 7.6875 14.152344 7.097656 15.5625 7 Z M 8.03125 12.25 C 8.007813 12.503906 8 12.742188 8 13 L 8 22 C 8 22.550781 7.550781 23 7 23 L 6 23 L 6 25 L 13.1875 25 C 13.074219 25.316406 13 25.648438 13 26 C 13 27.644531 14.355469 29 16 29 C 17.644531 29 19 27.644531 19 26 C 19 25.648438 18.925781 25.316406 18.8125 25 L 20.8125 25 L 18.8125 23 L 9.8125 23 C 9.925781 22.6875 10 22.351563 10 22 L 10 14.1875 Z M 16 25 C 16.5625 25 17 25.4375 17 26 C 17 26.5625 16.5625 27 16 27 C 15.4375 27 15 26.5625 15 26 C 15 25.4375 15.4375 25 16 25 Z"/></Svg>);
};
export default SVGBellSlashSolid;
