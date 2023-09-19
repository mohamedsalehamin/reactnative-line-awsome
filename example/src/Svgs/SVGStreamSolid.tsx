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
const SVGStreamSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 5 L 5 11 L 24 11 L 24 5 L 5 5 z M 7 7 L 22 7 L 22 9 L 7 9 L 7 7 z M 9 13 L 9 19 L 28 19 L 28 13 L 9 13 z M 11 15 L 26 15 L 26 17 L 11 17 L 11 15 z M 5 21 L 5 27 L 24 27 L 24 21 L 5 21 z M 7 23 L 22 23 L 22 25 L 7 25 L 7 23 z"/></Svg>);
};
export default SVGStreamSolid;
