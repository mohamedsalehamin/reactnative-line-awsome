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
const SVGMemorySolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 2 7 L 2 25 L 15 25 L 15 24 C 15 23.445313 15.445313 23 16 23 C 16.554688 23 17 23.445313 17 24 L 17 25 L 30 25 L 30 7 Z M 4 9 L 28 9 L 28 18 L 4 18 Z M 6 11 L 6 16 L 12 16 L 12 11 Z M 13 11 L 13 16 L 19 16 L 19 11 Z M 20 11 L 20 16 L 26 16 L 26 11 Z M 8 13 L 10 13 L 10 14 L 8 14 Z M 15 13 L 17 13 L 17 14 L 15 14 Z M 22 13 L 24 13 L 24 14 L 22 14 Z M 4 20 L 28 20 L 28 23 L 18.59375 23 C 18.152344 21.890625 17.257813 21 16 21 C 14.742188 21 13.847656 21.890625 13.40625 23 L 4 23 Z"/></Svg>);
};
export default SVGMemorySolid;
