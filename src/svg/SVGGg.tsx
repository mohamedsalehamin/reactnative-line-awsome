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
const SVGGg = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 12 6.59375 L 11.28125 7.28125 L 3.28125 15.28125 L 2.59375 16 L 3.28125 16.71875 L 11.28125 24.71875 L 12 25.40625 L 12.71875 24.71875 L 16.71875 20.71875 L 17.40625 20 L 16.71875 19.28125 L 11.71875 14.28125 L 10.28125 15.71875 L 14.5625 20 L 12 22.5625 L 5.4375 16 L 12 9.4375 L 13.28125 10.71875 L 14.71875 9.28125 L 12.71875 7.28125 Z M 20 6.59375 L 19.28125 7.28125 L 15.28125 11.28125 L 14.59375 12 L 15.28125 12.71875 L 20.28125 17.71875 L 21.71875 16.28125 L 17.4375 12 L 20 9.4375 L 26.5625 16 L 20 22.5625 L 18.71875 21.28125 L 17.28125 22.71875 L 19.28125 24.71875 L 20 25.40625 L 20.71875 24.71875 L 28.71875 16.71875 L 29.40625 16 L 28.71875 15.28125 L 20.71875 7.28125 Z"/></Svg>);
};
export default SVGGg;
