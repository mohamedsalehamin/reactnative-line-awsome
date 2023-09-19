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
const SVGUserNurseSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 10.15625 4 L 10 4.8125 L 9 10.4375 L 9 14 L 9.09375 14 C 9.382813 15.992188 10.496094 17.730469 12.09375 18.8125 C 8.527344 20.34375 6 23.882813 6 28 L 8 28 C 8 25.46875 9.171875 23.214844 11 21.75 L 11 22.40625 L 11.28125 22.71875 L 15.28125 26.71875 L 16 27.40625 L 16.71875 26.71875 L 20.71875 22.71875 L 21 22.40625 L 21 21.75 C 22.828125 23.214844 24 25.46875 24 28 L 26 28 C 26 23.882813 23.472656 20.34375 19.90625 18.8125 C 21.503906 17.730469 22.617188 15.992188 22.90625 14 L 23 14 L 23 10.4375 L 22 4.8125 L 21.84375 4 Z M 11.84375 6 L 20.15625 6 L 21 10.78125 L 21 12 L 11 12 L 11 10.78125 Z M 15 7 L 15 8 L 14 8 L 14 10 L 15 10 L 15 11 L 17 11 L 17 10 L 18 10 L 18 8 L 17 8 L 17 7 Z M 11.09375 14 L 20.90625 14 C 20.441406 16.285156 18.425781 18 16 18 C 13.574219 18 11.558594 16.285156 11.09375 14 Z M 16 20 C 17.058594 20 18.074219 20.191406 19 20.5625 L 19 21.5625 L 16 24.5625 L 13 21.5625 L 13 20.5625 C 13.925781 20.191406 14.941406 20 16 20 Z"/></Svg>);
};
export default SVGUserNurseSolid;
