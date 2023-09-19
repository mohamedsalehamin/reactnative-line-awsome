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
const SVGDochub = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 19 3.5859375 L 19 12 L 27.414062 12 L 19 3.5859375 z M 7 4 L 7 28 L 18 28 C 22.411 28 26 24.411 26 20 L 26 14 L 20 14 L 20 18.9375 C 20 20.6265 18.6265 22 16.9375 22 L 13 22 L 13 10 L 17 10 L 17 4 L 7 4 z M 9 6 L 15 6 L 15 8 L 11 8 L 11 24 L 16.9375 24 C 19.7295 24 22 21.7295 22 18.9375 L 22 16 L 24 16 L 24 20 C 24 23.309 21.309 26 18 26 L 9 26 L 9 6 z M 21 8.4140625 L 22.585938 10 L 21 10 L 21 8.4140625 z"/></Svg>);
};
export default SVGDochub;
