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
const SVGAlignLeftSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 3 7 L 3 9 L 29 9 L 29 7 Z M 3 11 L 3 13 L 21 13 L 21 11 Z M 3 15 L 3 17 L 29 17 L 29 15 Z M 3 19 L 3 21 L 21 21 L 21 19 Z M 3 23 L 3 25 L 29 25 L 29 23 Z"/></Svg>);
};
export default SVGAlignLeftSolid;
