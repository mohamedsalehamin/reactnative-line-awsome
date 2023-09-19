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
const SVGDraftingCompassSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 15 3 L 15 6.15625 C 13.28125 6.601563 12 8.148438 12 10 C 12 11.046875 12.425781 12 13.09375 12.71875 L 9.75 20 L 6 20 L 6 22 L 8.8125 22 L 5.96875 28.1875 L 7.78125 29.03125 L 11.03125 22 L 15 22 L 15 24 L 17 24 L 17 22 L 20.96875 22 L 24.1875 29.03125 L 26 28.21875 L 23.15625 22 L 26 22 L 26 20 L 22.25 20 L 18.90625 12.6875 C 19.566406 11.976563 20 11.042969 20 10 C 20 8.148438 18.71875 6.601563 17 6.15625 L 17 3 Z M 16 8 C 17.117188 8 18 8.882813 18 10 C 18 10.582031 17.765625 11.101563 17.375 11.46875 L 17.34375 11.5 L 16.34375 11.9375 L 20.03125 20 L 17 20 L 17 18 L 15 18 L 15 20 L 11.9375 20 L 15.625 12 L 14.625 11.53125 L 14.65625 11.5 C 14.242188 11.132813 14 10.601563 14 10 C 14 8.882813 14.882813 8 16 8 Z"/></Svg>);
};
export default SVGDraftingCompassSolid;
