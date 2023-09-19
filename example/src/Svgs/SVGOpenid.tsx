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
const SVGOpenid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 19 4 L 15 5.9375 L 15 25.625 C 9.855469 24.953125 6.9375 22.601563 6.9375 19.65625 C 6.9375 16.894531 9.921875 14.554688 14 13.8125 L 14 11.3125 C 7.722656 12.109375 3 15.542969 3 19.65625 C 3 23.949219 7.519531 27.472656 15 28.09375 L 19 26.21875 Z M 20 11.375 L 20 13.90625 C 21.3125 14.1875 22.503906 14.644531 23.5 15.21875 L 21.375 16.40625 L 29 18.0625 L 28.46875 12.4375 L 26.4375 13.5625 C 24.6875 12.5 22.46875 11.742188 20 11.375 Z"/></Svg>);
};
export default SVGOpenid;
