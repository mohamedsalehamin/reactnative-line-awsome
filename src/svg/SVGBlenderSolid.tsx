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
const SVGBlenderSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 8 5 C 6.346 5 5 6.346 5 8 L 5 13 C 5 14.654 6.346 16 8 16 L 11.242188 16 L 11.869141 21.013672 C 10.276981 21.083943 9 22.390848 9 24 L 9 27 L 26 27 L 26 24 C 26 22.432317 24.786487 21.155867 23.251953 21.025391 L 26.957031 5 L 14 5 L 9.8671875 5 L 8 5 z M 8 7 L 10.117188 7 L 10.992188 14 L 8 14 C 7.449 14 7 13.551 7 13 L 7 8 C 7 7.449 7.449 7 8 7 z M 12.132812 7 L 14 7 L 24.441406 7 L 23.978516 9 L 19 9 L 19 11 L 23.517578 11 L 23.054688 13 L 19 13 L 19 15 L 22.591797 15 L 22.128906 17 L 19 17 L 19 19 L 21.667969 19 L 21.205078 21 L 13.882812 21 L 12.132812 7 z M 12 23 L 23 23 C 23.551 23 24 23.449 24 24 L 24 25 L 11 25 L 11 24 C 11 23.449 11.449 23 12 23 z"/></Svg>);
};
export default SVGBlenderSolid;
