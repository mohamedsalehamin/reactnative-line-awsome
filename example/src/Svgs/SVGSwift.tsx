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
const SVGSwift = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 8.9375 5 C 6.773438 5 5 6.773438 5 8.9375 L 5 23.0625 C 5 25.226563 6.773438 27 8.9375 27 L 23.0625 27 C 25.226563 27 27 25.226563 27 23.0625 L 27 8.9375 C 27 6.773438 25.226563 5 23.0625 5 Z M 8.9375 7 L 23.0625 7 C 24.144531 7 25 7.855469 25 8.9375 L 25 23.0625 C 25 24.144531 24.144531 25 23.0625 25 L 8.9375 25 C 7.855469 25 7 24.144531 7 23.0625 L 7 8.9375 C 7 7.855469 7.855469 7 8.9375 7 Z M 17.625 9.5 C 17.625 9.5 20.128906 12.660156 18.84375 16.21875 C 18.84375 16.21875 14.335938 13.023438 12.0625 10.71875 C 12.0625 10.71875 14.890625 14.816406 15.90625 15.65625 C 15.90625 15.65625 14.210938 14.753906 10.28125 11.40625 C 10.28125 11.40625 14.816406 17.300781 16.9375 18.53125 C 16.9375 18.53125 13.710938 20.722656 9 17.625 C 9 17.625 11.460938 22 16.6875 22 C 19.035156 22 19.742188 20.78125 20.90625 20.78125 C 22.117188 20.78125 22.84375 22 22.84375 22 C 23.550781 20.273438 21.78125 18.3125 21.78125 18.3125 C 21.78125 18.3125 23.777344 13.683594 17.625 9.5 Z"/></Svg>);
};
export default SVGSwift;
