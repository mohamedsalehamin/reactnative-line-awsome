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
const SVGGavelSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 15.96875 1.59375 L 15.25 2.28125 L 8.25 9.3125 L 7.53125 10 L 11.96875 14.4375 L 12.65625 13.71875 L 13 13.375 L 15.09375 15.46875 L 3.28125 27.28125 L 4.71875 28.71875 L 16.53125 16.90625 L 18.59375 18.96875 L 18.25 19.3125 L 17.53125 20 L 21.96875 24.4375 L 22.65625 23.71875 L 30.375 16 L 29.65625 15.3125 L 26.65625 12.28125 L 25.96875 11.59375 L 25.25 12.28125 L 24.96875 12.5625 L 19.375 7 L 20.375 6 L 19.65625 5.3125 L 16.65625 2.28125 Z M 15.96875 4.40625 L 17.5625 6 L 11.96875 11.59375 L 10.375 10 Z M 18 8.4375 L 23.5625 14 L 20 17.5625 L 14.4375 12 Z M 25.96875 14.40625 L 27.5625 16 L 21.96875 21.59375 L 20.375 20 Z"/></Svg>);
};
export default SVGGavelSolid;
