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
const SVGStackOverflow = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 19.59375 2.84375 L 17.96875 3.96875 L 23.5625 12.1875 L 25.1875 11.0625 Z M 15.375 6.53125 L 14.0625 8.03125 L 21.5625 14.53125 L 22.875 13.03125 Z M 12.375 10.90625 L 11.46875 12.6875 L 20.3125 17.1875 L 21.21875 15.40625 Z M 10.65625 15.4375 L 10.21875 17.375 L 19.875 19.65625 L 20.3125 17.71875 Z M 6 18 L 6 29 L 24 29 L 24 18 L 22 18 L 22 27 L 8 27 L 8 18 Z M 10.09375 19.6875 L 9.96875 21.6875 L 19.875 22.25 L 20 20.25 Z M 10 23 L 10 25 L 19.9375 25 L 19.9375 23 Z"/></Svg>);
};
export default SVGStackOverflow;
