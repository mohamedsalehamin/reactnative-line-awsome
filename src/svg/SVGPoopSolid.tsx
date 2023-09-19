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
const SVGPoopSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 21.125 4 L 19.46875 4.625 C 17.605469 5.328125 16.394531 6.054688 15.59375 6.8125 C 14.792969 7.570313 14.414063 8.402344 14.21875 9.03125 C 14.023438 9.660156 13.945313 10.027344 13.8125 10.21875 C 13.695313 10.386719 13.492188 10.589844 12.84375 10.78125 C 12.832031 10.773438 12.753906 10.722656 12.75 10.71875 L 12.71875 10.71875 C 12.21875 10.390625 11.648438 10.1875 11.09375 10.09375 C 9.429688 9.8125 7.6875 10.539063 6.71875 12.09375 L 6.6875 12.125 C 6.09375 13.132813 5.769531 14.410156 5.9375 15.75 C 5.988281 16.15625 6.089844 16.570313 6.25 16.96875 C 4.785156 17.054688 3.410156 17.878906 2.625 19.21875 L 2.59375 19.21875 C 1.375 21.371094 2.117188 24.148438 4.28125 25.375 L 4.3125 25.375 L 4.3125 25.40625 C 4.425781 25.460938 5.757813 26.164063 7.75 26.78125 C 9.742188 27.398438 12.53125 28 16 28 C 19.46875 28 22.253906 27.421875 24.25 26.8125 C 26.222656 26.207031 27.332031 25.613281 27.71875 25.375 C 27.722656 25.371094 27.746094 25.347656 27.75 25.34375 C 29.882813 24.105469 30.601563 21.378906 29.375 19.28125 L 29.40625 19.28125 C 28.832031 18.265625 27.933594 17.574219 26.90625 17.25 C 26.90625 17.246094 26.875 17.253906 26.875 17.25 C 26.558594 16.109375 25.808594 15.132813 24.78125 14.5625 C 24.917969 14.125 25 13.617188 25 13 C 25 11.839844 24.585938 10.863281 24.03125 10.15625 C 23.476563 9.449219 22.808594 8.976563 22.25 8.53125 C 21.691406 8.085938 21.242188 7.675781 21 7.28125 C 20.757813 6.886719 20.636719 6.511719 20.78125 5.75 Z M 18.875 7.1875 C 18.96875 7.605469 19.109375 8.011719 19.3125 8.34375 C 19.785156 9.113281 20.417969 9.601563 21 10.0625 C 21.582031 10.523438 22.125 10.964844 22.46875 11.40625 C 22.8125 11.847656 23 12.269531 23 13 C 23 13.480469 22.945313 13.773438 22.875 14 C 20.148438 13.601563 17.761719 12.914063 16 12.25 C 15.648438 12.117188 15.339844 11.976563 15.03125 11.84375 C 15.199219 11.695313 15.347656 11.519531 15.46875 11.34375 C 15.917969 10.691406 15.980469 10.058594 16.125 9.59375 C 16.269531 9.128906 16.433594 8.757813 16.96875 8.25 C 17.289063 7.945313 18.179688 7.550781 18.875 7.1875 Z M 10.3125 11.96875 C 10.753906 11.964844 11.207031 12.101563 11.625 12.375 C 12.175781 12.757813 13.355469 13.359375 15.3125 14.09375 C 17.289063 14.835938 19.933594 15.625 23.03125 16.03125 L 23.0625 16.03125 C 23.757813 16.117188 24.332031 16.527344 24.6875 17.125 C 24.332031 17.191406 23.964844 17.285156 23.625 17.4375 C 23.574219 17.460938 23.519531 17.445313 23.46875 17.46875 C 23.429688 17.480469 23.421875 17.492188 23.40625 17.5 C 23.375 17.515625 23.34375 17.515625 23.3125 17.53125 C 23.285156 17.542969 23.253906 17.578125 23.21875 17.59375 C 23.132813 17.632813 23.007813 17.683594 22.84375 17.75 C 22.519531 17.886719 22.035156 18.0625 21.40625 18.25 C 20.148438 18.621094 18.320313 19 16 19 C 14.277344 19 12.804688 18.804688 11.65625 18.5625 C 11.296875 18.476563 10.949219 18.382813 10.625 18.28125 C 9.972656 18.074219 9.367188 17.777344 9.375 17.78125 C 8.40625 17.128906 8.011719 16.34375 7.90625 15.5 C 7.800781 14.65625 8.035156 13.757813 8.40625 13.125 C 8.875 12.371094 9.578125 11.976563 10.3125 11.96875 Z M 6.28125 18.9375 C 6.757813 18.902344 7.257813 19.019531 7.71875 19.28125 C 7.726563 19.285156 7.742188 19.308594 7.75 19.3125 C 7.804688 19.34375 7.875 19.375 7.9375 19.40625 C 8.0625 19.472656 8.207031 19.539063 8.40625 19.625 C 8.804688 19.796875 9.355469 19.984375 10.0625 20.1875 C 10.3125 20.257813 10.617188 20.335938 10.90625 20.40625 C 11.011719 20.433594 11.109375 20.472656 11.21875 20.5 C 11.230469 20.503906 11.238281 20.496094 11.25 20.5 C 11.648438 20.601563 12.042969 20.691406 12.4375 20.75 L 12.4375 20.71875 C 13.480469 20.890625 14.664063 21 16 21 C 18.535156 21 20.558594 20.574219 21.96875 20.15625 C 22.675781 19.945313 23.242188 19.722656 23.625 19.5625 C 23.765625 19.503906 23.84375 19.449219 23.9375 19.40625 L 24.03125 19.40625 L 24.0625 19.375 L 24.25 19.28125 C 25.492188 18.617188 26.984375 19.011719 27.6875 20.25 L 27.6875 20.28125 C 28.371094 21.449219 27.976563 22.960938 26.75 23.65625 L 26.71875 23.65625 L 26.71875 23.6875 C 26.640625 23.734375 25.515625 24.347656 23.6875 24.90625 C 21.859375 25.464844 19.25 26 16 26 C 12.75 26 10.144531 25.472656 8.3125 24.90625 C 6.503906 24.34375 5.597656 23.832031 5.25 23.65625 C 5.234375 23.648438 5.230469 23.632813 5.21875 23.625 C 4.023438 22.917969 3.652344 21.441406 4.34375 20.21875 C 4.691406 19.636719 5.210938 19.203125 5.8125 19.03125 C 5.964844 18.988281 6.121094 18.949219 6.28125 18.9375 Z"/></Svg>);
};
export default SVGPoopSolid;
