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
const SVGSmileSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 21.535156 6 26 10.464844 26 16 C 26 21.535156 21.535156 26 16 26 C 10.464844 26 6 21.535156 6 16 C 6 10.464844 10.464844 6 16 6 Z M 11.5 12 C 10.671875 12 10 12.671875 10 13.5 C 10 14.328125 10.671875 15 11.5 15 C 12.328125 15 13 14.328125 13 13.5 C 13 12.671875 12.328125 12 11.5 12 Z M 20.5 12 C 19.671875 12 19 12.671875 19 13.5 C 19 14.328125 19.671875 15 20.5 15 C 21.328125 15 22 14.328125 22 13.5 C 22 12.671875 21.328125 12 20.5 12 Z M 10.8125 19 L 9.09375 20 C 10.476563 22.386719 13.046875 24 16 24 C 18.953125 24 21.523438 22.386719 22.90625 20 L 21.1875 19 C 20.148438 20.792969 18.226563 22 16 22 C 13.773438 22 11.851563 20.792969 10.8125 19 Z"/></Svg>);
};
export default SVGSmileSolid;
