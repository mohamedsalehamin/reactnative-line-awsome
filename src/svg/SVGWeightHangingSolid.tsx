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
const SVGWeightHangingSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 5 C 14.355469 5 13 6.355469 13 8 C 13 8.351563 13.074219 8.683594 13.1875 9 L 8.1875 9 L 8.03125 9.8125 L 5.03125 24.8125 L 5 24.90625 L 5 27 L 27 27 L 27 24.90625 L 26.96875 24.8125 L 23.96875 9.8125 L 23.8125 9 L 18.8125 9 C 18.925781 8.683594 19 8.351563 19 8 C 19 6.355469 17.644531 5 16 5 Z M 16 7 C 16.5625 7 17 7.4375 17 8 C 17 8.5625 16.5625 9 16 9 C 15.4375 9 15 8.5625 15 8 C 15 7.4375 15.4375 7 16 7 Z M 9.8125 11 L 22.1875 11 L 25 25 L 7 25 Z"/></Svg>);
};
export default SVGWeightHangingSolid;
