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
const SVGRulerSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 20.53125 3.59375 L 3.59375 20.53125 L 11.46875 28.40625 L 28.40625 11.46875 Z M 20.53125 6.4375 L 25.5625 11.46875 L 11.46875 25.5625 L 6.4375 20.53125 L 7.59375 19.375 L 9.75 21.53125 L 11.1875 20.125 L 9 17.9375 L 10.1875 16.78125 L 11.0625 17.65625 L 12.46875 16.21875 L 11.59375 15.375 L 12.78125 14.1875 L 14.9375 16.34375 L 16.34375 14.9375 L 14.1875 12.78125 L 15.375 11.59375 L 16.21875 12.46875 L 17.65625 11.0625 L 16.78125 10.1875 L 17.9375 9 L 20.125 11.1875 L 21.53125 9.75 L 19.375 7.59375 Z"/></Svg>);
};
export default SVGRulerSolid;
