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
const SVGQuinscape = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 4 C 9.373 4 4 9.373 4 16 C 4 22.627 9.373 28 16 28 C 17.315 28 18.568 27.764094 19.75 27.371094 C 19.595 27.250094 19.445734 27.124234 19.302734 26.990234 C 15.252734 26.884234 12 23.575 12 19.5 C 12 15.358 15.358 12 19.5 12 C 23.575 12 26.884234 15.252734 26.990234 19.302734 C 27.123234 19.446734 27.249094 19.596 27.371094 19.75 C 27.764094 18.568 28 17.315 28 16 C 28 9.373 22.627 4 16 4 z M 23 18 A 5 5 0 0 0 23 28 A 5 5 0 0 0 23 18 z"/></Svg>);
};
export default SVGQuinscape;
