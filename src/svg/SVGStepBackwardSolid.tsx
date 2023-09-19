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
const SVGStepBackwardSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 8 5 L 8 27 L 10 27 L 10 16.5 L 10.4375 16.8125 L 23.4375 25.8125 L 25 26.90625 L 25 5.09375 L 23.4375 6.1875 L 10.4375 15.1875 L 10 15.5 L 10 5 Z M 23 8.90625 L 23 23.09375 L 12.75 16 Z"/></Svg>);
};
export default SVGStepBackwardSolid;
