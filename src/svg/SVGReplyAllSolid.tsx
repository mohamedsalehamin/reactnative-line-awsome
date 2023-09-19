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
const SVGReplyAllSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 10.28125 5.28125 L 2.28125 13.28125 L 1.59375 14 L 2.28125 14.71875 L 10.28125 22.71875 L 11.71875 21.28125 L 4.4375 14 L 11.71875 6.71875 Z M 15.28125 5.28125 L 7.28125 13.28125 L 6.59375 14 L 7.28125 14.71875 L 15.28125 22.71875 L 16.71875 21.28125 L 10.4375 15 L 23 15 C 25.773438 15 28 17.226563 28 20 C 28 22.773438 25.773438 25 23 25 L 23 27 C 26.855469 27 30 23.855469 30 20 C 30 16.144531 26.855469 13 23 13 L 10.4375 13 L 16.71875 6.71875 Z"/></Svg>);
};
export default SVGReplyAllSolid;
