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
const SVGCheckDoubleSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 23.28125 7.28125 L 11.5 19.0625 L 8.71875 16.28125 L 7.28125 17.71875 L 10.0625 20.5 L 8 22.5625 L 1.71875 16.28125 L 0.28125 17.71875 L 7.28125 24.71875 L 8 25.40625 L 8.71875 24.71875 L 11.5 21.9375 L 14.28125 24.71875 L 15 25.40625 L 15.71875 24.71875 L 31.625 8.71875 L 30.1875 7.28125 L 15 22.5625 L 12.9375 20.5 L 24.71875 8.71875 Z"/></Svg>);
};
export default SVGCheckDoubleSolid;
