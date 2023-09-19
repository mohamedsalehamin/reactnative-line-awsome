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
const SVGSortSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 3.59375 L 15.28125 4.28125 L 7.28125 12.28125 L 5.59375 14 L 26.40625 14 L 24.71875 12.28125 L 16.71875 4.28125 Z M 16 6.4375 L 21.5625 12 L 10.4375 12 Z M 5.59375 18 L 7.28125 19.71875 L 15.28125 27.71875 L 16 28.40625 L 16.71875 27.71875 L 24.71875 19.71875 L 26.40625 18 Z M 10.4375 20 L 21.5625 20 L 16 25.5625 Z"/></Svg>);
};
export default SVGSortSolid;
