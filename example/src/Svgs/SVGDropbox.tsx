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
const SVGDropbox = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 11.78125 4.46875 L 11.15625 4.875 L 4.46875 9.1875 L 3.25 9.96875 L 4.40625 10.84375 L 7.90625 13.5 L 4.40625 16.15625 L 3.1875 17.0625 L 4.5 17.8125 L 8.125 19.9375 L 8.125 23.28125 L 8.5625 23.5625 L 15.4375 28.09375 L 16 28.46875 L 16.5625 28.09375 L 23.4375 23.625 L 23.875 23.3125 L 23.875 19.96875 L 27.5 17.8125 L 28.71875 17.09375 L 27.65625 16.1875 L 24.3125 13.34375 L 27.625 10.625 L 28.71875 9.75 L 27.53125 9 L 21.03125 4.875 L 20.40625 4.5 L 19.84375 4.96875 L 16 8.125 L 12.34375 4.96875 Z M 20.59375 6.9375 L 25.3125 9.96875 L 22.65625 12.125 L 17.75 9.28125 Z M 11.59375 6.96875 L 14.34375 9.3125 L 9.625 12.3125 L 6.71875 10.09375 Z M 16 10.625 L 20.8125 13.375 L 16 16.375 L 11.46875 13.53125 Z M 22.65625 14.5625 L 25.28125 16.8125 L 22.46875 18.5 C 22.378906 18.539063 22.292969 18.59375 22.21875 18.65625 L 20.46875 19.6875 L 17.75 17.625 Z M 9.625 14.71875 L 14.25 17.625 L 11.625 19.6875 L 6.78125 16.84375 Z M 16.03125 18.8125 L 19.78125 21.6875 L 20.34375 22.09375 L 20.90625 21.75 L 21.875 21.15625 L 21.875 22.21875 L 16 26.0625 L 10.125 22.1875 L 10.125 21.125 L 11.1875 21.75 L 11.78125 22.09375 L 12.3125 21.6875 Z"/></Svg>);
};
export default SVGDropbox;
