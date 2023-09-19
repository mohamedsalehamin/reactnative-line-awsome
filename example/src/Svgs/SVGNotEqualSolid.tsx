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
const SVGNotEqualSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 6.71875 5.28125 L 5.28125 6.71875 L 25.28125 26.71875 L 26.71875 25.28125 L 21.4375 20 L 27 20 L 27 18 L 19.4375 18 L 15.4375 14 L 27 14 L 27 12 L 13.4375 12 Z M 5 12 L 5 14 L 9.90625 14 L 7.90625 12 Z M 5 18 L 5 20 L 15.90625 20 L 13.90625 18 Z"/></Svg>);
};
export default SVGNotEqualSolid;
