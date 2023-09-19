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
const SVGVenusSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 3 C 11.59375 3 8 6.59375 8 11 C 8 15.066406 11.066406 18.4375 15 18.9375 L 15 23 L 11 23 L 11 25 L 15 25 L 15 29 L 17 29 L 17 25 L 21 25 L 21 23 L 17 23 L 17 18.9375 C 20.933594 18.4375 24 15.066406 24 11 C 24 6.59375 20.40625 3 16 3 Z M 16 5 C 19.324219 5 22 7.675781 22 11 C 22 14.324219 19.324219 17 16 17 C 12.675781 17 10 14.324219 10 11 C 10 7.675781 12.675781 5 16 5 Z"/></Svg>);
};
export default SVGVenusSolid;
