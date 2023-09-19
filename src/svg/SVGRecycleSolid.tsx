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
const SVGRecycleSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 3.96875 C 14.945313 3.96875 13.882813 4.484375 13.25 5.46875 L 10.4375 10.09375 L 12.15625 11.125 L 14.96875 6.53125 C 15.507813 5.726563 16.53125 5.707031 17.0625 6.53125 L 20.1875 11.53125 L 18.6875 12.40625 L 23.3125 15 L 23.3125 9.6875 L 21.875 10.53125 L 18.75 5.46875 C 18.117188 4.484375 17.054688 3.96875 16 3.96875 Z M 10.40625 12.09375 L 5.90625 14.6875 L 7.15625 15.4375 L 4.59375 19.65625 L 4.5625 19.625 C 4.550781 19.644531 4.574219 19.667969 4.5625 19.6875 C 3.089844 21.917969 4.789063 25 7.5 25 L 13 25 L 13 23 L 7.5 23 C 6.234375 23 5.554688 21.75 6.21875 20.78125 L 6.25 20.75 L 6.25 20.71875 L 8.875 16.46875 L 10.40625 17.40625 Z M 25.0625 15.65625 L 23.34375 16.71875 L 25.84375 20.71875 C 26.484375 21.808594 25.757813 23 24.59375 23 L 19 23 L 19 21 L 14.09375 24 L 19 27 L 19 25 L 24.59375 25 C 27.230469 25 28.921875 22 27.5625 19.6875 L 27.5625 19.65625 Z"/></Svg>);
};
export default SVGRecycleSolid;
