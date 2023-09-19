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
const SVGCubeSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 4.40625 L 15.59375 4.59375 L 5.59375 9.09375 L 5 9.34375 L 5 22.03125 L 5.5 22.3125 L 15.5 27.875 L 16 28.15625 L 16.5 27.875 L 26.5 22.3125 L 27 22.03125 L 27 9.34375 L 26.40625 9.09375 L 16.40625 4.59375 Z M 16 6.59375 L 23.6875 10.03125 L 16 13.875 L 8.3125 10.03125 Z M 7 11.625 L 15 15.625 L 15 25.28125 L 7 20.84375 Z M 25 11.625 L 25 20.84375 L 17 25.28125 L 17 15.625 Z"/></Svg>);
};
export default SVGCubeSolid;
