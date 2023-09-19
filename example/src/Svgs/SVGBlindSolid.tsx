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
const SVGBlindSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 14.5 3 C 12.578125 3 11 4.578125 11 6.5 C 11 8.421875 12.578125 10 14.5 10 C 16.421875 10 18 8.421875 18 6.5 C 18 4.578125 16.421875 3 14.5 3 Z M 14.5 5 C 15.339844 5 16 5.660156 16 6.5 C 16 7.339844 15.339844 8 14.5 8 C 13.660156 8 13 7.339844 13 6.5 C 13 5.660156 13.660156 5 14.5 5 Z M 10.8125 10.25 C 10.296875 10.292969 9.816406 10.539063 9.46875 10.9375 L 7.65625 13.03125 C 7.417969 13.304688 7.25 13.640625 7.1875 14 L 6.5 17.875 L 8.46875 18.21875 L 9.15625 14.34375 L 10.96875 12.25 L 11 12.25 L 11.78125 12.40625 L 10.59375 17.78125 C 10.472656 18.339844 10.601563 18.914063 10.9375 19.375 L 16.46875 27 L 18.9375 27 L 12.5625 18.1875 L 13.75 12.78125 L 14.21875 12.875 L 14.96875 15.5 C 15.144531 16.101563 15.597656 16.589844 16.1875 16.8125 L 19.15625 17.9375 L 23.03125 26.6875 L 23.96875 26.3125 L 20 17.375 L 20.40625 16.28125 L 16.90625 14.9375 L 16.125 12.3125 C 15.917969 11.589844 15.332031 11.046875 14.59375 10.90625 L 11.34375 10.28125 C 11.171875 10.25 10.984375 10.234375 10.8125 10.25 Z M 10.46875 21.03125 L 9.96875 22.96875 L 7.0625 27 L 9.53125 27 L 11.84375 23.84375 L 11.96875 23.25 Z"/></Svg>);
};
export default SVGBlindSolid;
