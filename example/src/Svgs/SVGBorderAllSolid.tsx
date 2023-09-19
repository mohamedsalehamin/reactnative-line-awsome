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
const SVGBorderAllSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 5 L 5 27 L 27 27 L 27 5 L 5 5 z M 7 7 L 15 7 L 15 15 L 7 15 L 7 7 z M 17 7 L 25 7 L 25 15 L 17 15 L 17 7 z M 7 17 L 15 17 L 15 25 L 7 25 L 7 17 z M 17 17 L 25 17 L 25 25 L 17 25 L 17 17 z"/></Svg>);
};
export default SVGBorderAllSolid;
