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
const SVGMarsStrokeHSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 10 8 C 5.59375 8 2 11.59375 2 16 C 2 20.40625 5.59375 24 10 24 C 14.066406 24 17.4375 20.933594 17.9375 17 L 20 17 L 20 20 L 22 20 L 22 17 L 26.5625 17 L 22.28125 21.28125 L 23.71875 22.71875 L 29.71875 16.71875 L 30.40625 16 L 29.71875 15.28125 L 23.71875 9.28125 L 22.28125 10.71875 L 26.5625 15 L 22 15 L 22 12 L 20 12 L 20 15 L 17.9375 15 C 17.4375 11.066406 14.066406 8 10 8 Z M 10 10 C 13.324219 10 16 12.675781 16 16 C 16 19.324219 13.324219 22 10 22 C 6.675781 22 4 19.324219 4 16 C 4 12.675781 6.675781 10 10 10 Z"/></Svg>);
};
export default SVGMarsStrokeHSolid;
