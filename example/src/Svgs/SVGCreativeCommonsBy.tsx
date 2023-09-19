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
const SVGCreativeCommonsBy = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 3 C 8.8545455 3 3 8.8545455 3 16 C 3 23.145455 8.8545455 29 16 29 C 23.145455 29 29 23.145455 29 16 C 29 8.8545455 23.145455 3 16 3 z M 16 5 C 22.054545 5 27 9.9454545 27 16 C 27 22.054545 22.054545 27 16 27 C 9.9454545 27 5 22.054545 5 16 C 5 9.9454545 9.9454545 5 16 5 z M 16 8 C 14.9 8 14 8.9 14 10 C 14 11.1 14.9 12 16 12 C 17.1 12 18 11.1 18 10 C 18 8.9 17.1 8 16 8 z M 16 13 C 14.3 13 13 14.3 13 16 L 13 19 L 14 20 L 14 24 L 18 24 L 18 20 L 19 19 L 19 16 C 19 14.3 17.7 13 16 13 z"/></Svg>);
};
export default SVGCreativeCommonsBy;
