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
const SVGPawSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 12.5 5 C 11.429688 5 10.5 5.609375 9.90625 6.4375 C 9.3125 7.265625 9 8.339844 9 9.5 C 9 10.660156 9.3125 11.734375 9.90625 12.5625 C 10.5 13.390625 11.429688 14 12.5 14 C 13.570313 14 14.5 13.390625 15.09375 12.5625 C 15.6875 11.734375 16 10.660156 16 9.5 C 16 8.339844 15.6875 7.265625 15.09375 6.4375 C 14.5 5.609375 13.570313 5 12.5 5 Z M 16 9.5 C 16 10.660156 16.3125 11.734375 16.90625 12.5625 C 17.5 13.390625 18.429688 14 19.5 14 C 20.570313 14 21.5 13.390625 22.09375 12.5625 C 22.6875 11.734375 23 10.660156 23 9.5 C 23 8.339844 22.6875 7.265625 22.09375 6.4375 C 21.5 5.609375 20.570313 5 19.5 5 C 18.429688 5 17.5 5.609375 16.90625 6.4375 C 16.3125 7.265625 16 8.339844 16 9.5 Z M 12.5 7 C 12.8125 7 13.15625 7.15625 13.46875 7.59375 C 13.78125 8.03125 14 8.726563 14 9.5 C 14 10.273438 13.78125 10.96875 13.46875 11.40625 C 13.15625 11.84375 12.8125 12 12.5 12 C 12.1875 12 11.84375 11.84375 11.53125 11.40625 C 11.21875 10.96875 11 10.273438 11 9.5 C 11 8.726563 11.21875 8.03125 11.53125 7.59375 C 11.84375 7.15625 12.1875 7 12.5 7 Z M 19.5 7 C 19.8125 7 20.15625 7.15625 20.46875 7.59375 C 20.78125 8.03125 21 8.726563 21 9.5 C 21 10.273438 20.78125 10.96875 20.46875 11.40625 C 20.15625 11.84375 19.8125 12 19.5 12 C 19.1875 12 18.84375 11.84375 18.53125 11.40625 C 18.21875 10.96875 18 10.273438 18 9.5 C 18 8.726563 18.21875 8.03125 18.53125 7.59375 C 18.84375 7.15625 19.1875 7 19.5 7 Z M 7.5 12 C 6.429688 12 5.5 12.609375 4.90625 13.4375 C 4.3125 14.265625 4 15.339844 4 16.5 C 4 17.660156 4.3125 18.734375 4.90625 19.5625 C 5.5 20.390625 6.429688 21 7.5 21 C 8.570313 21 9.5 20.390625 10.09375 19.5625 C 10.6875 18.734375 11 17.660156 11 16.5 C 11 15.339844 10.6875 14.265625 10.09375 13.4375 C 9.5 12.609375 8.570313 12 7.5 12 Z M 24.5 12 C 23.429688 12 22.5 12.609375 21.90625 13.4375 C 21.3125 14.265625 21 15.339844 21 16.5 C 21 17.660156 21.3125 18.734375 21.90625 19.5625 C 22.5 20.390625 23.429688 21 24.5 21 C 25.570313 21 26.5 20.390625 27.09375 19.5625 C 27.6875 18.734375 28 17.660156 28 16.5 C 28 15.339844 27.6875 14.265625 27.09375 13.4375 C 26.5 12.609375 25.570313 12 24.5 12 Z M 7.5 14 C 7.8125 14 8.15625 14.15625 8.46875 14.59375 C 8.78125 15.03125 9 15.726563 9 16.5 C 9 17.273438 8.78125 17.96875 8.46875 18.40625 C 8.15625 18.84375 7.8125 19 7.5 19 C 7.1875 19 6.84375 18.84375 6.53125 18.40625 C 6.21875 17.96875 6 17.273438 6 16.5 C 6 15.726563 6.21875 15.03125 6.53125 14.59375 C 6.84375 14.15625 7.1875 14 7.5 14 Z M 24.5 14 C 24.8125 14 25.15625 14.15625 25.46875 14.59375 C 25.78125 15.03125 26 15.726563 26 16.5 C 26 17.273438 25.78125 17.96875 25.46875 18.40625 C 25.15625 18.84375 24.8125 19 24.5 19 C 24.1875 19 23.84375 18.84375 23.53125 18.40625 C 23.21875 17.96875 23 17.273438 23 16.5 C 23 15.726563 23.21875 15.03125 23.53125 14.59375 C 23.84375 14.15625 24.1875 14 24.5 14 Z M 16 16 C 14.667969 16 13.738281 16.867188 13.28125 17.625 C 12.824219 18.382813 12.546875 19.015625 12.28125 19.28125 C 12.125 19.4375 11.160156 19.800781 10.15625 20.3125 C 9.652344 20.570313 9.144531 20.914063 8.71875 21.4375 C 8.292969 21.960938 8 22.6875 8 23.5 C 8 25.421875 9.578125 27 11.5 27 C 12.367188 27 13.269531 26.722656 14.15625 26.46875 C 15.042969 26.214844 16 26 16 26 C 16 26 16.957031 26.214844 17.84375 26.46875 C 18.730469 26.722656 19.632813 27 20.5 27 C 22.421875 27 24 25.421875 24 23.5 C 24 22.707031 23.707031 21.980469 23.28125 21.46875 C 22.855469 20.957031 22.34375 20.640625 21.84375 20.375 C 20.84375 19.84375 19.859375 19.421875 19.71875 19.28125 C 19.480469 19.042969 19.210938 18.390625 18.75 17.625 C 18.289063 16.859375 17.339844 16 16 16 Z M 16 18 C 16.660156 18 16.734375 18.160156 17.03125 18.65625 C 17.328125 19.152344 17.554688 19.992188 18.28125 20.71875 C 19.105469 21.542969 20.148438 21.722656 20.90625 22.125 C 21.285156 22.328125 21.578125 22.542969 21.75 22.75 C 21.921875 22.957031 22 23.148438 22 23.5 C 22 24.339844 21.339844 25 20.5 25 C 20.210938 25 19.277344 24.777344 18.40625 24.53125 C 17.535156 24.285156 16.816406 24 16 24 C 15.183594 24 14.464844 24.285156 13.59375 24.53125 C 12.722656 24.777344 11.789063 25 11.5 25 C 10.660156 25 10 24.339844 10 23.5 C 10 23.097656 10.082031 22.890625 10.25 22.6875 C 10.417969 22.484375 10.722656 22.285156 11.09375 22.09375 C 11.839844 21.714844 12.875 21.5625 13.71875 20.71875 C 14.453125 19.984375 14.675781 19.117188 14.96875 18.625 C 15.261719 18.132813 15.332031 18 16 18 Z"/></Svg>);
};
export default SVGPawSolid;
