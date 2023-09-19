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
const SVGDumpsterSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 6 L 3 14 L 4.3339844 14 L 4.6660156 16 L 3 16 L 3 18 L 5 18 L 6 24 L 6 26 L 8 26 L 8 24 L 24 24 L 24 26 L 26 26 L 26 24 L 27 18 L 29 18 L 29 16 L 27.333984 16 L 27.666016 14 L 29 14 L 27 6 L 17 6 L 15 6 L 5 6 z M 6.5625 8 L 9.3378906 8 L 8.5722656 12 L 5.5625 12 L 6.5625 8 z M 11.390625 8 L 15 8 L 15 12 L 10.630859 12 L 11.390625 8 z M 17 8 L 20.609375 8 L 21.369141 12 L 17 12 L 17 8 z M 22.662109 8 L 25.4375 8 L 26.4375 12 L 23.427734 12 L 22.662109 8 z M 6.3613281 14 L 8.1894531 14 L 10.25 14 L 15 14 L 17 14 L 21.75 14 L 23.810547 14 L 25.638672 14 L 24.306641 22 L 7.6933594 22 L 6.3613281 14 z"/></Svg>);
};
export default SVGDumpsterSolid;
