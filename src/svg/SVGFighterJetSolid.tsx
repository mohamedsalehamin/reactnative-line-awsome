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
const SVGFighterJetSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 7.875 4 L 8.875 13 L 8.03125 13 L 6.3125 10.4375 L 6.03125 10 L 1.78125 10 L 2.03125 11.1875 L 3 16 L 2.03125 20.8125 L 1.78125 22 L 6.03125 22 L 6.3125 21.5625 L 8.03125 19 L 8.875 19 L 7.875 28 L 11.40625 28 L 11.71875 27.71875 L 20.4375 19 L 26 19 C 27.15625 19 27.894531 18.328125 28.5625 17.78125 C 29.230469 17.234375 29.71875 16.6875 29.71875 16.6875 L 30.375 16 L 29.71875 15.3125 C 29.71875 15.3125 29.230469 14.765625 28.5625 14.21875 C 27.894531 13.671875 27.15625 13 26 13 L 20.4375 13 L 11.71875 4.28125 L 11.40625 4 Z M 10.125 6 L 10.5625 6 L 19.28125 14.71875 L 19.59375 15 L 26 15 C 25.949219 15 26.726563 15.328125 27.28125 15.78125 C 27.417969 15.894531 27.414063 15.894531 27.53125 16 C 27.414063 16.105469 27.417969 16.105469 27.28125 16.21875 C 26.726563 16.671875 25.949219 17 26 17 L 19.59375 17 L 19.28125 17.28125 L 10.5625 26 L 10.125 26 L 11.125 17 L 6.9375 17 L 6.65625 17.4375 L 4.9375 20 L 4.21875 20 L 4.96875 16.1875 L 5.03125 16 L 4.96875 15.8125 L 4.21875 12 L 4.9375 12 L 6.65625 14.5625 L 6.9375 15 L 11.125 15 Z M 16 7 L 18 9 L 20 9 L 21 8 L 20 7 Z M 18 23 L 16 25 L 20 25 L 21 24 L 20 23 Z"/></Svg>);
};
export default SVGFighterJetSolid;
