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
const SVGStepForwardSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 22 5 L 22 15.5 L 21.5625 15.1875 L 8.5625 6.1875 L 7 5.09375 L 7 26.90625 L 8.5625 25.8125 L 21.5625 16.8125 L 22 16.5 L 22 27 L 24 27 L 24 5 Z M 9 8.90625 L 19.25 16 L 9 23.09375 Z"/></Svg>);
};
export default SVGStepForwardSolid;
