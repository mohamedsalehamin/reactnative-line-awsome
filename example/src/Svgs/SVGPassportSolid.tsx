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
const SVGPassportSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 6 3 L 6 29 L 26 29 L 26 3 Z M 8 5 L 24 5 L 24 27 L 8 27 Z M 16 8 C 12.699219 8 10 10.699219 10 14 C 10 17.300781 12.699219 20 16 20 C 19.300781 20 22 17.300781 22 14 C 22 10.699219 19.300781 8 16 8 Z M 16.6875 10.09375 C 17.171875 10.175781 17.625 10.324219 18.03125 10.5625 L 18.09375 11.28125 L 17.625 11.09375 L 17.25 11.40625 L 17.3125 12.3125 L 18.28125 12.03125 L 19.46875 12.40625 L 19.15625 12.9375 L 18.4375 12.5 L 17.65625 12.625 L 16.90625 13.1875 L 16.46875 14.5 L 17.3125 15.1875 C 17.3125 15.1875 18.203125 15.03125 18.25 15.03125 C 18.296875 15.03125 18.625 15.84375 18.625 15.84375 L 18.125 17.375 C 17.511719 17.757813 16.785156 18 16 18 C 15.765625 18 15.535156 17.945313 15.3125 17.90625 L 15.125 17.59375 L 15.59375 15.84375 L 13.8125 14.5 L 12.15625 14.5 L 12.03125 14.25 C 12.027344 14.164063 12 14.085938 12 14 C 12 13.785156 12.03125 13.578125 12.0625 13.375 L 12.90625 12.71875 L 14.6875 11.875 L 14.40625 10.71875 L 15.1875 10.5625 L 15.53125 11.0625 L 16.875 10.8125 Z M 13.0625 16.71875 L 13.375 16.71875 L 13.96875 17.4375 C 13.628906 17.238281 13.328125 17.003906 13.0625 16.71875 Z M 10 22 L 10 24 L 22 24 L 22 22 Z"/></Svg>);
};
export default SVGPassportSolid;
