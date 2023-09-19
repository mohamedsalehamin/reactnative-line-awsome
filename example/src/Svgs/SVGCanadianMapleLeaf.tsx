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
const SVGCanadianMapleLeaf = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 3.03125 L 15.28125 3.75 L 13.09375 5.96875 L 10.90625 6.65625 L 10 6.9375 L 10.21875 7.84375 L 11.40625 12.65625 L 9.6875 11.46875 L 9 11 L 6.78125 13.21875 L 3.84375 14.53125 L 2.96875 14.9375 L 3.3125 15.8125 L 4.4375 18.65625 L 4.125 21.03125 L 4 22.03125 L 11 22.90625 L 11 25 L 15 25 L 15 29 L 17 29 L 17 25 L 21 25 L 21 22.90625 L 28 22.03125 L 27.875 21.03125 L 27.5625 18.65625 L 28.6875 15.8125 L 29.03125 14.9375 L 28.15625 14.53125 L 25.21875 13.21875 L 23 11 L 22.3125 11.46875 L 20.59375 12.65625 L 21.78125 7.84375 L 22 6.9375 L 21.09375 6.65625 L 18.90625 5.96875 L 16.71875 3.75 Z M 16 5.875 L 17.875 7.75 L 18.09375 7.8125 L 19.625 8.28125 L 18.03125 14.75 L 17.40625 17.34375 L 19.5625 15.8125 L 22.75 13.59375 L 23.90625 14.78125 L 24.0625 14.90625 L 24.21875 15 L 26.46875 16 L 25.625 18.15625 L 25.53125 18.40625 L 25.5625 18.65625 L 25.75 20.28125 L 19.875 21 L 19 21.125 L 19 23 L 13 23 L 13 21.125 L 12.125 21 L 6.25 20.28125 L 6.4375 18.65625 L 6.46875 18.40625 L 6.375 18.15625 L 5.53125 16 L 7.78125 15 L 7.9375 14.90625 L 8.09375 14.78125 L 9.25 13.59375 L 12.4375 15.8125 L 14.59375 17.34375 L 13.96875 14.75 L 12.375 8.28125 L 13.90625 7.8125 L 14.125 7.75 Z"/></Svg>);
};
export default SVGCanadianMapleLeaf;
