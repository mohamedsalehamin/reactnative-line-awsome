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
const SVGClone = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 5 L 5 6 L 5 21 L 5 22 L 6 22 L 9 22 L 9 20 L 7 20 L 7 7 L 20 7 L 20 9 L 22 9 L 22 6 L 22 5 L 21 5 L 6 5 L 5 5 z M 10 10 L 10 11 L 10 26 L 10 27 L 11 27 L 26 27 L 27 27 L 27 26 L 27 11 L 27 10 L 26 10 L 11 10 L 10 10 z M 12 12 L 25 12 L 25 25 L 12 25 L 12 12 z"/></Svg>);
};
export default SVGClone;
