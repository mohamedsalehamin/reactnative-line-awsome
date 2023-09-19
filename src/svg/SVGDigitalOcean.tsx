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
const SVGDigitalOcean = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 3 C 8.831 3 3 8.832 3 16 L 8 16 C 8 11.582 11.582 8 16 8 C 20.418 8 24 11.582 24 16 C 24 20.418 20.418 24 16 24 L 16 29 C 23.169 29 29 23.168 29 16 C 29 8.832 23.169 3 16 3 z M 16 24 L 16 18 L 10 18 L 10 24 L 16 24 z M 10 24 L 6 24 L 6 28 L 10 28 L 10 24 z M 6 24 L 6 21 L 3 21 L 3 24 L 6 24 z"/></Svg>);
};
export default SVGDigitalOcean;
