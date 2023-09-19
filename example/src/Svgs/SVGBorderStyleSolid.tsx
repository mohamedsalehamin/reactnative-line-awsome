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
const SVGBorderStyleSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 5 L 5 25 L 5 27 L 7 27 L 9 27 L 9 25 L 7 25 L 7 7 L 25 7 L 25 9 L 27 9 L 27 7 L 27 5 L 25 5 L 5 5 z M 25 11 L 25 15 L 27 15 L 27 11 L 25 11 z M 25 17 L 25 21 L 27 21 L 27 17 L 25 17 z M 25 23 L 25 25 L 23 25 L 23 27 L 27 27 L 27 25 L 27 23 L 25 23 z M 11 25 L 11 27 L 15 27 L 15 25 L 11 25 z M 17 25 L 17 27 L 21 27 L 21 25 L 17 25 z"/></Svg>);
};
export default SVGBorderStyleSolid;
