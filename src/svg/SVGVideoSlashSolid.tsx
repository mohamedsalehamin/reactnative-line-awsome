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
const SVGVideoSlashSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 3.71875 2.28125 L 2.28125 3.71875 L 28.28125 29.71875 L 29.71875 28.28125 L 24 22.5625 L 24 20.625 L 30 23.625 L 30 8.375 L 24 11.375 L 24 8 L 9.4375 8 Z M 2 8 L 2 24 L 20 24 L 18 22 L 4 22 L 4 10 L 6 10 L 4 8 Z M 11.4375 10 L 22 10 L 22 20.5625 Z M 28 11.625 L 28 20.375 L 24 18.375 L 24 13.625 Z"/></Svg>);
};
export default SVGVideoSlashSolid;
