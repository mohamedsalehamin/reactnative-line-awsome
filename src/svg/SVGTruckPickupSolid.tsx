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
const SVGTruckPickupSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 10.71875 6 C 9.863281 6 9.082031 6.558594 8.8125 7.375 L 7.28125 12 L 0 12 L 0 20.21875 C 0 21.132813 0.613281 21.933594 1.5 22.15625 L 4.09375 22.8125 C 4.46875 24.628906 6.078125 26 8 26 C 9.851563 26 11.398438 24.71875 11.84375 23 L 21.15625 23 C 21.601563 24.71875 23.148438 26 25 26 C 26.851563 26 28.398438 24.71875 28.84375 23 L 30 23 C 31.09375 23 32 22.09375 32 21 L 32 17.25 C 32 15.46875 30.808594 13.894531 29.09375 13.40625 L 24.5625 12.125 L 20.65625 7.4375 C 19.894531 6.527344 18.78125 6 17.59375 6 Z M 10.71875 8 L 14 8 L 14 12 L 9.375 12 Z M 16 8 L 17.59375 8 C 18.1875 8 18.746094 8.261719 19.125 8.71875 L 21.875 12 L 16 12 Z M 2 14 L 23.84375 14 L 28.5625 15.34375 C 29.425781 15.589844 30 16.351563 30 17.25 L 30 21 L 28.84375 21 C 28.398438 19.28125 26.851563 18 25 18 C 23.148438 18 21.601563 19.28125 21.15625 21 L 11.84375 21 C 11.398438 19.28125 9.851563 18 8 18 C 6.226563 18 4.738281 19.171875 4.21875 20.78125 L 2 20.21875 Z M 8 20 C 9.117188 20 10 20.882813 10 22 C 10 23.117188 9.117188 24 8 24 C 6.882813 24 6 23.117188 6 22 C 6 20.882813 6.882813 20 8 20 Z M 25 20 C 26.117188 20 27 20.882813 27 22 C 27 23.117188 26.117188 24 25 24 C 23.882813 24 23 23.117188 23 22 C 23 20.882813 23.882813 20 25 20 Z"/></Svg>);
};
export default SVGTruckPickupSolid;
