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
const SVGHikingSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16.5 4 C 14.578125 4 13 5.578125 13 7.5 C 13 9.421875 14.578125 11 16.5 11 C 18.421875 11 20 9.421875 20 7.5 C 20 5.578125 18.421875 4 16.5 4 Z M 16.5 6 C 17.339844 6 18 6.660156 18 7.5 C 18 8.339844 17.339844 9 16.5 9 C 15.660156 9 15 8.339844 15 7.5 C 15 6.660156 15.660156 6 16.5 6 Z M 11.09375 10.5 C 10.835938 10.488281 10.570313 10.488281 10.3125 10.53125 C 9.792969 10.617188 9.28125 10.847656 8.84375 11.21875 C 7.96875 11.960938 7.460938 13.140625 7.09375 14.875 C 6.976563 15.433594 7.011719 16.011719 7.28125 16.46875 C 7.550781 16.925781 7.972656 17.203125 8.34375 17.375 C 9.089844 17.71875 9.820313 17.785156 10.21875 17.875 L 10.6875 15.9375 C 10.085938 15.800781 9.46875 15.691406 9.1875 15.5625 C 9.046875 15.496094 9.027344 15.457031 9.03125 15.46875 C 9.023438 15.445313 9.011719 15.382813 9.03125 15.28125 C 9.351563 13.765625 9.816406 13.035156 10.15625 12.75 C 10.496094 12.464844 10.777344 12.417969 11.40625 12.5625 L 11.84375 10.59375 C 11.597656 10.539063 11.351563 10.511719 11.09375 10.5 Z M 12.84375 10.8125 L 11.375 17.5 C 11.210938 18.25 11.519531 19.0625 12.125 19.53125 L 15.65625 22.28125 L 16.53125 28 L 18.5625 28 L 17.625 21.96875 C 17.546875 21.460938 17.28125 21.003906 16.875 20.6875 L 13.34375 17.9375 L 14.375 13.28125 L 15.40625 13.5625 L 17.1875 15.28125 C 17.765625 15.839844 18.636719 15.972656 19.375 15.65625 L 21 14.96875 L 21 28 L 23 28 L 23 11 L 21 11 L 21 12.8125 L 18.59375 13.84375 L 16.8125 12.125 C 16.566406 11.886719 16.265625 11.710938 15.9375 11.625 Z M 11.53125 20.625 L 10.6875 23.15625 L 8.1875 28 L 10.4375 28 L 12.46875 24.09375 C 12.519531 23.996094 12.5625 23.882813 12.59375 23.78125 L 13.21875 21.9375 Z"/></Svg>);
};
export default SVGHikingSolid;
