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
const SVGSubwaySolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 10 4 C 7.25 4 5 6.25 5 9 L 5 21 C 5 23.425781 6.449219 25.523438 8.53125 26.46875 L 6 29 L 8.34375 29 L 10.375 26.96875 C 10.574219 26.988281 10.792969 27 11 27 L 21 27 C 21.207031 27 21.425781 26.988281 21.625 26.96875 L 23.65625 29 L 26 29 L 23.46875 26.46875 C 25.550781 25.523438 27 23.425781 27 21 L 27 9 C 27 6.25 24.75 4 22 4 Z M 10 6 L 22 6 C 23.320313 6 24.4375 6.828125 24.84375 8 L 7.15625 8 C 7.5625 6.828125 8.679688 6 10 6 Z M 7 10 L 15 10 L 15 16 L 7 16 Z M 17 10 L 25 10 L 25 16 L 17 16 Z M 7 18 L 25 18 L 25 21 C 25 23.21875 23.21875 25 21 25 L 11 25 C 8.78125 25 7 23.21875 7 21 Z M 10.5 20 C 9.671875 20 9 20.671875 9 21.5 C 9 22.328125 9.671875 23 10.5 23 C 11.328125 23 12 22.328125 12 21.5 C 12 20.671875 11.328125 20 10.5 20 Z M 21.5 20 C 20.671875 20 20 20.671875 20 21.5 C 20 22.328125 20.671875 23 21.5 23 C 22.328125 23 23 22.328125 23 21.5 C 23 20.671875 22.328125 20 21.5 20 Z"/></Svg>);
};
export default SVGSubwaySolid;
