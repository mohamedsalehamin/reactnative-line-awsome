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
const SVGSnowflake = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 15 3 L 15 6.5625 L 12.71875 4.28125 L 11.28125 5.71875 L 15 9.4375 L 15 14.25 L 10.875 11.78125 L 9.5625 6.6875 L 7.625 7.1875 L 8.4375 10.3125 L 5.375 8.46875 L 4.34375 10.15625 L 7.46875 12.03125 L 4.25 12.84375 L 4.75 14.78125 L 9.875 13.46875 L 14.09375 16 L 9.875 18.53125 L 4.75 17.21875 L 4.25 19.15625 L 7.46875 19.96875 L 4.34375 21.84375 L 5.375 23.53125 L 8.4375 21.6875 L 7.625 24.8125 L 9.5625 25.3125 L 10.875 20.21875 L 15 17.75 L 15 22.5625 L 11.28125 26.28125 L 12.71875 27.71875 L 15 25.4375 L 15 29 L 17 29 L 17 25.4375 L 19.28125 27.71875 L 20.71875 26.28125 L 17 22.5625 L 17 17.75 L 21.125 20.21875 L 22.4375 25.3125 L 24.375 24.8125 L 23.5625 21.6875 L 26.625 23.53125 L 27.65625 21.84375 L 24.53125 19.96875 L 27.75 19.15625 L 27.25 17.21875 L 22.125 18.53125 L 17.90625 16 L 22.125 13.46875 L 27.25 14.78125 L 27.75 12.84375 L 24.53125 12.03125 L 27.65625 10.15625 L 26.625 8.46875 L 23.5625 10.3125 L 24.375 7.1875 L 22.4375 6.6875 L 21.125 11.78125 L 17 14.25 L 17 9.4375 L 20.71875 5.71875 L 19.28125 4.28125 L 17 6.5625 L 17 3 Z"/></Svg>);
};
export default SVGSnowflake;
