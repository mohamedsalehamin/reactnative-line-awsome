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
const SVGFirstAidSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 14 5 C 12.90625 5 12 5.90625 12 7 L 12 8 L 6 8 C 4.355469 8 3 9.355469 3 11 L 3 26 L 29 26 L 29 11 C 29 9.355469 27.644531 8 26 8 L 20 8 L 20 7 C 20 5.90625 19.09375 5 18 5 Z M 14 7 L 18 7 L 18 8 L 14 8 Z M 6 10 L 26 10 C 26.566406 10 27 10.433594 27 11 L 27 24 L 5 24 L 5 11 C 5 10.433594 5.433594 10 6 10 Z M 15 13 L 15 16 L 12 16 L 12 18 L 15 18 L 15 21 L 17 21 L 17 18 L 20 18 L 20 16 L 17 16 L 17 13 Z"/></Svg>);
};
export default SVGFirstAidSolid;
