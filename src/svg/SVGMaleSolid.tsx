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
const SVGMaleSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 2 C 13.800781 2 12 3.800781 12 6 C 12 7.066406 12.433594 8.03125 13.125 8.75 C 11.273438 9.773438 10 11.746094 10 14 L 10 19.40625 L 10.28125 19.71875 L 12 21.4375 L 12 30 L 14 30 L 14 20.59375 L 13.71875 20.28125 L 12 18.5625 L 12 14 C 12 11.78125 13.78125 10 16 10 C 18.21875 10 20 11.78125 20 14 L 20 18.5625 L 18.28125 20.28125 L 18 20.59375 L 18 30 L 20 30 L 20 21.4375 L 21.71875 19.71875 L 22 19.40625 L 22 14 C 22 11.746094 20.726563 9.773438 18.875 8.75 C 19.566406 8.03125 20 7.066406 20 6 C 20 3.800781 18.199219 2 16 2 Z M 16 4 C 17.117188 4 18 4.882813 18 6 C 18 7.117188 17.117188 8 16 8 C 14.882813 8 14 7.117188 14 6 C 14 4.882813 14.882813 4 16 4 Z"/></Svg>);
};
export default SVGMaleSolid;
