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
const SVGRulerVerticalSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 8 0 L 8 32 L 24 32 L 24 0 L 8 0 z M 10 2 L 22 2 L 22 5 L 15 5 L 15 7 L 22 7 L 22 9 L 18 9 L 18 11 L 22 11 L 22 13 L 15 13 L 15 15 L 22 15 L 22 17 L 18 17 L 18 19 L 22 19 L 22 21 L 15 21 L 15 23 L 22 23 L 22 25 L 18 25 L 18 27 L 22 27 L 22 30 L 10 30 L 10 2 z"/></Svg>);
};
export default SVGRulerVerticalSolid;
