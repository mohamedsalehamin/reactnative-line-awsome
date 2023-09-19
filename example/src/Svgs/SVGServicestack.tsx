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
const SVGServicestack = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 10 6 C 11.544 7.76 12.275797 10.149375 12.216797 12.609375 C 16.184797 14.279375 22.141437 18.73 23.398438 25 L 28 25 C 26.051 14.31 14.918 6.77 10 6 z M 8 13 C 12.67 17.913 8.81 24.582 4 25 L 22.970703 25 C 21.500703 18.289 11.95 13.533 8 13 z"/></Svg>);
};
export default SVGServicestack;
