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
const SVGGetPocket = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 7 5 C 5.355469 5 4 6.355469 4 8 L 4 15 C 4 21.617188 9.382813 27 16 27 C 22.617188 27 28 21.617188 28 15 L 28 8 C 28 6.355469 26.644531 5 25 5 Z M 7 7 L 25 7 C 25.566406 7 26 7.433594 26 8 L 26 15 C 26 20.535156 21.535156 25 16 25 C 10.464844 25 6 20.535156 6 15 L 6 8 C 6 7.433594 6.433594 7 7 7 Z M 10.65625 11.40625 C 10.273438 11.40625 9.886719 11.582031 9.59375 11.875 C 9.007813 12.460938 9.007813 13.382813 9.59375 13.96875 L 15 19.375 C 15.28125 19.65625 15.664063 19.8125 16.0625 19.8125 C 16.460938 19.8125 16.84375 19.65625 17.125 19.375 L 22.40625 14.125 C 22.992188 13.539063 22.992188 12.585938 22.40625 12 C 21.820313 11.414063 20.867188 11.414063 20.28125 12 L 16.0625 16.21875 L 11.71875 11.875 C 11.425781 11.582031 11.039063 11.40625 10.65625 11.40625 Z"/></Svg>);
};
export default SVGGetPocket;
