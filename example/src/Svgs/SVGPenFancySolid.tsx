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
const SVGPenFancySolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 23.8125 4.03125 C 22.722656 4.03125 21.613281 4.449219 20.78125 5.28125 L 11.5 14.5625 L 6.03125 16.65625 L 5.5 16.875 L 5.40625 17.4375 L 4 26.84375 L 3.8125 28.1875 L 5.15625 28 L 14.5625 26.59375 L 15.125 26.5 L 15.34375 25.96875 L 17.3125 20.78125 L 17.8125 20.3125 L 26.8125 11.3125 C 28.425781 9.699219 28.457031 7.109375 26.9375 5.4375 L 26.8125 5.28125 C 25.980469 4.449219 24.902344 4.03125 23.8125 4.03125 Z M 23.8125 6 C 24.375 6 24.9375 6.25 25.40625 6.71875 C 26.34375 7.65625 26.34375 8.96875 25.40625 9.90625 L 20.375 14.9375 L 17.1875 11.75 L 22.21875 6.71875 C 22.6875 6.25 23.25 6 23.8125 6 Z M 15.75 13.1875 L 18.9375 16.375 L 17.125 18.1875 L 13.9375 15 Z M 12.40625 16.34375 L 12.4375 16.34375 L 15.65625 19.5625 L 13.6875 24.71875 L 7.84375 25.5625 L 10.53125 22.875 C 10.585938 22.878906 10.632813 22.90625 10.6875 22.90625 C 11.570313 22.90625 12.3125 22.195313 12.3125 21.3125 C 12.3125 20.429688 11.570313 19.6875 10.6875 19.6875 C 9.804688 19.6875 9.09375 20.429688 9.09375 21.3125 C 9.09375 21.367188 9.121094 21.414063 9.125 21.46875 L 6.4375 24.15625 L 7.28125 18.3125 Z"/></Svg>);
};
export default SVGPenFancySolid;
