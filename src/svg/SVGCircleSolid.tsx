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
const SVGCircleSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 4 C 9.378906 4 4 9.378906 4 16 C 4 22.621094 9.378906 28 16 28 C 22.621094 28 28 22.621094 28 16 C 28 9.378906 22.621094 4 16 4 Z M 16 5 C 22.082031 5 27 9.917969 27 16 C 27 22.082031 22.082031 27 16 27 C 9.917969 27 5 22.082031 5 16 C 5 9.917969 9.917969 5 16 5 Z"/></Svg>);
};
export default SVGCircleSolid;
