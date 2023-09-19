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
const SVGHashtagSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 11 5 L 11 11 L 5 11 L 5 13 L 11 13 L 11 19 L 5 19 L 5 21 L 11 21 L 11 27 L 13 27 L 13 21 L 19 21 L 19 27 L 21 27 L 21 21 L 27 21 L 27 19 L 21 19 L 21 13 L 27 13 L 27 11 L 21 11 L 21 5 L 19 5 L 19 11 L 13 11 L 13 5 Z M 13 13 L 19 13 L 19 19 L 13 19 Z"/></Svg>);
};
export default SVGHashtagSolid;
