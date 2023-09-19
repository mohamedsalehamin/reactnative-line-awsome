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
const SVGGlobeAfricaSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 3 C 8.832 3 3 8.832 3 16 C 3 23.168 8.832 29 16 29 C 23.168 29 29 23.168 29 16 C 29 8.832 23.168 3 16 3 z M 16 5 C 16.338 5 16.67 5.0207813 17 5.0507812 L 17 7 L 15 7 L 14 10 L 13 10 L 13 11 L 18 11 L 19 12 L 20 12 L 20 13 L 19 14 L 15 13 L 11 16 L 11 19 L 13 21 L 16 21 L 16 23.5 L 17 26 L 18 26 L 21 22 L 21 21 L 22 19 L 22 18 L 21 18 L 20 16 L 21 15 L 22.5 16 L 25 15 L 25 14 L 26.808594 14 C 26.928594 14.65 27 15.316 27 16 C 27 22.065 22.065 27 16 27 C 9.935 27 5 22.065 5 16 C 5 9.935 9.935 5 16 5 z"/></Svg>);
};
export default SVGGlobeAfricaSolid;
