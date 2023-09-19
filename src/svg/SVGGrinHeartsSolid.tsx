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
const SVGGrinHeartsSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 21.535156 6 26 10.464844 26 16 C 26 21.535156 21.535156 26 16 26 C 10.464844 26 6 21.535156 6 16 C 6 10.464844 10.464844 6 16 6 Z M 10.5 11 C 9.671875 11 9 11.671875 9 12.5 C 9 12.59375 9.007813 12.683594 9.03125 12.78125 C 9.074219 13.019531 9.171875 13.222656 9.3125 13.40625 C 10.0625 14.699219 12 16 12 16 C 12 16 15 14.09375 15 12.5 C 15 11.671875 14.328125 11 13.5 11 C 12.671875 11 12 11.671875 12 12.5 C 12 11.671875 11.328125 11 10.5 11 Z M 18.5 11 C 17.671875 11 17 11.671875 17 12.5 C 17 12.59375 17.007813 12.683594 17.03125 12.78125 C 17.074219 13.019531 17.171875 13.222656 17.3125 13.40625 C 18.0625 14.699219 20 16 20 16 C 20 16 21.988281 14.710938 22.71875 13.375 C 22.878906 13.078125 23 12.789063 23 12.5 C 23 11.671875 22.328125 11 21.5 11 C 20.671875 11 20 11.671875 20 12.5 C 20 11.671875 19.328125 11 18.5 11 Z M 10.8125 19 L 9.09375 20 C 10.476563 22.386719 13.046875 24 16 24 C 18.953125 24 21.523438 22.386719 22.90625 20 L 21.1875 19 C 20.148438 20.792969 18.226563 22 16 22 C 13.773438 22 11.851563 20.792969 10.8125 19 Z"/></Svg>);
};
export default SVGGrinHeartsSolid;
