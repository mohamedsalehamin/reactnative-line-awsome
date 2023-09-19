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
const SVGStarOfDavidSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 2.0625 L 15.15625 3.46875 L 11.78125 9 L 3.3125 9 L 4.21875 10.53125 L 7.53125 16 L 4.21875 21.46875 L 3.3125 23 L 11.78125 23 L 15.15625 28.53125 L 16 29.9375 L 16.84375 28.53125 L 20.21875 23 L 28.78125 23 L 27.84375 21.46875 L 24.5 16 L 27.84375 10.53125 L 28.78125 9 L 20.21875 9 L 16.84375 3.46875 Z M 16 5.90625 L 17.875 9 L 14.125 9 Z M 6.875 11 L 10.59375 11 L 8.71875 14.0625 Z M 12.90625 11 L 19.125 11 L 22.15625 16 L 19.125 21 L 12.90625 21 L 9.90625 16 Z M 21.4375 11 L 25.21875 11 L 23.34375 14.09375 Z M 23.34375 17.90625 L 25.21875 21 L 21.4375 21 Z M 8.71875 17.9375 L 10.59375 21 L 6.875 21 Z M 14.125 23 L 17.875 23 L 16 26.09375 Z"/></Svg>);
};
export default SVGStarOfDavidSolid;
