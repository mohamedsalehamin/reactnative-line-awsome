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
const SVGConciergeBellSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 13 6 L 13 8 L 19 8 L 19 6 Z M 16 9 C 9.703125 9 4.574219 13.839844 4.0625 20 L 2 20 L 2 25 L 30 25 L 30 20 L 27.9375 20 C 27.425781 13.839844 22.296875 9 16 9 Z M 16 11 C 21.226563 11 25.445313 14.914063 25.9375 20 L 6.0625 20 C 6.554688 14.914063 10.773438 11 16 11 Z M 4 22 L 28 22 L 28 23 L 4 23 Z"/></Svg>);
};
export default SVGConciergeBellSolid;
