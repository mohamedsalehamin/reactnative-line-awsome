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
const SVGUserTieSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 4 C 12.144531 4 9 7.144531 9 11 C 9 13.378906 10.210938 15.484375 12.03125 16.75 C 7.925781 18.351563 5 22.351563 5 27 L 7 27 C 7 22.601563 10.191406 18.925781 14.375 18.15625 L 15 20 L 17 20 L 17.625 18.15625 C 21.808594 18.925781 25 22.601563 25 27 L 27 27 C 27 22.351563 24.074219 18.351563 19.96875 16.75 C 21.789063 15.484375 23 13.378906 23 11 C 23 7.144531 19.855469 4 16 4 Z M 16 6 C 18.773438 6 21 8.226563 21 11 C 21 13.773438 18.773438 16 16 16 C 13.226563 16 11 13.773438 11 11 C 11 8.226563 13.226563 6 16 6 Z M 15 21 L 14 27 L 18 27 L 17 21 Z"/></Svg>);
};
export default SVGUserTieSolid;
