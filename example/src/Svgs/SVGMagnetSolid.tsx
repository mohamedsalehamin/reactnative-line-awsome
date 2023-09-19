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
const SVGMagnetSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 5 C 9.9375 5 5 9.9375 5 16 L 5 27 L 13 27 L 13 16 C 13 14.332031 14.332031 13 16 13 C 17.667969 13 19 14.332031 19 16 L 19 27 L 27 27 L 27 16 C 27 9.9375 22.0625 5 16 5 Z M 16 7 C 20.984375 7 25 11.015625 25 16 L 25 21 L 21 21 L 21 16 C 21 13.25 18.75 11 16 11 C 13.25 11 11 13.25 11 16 L 11 21 L 7 21 L 7 16 C 7 11.015625 11.015625 7 16 7 Z M 7 23 L 11 23 L 11 25 L 7 25 Z M 21 23 L 25 23 L 25 25 L 21 25 Z"/></Svg>);
};
export default SVGMagnetSolid;
