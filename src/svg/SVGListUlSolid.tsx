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
const SVGListUlSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 4 5 L 4 11 L 10 11 L 10 5 Z M 6 7 L 8 7 L 8 9 L 6 9 Z M 12 7 L 12 9 L 27 9 L 27 7 Z M 4 13 L 4 19 L 10 19 L 10 13 Z M 6 15 L 8 15 L 8 17 L 6 17 Z M 12 15 L 12 17 L 27 17 L 27 15 Z M 4 21 L 4 27 L 10 27 L 10 21 Z M 6 23 L 8 23 L 8 25 L 6 25 Z M 12 23 L 12 25 L 27 25 L 27 23 Z"/></Svg>);
};
export default SVGListUlSolid;
