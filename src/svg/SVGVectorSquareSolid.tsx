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
const SVGVectorSquareSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 5 L 5 12 L 7 12 L 7 20 L 5 20 L 5 27 L 12 27 L 12 25 L 20 25 L 20 27 L 27 27 L 27 20 L 25 20 L 25 12 L 27 12 L 27 5 L 20 5 L 20 7 L 12 7 L 12 5 L 5 5 z M 7 7 L 10 7 L 10 10 L 7 10 L 7 7 z M 22 7 L 25 7 L 25 10 L 22 10 L 22 7 z M 12 9 L 20 9 L 20 12 L 23 12 L 23 20 L 20 20 L 20 23 L 12 23 L 12 20 L 9 20 L 9 12 L 12 12 L 12 9 z M 7 22 L 10 22 L 10 25 L 7 25 L 7 22 z M 22 22 L 25 22 L 25 25 L 22 25 L 22 22 z"/></Svg>);
};
export default SVGVectorSquareSolid;
