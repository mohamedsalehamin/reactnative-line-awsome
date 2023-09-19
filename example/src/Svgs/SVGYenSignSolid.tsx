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
const SVGYenSignSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 7.1875 5 L 14.0625 16 L 10 16 L 10 18 L 15 18 L 15 20 L 10 20 L 10 22 L 15 22 L 15 27 L 17 27 L 17 22 L 22 22 L 22 20 L 17 20 L 17 18 L 22 18 L 22 16 L 17.9375 16 L 24.8125 5 L 22.4375 5 L 16 15.34375 L 9.5625 5 Z"/></Svg>);
};
export default SVGYenSignSolid;
