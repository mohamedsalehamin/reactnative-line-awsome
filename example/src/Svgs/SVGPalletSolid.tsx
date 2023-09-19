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
const SVGPalletSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 6.125 5 L 6 5.84375 L 4 19.84375 L 4 27 L 10 27 L 10 25 L 22 25 L 22 27 L 28 27 L 28 19.84375 L 26 5.84375 L 25.875 5 Z M 7.875 7 L 9.9375 7 L 9.0625 19 L 6.15625 19 Z M 11.9375 7 L 15 7 L 15 19 L 11.0625 19 Z M 17 7 L 20.0625 7 L 20.9375 19 L 17 19 Z M 22.0625 7 L 24.125 7 L 25.84375 19 L 22.9375 19 Z M 6 21 L 26 21 L 26 25 L 24 25 L 24 23 L 8 23 L 8 25 L 6 25 Z"/></Svg>);
};
export default SVGPalletSolid;
