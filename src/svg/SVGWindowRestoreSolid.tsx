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
const SVGWindowRestoreSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 5 L 5 27 L 27 27 L 27 5 Z M 7 7 L 25 7 L 25 25 L 7 25 Z M 12 9 L 12 13 L 9 13 L 9 23 L 20 23 L 20 19 L 23 19 L 23 9 Z M 14 11 L 21 11 L 21 12 L 14 12 Z M 14 14 L 21 14 L 21 17 L 14 17 Z M 11 15 L 12 15 L 12 16.03125 L 11 16.03125 Z M 11 18.03125 L 12 18.03125 L 12 19 L 18 19 L 18 21 L 11 21 Z"/></Svg>);
};
export default SVGWindowRestoreSolid;
