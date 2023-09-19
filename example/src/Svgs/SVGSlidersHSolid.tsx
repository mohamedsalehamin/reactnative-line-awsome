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
const SVGSlidersHSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 15 5 C 13.707031 5 12.605469 5.84375 12.1875 7 L 4 7 L 4 9 L 12.1875 9 C 12.605469 10.15625 13.707031 11 15 11 C 16.292969 11 17.394531 10.15625 17.8125 9 L 28 9 L 28 7 L 17.8125 7 C 17.394531 5.84375 16.292969 5 15 5 Z M 15 7 C 15.5625 7 16 7.4375 16 8 C 16 8.5625 15.5625 9 15 9 C 14.4375 9 14 8.5625 14 8 C 14 7.4375 14.4375 7 15 7 Z M 22 13 C 20.707031 13 19.605469 13.84375 19.1875 15 L 4 15 L 4 17 L 19.1875 17 C 19.605469 18.15625 20.707031 19 22 19 C 23.292969 19 24.394531 18.15625 24.8125 17 L 28 17 L 28 15 L 24.8125 15 C 24.394531 13.84375 23.292969 13 22 13 Z M 22 15 C 22.5625 15 23 15.4375 23 16 C 23 16.5625 22.5625 17 22 17 C 21.4375 17 21 16.5625 21 16 C 21 15.4375 21.4375 15 22 15 Z M 11 21 C 9.707031 21 8.605469 21.84375 8.1875 23 L 4 23 L 4 25 L 8.1875 25 C 8.605469 26.15625 9.707031 27 11 27 C 12.292969 27 13.394531 26.15625 13.8125 25 L 28 25 L 28 23 L 13.8125 23 C 13.394531 21.84375 12.292969 21 11 21 Z M 11 23 C 11.5625 23 12 23.4375 12 24 C 12 24.5625 11.5625 25 11 25 C 10.4375 25 10 24.5625 10 24 C 10 23.4375 10.4375 23 11 23 Z"/></Svg>);
};
export default SVGSlidersHSolid;
