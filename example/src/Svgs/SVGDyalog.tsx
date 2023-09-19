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
const SVGDyalog = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 6 5 L 6 12 L 8 12 L 8 7 L 15 7 C 19.962 7 24 11.038 24 16 C 24 20.962 19.962 25 15 25 L 6 25 L 6 27 L 15 27 C 21.065 27 26 22.065 26 16 C 26 9.935 21.065 5 15 5 L 6 5 z"/></Svg>);
};
export default SVGDyalog;
