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
const SVGSnapchatGhost = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 15.6875 4 C 15.097656 4.003906 13.949219 4.097656 12.65625 4.65625 C 11.339844 5.222656 9.914063 6.3125 9.03125 8.25 C 8.335938 9.777344 8.546875 11.683594 8.65625 13.25 C 8.496094 13.21875 8.363281 13.234375 8.125 13.125 C 7.894531 13.019531 7.664063 12.96875 7.4375 12.96875 C 7.03125 12.96875 6.683594 13.078125 6.34375 13.28125 C 6.003906 13.484375 5.609375 13.8125 5.5 14.375 C 5.433594 14.726563 5.535156 15.25 5.84375 15.625 C 6.152344 16 6.609375 16.265625 7.21875 16.5 C 7.363281 16.554688 7.472656 16.617188 7.59375 16.65625 C 7.851563 16.734375 8.132813 16.8125 8.3125 16.90625 C 8.492188 17 8.519531 17.074219 8.5 17.03125 C 8.496094 17.066406 8.472656 17.152344 8.40625 17.28125 C 8.394531 17.292969 8.386719 17.300781 8.375 17.3125 C 8.347656 17.371094 6.933594 20.445313 4.0625 20.90625 C 3.441406 21.003906 2.964844 21.574219 3 22.21875 C 3.011719 22.394531 3.066406 22.550781 3.125 22.6875 C 3.347656 23.199219 3.789063 23.527344 4.375 23.78125 C 4.847656 23.984375 5.605469 24.128906 6.4375 24.28125 C 6.453125 24.335938 6.453125 24.332031 6.46875 24.40625 C 6.507813 24.582031 6.554688 24.804688 6.625 25.03125 C 6.714844 25.328125 6.957031 25.652344 7.25 25.8125 C 7.542969 25.972656 7.796875 25.96875 7.9375 25.96875 C 8.238281 25.96875 8.425781 25.914063 8.625 25.875 C 8.953125 25.8125 9.308594 25.75 9.78125 25.75 C 10.042969 25.75 10.34375 25.765625 10.625 25.8125 C 11.015625 25.875 11.453125 26.171875 12.0625 26.59375 C 12.945313 27.203125 14.125 28 15.84375 28 C 15.863281 28 15.886719 28 15.90625 28 C 15.957031 28 16.023438 28.003906 16.0625 28 C 16.09375 28 16.125 28 16.15625 28 C 17.875 28 19.050781 27.203125 19.9375 26.59375 C 20.546875 26.175781 21.015625 25.875 21.40625 25.8125 C 21.6875 25.765625 21.957031 25.75 22.21875 25.75 C 22.683594 25.75 23.015625 25.808594 23.375 25.875 C 23.625 25.921875 23.824219 25.96875 24.0625 25.96875 L 24.09375 25.96875 C 24.324219 25.96875 24.644531 25.90625 24.90625 25.71875 C 25.167969 25.53125 25.308594 25.226563 25.375 25 C 25.441406 24.777344 25.488281 24.589844 25.53125 24.40625 C 25.546875 24.328125 25.546875 24.335938 25.5625 24.28125 C 26.394531 24.128906 27.152344 23.984375 27.625 23.78125 C 28.210938 23.527344 28.652344 23.199219 28.875 22.6875 C 28.933594 22.546875 28.988281 22.390625 29 22.21875 C 29.035156 21.585938 28.578125 21.007813 27.96875 20.90625 C 27.957031 20.90625 27.949219 20.90625 27.9375 20.90625 C 26.5 20.675781 25.449219 19.839844 24.71875 19 C 23.988281 18.160156 23.621094 17.332031 23.625 17.34375 C 23.617188 17.332031 23.59375 17.28125 23.59375 17.28125 C 23.527344 17.152344 23.503906 17.066406 23.5 17.03125 C 23.480469 17.074219 23.507813 17 23.6875 16.90625 C 23.867188 16.8125 24.148438 16.734375 24.40625 16.65625 C 24.535156 16.617188 24.667969 16.554688 24.8125 16.5 C 25.347656 16.292969 25.726563 16.089844 26.03125 15.78125 C 26.335938 15.472656 26.539063 15.011719 26.53125 14.625 C 26.515625 13.796875 25.90625 13.339844 25.3125 13.125 C 25.308594 13.125 25.316406 13.09375 25.3125 13.09375 C 25.300781 13.089844 25.292969 13.097656 25.28125 13.09375 C 25.03125 12.996094 24.792969 12.96875 24.53125 12.96875 C 24.351563 12.96875 24.085938 12.972656 23.75 13.125 C 23.578125 13.203125 23.476563 13.183594 23.34375 13.21875 C 23.453125 11.660156 23.664063 9.769531 22.96875 8.25 C 22.085938 6.3125 20.664063 5.195313 19.34375 4.625 C 18.023438 4.054688 16.828125 4 16.25 4 L 16.1875 4 C 16.1875 4 16.074219 4 15.96875 4 C 15.917969 4 15.855469 4 15.8125 4 C 15.789063 4 15.757813 4 15.75 4 C 15.742188 4 15.777344 3.992188 15.6875 4 Z M 15.75 6 C 15.78125 6 15.8125 6 15.84375 6 C 15.882813 6 15.949219 6 16 6 C 16.101563 6 16.1875 6 16.1875 6 L 16.25 6 C 16.648438 6 17.566406 6.054688 18.53125 6.46875 C 19.496094 6.882813 20.484375 7.625 21.15625 9.09375 C 21.464844 9.773438 21.480469 11.746094 21.375 13.34375 L 21.34375 13.40625 C 21.328125 13.628906 21.324219 13.851563 21.3125 14.0625 C 21.296875 14.339844 21.398438 14.613281 21.59375 14.8125 C 21.710938 14.929688 22.167969 15.140625 22.65625 15.25 C 22.292969 15.457031 21.882813 15.726563 21.65625 16.25 C 21.40625 16.828125 21.519531 17.429688 21.75 17.96875 C 21.757813 18 21.769531 18.03125 21.78125 18.0625 C 21.785156 18.070313 21.777344 18.085938 21.78125 18.09375 C 21.78125 18.097656 21.78125 18.121094 21.78125 18.125 C 21.789063 18.136719 21.804688 18.144531 21.8125 18.15625 C 21.890625 18.335938 22.304688 19.261719 23.21875 20.3125 C 23.828125 21.011719 24.738281 21.664063 25.8125 22.1875 C 25.472656 22.273438 25.320313 22.355469 24.78125 22.4375 C 24.296875 22.511719 23.929688 22.949219 23.8125 23.21875 C 23.703125 23.464844 23.675781 23.675781 23.625 23.90625 C 23.234375 23.835938 22.796875 23.75 22.21875 23.75 C 21.84375 23.75 21.441406 23.78125 21.0625 23.84375 C 20.097656 24 19.417969 24.519531 18.8125 24.9375 C 17.921875 25.546875 17.28125 26 16.15625 26 C 16.117188 26 16.078125 26.003906 16.03125 26 C 15.988281 25.996094 15.949219 25.996094 15.90625 26 C 15.886719 26 15.851563 26 15.84375 26 C 14.71875 26 14.070313 25.546875 13.1875 24.9375 C 12.578125 24.519531 11.90625 24 10.9375 23.84375 C 10.558594 23.78125 10.15625 23.75 9.78125 23.75 C 9.175781 23.75 8.742188 23.8125 8.40625 23.875 C 8.363281 23.675781 8.316406 23.480469 8.21875 23.25 C 8.105469 22.984375 7.757813 22.519531 7.21875 22.4375 C 6.695313 22.359375 6.554688 22.273438 6.21875 22.1875 C 8.851563 20.914063 10.070313 18.453125 10.1875 18.1875 C 10.1875 18.1875 10.1875 18.15625 10.1875 18.15625 C 10.1875 18.152344 10.214844 18.132813 10.21875 18.125 C 10.234375 18.097656 10.253906 18.078125 10.28125 17.96875 L 10.21875 17.9375 C 10.441406 17.398438 10.59375 16.820313 10.34375 16.25 C 10.109375 15.710938 9.683594 15.425781 9.3125 15.21875 C 9.777344 15.121094 10.242188 14.980469 10.40625 14.8125 C 10.601563 14.613281 10.703125 14.339844 10.6875 14.0625 C 10.675781 13.828125 10.671875 13.59375 10.65625 13.34375 C 10.554688 11.742188 10.535156 9.773438 10.84375 9.09375 C 11.515625 7.625 12.507813 6.882813 13.46875 6.46875 C 14.429688 6.054688 15.355469 6 15.75 6 Z"/></Svg>);
};
export default SVGSnapchatGhost;