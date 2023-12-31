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
const SVGToiletSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 6 4 C 5.476563 4 4.941406 4.183594 4.5625 4.5625 C 4.183594 4.941406 4 5.476563 4 6 L 4 17 C 4 19.789063 5.652344 22.117188 8 23.59375 L 8 28 L 23 28 L 23 23.59375 C 25.347656 22.117188 27 19.789063 27 17 L 27 16 L 14 16 L 14 6 C 14 5.476563 13.816406 4.941406 13.4375 4.5625 C 13.058594 4.183594 12.523438 4 12 4 Z M 6 6 L 12 6 L 12 16 L 6 16 Z M 8 8 L 8 11 L 10 11 L 10 8 Z M 6.3125 18 L 24.6875 18 C 24.332031 19.726563 23.320313 21.25 21.53125 22.21875 L 21 22.5 L 21 26 L 10 26 L 10 22.5 L 9.46875 22.21875 C 7.679688 21.25 6.667969 19.726563 6.3125 18 Z"/></Svg>);
};
export default SVGToiletSolid;
