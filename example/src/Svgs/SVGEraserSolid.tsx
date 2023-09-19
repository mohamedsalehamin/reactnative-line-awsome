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
const SVGEraserSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 18.90625 4.09375 C 18.101563 4.09375 17.265625 4.367188 16.625 4.9375 L 16.625 4.96875 L 16.59375 5 L 4.90625 16.59375 C 3.695313 17.804688 3.703125 19.777344 4.84375 21.0625 L 4.875 21.09375 L 4.90625 21.09375 L 10.90625 27.09375 C 12.117188 28.304688 14.089844 28.296875 15.375 27.15625 L 15.375 27.125 L 27 15.5 C 28.265625 14.234375 28.304688 12.210938 27.09375 11 L 21.09375 5 C 20.488281 4.394531 19.710938 4.09375 18.90625 4.09375 Z M 18.875 6.125 C 19.195313 6.125 19.492188 6.210938 19.6875 6.40625 L 25.6875 12.40625 C 26.074219 12.792969 26.128906 13.558594 25.59375 14.09375 L 20.5625 19.125 L 12.90625 11.46875 L 17.96875 6.4375 L 18 6.40625 C 18.253906 6.195313 18.570313 6.125 18.875 6.125 Z M 11.46875 12.90625 L 19.125 20.5625 L 14.03125 25.65625 C 14.019531 25.664063 14.011719 25.679688 14 25.6875 C 13.484375 26.117188 12.691406 26.066406 12.3125 25.6875 L 6.34375 19.75 C 6.328125 19.730469 6.328125 19.707031 6.3125 19.6875 C 5.902344 19.171875 5.9375 18.375 6.3125 18 Z"/></Svg>);
};
export default SVGEraserSolid;
