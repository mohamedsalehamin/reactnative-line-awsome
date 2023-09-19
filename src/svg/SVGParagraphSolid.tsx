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
const SVGParagraphSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 12 5 C 8.699219 5 6 7.699219 6 11 C 6 14.300781 8.699219 17 12 17 L 16 17 L 16 27 L 18 27 L 18 7 L 20 7 L 20 27 L 22 27 L 22 7 L 24 7 L 24 5 Z M 12 7 L 16 7 L 16 15 L 12 15 C 9.78125 15 8 13.21875 8 11 C 8 8.78125 9.78125 7 12 7 Z"/></Svg>);
};
export default SVGParagraphSolid;
