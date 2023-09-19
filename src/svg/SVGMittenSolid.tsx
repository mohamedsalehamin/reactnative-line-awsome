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
const SVGMittenSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 19 3 C 14.605469 3 11 6.605469 11 11 L 11 13.625 C 9.277344 12.617188 7.039063 12.957031 5.8125 14.59375 C 4.492188 16.351563 4.835938 18.871094 6.59375 20.1875 L 6.59375 20.21875 L 6.625 20.21875 L 12 24.15625 L 12 29 L 26 29 L 26 23.71875 C 26.019531 23.679688 26.039063 23.644531 26.0625 23.59375 C 26.175781 23.367188 26.296875 23.046875 26.4375 22.625 C 26.71875 21.785156 27 20.570313 27 19 L 27 11 C 27 6.605469 23.394531 3 19 3 Z M 19 5 C 22.304688 5 25 7.695313 25 11 L 25 19 C 25 20.34375 24.78125 21.34375 24.5625 22 C 24.453125 22.328125 24.324219 22.566406 24.25 22.71875 C 24.210938 22.792969 24.207031 22.84375 24.1875 22.875 C 24.179688 22.890625 24.160156 22.902344 24.15625 22.90625 L 24.3125 23 L 13.84375 23 L 13.59375 22.8125 L 7.8125 18.59375 C 6.917969 17.925781 6.738281 16.703125 7.40625 15.8125 C 8.078125 14.917969 9.296875 14.738281 10.1875 15.40625 L 10.21875 15.40625 L 11.4375 16.25 L 13 17.34375 L 13 11 C 13 7.695313 15.695313 5 19 5 Z M 14 25 L 24 25 L 24 27 L 14 27 Z"/></Svg>);
};
export default SVGMittenSolid;
