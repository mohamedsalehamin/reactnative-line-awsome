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
const SVGChessBoardSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 7 4 L 7 7 L 10 7 L 10 4 L 7 4 z M 10 7 L 10 10 L 13 10 L 13 7 L 10 7 z M 13 7 L 16 7 L 16 4 L 13 4 L 13 7 z M 16 7 L 16 10 L 19 10 L 19 7 L 16 7 z M 19 7 L 22 7 L 22 4 L 19 4 L 19 7 z M 22 7 L 22 10 L 25 10 L 25 7 L 22 7 z M 25 7 L 28 7 L 28 4 L 25 4 L 25 7 z M 25 10 L 25 13 L 28 13 L 28 10 L 25 10 z M 25 13 L 22 13 L 22 16 L 25 16 L 25 13 z M 25 16 L 25 19 L 28 19 L 28 16 L 25 16 z M 25 19 L 22 19 L 22 22 L 25 22 L 25 19 z M 25 22 L 25 25 L 28 25 L 28 22 L 25 22 z M 25 25 L 22 25 L 22 28 L 25 28 L 25 25 z M 22 25 L 22 22 L 19 22 L 19 25 L 22 25 z M 19 25 L 16 25 L 16 28 L 19 28 L 19 25 z M 16 25 L 16 22 L 13 22 L 13 25 L 16 25 z M 13 25 L 10 25 L 10 28 L 13 28 L 13 25 z M 10 25 L 10 22 L 7 22 L 7 25 L 10 25 z M 7 25 L 4 25 L 4 28 L 7 28 L 7 25 z M 7 22 L 7 19 L 4 19 L 4 22 L 7 22 z M 7 19 L 10 19 L 10 16 L 7 16 L 7 19 z M 7 16 L 7 13 L 4 13 L 4 16 L 7 16 z M 7 13 L 10 13 L 10 10 L 7 10 L 7 13 z M 7 10 L 7 7 L 4 7 L 4 10 L 7 10 z M 10 13 L 10 16 L 13 16 L 13 13 L 10 13 z M 13 13 L 16 13 L 16 10 L 13 10 L 13 13 z M 16 13 L 16 16 L 19 16 L 19 13 L 16 13 z M 19 13 L 22 13 L 22 10 L 19 10 L 19 13 z M 19 16 L 19 19 L 22 19 L 22 16 L 19 16 z M 19 19 L 16 19 L 16 22 L 19 22 L 19 19 z M 16 19 L 16 16 L 13 16 L 13 19 L 16 19 z M 13 19 L 10 19 L 10 22 L 13 22 L 13 19 z"/></Svg>);
};
export default SVGChessBoardSolid;
