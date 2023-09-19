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
const SVGChromecast = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 6 6 C 4.897 6 4 6.897 4 8 L 4 12 L 6 12 L 6 8 L 26 8 L 26 24 L 18 24 L 18 26 L 26 26 C 27.103 26 28 25.103 28 24 L 28 8 C 28 6.897 27.103 6 26 6 L 6 6 z M 4 14 L 4 16 C 9.169375 16 13.436179 19.942273 13.949219 24.978516 C 13.983421 25.314265 14 25.655375 14 26 L 16 26 C 16 19.383 10.617 14 4 14 z M 4 18 L 4 20 C 7.309 20 10 22.691 10 26 L 12 26 C 12 21.589 8.411 18 4 18 z M 4 22 L 4 26 L 8 26 C 8 23.791 6.209 22 4 22 z"/></Svg>);
};
export default SVGChromecast;
