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
const SVGRainbowSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 5 C 8.28 5 2 11.28 2 19 L 2 27 L 4 27 L 4 19 C 4 12.383 9.383 7 16 7 C 22.617 7 28 12.383 28 19 L 28 27 L 30 27 L 30 19 C 30 11.28 23.72 5 16 5 z M 16 9 C 10.486 9 6 13.486 6 19 L 6 27 L 8 27 L 8 19 C 8 14.589 11.589 11 16 11 C 20.411 11 24 14.589 24 19 L 24 27 L 26 27 L 26 19 C 26 13.486 21.514 9 16 9 z M 16 13 C 12.691 13 10 15.691 10 19 L 10 27 L 12 27 L 12 19 C 12 16.794 13.794 15 16 15 C 18.206 15 20 16.794 20 19 L 20 27 L 22 27 L 22 19 C 22 15.691 19.309 13 16 13 z"/></Svg>);
};
export default SVGRainbowSolid;
