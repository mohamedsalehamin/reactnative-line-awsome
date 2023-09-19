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
const SVGBalanceScaleSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 5 C 14.707031 5 13.605469 5.84375 13.1875 7 L 6 7 L 6 9 L 7.40625 9 L 7.125 9.5 L 3.125 16.5 L 3 16.75 L 3 17 C 3 19.75 5.25 22 8 22 C 10.75 22 13 19.75 13 17 L 13 16.75 L 12.875 16.5 L 8.875 9.5 L 8.59375 9 L 13.1875 9 C 13.492188 9.84375 14.15625 10.507813 15 10.8125 L 15 24 L 11 24 L 11 26 L 21 26 L 21 24 L 17 24 L 17 10.8125 C 17.839844 10.507813 18.507813 9.839844 18.8125 9 L 23.40625 9 L 23.125 9.5 L 19.125 16.5 L 19 16.75 L 19 17 C 19 19.75 21.25 22 24 22 C 26.75 22 29 19.75 29 17 L 29 16.75 L 28.875 16.5 L 24.875 9.5 L 24.59375 9 L 26 9 L 26 7 L 18.8125 7 C 18.394531 5.84375 17.292969 5 16 5 Z M 16 7 C 16.5625 7 17 7.4375 17 8 C 17 8.5625 16.5625 9 16 9 C 15.4375 9 15 8.5625 15 8 C 15 7.4375 15.4375 7 16 7 Z M 8 12.03125 L 10.28125 16 L 5.71875 16 Z M 24 12.03125 L 26.28125 16 L 21.71875 16 Z M 5.25 18 L 10.75 18 C 10.347656 19.160156 9.304688 20 8 20 C 6.695313 20 5.652344 19.160156 5.25 18 Z M 21.25 18 L 26.75 18 C 26.347656 19.160156 25.304688 20 24 20 C 22.695313 20 21.652344 19.160156 21.25 18 Z"/></Svg>);
};
export default SVGBalanceScaleSolid;
