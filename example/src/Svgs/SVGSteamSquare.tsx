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
const SVGSteamSquare = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 5 L 5 16 L 8.8125 17.59375 C 9.523438 16.660156 10.621094 16.035156 11.875 16 L 14.03125 12.75 C 14.15625 10.101563 16.320313 8 19 8 C 21.761719 8 24 10.238281 24 13 C 24 15.679688 21.898438 17.84375 19.25 17.96875 L 16 20.125 C 15.9375 22.28125 14.171875 24 12 24 C 9.789063 24 8 22.210938 8 20 C 8 19.808594 8.035156 19.621094 8.0625 19.4375 L 5 18.15625 L 5 27 L 27 27 L 27 5 Z M 19 10 C 17.347656 10 16 11.347656 16 13 C 16 14.652344 17.347656 16 19 16 C 20.652344 16 22 14.652344 22 13 C 22 11.347656 20.652344 10 19 10 Z M 19 11 C 20.109375 11 21 11.890625 21 13 C 21 14.109375 20.109375 15 19 15 C 17.890625 15 17 14.109375 17 13 C 17 11.890625 17.890625 11 19 11 Z M 12 18 C 11.546875 18 11.117188 18.148438 10.78125 18.40625 L 12.375 19.0625 C 12.886719 19.273438 13.152344 19.863281 12.9375 20.375 C 12.777344 20.757813 12.390625 21 12 21 C 11.871094 21 11.75 20.992188 11.625 20.9375 L 10.03125 20.25 C 10.160156 21.230469 10.984375 22 12 22 C 13.105469 22 14 21.105469 14 20 C 14 18.894531 13.105469 18 12 18 Z"/></Svg>);
};
export default SVGSteamSquare;
