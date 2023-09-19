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
const SVGHammerSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 7.0625 2 L 9.5625 3.8125 C 14.277344 7.210938 15.707031 10.542969 16 11.28125 L 15.09375 12.1875 L 15.09375 12.21875 L 14.40625 12.90625 L 2.6875 25.0625 L 2 25.78125 L 6.25 30.03125 L 6.96875 29.28125 L 19.375 16.4375 L 19.6875 16.0625 L 19.78125 16 L 20.75 15.65625 L 20.9375 15.84375 L 20.5625 16.75 L 20.28125 17.375 L 23.59375 20.6875 L 29.96875 14.3125 L 27.125 11.46875 L 26.65625 11.03125 L 26.0625 11.25 L 25.15625 11.59375 L 24.9375 11.375 L 25.25 10.375 L 25.375 9.96875 L 25.1875 9.59375 C 25.1875 9.59375 24.132813 7.636719 21.75 5.75 C 19.367188 3.863281 15.59375 2 10.15625 2 Z M 13.09375 4.25 C 16.460938 4.75 18.890625 6.015625 20.53125 7.3125 C 22.296875 8.710938 23 9.84375 23.21875 10.21875 L 22.84375 11.375 L 22.6875 11.9375 L 23.09375 12.375 L 24.6875 13.96875 L 25.3125 13.71875 L 26.1875 13.375 L 27.125 14.3125 L 23.59375 17.84375 L 22.65625 16.90625 L 23.03125 16 L 23.3125 15.375 L 22.8125 14.90625 L 21.6875 13.78125 L 21.25 13.3125 L 20.625 13.53125 L 18.84375 14.25 L 18.65625 14.3125 L 17.9375 13.625 L 17.21875 12.90625 L 18.375 11.75 L 18.15625 11.15625 C 18.15625 11.15625 16.8125 7.761719 13.09375 4.25 Z M 15.8125 14.3125 L 17.25 15.75 L 6.21875 27.15625 L 4.8125 25.75 Z"/></Svg>);
};
export default SVGHammerSolid;
