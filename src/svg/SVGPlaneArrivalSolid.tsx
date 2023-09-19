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
const SVGPlaneArrivalSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 3.40625 3.96875 L 3.34375 5.25 L 3 14.03125 L 2.96875 14.8125 L 3.71875 15.03125 L 10.125 16.96875 L 4.6875 20.75 L 3.15625 21.8125 L 4.875 22.5 L 7.71875 23.625 L 8.09375 23.78125 L 8.46875 23.625 L 18.46875 19.46875 L 24.875 21.40625 C 26.5625 21.914063 28.367188 20.933594 28.875 19.25 C 29.382813 17.5625 28.402344 15.757813 26.71875 15.25 L 21.03125 13.5 L 17.25 7.25 L 17.03125 6.90625 L 16.65625 6.78125 L 14 6.0625 L 12.53125 5.6875 L 12.75 7.1875 L 13.28125 11.09375 L 9.03125 9.78125 L 7.40625 5.59375 L 7.21875 5.125 L 6.75 4.96875 L 4.625 4.34375 Z M 5.28125 6.625 L 5.71875 6.75 L 7.3125 10.9375 L 7.46875 11.40625 L 7.9375 11.53125 L 26.125 17.15625 C 26.777344 17.351563 27.132813 18.007813 26.9375 18.65625 C 26.742188 19.308594 26.085938 19.664063 25.4375 19.46875 L 18.6875 17.4375 L 18.34375 17.34375 L 18.03125 17.46875 L 8.09375 21.625 L 7.34375 21.3125 L 12.96875 17.4375 L 14.6875 16.25 L 12.6875 15.65625 L 5.03125 13.34375 Z M 14.90625 8.40625 L 15.71875 8.625 L 18.15625 12.59375 L 15.34375 11.75 Z M 20.5 21 C 19.671875 21 19 21.671875 19 22.5 C 19 23.328125 19.671875 24 20.5 24 C 21.328125 24 22 23.328125 22 22.5 C 22 21.671875 21.328125 21 20.5 21 Z M 3 26 L 3 28 L 29 28 L 29 26 Z"/></Svg>);
};
export default SVGPlaneArrivalSolid;
