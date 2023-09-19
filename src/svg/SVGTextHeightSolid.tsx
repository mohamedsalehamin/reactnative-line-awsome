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
const SVGTextHeightSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 4 6 L 4 8 L 11 8 L 11 26 L 13 26 L 13 8 L 20 8 L 20 6 Z M 25 6.625 L 21.5 11 L 24 11 L 24 21 L 21.5 21 L 25 25.375 L 28.5 21 L 26 21 L 26 11 L 28.5 11 Z"/></Svg>);
};
export default SVGTextHeightSolid;
