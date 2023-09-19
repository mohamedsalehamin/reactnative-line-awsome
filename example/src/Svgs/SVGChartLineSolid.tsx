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
const SVGChartLineSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 27.21875 5.375 L 23.71875 9.75 L 20.4375 8.09375 L 19.65625 7.71875 L 19.15625 8.4375 L 15.75 13.5625 L 12.59375 11.1875 L 12 10.75 L 11.40625 11.1875 L 7.78125 13.90625 L 4.25 13.03125 L 3.75 14.96875 L 7.75 15.96875 L 8.21875 16.09375 L 8.59375 15.8125 L 12 13.25 L 15.40625 15.8125 L 16.25 16.4375 L 16.84375 15.5625 L 20.34375 10.3125 L 23.5625 11.90625 L 24.28125 12.25 L 28.78125 6.625 Z M 20.0625 18.3125 L 19.21875 19.375 L 15.8125 23.625 L 12.59375 21.1875 L 12 20.75 L 11.40625 21.1875 L 7.90625 23.8125 L 4.4375 22.09375 L 3.5625 23.90625 L 7.5625 25.90625 L 8.09375 26.15625 L 8.59375 25.8125 L 12 23.25 L 15.40625 25.8125 L 16.1875 26.375 L 16.78125 25.625 L 19.90625 21.71875 L 23.15625 26.5625 L 23.9375 27.6875 L 24.78125 26.625 L 28.78125 21.625 L 27.21875 20.375 L 24.09375 24.28125 L 20.84375 19.4375 Z"/></Svg>);
};
export default SVGChartLineSolid;
