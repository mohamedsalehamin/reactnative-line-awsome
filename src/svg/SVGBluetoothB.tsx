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
const SVGBluetoothB = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 14 3.59375 L 14 13.5625 L 9.71875 9.28125 L 8.28125 10.71875 L 13.5625 16 L 8.28125 21.28125 L 9.71875 22.71875 L 14 18.4375 L 14 28.40625 L 15.71875 26.71875 L 20.71875 21.71875 L 21.40625 21 L 20.71875 20.28125 L 16.4375 16 L 20.71875 11.71875 L 21.40625 11 L 20.71875 10.28125 L 15.71875 5.28125 Z M 16 8.4375 L 18.5625 11 L 16 13.5625 Z M 16 18.4375 L 18.5625 21 L 16 23.5625 Z"/></Svg>);
};
export default SVGBluetoothB;
