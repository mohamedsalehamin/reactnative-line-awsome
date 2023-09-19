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
const SVGVolumeUpSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 17 3.59375 L 15.28125 5.28125 L 9.5625 11 L 5 11 L 5 21 L 9.5625 21 L 15.28125 26.71875 L 17 28.40625 Z M 23.8125 8.1875 L 22.40625 9.59375 C 25.925781 13.113281 25.925781 18.761719 22.40625 22.28125 L 23.8125 23.71875 C 28.09375 19.4375 28.09375 12.46875 23.8125 8.1875 Z M 15 8.4375 L 15 23.5625 L 10.71875 19.28125 L 10.40625 19 L 7 19 L 7 13 L 10.40625 13 L 10.71875 12.71875 Z M 20.90625 11.09375 L 19.5 12.5 C 21.410156 14.410156 21.402344 17.574219 19.46875 19.59375 L 20.9375 21 C 23.601563 18.21875 23.59375 13.78125 20.90625 11.09375 Z"/></Svg>);
};
export default SVGVolumeUpSolid;
