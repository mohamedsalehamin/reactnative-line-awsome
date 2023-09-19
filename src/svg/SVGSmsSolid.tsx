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
const SVGSmsSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 2 5 L 2 25 L 7 25 L 7 30.09375 L 8.625 28.78125 L 13.34375 25 L 30 25 L 30 5 Z M 4 7 L 28 7 L 28 23 L 12.65625 23 L 12.375 23.21875 L 9 25.90625 L 9 23 L 4 23 Z M 8 12 L 8 14 L 24 14 L 24 12 Z M 8 16 L 8 18 L 20 18 L 20 16 Z"/></Svg>);
};
export default SVGSmsSolid;
