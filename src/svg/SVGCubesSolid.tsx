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
const SVGCubesSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 4 L 15.625 4.15625 L 9.625 6.5625 L 9 6.8125 L 9 13.53125 L 3.59375 15.875 L 3 16.15625 L 3 24.21875 L 3.5 24.53125 L 9.5 27.875 L 9.96875 28.125 L 10.4375 27.90625 L 16 25.125 L 21.5625 27.90625 L 22.03125 28.125 L 22.5 27.875 L 28.5 24.53125 L 29 24.21875 L 29 16.15625 L 28.40625 15.875 L 23 13.53125 L 23 6.8125 L 22.375 6.5625 L 16.375 4.15625 Z M 16 6.1875 L 19.28125 7.46875 L 16 8.75 L 12.71875 7.46875 Z M 11 8.9375 L 15 10.46875 L 15 15.34375 L 11 13.5625 Z M 21 8.9375 L 21 13.5625 L 17 15.34375 L 17 10.46875 Z M 10 15.3125 L 13.625 16.90625 L 10 18.6875 L 6.375 16.875 Z M 22 15.3125 L 25.625 16.875 L 22 18.6875 L 18.375 16.90625 L 19.5 16.40625 Z M 5 18.40625 L 9 20.40625 L 9 25.3125 L 5 23.0625 Z M 27 18.40625 L 27 23.0625 L 23 25.3125 L 23 20.40625 Z M 15 18.46875 L 15 23.375 L 11 25.375 L 11 20.40625 Z M 17 18.46875 L 21 20.40625 L 21 25.375 L 17 23.375 Z"/></Svg>);
};
export default SVGCubesSolid;
