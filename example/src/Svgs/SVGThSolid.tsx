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
const SVGThSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 3 6 L 3 26 L 29 26 L 29 6 Z M 5 8 L 9 8 L 9 12 L 5 12 Z M 11 8 L 15 8 L 15 12 L 11 12 Z M 17 8 L 21 8 L 21 12 L 17 12 Z M 23 8 L 27 8 L 27 12 L 23 12 Z M 5 14 L 9 14 L 9 18 L 5 18 Z M 11 14 L 15 14 L 15 18 L 11 18 Z M 17 14 L 21 14 L 21 18 L 17 18 Z M 23 14 L 27 14 L 27 18 L 23 18 Z M 5 20 L 9 20 L 9 24 L 5 24 Z M 11 20 L 15 20 L 15 24 L 11 24 Z M 17 20 L 21 20 L 21 24 L 17 24 Z M 23 20 L 27 20 L 27 24 L 23 24 Z"/></Svg>);
};
export default SVGThSolid;
