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
const SVGSitemapSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 12 5 L 12 13 L 15 13 L 15 15 L 5 15 L 5 19 L 2 19 L 2 27 L 10 27 L 10 19 L 7 19 L 7 17 L 15 17 L 15 19 L 12 19 L 12 27 L 20 27 L 20 19 L 17 19 L 17 17 L 25 17 L 25 19 L 22 19 L 22 27 L 30 27 L 30 19 L 27 19 L 27 15 L 17 15 L 17 13 L 20 13 L 20 5 Z M 14 7 L 18 7 L 18 11 L 14 11 Z M 4 21 L 8 21 L 8 25 L 4 25 Z M 14 21 L 18 21 L 18 25 L 14 25 Z M 24 21 L 28 21 L 28 25 L 24 25 Z"/></Svg>);
};
export default SVGSitemapSolid;