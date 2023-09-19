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
const SVGAdSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 2 7 L 2 25 L 30 25 L 30 7 L 2 7 z M 4 9 L 28 9 L 28 23 L 4 23 L 4 9 z M 11.71875 11 L 11.5 11.6875 L 9.03125 19.40625 L 9 19.5625 L 9 21 L 11 21 L 11 20 L 14 20 L 14 21 L 16 21 L 16 19.5625 L 15.96875 19.40625 L 13.5 11.6875 L 13.28125 11 L 11.71875 11 z M 21 11 L 21 15 L 19.5 15 C 18.133 15 17 16.133 17 17.5 L 17 18.5 C 17 19.867 18.133 21 19.5 21 L 23 21 L 23 11 L 21 11 z M 12.5 15.15625 L 13.40625 18 L 11.59375 18 L 12.5 15.15625 z M 19.5 17 L 21 17 L 21 19 L 19.5 19 C 19.215 19 19 18.785 19 18.5 L 19 17.5 C 19 17.215 19.215 17 19.5 17 z"/></Svg>);
};
export default SVGAdSolid;
