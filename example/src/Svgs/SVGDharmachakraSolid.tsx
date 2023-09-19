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
const SVGDharmachakraSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 2.125 C 15.449219 2.125 15 2.574219 15 3.125 C 15 3.53125 15.25 3.875 15.59375 4.03125 C 12.542969 4.136719 9.78125 5.367188 7.71875 7.34375 C 7.769531 7.222656 7.8125 7.105469 7.8125 6.96875 C 7.8125 6.417969 7.363281 5.96875 6.8125 5.96875 C 6.261719 5.96875 5.8125 6.417969 5.8125 6.96875 C 5.8125 7.519531 6.261719 7.96875 6.8125 7.96875 C 6.949219 7.96875 7.066406 7.925781 7.1875 7.875 C 5.300781 9.921875 4.132813 12.621094 4.03125 15.59375 C 3.875 15.25 3.53125 15 3.125 15 C 2.574219 15 2.125 15.449219 2.125 16 C 2.125 16.550781 2.574219 17 3.125 17 C 3.53125 17 3.875 16.75 4.03125 16.40625 C 4.132813 19.378906 5.300781 22.078125 7.1875 24.125 C 7.066406 24.074219 6.949219 24.03125 6.8125 24.03125 C 6.261719 24.03125 5.8125 24.480469 5.8125 25.03125 C 5.8125 25.582031 6.261719 26.03125 6.8125 26.03125 C 7.363281 26.03125 7.8125 25.582031 7.8125 25.03125 C 7.8125 24.894531 7.769531 24.777344 7.71875 24.65625 C 9.78125 26.632813 12.542969 27.863281 15.59375 27.96875 C 15.25 28.125 15 28.46875 15 28.875 C 15 29.425781 15.449219 29.875 16 29.875 C 16.550781 29.875 17 29.425781 17 28.875 C 17 28.46875 16.75 28.125 16.40625 27.96875 C 19.457031 27.863281 22.21875 26.632813 24.28125 24.65625 C 24.230469 24.777344 24.1875 24.894531 24.1875 25.03125 C 24.1875 25.582031 24.636719 26.03125 25.1875 26.03125 C 25.738281 26.03125 26.1875 25.582031 26.1875 25.03125 C 26.1875 24.480469 25.738281 24.03125 25.1875 24.03125 C 25.050781 24.03125 24.933594 24.074219 24.8125 24.125 C 26.699219 22.078125 27.867188 19.378906 27.96875 16.40625 C 28.125 16.75 28.46875 17 28.875 17 C 29.425781 17 29.875 16.550781 29.875 16 C 29.875 15.449219 29.425781 15 28.875 15 C 28.46875 15 28.125 15.25 27.96875 15.59375 C 27.867188 12.621094 26.699219 9.921875 24.8125 7.875 C 24.933594 7.925781 25.050781 7.96875 25.1875 7.96875 C 25.738281 7.96875 26.1875 7.519531 26.1875 6.96875 C 26.1875 6.417969 25.738281 5.96875 25.1875 5.96875 C 24.636719 5.96875 24.1875 6.417969 24.1875 6.96875 C 24.1875 7.105469 24.230469 7.222656 24.28125 7.34375 C 22.21875 5.367188 19.457031 4.136719 16.40625 4.03125 C 16.75 3.875 17 3.53125 17 3.125 C 17 2.574219 16.550781 2.125 16 2.125 Z M 14.96875 6.0625 C 14.980469 6.0625 14.988281 6.0625 15 6.0625 L 15 12.15625 C 14.625 12.253906 14.292969 12.398438 13.96875 12.59375 L 9.625 8.28125 C 11.105469 7.058594 12.949219 6.265625 14.96875 6.0625 Z M 17 6.0625 C 19.03125 6.261719 20.886719 7.054688 22.375 8.28125 L 18.03125 12.59375 C 17.707031 12.398438 17.375 12.253906 17 12.15625 Z M 8.21875 9.71875 L 12.5625 14 C 12.378906 14.3125 12.25 14.640625 12.15625 15 L 6.0625 15 C 6.257813 13.007813 7.03125 11.191406 8.21875 9.71875 Z M 23.78125 9.71875 C 24.96875 11.191406 25.742188 13.007813 25.9375 15 L 19.84375 15 C 19.75 14.640625 19.621094 14.3125 19.4375 14 Z M 16 14 C 17.117188 14 18 14.882813 18 16 C 18 17.117188 17.117188 18 16 18 C 14.882813 18 14 17.117188 14 16 C 14 14.882813 14.882813 14 16 14 Z M 6.03125 17 L 12.125 17 C 12.21875 17.359375 12.375 17.6875 12.5625 18 L 8.21875 22.25 C 7.035156 20.78125 6.226563 18.992188 6.03125 17 Z M 19.875 17 L 25.96875 17 C 25.773438 18.992188 24.964844 20.78125 23.78125 22.25 L 19.4375 18 C 19.625 17.6875 19.78125 17.359375 19.875 17 Z M 13.96875 19.40625 C 14.289063 19.59375 14.632813 19.746094 15 19.84375 L 15 25.9375 C 12.957031 25.738281 11.117188 24.921875 9.625 23.6875 Z M 18.03125 19.40625 L 22.375 23.6875 C 20.882813 24.921875 19.042969 25.738281 17 25.9375 L 17 19.84375 C 17.367188 19.746094 17.710938 19.59375 18.03125 19.40625 Z"/></Svg>);
};
export default SVGDharmachakraSolid;
