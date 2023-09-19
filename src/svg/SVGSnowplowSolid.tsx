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
const SVGSnowplowSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 10.5 6 C 9.164063 6 7.992188 6.902344 7.625 8.1875 L 6.3125 12.71875 L 4.3125 12.0625 L 3.6875 13.9375 L 5.15625 14.4375 L 4.875 14.71875 C 4.3125 15.28125 4 16.015625 4 16.8125 L 4 19 L 3.1875 19 L 3.03125 19.8125 L 2.03125 24.8125 L 1.78125 26 L 30.21875 26 L 29.96875 24.8125 L 28.96875 19.8125 L 28.8125 19 L 28 19 L 28 16.8125 C 28 16.015625 27.6875 15.28125 27.125 14.71875 L 26.84375 14.4375 L 28.3125 13.9375 L 27.6875 12.0625 L 25.6875 12.71875 L 24.375 8.1875 C 24.007813 6.902344 22.835938 6 21.5 6 Z M 10.5 8 L 21.5 8 C 21.949219 8 22.3125 8.285156 22.4375 8.71875 L 23.65625 13 L 8.34375 13 L 9.5625 8.71875 C 9.6875 8.285156 10.050781 8 10.5 8 Z M 7.4375 15 L 24.5625 15 L 25.71875 16.125 C 25.90625 16.3125 26 16.546875 26 16.8125 L 26 19 L 24 19 L 24 17 L 20 17 L 20 19 L 12 19 L 12 17 L 8 17 L 8 19 L 6 19 L 6 16.8125 C 6 16.546875 6.09375 16.3125 6.28125 16.125 Z M 4.8125 21 L 27.1875 21 L 27.78125 24 L 4.21875 24 Z"/></Svg>);
};
export default SVGSnowplowSolid;
