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
const SVGSadTear = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 21.535156 6 26 10.464844 26 16 C 26 21.535156 21.535156 26 16 26 C 10.464844 26 6 21.535156 6 16 C 6 10.464844 10.464844 6 16 6 Z M 12 10 C 10.761719 10 9.820313 10.691406 9.1875 11.28125 C 8.554688 11.871094 8.15625 12.4375 8.15625 12.4375 L 9.84375 13.5625 C 9.84375 13.5625 10.089844 13.128906 10.53125 12.71875 C 10.972656 12.308594 11.546875 12 12 12 L 15 12 L 15 10 Z M 17 10 L 17 12 L 20 12 C 20.453125 12 21.027344 12.308594 21.46875 12.71875 C 21.910156 13.128906 22.15625 13.5625 22.15625 13.5625 L 23.84375 12.4375 C 23.84375 12.4375 23.445313 11.871094 22.8125 11.28125 C 22.179688 10.691406 21.238281 10 20 10 Z M 8.5 14 C 8.5 14 7 16.671875 7 17.5 C 7 18.328125 7.671875 19 8.5 19 C 9.328125 19 10 18.328125 10 17.5 C 10 16.671875 8.5 14 8.5 14 Z M 16 16 C 13.664063 16 12.066406 17.234375 11.1875 18.40625 C 10.308594 19.578125 10.03125 20.75 10.03125 20.75 L 9.71875 22 L 22.28125 22 L 21.96875 20.75 C 21.96875 20.75 21.691406 19.578125 20.8125 18.40625 C 19.933594 17.234375 18.335938 16 16 16 Z M 16 18 C 17.671875 18 18.566406 18.765625 19.1875 19.59375 C 19.339844 19.800781 19.300781 19.808594 19.40625 20 L 12.59375 20 C 12.699219 19.808594 12.660156 19.800781 12.8125 19.59375 C 13.433594 18.765625 14.328125 18 16 18 Z"/></Svg>);
};
export default SVGSadTear;
