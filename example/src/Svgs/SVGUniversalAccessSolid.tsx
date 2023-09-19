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
const SVGUniversalAccessSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 21.535156 6 26 10.464844 26 16 C 26 21.535156 21.535156 26 16 26 C 10.464844 26 6 21.535156 6 16 C 6 10.464844 10.464844 6 16 6 Z M 16 8 C 14.894531 8 14 8.894531 14 10 C 14 11.105469 14.894531 12 16 12 C 17.105469 12 18 11.105469 18 10 C 18 8.894531 17.105469 8 16 8 Z M 10.21875 12.03125 L 9.78125 13.96875 L 14 14.90625 L 14 19 L 13.03125 23.8125 L 14.96875 24.1875 L 15.96875 19.1875 L 16 19.09375 L 16.03125 19.1875 L 17.03125 24.1875 L 18.96875 23.8125 L 18 19 L 18 14.90625 L 22.21875 13.96875 L 21.78125 12.03125 L 17.5 13 L 14.5 13 Z"/></Svg>);
};
export default SVGUniversalAccessSolid;
