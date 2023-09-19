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
const SVGLifeRingSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 16.335938 6 16.671875 6.03125 17 6.0625 L 17 9.09375 C 16.671875 9.046875 16.339844 9 16 9 C 15.660156 9 15.328125 9.046875 15 9.09375 L 15 6.0625 C 15.328125 6.03125 15.664063 6 16 6 Z M 13 6.4375 L 13 9.6875 C 11.546875 10.382813 10.378906 11.546875 9.6875 13 L 6.46875 13 C 7.441406 9.875 9.882813 7.414063 13 6.4375 Z M 19 6.4375 C 22.113281 7.414063 24.585938 9.886719 25.5625 13 L 22.3125 13 C 21.621094 11.546875 20.453125 10.378906 19 9.6875 Z M 16 11 C 18.773438 11 21 13.226563 21 16 C 21 18.773438 18.773438 21 16 21 C 13.226563 21 11 18.773438 11 16 C 11 13.226563 13.226563 11 16 11 Z M 6.0625 15 L 9.0625 15 C 9.015625 15.324219 9 15.664063 9 16 C 9 16.339844 9.046875 16.671875 9.09375 17 L 6.0625 17 C 6.03125 16.671875 6 16.335938 6 16 C 6 15.664063 6.03125 15.328125 6.0625 15 Z M 22.90625 15 L 25.9375 15 C 25.96875 15.328125 26 15.664063 26 16 C 26 16.335938 25.96875 16.671875 25.9375 17 L 22.90625 17 C 22.953125 16.671875 23 16.339844 23 16 C 23 15.660156 22.953125 15.328125 22.90625 15 Z M 6.4375 19 L 9.6875 19 C 10.378906 20.453125 11.546875 21.621094 13 22.3125 L 13 25.5625 C 9.886719 24.585938 7.414063 22.113281 6.4375 19 Z M 22.3125 19 L 25.5625 19 C 24.585938 22.113281 22.113281 24.585938 19 25.5625 L 19 22.3125 C 20.453125 21.621094 21.621094 20.453125 22.3125 19 Z M 15 22.90625 C 15.328125 22.953125 15.660156 23 16 23 C 16.339844 23 16.671875 22.953125 17 22.90625 L 17 25.9375 C 16.671875 25.96875 16.335938 26 16 26 C 15.664063 26 15.328125 25.96875 15 25.9375 Z"/></Svg>);
};
export default SVGLifeRingSolid;
