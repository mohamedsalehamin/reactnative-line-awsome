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
const SVGLemon = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 13 4 C 10.417969 4 8.121094 5.4375 6.53125 7.625 C 4.941406 9.8125 4 12.765625 4 16 C 4 19.234375 4.941406 22.1875 6.53125 24.375 C 8.121094 26.5625 10.417969 28 13 28 C 21.230469 28 25.617188 23.292969 26.6875 18.34375 C 27.441406 17.800781 28 16.996094 28 16 C 28 15.003906 27.441406 14.199219 26.6875 13.65625 C 25.558594 8.582031 20.3125 4 13 4 Z M 13 6 C 14.835938 6 16.539063 7.015625 17.84375 8.8125 C 19.148438 10.609375 20 13.160156 20 16 C 20 18.839844 19.148438 21.390625 17.84375 23.1875 C 16.539063 24.984375 14.835938 26 13 26 C 11.164063 26 9.460938 24.984375 8.15625 23.1875 C 6.851563 21.390625 6 18.839844 6 16 C 6 13.160156 6.851563 10.609375 8.15625 8.8125 C 9.460938 7.015625 11.164063 6 13 6 Z M 19.375 7.53125 C 22.414063 9.140625 24.367188 11.789063 24.84375 14.375 L 24.9375 14.875 L 25.40625 15.09375 C 25.753906 15.253906 26 15.589844 26 16 C 26 16.410156 25.753906 16.746094 25.40625 16.90625 L 24.9375 17.125 L 24.84375 17.625 C 24.3125 20.519531 22.566406 23.359375 19.0625 24.875 C 19.199219 24.710938 19.339844 24.550781 19.46875 24.375 C 21.058594 22.1875 22 19.234375 22 16 C 22 12.765625 21.058594 9.8125 19.46875 7.625 C 19.441406 7.589844 19.402344 7.566406 19.375 7.53125 Z M 13 8 C 12.285156 8 11.613281 8.257813 11 8.6875 L 13.03125 13.46875 L 15.09375 8.71875 C 14.460938 8.253906 13.742188 8 13 8 Z M 9.5 10.28125 C 8.714844 11.511719 8.175781 13.160156 8.03125 15 L 11.5 15 Z M 16.5625 10.375 L 14.53125 15 L 17.96875 15 C 17.828125 13.203125 17.320313 11.597656 16.5625 10.375 Z M 8.03125 17 C 8.171875 18.796875 8.679688 20.402344 9.4375 21.625 L 11.46875 17 Z M 14.5 17 L 16.5 21.71875 C 17.285156 20.488281 17.824219 18.839844 17.96875 17 Z M 12.96875 18.53125 L 10.90625 23.28125 C 11.539063 23.746094 12.257813 24 13 24 C 13.714844 24 14.386719 23.742188 15 23.3125 Z"/></Svg>);
};
export default SVGLemon;
