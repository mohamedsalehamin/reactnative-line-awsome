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
const SVGSignSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 6 4 L 6 6 L 4 6 L 4 8 L 6 8 L 6 28 L 8 28 L 8 8 L 28 8 L 28 6 L 8 6 L 8 4 L 6 4 z M 10 10 L 10 22 L 26 22 L 26 10 L 10 10 z M 12 12 L 24 12 L 24 20 L 12 20 L 12 12 z"/></Svg>);
};
export default SVGSignSolid;
