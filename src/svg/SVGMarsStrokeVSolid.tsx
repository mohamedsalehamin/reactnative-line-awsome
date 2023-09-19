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
const SVGMarsStrokeVSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 1.59375 L 15.28125 2.28125 L 9.28125 8.28125 L 10.71875 9.71875 L 15 5.4375 L 15 10 L 12 10 L 12 12 L 15 12 L 15 14.0625 C 11.066406 14.5625 8 17.933594 8 22 C 8 26.40625 11.59375 30 16 30 C 20.40625 30 24 26.40625 24 22 C 24 17.933594 20.933594 14.5625 17 14.0625 L 17 12 L 20 12 L 20 10 L 17 10 L 17 5.4375 L 21.28125 9.71875 L 22.71875 8.28125 L 16.71875 2.28125 Z M 16 16 C 19.324219 16 22 18.675781 22 22 C 22 25.324219 19.324219 28 16 28 C 12.675781 28 10 25.324219 10 22 C 10 18.675781 12.675781 16 16 16 Z"/></Svg>);
};
export default SVGMarsStrokeVSolid;
