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
const SVGCrossSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 13 3 L 13 9 L 7 9 L 7 15 L 13 15 L 13 29 L 19 29 L 19 15 L 25 15 L 25 9 L 19 9 L 19 3 Z M 15 5 L 17 5 L 17 11 L 23 11 L 23 13 L 17 13 L 17 27 L 15 27 L 15 13 L 9 13 L 9 11 L 15 11 Z"/></Svg>);
};
export default SVGCrossSolid;
