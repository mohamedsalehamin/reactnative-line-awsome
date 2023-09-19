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
const SVGSubscriptSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 4.15625 8 L 5.15625 9.53125 L 9.3125 16 L 5.15625 22.46875 L 4.15625 24 L 10.53125 24 L 10.84375 23.53125 L 12.5 20.96875 L 14.15625 23.53125 L 14.46875 24 L 20.84375 24 L 19.84375 22.46875 L 15.6875 16 L 19.84375 9.53125 L 20.84375 8 L 14.46875 8 L 14.15625 8.46875 L 12.5 11.03125 L 10.84375 8.46875 L 10.53125 8 Z M 7.8125 10 L 9.46875 10 L 11.65625 13.4375 L 12.5 14.75 L 13.34375 13.4375 L 15.53125 10 L 17.1875 10 L 13.65625 15.46875 L 13.3125 16 L 13.65625 16.53125 L 17.1875 22 L 15.53125 22 L 13.34375 18.5625 L 12.5 17.25 L 11.65625 18.5625 L 9.46875 22 L 7.8125 22 L 11.34375 16.53125 L 11.6875 16 L 11.34375 15.46875 Z M 24.96875 19 C 23.34375 19 22 20.34375 22 21.96875 L 22 22 L 24 22 L 24 21.96875 C 24 21.421875 24.421875 21 24.96875 21 L 25.03125 21 C 25.578125 21 26 21.421875 26 21.96875 C 26 22.285156 25.855469 22.570313 25.59375 22.75 L 23.46875 24.21875 C 22.554688 24.847656 22 25.890625 22 27 L 22 28 L 28 28 L 28 26 L 24.53125 26 C 24.570313 25.96875 24.550781 25.902344 24.59375 25.875 L 26.71875 24.40625 C 27.523438 23.851563 28 22.945313 28 21.96875 C 28 20.34375 26.65625 19 25.03125 19 Z"/></Svg>);
};
export default SVGSubscriptSolid;
