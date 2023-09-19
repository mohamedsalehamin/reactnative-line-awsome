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
const SVGWalkingSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16.5 4 C 14.578125 4 13 5.578125 13 7.5 C 13 9.421875 14.578125 11 16.5 11 C 18.421875 11 20 9.421875 20 7.5 C 20 5.578125 18.421875 4 16.5 4 Z M 16.5 6 C 17.339844 6 18 6.660156 18 7.5 C 18 8.339844 17.339844 9 16.5 9 C 15.660156 9 15 8.339844 15 7.5 C 15 6.660156 15.660156 6 16.5 6 Z M 12.8125 11.25 C 12.296875 11.292969 11.816406 11.539063 11.46875 11.9375 L 9.65625 14.03125 C 9.417969 14.304688 9.25 14.640625 9.1875 15 L 8.5 18.875 L 10.46875 19.21875 L 11.15625 15.34375 L 12.96875 13.25 L 13 13.25 L 13.78125 13.40625 L 12.59375 18.78125 C 12.472656 19.339844 12.601563 19.914063 12.9375 20.375 L 18.46875 28 L 20.9375 28 L 14.5625 19.1875 L 15.75 13.78125 L 16.21875 13.875 L 16.96875 16.5 C 17.144531 17.101563 17.597656 17.589844 18.1875 17.8125 L 21.71875 19.15625 L 22.40625 17.28125 L 18.90625 15.9375 L 18.125 13.3125 C 17.917969 12.589844 17.332031 12.046875 16.59375 11.90625 L 13.34375 11.28125 C 13.171875 11.25 12.984375 11.234375 12.8125 11.25 Z M 12.46875 22.03125 L 11.96875 23.96875 L 9.0625 28 L 11.53125 28 L 13.84375 24.84375 L 13.96875 24.25 Z"/></Svg>);
};
export default SVGWalkingSolid;
