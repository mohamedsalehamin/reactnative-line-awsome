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
const SVGShekelSignSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 7 5 L 7 27 L 9 27 L 9 7 L 10 7 C 13.878906 7 17 10.121094 17 14 L 17 21 L 19 21 L 19 14 C 19 9.042969 14.957031 5 10 5 Z M 22 5 L 22 25 L 21 25 C 17.121094 25 14 21.878906 14 18 L 14 11 L 12 11 L 12 18 C 12 22.957031 16.042969 27 21 27 L 24 27 L 24 5 Z"/></Svg>);
};
export default SVGShekelSignSolid;
