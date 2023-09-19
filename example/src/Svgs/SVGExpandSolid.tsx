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
const SVGExpandSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 4 4 L 4 13 L 6 13 L 6 6 L 13 6 L 13 4 L 4 4 z M 19 4 L 19 6 L 26 6 L 26 13 L 28 13 L 28 4 L 19 4 z M 4 19 L 4 28 L 13 28 L 13 26 L 6 26 L 6 19 L 4 19 z M 26 19 L 26 26 L 19 26 L 19 28 L 28 28 L 28 19 L 26 19 z"/></Svg>);
};
export default SVGExpandSolid;