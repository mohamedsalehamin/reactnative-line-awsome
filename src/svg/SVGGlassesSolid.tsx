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
const SVGGlassesSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5.0625 6 L 4.8125 6.65625 L 1.3125 16 L 0 16 L 0 18 L 1 18 L 1 20 C 1 23.296875 3.703125 26 7 26 L 9 26 C 12.296875 26 15 23.296875 15 20 L 15 17 C 15 16.433594 15.433594 16 16 16 C 16.566406 16 17 16.433594 17 17 L 17 20 C 17 23.296875 19.703125 26 23 26 L 25 26 C 28.296875 26 31 23.296875 31 20 L 31 18 L 32 18 L 32 16 L 30.6875 16 L 27.1875 6.65625 L 26.9375 6 L 25 6 L 24.71875 6.375 L 22.21875 9.375 L 23.78125 10.625 L 25.6875 8.3125 L 28.5625 16 L 18.8125 16 C 18.394531 14.84375 17.292969 14 16 14 C 14.707031 14 13.605469 14.84375 13.1875 16 L 3.4375 16 L 6.3125 8.3125 L 8.21875 10.625 L 9.78125 9.375 L 7.28125 6.375 L 7 6 Z M 3 18 L 13 18 L 13 20 C 13 22.203125 11.203125 24 9 24 L 7 24 C 4.796875 24 3 22.203125 3 20 Z M 19 18 L 29 18 L 29 20 C 29 22.203125 27.203125 24 25 24 L 23 24 C 20.796875 24 19 22.203125 19 20 Z"/></Svg>);
};
export default SVGGlassesSolid;
