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
const SVGListAlt = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 10.28125 5.28125 L 7 8.5625 L 5.71875 7.28125 L 4.28125 8.71875 L 6.28125 10.71875 L 7 11.40625 L 7.71875 10.71875 L 11.71875 6.71875 Z M 15 7 L 15 9 L 28 9 L 28 7 Z M 10.28125 13.28125 L 7 16.5625 L 5.71875 15.28125 L 4.28125 16.71875 L 6.28125 18.71875 L 7 19.40625 L 7.71875 18.71875 L 11.71875 14.71875 Z M 15 15 L 15 17 L 28 17 L 28 15 Z M 10.28125 21.28125 L 7 24.5625 L 5.71875 23.28125 L 4.28125 24.71875 L 6.28125 26.71875 L 7 27.40625 L 7.71875 26.71875 L 11.71875 22.71875 Z M 15 23 L 15 25 L 28 25 L 28 23 Z"/></Svg>);
};
export default SVGListAlt;