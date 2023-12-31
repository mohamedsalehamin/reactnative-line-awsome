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
const SVGRedRiver = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 5 L 5 27 L 27 27 L 27 5 L 5 5 z M 7 7 L 25 7 L 25 25 L 7 25 L 7 7 z M 12 11 C 11.448 11 11 11.448 11 12 L 11 18 C 12.105 18 13 17.105 13 16 L 13 14 C 13 13.448 13.448 13 14 13 L 16 13 C 17.105 13 18 12.105 18 11 L 12 11 z M 16 15 C 15.448 15 15 15.448 15 16 L 15 22 C 16.105 22 17 21.105 17 20 L 17 18 C 17 17.448 17.448 17 18 17 L 20 17 C 21.105 17 22 16.105 22 15 L 16 15 z"/></Svg>);
};
export default SVGRedRiver;
