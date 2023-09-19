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
const SVGForumbee = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 2.96875 C 8.8125 2.96875 2.96875 8.8125 2.96875 16 C 2.96875 16.988281 3.070313 17.949219 3.28125 18.875 C 5.976563 11.859375 11.421875 5.972656 18.71875 3.25 C 17.835938 3.0625 16.9375 2.96875 16 2.96875 Z M 23.375 5.28125 C 19.878906 6.292969 9.457031 10.335938 5.28125 23.40625 C 6.007813 24.449219 6.882813 25.398438 7.875 26.1875 C 12.363281 12.628906 22.628906 8.832031 26.1875 7.90625 C 25.390625 6.902344 24.429688 6.011719 23.375 5.28125 Z M 27.96875 10.875 C 16.382813 14.601563 12.15625 24.324219 10.9375 27.96875 C 11.980469 28.40625 13.089844 28.71875 14.25 28.875 C 15.476563 25.785156 19.386719 18.054688 28.875 14.1875 C 28.714844 13.027344 28.414063 11.917969 27.96875 10.875 Z M 28.875 17.84375 C 27.675781 18.441406 25.707031 19.652344 23.03125 22.15625 C 19.992188 25.003906 18.574219 27.460938 17.96875 28.84375 C 19.707031 28.574219 21.34375 27.976563 22.78125 27.09375 L 29 29 C 29 29 27.765625 24.402344 27.15625 22.65625 C 28.023438 21.207031 28.625 19.585938 28.875 17.84375 Z"/></Svg>);
};
export default SVGForumbee;
