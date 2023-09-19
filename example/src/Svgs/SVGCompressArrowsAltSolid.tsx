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
const SVGCompressArrowsAltSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 4.71875 3.28125 L 3.28125 4.71875 L 10.5625 12 L 5 12 L 5 14 L 14 14 L 14 5 L 12 5 L 12 10.5625 Z M 27.28125 3.28125 L 20 10.5625 L 20 5 L 18 5 L 18 14 L 27 14 L 27 12 L 21.4375 12 L 28.71875 4.71875 Z M 5 18 L 5 20 L 10.5625 20 L 3.28125 27.28125 L 4.71875 28.71875 L 12 21.4375 L 12 27 L 14 27 L 14 18 Z M 18 18 L 18 27 L 20 27 L 20 21.4375 L 27.28125 28.71875 L 28.71875 27.28125 L 21.4375 20 L 27 20 L 27 18 Z"/></Svg>);
};
export default SVGCompressArrowsAltSolid;