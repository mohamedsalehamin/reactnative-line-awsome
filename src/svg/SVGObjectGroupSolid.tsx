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
const SVGObjectGroupSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 5 L 5 9 L 6 9 L 6 23 L 5 23 L 5 27 L 9 27 L 9 26 L 23 26 L 23 27 L 27 27 L 27 23 L 26 23 L 26 9 L 27 9 L 27 5 L 23 5 L 23 6 L 9 6 L 9 5 Z M 9 8 L 23 8 L 23 9 L 24 9 L 24 23 L 23 23 L 23 24 L 9 24 L 9 23 L 8 23 L 8 9 L 9 9 Z M 10 10 L 10 18 L 14 18 L 14 22 L 22 22 L 22 14 L 18 14 L 18 10 Z M 12 12 L 16 12 L 16 16 L 12 16 Z M 18 16 L 20 16 L 20 20 L 16 20 L 16 18 L 18 18 Z"/></Svg>);
};
export default SVGObjectGroupSolid;
