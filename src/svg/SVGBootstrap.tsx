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
const SVGBootstrap = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 5 L 5 27 L 27 27 L 27 5 L 5 5 z M 7 7 L 25 7 L 25 25 L 7 25 L 7 7 z M 11 10 L 11 15.509766 L 11 21.990234 C 16.93 21.990234 18.116563 22.070234 19.226562 21.740234 C 19.876562 21.540234 21.65625 20.900391 21.65625 18.650391 C 21.65625 17.650391 21.356484 15.959062 19.396484 15.539062 L 19.396484 15.509766 L 19.027344 15.509766 C 20.027344 15.059766 20.65625 14.210937 20.65625 12.960938 C 20.65625 12.640937 20.746094 10 17.246094 10 L 11 10 z M 13 12 L 17 12 C 18.509 12 18.65625 12.853234 18.65625 13.490234 C 18.65625 15.044234 17.03 15 17 15 L 13 15 L 13 12 z M 13 17 L 17.759766 17 C 19.620766 17 19.65625 18.176469 19.65625 18.480469 C 19.65625 20.040469 18.044609 20 17.849609 20 L 13 20 L 13 17 z"/></Svg>);
};
export default SVGBootstrap;
