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
const SVGReplySolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 12.28125 5.28125 L 4.28125 13.28125 L 3.59375 14 L 4.28125 14.71875 L 12.28125 22.71875 L 13.71875 21.28125 L 7.4375 15 L 21 15 C 23.773438 15 26 17.226563 26 20 C 26 22.773438 23.773438 25 21 25 L 21 27 C 24.855469 27 28 23.855469 28 20 C 28 16.144531 24.855469 13 21 13 L 7.4375 13 L 13.71875 6.71875 Z"/></Svg>);
};
export default SVGReplySolid;
