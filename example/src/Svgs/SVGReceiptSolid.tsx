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
const SVGReceiptSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 7 5.375 L 7 13 L 3 13 L 3 27 L 29 27 L 29 13 L 25 13 L 25 5.375 L 22 6.875 L 20 5.875 L 18 6.875 L 16 5.875 L 14 6.875 L 12 5.875 L 10 6.875 Z M 12 8.125 L 14 9.125 L 16 8.125 L 18 9.125 L 20 8.125 L 22 9.125 L 23 8.625 L 23 17 L 9 17 L 9 8.625 L 10 9.125 Z M 5 15 L 7 15 L 7 19 L 25 19 L 25 15 L 27 15 L 27 25 L 5 25 Z M 9 21 L 9 23 L 11 23 L 11 21 Z M 13 21 L 13 23 L 15 23 L 15 21 Z M 17 21 L 17 23 L 19 23 L 19 21 Z M 21 21 L 21 23 L 23 23 L 23 21 Z"/></Svg>);
};
export default SVGReceiptSolid;
