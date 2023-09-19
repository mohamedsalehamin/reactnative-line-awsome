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
const SVGPlugSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 22 3.59375 L 18 7.5625 L 15.71875 5.28125 L 14.28125 6.71875 L 15.03125 7.46875 L 9.90625 12.59375 C 8.695313 13.804688 8.695313 15.789063 9.90625 17 L 11.75 18.84375 L 4.28125 26.28125 L 5.71875 27.71875 L 13.15625 20.25 L 15 22.09375 C 16.210938 23.304688 18.195313 23.304688 19.40625 22.09375 L 24.53125 16.96875 L 25.28125 17.71875 L 26.71875 16.28125 L 24.4375 14 L 28.40625 10 L 27 8.59375 L 23 12.5625 L 19.4375 9 L 23.40625 5 Z M 16.4375 8.875 L 23.125 15.5625 L 18 20.6875 C 17.613281 21.074219 16.792969 21.074219 16.40625 20.6875 L 11.3125 15.59375 C 10.925781 15.207031 10.925781 14.386719 11.3125 14 Z"/></Svg>);
};
export default SVGPlugSolid;
