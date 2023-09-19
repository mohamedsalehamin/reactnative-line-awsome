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
const SVGSuitcaseSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 14 3 C 12.90625 3 12 3.90625 12 5 L 12 6 L 9 6 L 9 5 L 7 5 L 7 6 L 5 6 C 3.90625 6 3 6.90625 3 8 L 3 24 C 3 25.09375 3.90625 26 5 26 L 27 26 C 28.09375 26 29 25.09375 29 24 L 29 8 C 29 6.90625 28.09375 6 27 6 L 25 6 L 25 5 L 23 5 L 23 6 L 20 6 L 20 5 C 20 3.90625 19.09375 3 18 3 Z M 14 5 L 18 5 L 18 6 L 14 6 Z M 5 8 L 27 8 L 27 24 L 25 24 L 25 9 L 23 9 L 23 24 L 9 24 L 9 9 L 7 9 L 7 24 L 5 24 Z"/></Svg>);
};
export default SVGSuitcaseSolid;