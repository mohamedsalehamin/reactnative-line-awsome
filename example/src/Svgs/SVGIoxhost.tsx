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
const SVGIoxhost = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 17.039063 4.15625 18.035156 4.40625 19 L 2 19 C 1.449219 19 1 19.449219 1 20 C 1 20.550781 1.449219 21 2 21 L 5.09375 21 C 6.996094 25.121094 11.171875 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 14.960938 27.84375 13.964844 27.59375 13 L 30 13 C 30.550781 13 31 12.550781 31 12 C 31 11.449219 30.550781 11 30 11 L 26.90625 11 C 25.003906 6.878906 20.828125 4 16 4 Z M 16 6 C 19.714844 6 22.929688 8.003906 24.65625 11 L 11 11 C 10.449219 11 10 11.449219 10 12 C 10 12.550781 10.449219 13 11 13 L 25.5625 13 C 25.859375 13.949219 26 14.953125 26 16 C 26 21.535156 21.535156 26 16 26 C 12.285156 26 9.070313 23.996094 7.34375 21 L 21 21 C 21.550781 21 22 20.550781 22 20 C 22 19.449219 21.550781 19 21 19 L 6.4375 19 C 6.140625 18.050781 6 17.046875 6 16 C 6 10.464844 10.464844 6 16 6 Z M 11 15 C 10.449219 15 10 15.449219 10 16 C 10 16.550781 10.449219 17 11 17 L 21 17 C 21.550781 17 22 16.550781 22 16 C 22 15.449219 21.550781 15 21 15 Z"/></Svg>);
};
export default SVGIoxhost;
