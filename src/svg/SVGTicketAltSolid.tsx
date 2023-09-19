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
const SVGTicketAltSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 2 7 L 2 14 L 3 14 C 4.191406 14 5 14.808594 5 16 C 5 17.191406 4.191406 18 3 18 L 2 18 L 2 25 L 30 25 L 30 18 L 29 18 C 27.808594 18 27 17.191406 27 16 C 27 14.808594 27.808594 14 29 14 L 30 14 L 30 7 Z M 4 9 L 28 9 L 28 12.1875 C 26.285156 12.636719 25 14.144531 25 16 C 25 17.855469 26.285156 19.363281 28 19.8125 L 28 23 L 4 23 L 4 19.8125 C 5.714844 19.363281 7 17.855469 7 16 C 7 14.144531 5.714844 12.636719 4 12.1875 Z"/></Svg>);
};
export default SVGTicketAltSolid;
