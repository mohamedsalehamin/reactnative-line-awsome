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
const SVGFirstdraft = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 7 4 L 7 22 L 13 22 L 13 16 L 19 16 L 19 10 L 25 10 L 25 4 L 7 4 z M 21 12 L 21 18 L 15 18 L 15 24 L 7 24 L 7 25 L 15 25 L 16 25 L 16 19 L 21 19 L 22 19 L 22 13 L 25 13 L 25 12 L 21 12 z M 24 15 L 24 21 L 18 21 L 18 27 L 10 27 L 10 28 L 18 28 L 19 28 L 19 22 L 24 22 L 25 22 L 25 15 L 24 15 z M 21 24 L 21 28 L 22 28 L 22 25 L 25 25 L 25 24 L 21 24 z"/></Svg>);
};
export default SVGFirstdraft;
