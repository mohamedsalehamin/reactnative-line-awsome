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
const SVGCheckCircle = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 3 C 8.800781 3 3 8.800781 3 16 C 3 23.199219 8.800781 29 16 29 C 23.199219 29 29 23.199219 29 16 C 29 14.601563 28.8125 13.207031 28.3125 11.90625 L 26.6875 13.5 C 26.886719 14.300781 27 15.101563 27 16 C 27 22.101563 22.101563 27 16 27 C 9.898438 27 5 22.101563 5 16 C 5 9.898438 9.898438 5 16 5 C 19 5 21.695313 6.195313 23.59375 8.09375 L 25 6.6875 C 22.699219 4.386719 19.5 3 16 3 Z M 27.28125 7.28125 L 16 18.5625 L 11.71875 14.28125 L 10.28125 15.71875 L 15.28125 20.71875 L 16 21.40625 L 16.71875 20.71875 L 28.71875 8.71875 Z"/></Svg>);
};
export default SVGCheckCircle;
