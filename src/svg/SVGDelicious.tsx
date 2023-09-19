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
const SVGDelicious = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 10 5 C 7.25 5 5 7.25 5 10 L 5 22 C 5 24.75 7.25 27 10 27 L 22 27 C 24.75 27 27 24.75 27 22 L 27 10 C 27 7.25 24.75 5 22 5 Z M 10 7 L 16 7 L 16 16 L 25 16 L 25 22 C 25 23.667969 23.667969 25 22 25 L 16 25 L 16 16 L 7 16 L 7 10 C 7 8.332031 8.332031 7 10 7 Z"/></Svg>);
};
export default SVGDelicious;
