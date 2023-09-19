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
const SVGProceduresSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 17.125 0.4375 L 14.375 6 L 9 6 L 9 8 L 15.625 8 L 16.875 5.4375 L 19.71875 13 L 23.5 8 L 28 8 L 28 6 L 22.5 6 L 20.28125 8.875 L 17.125 0.4375 z M 6.5 11 C 5.117 11 4 12.117 4 13.5 L 4 28 L 9 28 L 9 26 L 23 26 L 23 28 L 28 28 L 28 17 C 28 15.355 26.645 14 25 14 L 13 14 L 13 14.5625 C 12.406 14.2145 11.734 14 11 14 C 10.266 14 9.594 14.2145 9 14.5625 L 9 13.5 C 9 12.117 7.883 11 6.5 11 z M 6.5 13 C 6.715 13 7 13.285 7 13.5 L 7 22 L 26 22 L 26 26 L 25 26 L 25 24 L 7 24 L 7 26 L 6 26 L 6 13.5 C 6 13.285 6.285 13 6.5 13 z M 11 16 C 12.117 16 13 16.883 13 18 C 13 19.117 12.117 20 11 20 C 9.883 20 9 19.117 9 18 C 9 16.883 9.883 16 11 16 z M 15 16 L 25 16 C 25.555 16 26 16.445 26 17 L 26 20 L 15 20 L 15 16 z"/></Svg>);
};
export default SVGProceduresSolid;
