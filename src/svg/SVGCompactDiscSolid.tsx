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
const SVGCompactDiscSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 21.535156 6 26 10.464844 26 16 C 26 21.535156 21.535156 26 16 26 C 10.464844 26 6 21.535156 6 16 C 6 10.464844 10.464844 6 16 6 Z M 13.21875 8.5 C 11.042969 9.308594 9.308594 11.042969 8.5 13.21875 L 10.375 13.90625 C 10.980469 12.277344 12.277344 10.980469 13.90625 10.375 Z M 16 13 C 14.355469 13 13 14.355469 13 16 C 13 17.644531 14.355469 19 16 19 C 17.644531 19 19 17.644531 19 16 C 19 14.355469 17.644531 13 16 13 Z M 16 15 C 16.5625 15 17 15.4375 17 16 C 17 16.5625 16.5625 17 16 17 C 15.4375 17 15 16.5625 15 16 C 15 15.4375 15.4375 15 16 15 Z M 21.625 18.09375 C 21.019531 19.722656 19.722656 21.019531 18.09375 21.625 L 18.78125 23.5 C 20.957031 22.691406 22.691406 20.957031 23.5 18.78125 Z"/></Svg>);
};
export default SVGCompactDiscSolid;
