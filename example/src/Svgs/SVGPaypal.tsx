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
const SVGPaypal = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 8.90625 5 L 8.71875 5.78125 L 5.03125 22.78125 L 4.75 24 L 9.625 24 L 9.03125 26.78125 L 8.75 28 L 15.71875 28 L 15.875 27.1875 L 16.90625 22.375 L 19.59375 22.375 C 23.355469 22.375 26.660156 19.929688 27.5 16 C 27.941406 13.933594 27.472656 12.183594 26.5 11 C 25.710938 10.039063 24.640625 9.460938 23.53125 9.1875 C 23.316406 8.199219 22.863281 7.359375 22.25 6.71875 C 21.113281 5.535156 19.535156 5 18.0625 5 Z M 10.53125 7 L 18.0625 7 C 19.042969 7 20.125 7.378906 20.8125 8.09375 C 21.5 8.808594 21.902344 9.828125 21.53125 11.5625 C 20.871094 14.65625 18.535156 16.375 15.59375 16.375 L 11.28125 16.375 L 11.125 17.15625 L 10.09375 22 L 7.25 22 Z M 13.0625 8.46875 L 12.875 9.25 L 11.84375 13.875 L 11.5625 15.09375 L 15.09375 15.09375 C 16.871094 15.09375 18.40625 13.800781 18.84375 12.0625 L 18.875 12.0625 C 18.878906 12.042969 18.871094 12.019531 18.875 12 C 19.09375 11.125 18.953125 10.226563 18.46875 9.5625 C 17.972656 8.882813 17.136719 8.46875 16.25 8.46875 Z M 14.65625 10.46875 L 16.25 10.46875 C 16.5625 10.46875 16.726563 10.558594 16.84375 10.71875 C 16.960938 10.878906 17.042969 11.136719 16.9375 11.53125 L 16.9375 11.5625 C 16.75 12.371094 15.792969 13.09375 15.09375 13.09375 L 14.0625 13.09375 Z M 23.59375 11.34375 C 24.121094 11.558594 24.617188 11.851563 24.96875 12.28125 C 25.550781 12.988281 25.871094 13.964844 25.53125 15.5625 C 24.871094 18.65625 22.535156 20.375 19.59375 20.375 L 15.28125 20.375 L 15.125 21.15625 L 14.09375 26 L 11.25 26 L 11.6875 24 L 11.71875 24 L 11.875 23.1875 L 12.90625 18.375 L 15.59375 18.375 C 19.355469 18.375 22.660156 15.929688 23.5 12 C 23.546875 11.773438 23.566406 11.5625 23.59375 11.34375 Z"/></Svg>);
};
export default SVGPaypal;
