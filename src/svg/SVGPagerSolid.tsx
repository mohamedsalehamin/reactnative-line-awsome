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
const SVGPagerSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 7 7 C 5.3550302 7 4 8.3550302 4 10 L 4 22 C 4 23.64497 5.3550302 25 7 25 L 25 25 C 26.64497 25 28 23.64497 28 22 L 28 10 C 28 8.3550302 26.64497 7 25 7 L 7 7 z M 7 9 L 25 9 C 25.56503 9 26 9.4349698 26 10 L 26 22 C 26 22.56503 25.56503 23 25 23 L 7 23 C 6.4349698 23 6 22.56503 6 22 L 6 10 C 6 9.4349698 6.4349698 9 7 9 z M 8 11 L 8 17 L 20 17 L 20 11 L 8 11 z M 22 11 L 22 13 L 24 13 L 24 11 L 22 11 z M 22 15 L 22 17 L 24 17 L 24 15 L 22 15 z M 8 19 L 8 21 L 20 21 L 20 19 L 8 19 z M 22 19 L 22 21 L 24 21 L 24 19 L 22 19 z"/></Svg>);
};
export default SVGPagerSolid;
