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
const SVGBuysellads = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 11.1875 6 L 10.96875 6.6875 L 5.0625 24.6875 L 4.625 26 L 11.96875 26 L 12.25 25.78125 L 18.125 21 L 19.28125 25.25 L 19.5 26 L 27.40625 26 L 26.9375 24.6875 L 20.875 6.6875 L 20.625 6 Z M 12.65625 8 L 19.1875 8 L 24.625 24 L 21 24 L 17.0625 9.46875 L 16.875 8.71875 L 15.15625 8.71875 L 14.9375 9.4375 L 12.28125 18.71875 L 11.90625 20 L 16.1875 20 L 11.28125 24 L 7.375 24 Z M 15.96875 13.09375 L 17.3125 18 L 14.5625 18 Z"/></Svg>);
};
export default SVGBuysellads;
