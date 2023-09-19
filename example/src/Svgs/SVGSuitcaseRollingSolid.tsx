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
const SVGSuitcaseRollingSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 14 3 C 12.346 3 11 4.346 11 6 L 11 9 L 13 9 L 13 6 C 13 5.448 13.448 5 14 5 L 18 5 C 18.552 5 19 5.448 19 6 L 19 9 L 21 9 L 21 6 C 21 4.346 19.654 3 18 3 L 14 3 z M 7 11 L 7 26 L 9 26 L 9 28 L 11 28 L 11 26 L 21 26 L 21 28 L 23 28 L 23 26 L 25 26 L 25 11 L 7 11 z M 9 13 L 23 13 L 23 24 L 9 24 L 9 13 z M 11 16 L 11 18 L 21 18 L 21 16 L 11 16 z M 11 20 L 11 22 L 21 22 L 21 20 L 11 20 z"/></Svg>);
};
export default SVGSuitcaseRollingSolid;
