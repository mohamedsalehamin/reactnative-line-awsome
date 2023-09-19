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
const SVGGratipay = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 21.535156 6 26 10.464844 26 16 C 26 21.535156 21.535156 26 16 26 C 10.464844 26 6 21.535156 6 16 C 6 10.464844 10.464844 6 16 6 Z M 12.5 12 C 11.117188 12 10 13.117188 10 14.5 C 10 15.027344 10.15625 15.535156 10.4375 15.9375 C 10.4375 15.941406 10.46875 15.9375 10.46875 15.9375 L 16 22.25 L 21.53125 15.9375 C 21.53125 15.9375 21.5625 15.90625 21.5625 15.90625 C 21.84375 15.503906 22 15.027344 22 14.5 C 22 13.117188 20.882813 12 19.5 12 C 17.734375 12 17.3125 13.6875 16 13.6875 C 14.6875 13.6875 14.265625 12 12.5 12 Z"/></Svg>);
};
export default SVGGratipay;
