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
const SVGCompressSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 11 4 L 11 11 L 4 11 L 4 13 L 13 13 L 13 4 L 11 4 z M 19 4 L 19 13 L 28 13 L 28 11 L 21 11 L 21 4 L 19 4 z M 4 19 L 4 21 L 11 21 L 11 28 L 13 28 L 13 19 L 4 19 z M 19 19 L 19 28 L 21 28 L 21 21 L 28 21 L 28 19 L 19 19 z"/></Svg>);
};
export default SVGCompressSolid;
