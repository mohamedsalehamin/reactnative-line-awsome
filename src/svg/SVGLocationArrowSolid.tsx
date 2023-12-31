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
const SVGLocationArrowSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 4.4375 L 15.09375 6.625 L 7.09375 25.625 L 6.1875 27.75 L 8.34375 26.9375 L 16 24.0625 L 23.65625 26.9375 L 25.8125 27.75 L 24.90625 25.625 L 16.90625 6.625 Z M 16 9.53125 L 22.1875 24.25 L 16.34375 22.0625 L 16 21.9375 L 15.65625 22.0625 L 9.8125 24.25 Z"/></Svg>);
};
export default SVGLocationArrowSolid;
