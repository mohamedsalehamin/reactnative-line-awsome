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
const SVGSdCardSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 9.5 5 L 9.1875 5.40625 L 6 9.65625 L 6 27 L 25 27 L 25 5 Z M 10.5 7 L 23 7 L 23 25 L 8 25 L 8 10.34375 Z M 13 9 L 13 13 L 15 13 L 15 9 Z M 16 9 L 16 13 L 18 13 L 18 9 Z M 19 9 L 19 13 L 21 13 L 21 9 Z M 10 10 L 10 14 L 12 14 L 12 10 Z"/></Svg>);
};
export default SVGSdCardSolid;
