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
const SVGImages = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 2 5 L 2 23 L 6 23 L 6 27 L 30 27 L 30 9 L 26 9 L 26 5 Z M 4 7 L 24 7 L 24 21 L 4 21 Z M 6 9 L 6 19 L 22 19 L 22 9 Z M 8 11 L 20 11 L 20 17 L 8 17 Z M 26 11 L 28 11 L 28 25 L 8 25 L 8 23 L 26 23 Z"/></Svg>);
};
export default SVGImages;
