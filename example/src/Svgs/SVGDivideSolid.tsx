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
const SVGDivideSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 6 C 14.355469 6 13 7.355469 13 9 C 13 10.644531 14.355469 12 16 12 C 17.644531 12 19 10.644531 19 9 C 19 7.355469 17.644531 6 16 6 Z M 16 8 C 16.5625 8 17 8.4375 17 9 C 17 9.5625 16.5625 10 16 10 C 15.4375 10 15 9.5625 15 9 C 15 8.4375 15.4375 8 16 8 Z M 5 15 L 5 17 L 27 17 L 27 15 Z M 16 20 C 14.355469 20 13 21.355469 13 23 C 13 24.644531 14.355469 26 16 26 C 17.644531 26 19 24.644531 19 23 C 19 21.355469 17.644531 20 16 20 Z M 16 22 C 16.5625 22 17 22.4375 17 23 C 17 23.5625 16.5625 24 16 24 C 15.4375 24 15 23.5625 15 23 C 15 22.4375 15.4375 22 16 22 Z"/></Svg>);
};
export default SVGDivideSolid;