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
const SVGNeuterSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 4 C 11.59375 4 8 7.59375 8 12 C 8 16.066406 11.066406 19.4375 15 19.9375 L 15 28 L 17 28 L 17 19.9375 C 20.933594 19.4375 24 16.066406 24 12 C 24 7.59375 20.40625 4 16 4 Z M 16 6 C 19.324219 6 22 8.675781 22 12 C 22 15.324219 19.324219 18 16 18 C 12.675781 18 10 15.324219 10 12 C 10 8.675781 12.675781 6 16 6 Z"/></Svg>);
};
export default SVGNeuterSolid;
