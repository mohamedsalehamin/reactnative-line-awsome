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
const SVGXbox = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 16.09375 6 16.1875 6.027344 16.28125 6.03125 C 16.535156 6.039063 16.78125 6.039063 17.03125 6.0625 C 17.0625 6.066406 17.09375 6.058594 17.125 6.0625 C 17.21875 6.074219 17.3125 6.082031 17.40625 6.09375 C 17.46875 6.101563 17.53125 6.113281 17.59375 6.125 C 17.980469 6.1875 18.347656 6.269531 18.71875 6.375 C 19.109375 6.484375 19.507813 6.625 19.875 6.78125 C 19.882813 6.785156 19.898438 6.777344 19.90625 6.78125 C 20.070313 6.851563 20.21875 6.953125 20.375 7.03125 C 20.582031 7.132813 20.800781 7.226563 21 7.34375 C 21.054688 7.375 21.105469 7.40625 21.15625 7.4375 C 21.222656 7.460938 21.304688 7.511719 21.40625 7.59375 C 21.410156 7.597656 21.402344 7.621094 21.40625 7.625 C 19.757813 6.675781 16.03125 9.6875 16.03125 9.6875 C 14.554688 8.558594 13.214844 7.792969 12.21875 7.53125 C 11.570313 7.367188 11.078125 7.402344 10.75 7.53125 C 10.910156 7.429688 11.050781 7.308594 11.21875 7.21875 C 11.230469 7.210938 11.238281 7.195313 11.25 7.1875 C 11.503906 7.042969 11.765625 6.929688 12.03125 6.8125 C 12.050781 6.804688 12.074219 6.789063 12.09375 6.78125 C 12.28125 6.699219 12.464844 6.628906 12.65625 6.5625 C 12.828125 6.5 13.011719 6.457031 13.1875 6.40625 C 13.445313 6.332031 13.703125 6.242188 13.96875 6.1875 C 14.050781 6.171875 14.136719 6.171875 14.21875 6.15625 C 14.433594 6.117188 14.652344 6.085938 14.875 6.0625 C 14.90625 6.058594 14.9375 6.066406 14.96875 6.0625 C 15.304688 6.027344 15.652344 6 16 6 Z M 22 8.59375 C 22.292969 8.59375 22.636719 8.65625 22.9375 8.84375 C 22.976563 8.878906 23.027344 8.902344 23.0625 8.9375 C 23.117188 8.984375 23.167969 9.035156 23.21875 9.09375 C 23.359375 9.238281 23.496094 9.378906 23.625 9.53125 C 23.652344 9.566406 23.691406 9.589844 23.71875 9.625 C 23.796875 9.71875 23.863281 9.808594 23.9375 9.90625 C 24.058594 10.066406 24.167969 10.238281 24.28125 10.40625 C 24.460938 10.671875 24.628906 10.933594 24.78125 11.21875 C 24.925781 11.480469 25.070313 11.753906 25.1875 12.03125 C 25.195313 12.050781 25.210938 12.074219 25.21875 12.09375 C 25.25 12.167969 25.28125 12.238281 25.3125 12.3125 C 25.402344 12.542969 25.488281 12.792969 25.5625 13.03125 C 25.660156 13.34375 25.746094 13.644531 25.8125 13.96875 C 25.820313 14.011719 25.835938 14.050781 25.84375 14.09375 C 25.960938 14.707031 26 15.351563 26 16 C 26 18.421875 25.144531 20.648438 23.71875 22.375 C 23.636719 22.472656 23.554688 22.5625 23.46875 22.65625 C 23.945313 20.140625 23.070313 18.285156 21.65625 15.96875 C 20.179688 13.621094 17.84375 11.3125 17.84375 11.3125 C 19.925781 9.355469 21.652344 8.722656 22 8.59375 Z M 9.875 8.65625 C 10.527344 8.699219 11.203125 8.953125 11.8125 9.34375 L 11.875 9.375 C 13.175781 10.15625 14.21875 11.3125 14.21875 11.3125 C 13.089844 12.398438 10.378906 15.6875 9.46875 17.90625 C 8.125 21.296875 8.75 22.78125 8.75 22.78125 C 8.921875 20.910156 11.691406 17.605469 12.6875 16.5625 C 13.207031 15.953125 14.21875 14.96875 15 14.1875 C 15.5625 13.578125 16.03125 13.09375 16.03125 13.09375 C 16.335938 13.398438 16.644531 13.707031 16.90625 13.96875 C 18.164063 15.230469 19.101563 16.230469 19.75 16.96875 C 20.402344 17.707031 21.539063 19.097656 21.84375 19.53125 C 23.148438 21.386719 23.394531 22.644531 23.40625 22.71875 C 23.296875 22.839844 23.179688 22.945313 23.0625 23.0625 C 22.835938 23.289063 22.621094 23.515625 22.375 23.71875 C 22.128906 23.921875 21.859375 24.101563 21.59375 24.28125 C 21.328125 24.460938 21.066406 24.628906 20.78125 24.78125 C 20.5625 24.898438 20.351563 25.023438 20.125 25.125 C 20.082031 25.144531 20.042969 25.167969 20 25.1875 C 19.726563 25.304688 19.441406 25.40625 19.15625 25.5 C 19.132813 25.507813 19.117188 25.523438 19.09375 25.53125 C 18.835938 25.613281 18.578125 25.6875 18.3125 25.75 C 18.21875 25.773438 18.128906 25.792969 18.03125 25.8125 C 17.839844 25.851563 17.632813 25.847656 17.4375 25.875 C 16.980469 25.941406 16.507813 26 16.03125 26 C 15.675781 26 15.3125 25.972656 14.96875 25.9375 C 14.308594 25.867188 13.675781 25.753906 13.0625 25.5625 C 13.054688 25.558594 13.039063 25.566406 13.03125 25.5625 C 12.105469 25.269531 11.226563 24.816406 10.4375 24.28125 C 10.429688 24.277344 10.414063 24.285156 10.40625 24.28125 C 9.882813 23.925781 9.414063 23.507813 8.96875 23.0625 C 7.164063 21.253906 6.0625 18.761719 6.0625 16 C 6.0625 13.347656 7.101563 10.96875 8.75 9.1875 C 8.75 9.1875 9.179688 8.65625 9.875 8.65625 Z"/></Svg>);
};
export default SVGXbox;
