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
const SVGChevronLeftSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 19.75 2.59375 L 19.03125 3.28125 L 7.03125 15.28125 L 6.34375 16 L 7.03125 16.71875 L 19.03125 28.71875 L 19.75 29.40625 L 20.46875 28.71875 L 24.0625 25.09375 L 24.75 24.40625 L 24.0625 23.6875 L 16.375 16 L 24.0625 8.3125 L 24.75 7.59375 L 24.0625 6.90625 L 20.46875 3.28125 Z M 19.75 5.4375 L 21.9375 7.625 L 14.25 15.28125 L 13.53125 16 L 14.25 16.71875 L 21.9375 24.375 L 19.75 26.5625 L 9.1875 16 Z"/></Svg>);
};
export default SVGChevronLeftSolid;