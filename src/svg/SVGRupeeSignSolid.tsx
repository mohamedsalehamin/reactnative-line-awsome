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
const SVGRupeeSignSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 8 5 L 8 7 L 12 7 C 13.703125 7 15.941406 8.039063 16.71875 10 L 8 10 L 8 12 L 16.96875 12 C 16.660156 14.609375 13.972656 16 12 16 L 8 16 L 8 18.46875 L 18.25 27 L 21.375 27 L 10.5625 18 L 12 18 C 15.234375 18 18.675781 15.609375 18.96875 12 L 24 12 L 24 10 L 18.8125 10 C 18.507813 8.816406 17.859375 7.804688 17 7 L 24 7 L 24 5 Z"/></Svg>);
};
export default SVGRupeeSignSolid;
