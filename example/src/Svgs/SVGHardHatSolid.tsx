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
const SVGHardHatSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 13 7 L 13 8.40625 C 8.035156 9.6875 4.410156 14.082031 4.125 19.375 C 2.953125 19.785156 2 20.695313 2 22 L 2 25 L 30 25 L 30 22 C 30 20.695313 29.046875 19.785156 27.875 19.375 C 27.589844 14.082031 23.964844 9.6875 19 8.40625 L 19 7 Z M 15.03125 9 L 17 9 C 16.980469 9.113281 16.980469 9.230469 17 9.34375 L 17 15 L 19 15 L 19 10.5 C 22.738281 11.679688 25.566406 14.972656 25.96875 19 L 24 19 L 24 21 L 27 21 C 27.566406 21 28 21.433594 28 22 L 28 23 L 4 23 L 4 22 C 4 21.433594 4.433594 21 5 21 L 8 21 L 8 19 L 6.03125 19 C 6.433594 14.972656 9.261719 11.679688 13 10.5 L 13 15 L 15 15 L 15 9.5 C 15.050781 9.339844 15.0625 9.167969 15.03125 9 Z"/></Svg>);
};
export default SVGHardHatSolid;
