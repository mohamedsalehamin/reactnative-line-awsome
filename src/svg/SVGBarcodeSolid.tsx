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
const SVGBarcodeSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 2 7 L 2 25 L 4 25 L 4 7 Z M 6 7 L 6 25 L 12 25 L 12 7 Z M 14 7 L 14 25 L 16 25 L 16 7 Z M 18 7 L 18 25 L 22 25 L 22 7 Z M 24 7 L 24 25 L 26 25 L 26 7 Z M 28 7 L 28 25 L 30 25 L 30 7 Z"/></Svg>);
};
export default SVGBarcodeSolid;
