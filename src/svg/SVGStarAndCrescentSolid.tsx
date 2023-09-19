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
const SVGStarAndCrescentSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 14.5 4 C 8.144531 4 3.03125 9.410156 3.03125 16 C 3.03125 22.589844 8.144531 28 14.5 28 C 18.367188 28 20.976563 26.445313 22.9375 24.59375 L 22.25 23.875 L 21.75 23 C 20.59375 23.683594 19.535156 24 17 24 C 12.574219 24 9 20.660156 9 16 C 9 11.339844 12.578125 8 17 8 C 19.148438 8 20.644531 8.339844 21.71875 8.9375 L 21.9375 8.53125 L 22 8.46875 L 21.75 8.9375 C 21.769531 8.949219 21.785156 8.953125 21.8125 8.96875 L 22.3125 8.125 L 23.03125 7.40625 C 21.03125 5.519531 18.175781 4 14.5 4 Z M 14.5 6 C 14.960938 6 15.386719 6.042969 15.8125 6.09375 C 10.90625 6.667969 7 10.71875 7 16 C 7 21.292969 10.925781 25.34375 15.84375 25.90625 C 15.417969 25.953125 14.980469 26 14.5 26 C 9.277344 26 5.03125 21.558594 5.03125 16 C 5.03125 10.4375 9.277344 6 14.5 6 Z M 25.59375 11 L 23.4375 14.09375 L 20.03125 12.875 L 22.125 16 L 20 19.0625 L 23.4375 17.90625 L 25.5625 21 L 25.5625 17.1875 L 29 16 L 25.5625 14.8125 Z"/></Svg>);
};
export default SVGStarAndCrescentSolid;
