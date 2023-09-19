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
const SVGThListSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 4 6 L 4 26 L 28 26 L 28 6 Z M 6 8 L 11 8 L 11 12 L 6 12 Z M 13 8 L 26 8 L 26 12 L 13 12 Z M 6 14 L 11 14 L 11 18 L 6 18 Z M 13 14 L 26 14 L 26 18 L 13 18 Z M 6 20 L 11 20 L 11 24 L 6 24 Z M 13 20 L 26 20 L 26 24 L 13 24 Z"/></Svg>);
};
export default SVGThListSolid;
