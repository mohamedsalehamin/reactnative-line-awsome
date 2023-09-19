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
const SVGDrawPolygonSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 14 4 C 12.894531 4 12 4.894531 12 6 C 12 6.019531 12 6.042969 12 6.0625 L 6.9375 9.25 C 6.65625 9.101563 6.339844 9 6 9 C 4.894531 9 4 9.894531 4 11 C 4 11.738281 4.402344 12.371094 5 12.71875 L 5 24.28125 C 4.402344 24.628906 4 25.261719 4 26 C 4 27.105469 4.894531 28 6 28 C 6.738281 28 7.371094 27.597656 7.71875 27 L 20.28125 27 C 20.628906 27.597656 21.261719 28 22 28 C 23.105469 28 24 27.105469 24 26 C 24 25.601563 23.890625 25.21875 23.6875 24.90625 L 26.125 20 C 27.171875 19.933594 28 19.0625 28 18 C 28 17.023438 27.300781 16.207031 26.375 16.03125 L 24.46875 10.3125 C 24.785156 9.957031 25 9.511719 25 9 C 25 7.894531 24.105469 7 23 7 C 22.488281 7 22.042969 7.214844 21.6875 7.53125 L 15.96875 5.59375 C 15.78125 4.683594 14.964844 4 14 4 Z M 15.3125 7.5 L 21.03125 9.375 C 21.183594 10.179688 21.820313 10.816406 22.625 10.96875 L 24.53125 16.65625 C 24.207031 17.011719 24 17.480469 24 18 C 24 18.414063 24.128906 18.804688 24.34375 19.125 L 21.875 24 C 21.1875 24.042969 20.609375 24.4375 20.28125 25 L 7.71875 25 C 7.542969 24.699219 7.300781 24.457031 7 24.28125 L 7 12.71875 C 7.597656 12.371094 8 11.738281 8 11 C 8 10.980469 8 10.957031 8 10.9375 L 13.0625 7.75 C 13.34375 7.898438 13.660156 8 14 8 C 14.503906 8 14.960938 7.808594 15.3125 7.5 Z"/></Svg>);
};
export default SVGDrawPolygonSolid;