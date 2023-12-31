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
const SVGSortAmountUpSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 4 5 L 4 7 L 16 7 L 16 5 L 4 5 z M 22 5.5 L 21.279297 6.1894531 L 17 10.5 L 18.410156 11.910156 L 21 9.3105469 L 21 28 L 23 28 L 23 9.3105469 L 25.589844 11.910156 L 27 10.5 L 22.720703 6.1894531 L 22 5.5 z M 4 9 L 4 11 L 14 11 L 14 9 L 4 9 z M 4 13 L 4 15 L 12 15 L 12 13 L 4 13 z M 4 17 L 4 19 L 10 19 L 10 17 L 4 17 z M 4 21 L 4 23 L 8 23 L 8 21 L 4 21 z M 4 25 L 4 27 L 6 27 L 6 25 L 4 25 z"/></Svg>);
};
export default SVGSortAmountUpSolid;
