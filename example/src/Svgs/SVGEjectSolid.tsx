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
const SVGEjectSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 6.59375 L 15.28125 7.28125 L 6.28125 16.28125 L 4.59375 18 L 27.40625 18 L 25.71875 16.28125 L 16.71875 7.28125 Z M 16 9.4375 L 22.5625 16 L 9.4375 16 Z M 4 22 L 4 24 L 28 24 L 28 22 Z"/></Svg>);
};
export default SVGEjectSolid;
