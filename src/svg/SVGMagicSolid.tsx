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
const SVGMagicSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 20.875 2.5625 L 20.1875 3.3125 L 18.5 5.09375 L 14.90625 5.09375 L 14.90625 8.59375 L 13.1875 10.40625 L 12.5 11.125 L 14.6875 13.3125 L 3.03125 25 L 2.3125 25.71875 L 3.03125 26.40625 L 6.3125 29.6875 L 7 28.96875 L 18.6875 17.3125 L 20.875 19.5 L 21.59375 18.8125 L 23.40625 17.09375 L 26.90625 17.09375 L 26.90625 13.5 L 28.6875 11.8125 L 29.4375 11.125 L 26.90625 8.59375 L 26.90625 5.09375 L 23.40625 5.09375 Z M 20.90625 5.4375 L 22.28125 6.8125 L 22.59375 7.09375 L 24.90625 7.09375 L 24.90625 9.40625 L 25.1875 9.71875 L 26.5625 11.09375 L 25.21875 12.375 L 24.90625 12.65625 L 24.90625 15.09375 L 22.59375 15.09375 L 22.3125 15.375 L 20.90625 16.71875 L 20.09375 15.90625 L 24.625 11.375 L 20.65625 7.40625 L 19.9375 8.09375 L 16.125 11.9375 L 15.28125 11.09375 L 16.625 9.6875 L 16.90625 9.40625 L 16.90625 7.09375 L 19.34375 7.09375 L 19.625 6.78125 Z M 20.65625 10.21875 L 21.78125 11.375 L 6.3125 26.875 L 5.15625 25.71875 Z M 19 21 L 19 22 L 18 22 L 18 24 L 19 24 L 19 25 L 21 25 L 21 24 L 22 24 L 22 22 L 21 22 L 21 21 Z M 25 23 L 25 25 L 23 25 L 23 27 L 25 27 L 25 29 L 27 29 L 27 27 L 29 27 L 29 25 L 27 25 L 27 23 Z"/></Svg>);
};
export default SVGMagicSolid;
