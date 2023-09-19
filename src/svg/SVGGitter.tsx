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
const SVGGitter = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 6 2 L 6 19 L 8 19 L 8 2 L 6 2 z M 12 6 L 12 30 L 14 30 L 14 6 L 12 6 z M 18 6 L 18 30 L 20 30 L 20 6 L 18 6 z M 24 6 L 24 19 L 26 19 L 26 6 L 24 6 z"/></Svg>);
};
export default SVGGitter;
