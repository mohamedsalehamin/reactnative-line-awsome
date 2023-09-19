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
const SVGShareSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 19.71875 5.28125 L 18.28125 6.71875 L 24.5625 13 L 11 13 C 7.144531 13 4 16.144531 4 20 C 4 23.855469 7.144531 27 11 27 L 11 25 C 8.226563 25 6 22.773438 6 20 C 6 17.226563 8.226563 15 11 15 L 24.5625 15 L 18.28125 21.28125 L 19.71875 22.71875 L 27.71875 14.71875 L 28.40625 14 L 27.71875 13.28125 Z"/></Svg>);
};
export default SVGShareSolid;