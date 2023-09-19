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
const SVGBluetooth = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 2 C 12.886719 2 10.03125 2.742188 8.03125 4.96875 C 6.03125 7.195313 5 10.714844 5 16 C 5 21.285156 6.03125 24.804688 8.03125 27.03125 C 10.03125 29.257813 12.886719 30 16 30 C 19.113281 30 21.972656 29.257813 23.96875 27.03125 C 25.964844 24.804688 27 21.285156 27 16 C 27 10.714844 25.964844 7.195313 23.96875 4.96875 C 21.972656 2.742188 19.113281 2 16 2 Z M 16 4 C 18.808594 4 20.945313 4.617188 22.46875 6.3125 C 23.992188 8.007813 25 10.980469 25 16 C 25 21.019531 23.992188 23.992188 22.46875 25.6875 C 20.945313 27.382813 18.808594 28 16 28 C 13.191406 28 11.054688 27.382813 9.53125 25.6875 C 8.007813 23.992188 7 21.019531 7 16 C 7 10.980469 8.007813 8.007813 9.53125 6.3125 C 11.054688 4.617188 13.191406 4 16 4 Z M 15 7 L 15 13.5625 L 12.71875 11.28125 L 11.28125 12.71875 L 14.5625 16 L 11.28125 19.28125 L 12.71875 20.71875 L 15 18.4375 L 15 25 L 16.59375 23.8125 L 20.59375 20.8125 L 21.53125 20.09375 L 17.4375 16 L 21.53125 11.90625 L 20.59375 11.1875 L 16.59375 8.1875 Z M 17 11 L 18.46875 12.09375 L 17 13.5625 Z M 17 18.4375 L 18.46875 19.90625 L 17 21 Z"/></Svg>);
};
export default SVGBluetooth;
