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
const SVGTagsSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 14.59375 4 L 14.28125 4.28125 L 3.28125 15.28125 L 2.59375 16 L 3.28125 16.71875 L 12.28125 25.71875 L 13 26.40625 L 13.71875 25.71875 L 24.71875 14.71875 L 25 14.40625 L 25 4 Z M 15.4375 6 L 23 6 L 23 13.5625 L 13 23.5625 L 5.4375 16 Z M 26 7 L 26 9 L 27 9 L 27 17.15625 L 17.5 26.59375 L 16.25 25.34375 L 14.84375 26.75 L 16.78125 28.71875 L 17.5 29.40625 L 18.1875 28.71875 L 28.71875 18.3125 L 29 18 L 29 7 Z M 20 8 C 19.449219 8 19 8.449219 19 9 C 19 9.550781 19.449219 10 20 10 C 20.550781 10 21 9.550781 21 9 C 21 8.449219 20.550781 8 20 8 Z"/></Svg>);
};
export default SVGTagsSolid;
