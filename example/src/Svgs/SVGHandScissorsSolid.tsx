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
const SVGHandScissorsSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 11.40625 6.96875 C 10.578125 6.953125 9.890625 7.125 9.46875 7.25 C 9.457031 7.25 9.449219 7.25 9.4375 7.25 L 6.9375 8.03125 C 4.003906 8.933594 2 11.652344 2 14.71875 L 2 20 C 2 23.855469 5.144531 27 9 27 L 18.90625 27 C 20.125 27.027344 21.304688 26.3125 21.78125 25.125 C 22.082031 24.371094 22.039063 23.578125 21.75 22.875 C 22.363281 22.550781 22.882813 22.027344 23.15625 21.34375 C 23.46875 20.558594 23.417969 19.722656 23.09375 19 L 27 19 C 28.644531 19 30 17.644531 30 16 C 30 14.355469 28.644531 13 27 13 L 25.46875 13 L 25.875 12.875 C 27.449219 12.398438 28.351563 10.699219 27.875 9.125 C 27.398438 7.550781 25.699219 6.648438 24.125 7.125 L 15.6875 9.71875 C 15.613281 9.53125 15.527344 9.328125 15.40625 9.125 C 14.90625 8.289063 13.894531 7.34375 12.28125 7.0625 C 11.980469 7.011719 11.683594 6.972656 11.40625 6.96875 Z M 25.125 9 C 25.515625 9.042969 25.847656 9.3125 25.96875 9.71875 C 26.132813 10.257813 25.820313 10.804688 25.28125 10.96875 L 18.4375 13.03125 L 18.78125 14.15625 L 18.78125 15 L 27 15 C 27.566406 15 28 15.433594 28 16 C 28 16.566406 27.566406 17 27 17 L 20.40625 17 L 17.78125 15.96875 C 17.402344 15.816406 17.011719 15.742188 16.625 15.75 L 16.09375 11.65625 L 24.71875 9.03125 C 24.855469 8.988281 24.996094 8.984375 25.125 9 Z M 11.375 9.03125 C 11.566406 9.03125 11.765625 9.03125 11.9375 9.0625 C 13.011719 9.25 13.425781 9.71875 13.6875 10.15625 C 13.949219 10.59375 13.96875 10.90625 13.96875 10.90625 C 13.96875 10.925781 13.96875 10.949219 13.96875 10.96875 L 14.8125 17.40625 C 14.820313 17.4375 14.832031 17.46875 14.84375 17.5 C 14.96875 18.027344 14.652344 18.53125 14.125 18.65625 C 13.800781 18.734375 13.636719 18.691406 13.46875 18.59375 C 13.300781 18.496094 13.09375 18.289063 12.9375 17.84375 L 11.6875 13 C 11.609375 12.703125 11.398438 12.460938 11.121094 12.339844 C 10.839844 12.21875 10.519531 12.230469 10.25 12.375 L 8.59375 13.28125 C 8.109375 13.546875 7.933594 14.15625 8.203125 14.640625 C 8.46875 15.125 9.078125 15.300781 9.5625 15.03125 L 10.0625 14.75 L 11.03125 18.4375 C 11.039063 18.46875 11.050781 18.5 11.0625 18.53125 C 11.332031 19.304688 11.792969 19.925781 12.4375 20.3125 C 12.964844 20.628906 13.578125 20.75 14.1875 20.6875 C 13.871094 20.980469 13.609375 21.355469 13.4375 21.78125 C 12.980469 22.925781 13.269531 24.183594 14.09375 25 L 9 25 C 6.226563 25 4 22.773438 4 20 L 4 14.71875 C 4 12.519531 5.429688 10.585938 7.53125 9.9375 L 10.03125 9.1875 C 10.234375 9.125 10.804688 9.03125 11.375 9.03125 Z M 16.8125 17.78125 C 16.886719 17.792969 16.957031 17.78125 17.03125 17.8125 L 20.75 19.3125 C 21.273438 19.523438 21.523438 20.070313 21.3125 20.59375 C 21.101563 21.117188 20.523438 21.367188 20 21.15625 L 16.28125 19.6875 C 16.226563 19.667969 16.203125 19.621094 16.15625 19.59375 C 16.550781 19.085938 16.804688 18.445313 16.8125 17.78125 Z M 16.1875 21.90625 C 16.320313 21.90625 16.460938 21.917969 16.59375 21.96875 L 17.9375 22.5 L 19.25 23.03125 L 19.375 23.0625 C 19.898438 23.273438 20.148438 23.851563 19.9375 24.375 C 19.785156 24.757813 19.445313 24.980469 19.0625 25 C 19.050781 25 19.042969 25 19.03125 25 C 18.898438 25.003906 18.757813 24.988281 18.625 24.9375 L 15.84375 23.8125 C 15.320313 23.601563 15.070313 23.023438 15.28125 22.5 C 15.386719 22.238281 15.578125 22.070313 15.8125 21.96875 C 15.929688 21.917969 16.054688 21.90625 16.1875 21.90625 Z"/></Svg>);
};
export default SVGHandScissorsSolid;
