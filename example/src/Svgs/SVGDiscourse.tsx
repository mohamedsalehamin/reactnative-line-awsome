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
const SVGDiscourse = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16.109375 3 C 8.994375 3 3 8.7164375 3 15.773438 C 3 15.999438 3.0058594 29 3.0058594 29 L 16.109375 28.988281 C 23.230375 28.988281 29 23.051141 29 15.994141 C 29 8.9371406 23.230375 3 16.109375 3 z M 16 8 C 20.418 8 24 11.582 24 16 C 24 20.418 20.418 24 16 24 C 14.58 24 13.247797 23.625563 12.091797 22.976562 L 8 24 L 9.1210938 20.070312 C 8.4130937 18.877312 8 17.489 8 16 C 8 11.582 11.582 8 16 8 z"/></Svg>);
};
export default SVGDiscourse;
