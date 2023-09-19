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
const SVGTrademarkSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 3 8 L 3 10 L 7 10 L 7 23 L 9 23 L 9 10 L 13 10 L 13 8 Z M 15 8 L 15 23 L 17 23 L 17 10.875 L 21.15625 17.53125 L 22 18.875 L 22.84375 17.53125 L 27 10.875 L 27 23 L 29 23 L 29 8 L 26.4375 8 L 26.15625 8.46875 L 22 15.125 L 17.84375 8.46875 L 17.5625 8 Z"/></Svg>);
};
export default SVGTrademarkSolid;
