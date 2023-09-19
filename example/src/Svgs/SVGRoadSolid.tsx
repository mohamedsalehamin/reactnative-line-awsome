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
const SVGRoadSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5.46875 6 L 5.28125 6.75 L 0.625 24.75 L 0.28125 26 L 31.71875 26 L 31.375 24.75 L 26.71875 6.75 L 26.53125 6 Z M 7.03125 8 L 15.125 8 L 15.0625 11 L 16.9375 11 L 16.875 8 L 24.96875 8 L 29.125 24 L 17.28125 24 L 17.1875 20 L 14.8125 20 L 14.71875 24 L 2.875 24 Z M 15 13 L 14.875 18 L 17.125 18 L 17 13 Z"/></Svg>);
};
export default SVGRoadSolid;
