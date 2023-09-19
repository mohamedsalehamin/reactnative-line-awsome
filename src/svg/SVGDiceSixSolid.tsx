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
const SVGDiceSixSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 5 L 5 27 L 27 27 L 27 5 L 5 5 z M 7 7 L 25 7 L 25 25 L 7 25 L 7 7 z M 11 8 A 2 2 0 0 0 11 12 A 2 2 0 0 0 11 8 z M 21 8 A 2 2 0 0 0 21 12 A 2 2 0 0 0 21 8 z M 11 14 A 2 2 0 0 0 11 18 A 2 2 0 0 0 11 14 z M 21 14 A 2 2 0 0 0 21 18 A 2 2 0 0 0 21 14 z M 11 20 A 2 2 0 0 0 11 24 A 2 2 0 0 0 11 20 z M 21 20 A 2 2 0 0 0 21 24 A 2 2 0 0 0 21 20 z"/></Svg>);
};
export default SVGDiceSixSolid;
