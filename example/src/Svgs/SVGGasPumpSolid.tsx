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
const SVGGasPumpSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 8 5 C 6.355469 5 5 6.355469 5 8 L 5 27 L 19 27 L 19 20 L 21 20 L 21 24 C 21 25.644531 22.355469 27 24 27 C 25.644531 27 27 25.644531 27 24 L 27 13.8125 C 27 13.015625 26.6875 12.28125 26.125 11.71875 L 21.40625 7 L 20 8.40625 L 22.84375 11.25 C 21.769531 11.707031 21 12.765625 21 14 C 21 15.644531 22.355469 17 24 17 C 24.351563 17 24.683594 16.925781 25 16.8125 L 25 24 C 25 24.566406 24.566406 25 24 25 C 23.433594 25 23 24.566406 23 24 L 23 20 C 23 18.90625 22.09375 18 21 18 L 19 18 L 19 8 C 19 6.355469 17.644531 5 16 5 Z M 8 7 L 16 7 C 16.566406 7 17 7.433594 17 8 L 17 12 L 7 12 L 7 8 C 7 7.433594 7.433594 7 8 7 Z M 24 13 C 24.5625 13 25 13.4375 25 14 C 25 14.5625 24.5625 15 24 15 C 23.4375 15 23 14.5625 23 14 C 23 13.4375 23.4375 13 24 13 Z M 7 14 L 17 14 L 17 25 L 7 25 Z"/></Svg>);
};
export default SVGGasPumpSolid;
