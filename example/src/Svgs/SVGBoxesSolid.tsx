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
const SVGBoxesSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 10 4 L 10 15 L 22 15 L 22 4 L 10 4 z M 12 6 L 14 6 L 14 10 L 16 8 L 18 10 L 18 6 L 20 6 L 20 13 L 12 13 L 12 6 z M 3 17 L 3 28 L 15 28 L 15 17 L 3 17 z M 17 17 L 17 28 L 29 28 L 29 17 L 17 17 z M 5 19 L 7 19 L 7 23 L 9 21 L 11 23 L 11 19 L 13 19 L 13 26 L 5 26 L 5 19 z M 19 19 L 21 19 L 21 23 L 23 21 L 25 23 L 25 19 L 27 19 L 27 26 L 19 26 L 19 19 z"/></Svg>);
};
export default SVGBoxesSolid;
