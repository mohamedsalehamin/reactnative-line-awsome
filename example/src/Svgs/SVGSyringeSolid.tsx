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
const SVGSyringeSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 23.21875 3.78125 L 21.78125 5.21875 L 22.15625 5.59375 L 19.875 7.875 L 21.28125 9.3125 L 23.5625 7 L 25 8.4375 L 22.6875 10.71875 L 24.125 12.125 L 26.40625 9.84375 L 26.78125 10.21875 L 28.21875 8.78125 Z M 17.71875 7.28125 L 16.28125 8.71875 L 16.9375 9.375 L 7 19.34375 L 6.65625 19.6875 L 6.71875 20.15625 L 7.0625 23.34375 L 7.09375 23.6875 L 7.1875 23.75 L 3.9375 27 L 6.78125 27 L 8.8125 24.96875 L 11.84375 25.28125 L 12.3125 25.34375 L 12.65625 25 L 22.625 15.0625 L 23.28125 15.71875 L 24.71875 14.28125 Z M 18.375 10.8125 L 21.1875 13.625 L 11.59375 23.25 L 9.21875 22.96875 L 9.03125 22.78125 L 8.75 20.40625 Z"/></Svg>);
};
export default SVGSyringeSolid;
