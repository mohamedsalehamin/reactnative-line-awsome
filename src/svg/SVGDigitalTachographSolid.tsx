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
const SVGDigitalTachographSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 4.0175781 7 C 2.9025781 7 2 7.9025781 2 9.0175781 L 2 22.982422 C 2 24.097422 2.9025781 25 4.0175781 25 L 26.982422 25 C 28.097422 25 29 24.097422 29 22.982422 L 29 9.0175781 C 29 7.9025781 28.097422 7 26.982422 7 L 4.0175781 7 z M 4 9 L 26.982422 9 L 27 9 L 27 23 L 4 23 L 4 9 z M 6 11 L 6 13 L 16 13 L 16 11 L 6 11 z M 6 15 L 6 17 L 8 17 L 8 15 L 6 15 z M 10 15 L 10 17 L 12 17 L 12 15 L 10 15 z M 14 15 L 14 17 L 16 17 L 16 15 L 14 15 z M 6 19 L 6 21 L 16 21 L 16 19 L 6 19 z M 18 19 L 18 21 L 25 21 L 25 19 L 18 19 z"/></Svg>);
};
export default SVGDigitalTachographSolid;
