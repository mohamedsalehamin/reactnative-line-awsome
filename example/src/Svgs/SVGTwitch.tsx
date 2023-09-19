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
const SVGTwitch = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 6.5 5 L 5 9 L 5 25 L 10.5 25 L 10.5 28 L 13.5 28 L 16.5 25 L 21 25 L 27 19 L 27 5 Z M 9 7 L 25 7 L 25 18 L 22 21 L 16 21 L 13 24 L 13 21 L 9 21 Z M 14 11 L 14 17 L 16 17 L 16 11 Z M 19 11 L 19 17 L 21 17 L 21 11 Z"/></Svg>);
};
export default SVGTwitch;
