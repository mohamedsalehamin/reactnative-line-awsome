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
const SVGIconsSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 5 L 5 27 L 27 27 L 27 5 Z M 7 7 L 15 7 L 15 15 L 7 15 Z M 17 7 L 25 7 L 25 15 L 17 15 Z M 11 9 L 8 13 L 14 13 Z M 19 9 L 19 13 L 23 13 L 23 9 Z M 7 17 L 15 17 L 15 25 L 7 25 Z M 17 17 L 25 17 L 25 25 L 17 25 Z M 21 18 L 19 21 L 21 24 L 23 21 Z M 11 19 C 9.894531 19 9 19.894531 9 21 C 9 22.105469 9.894531 23 11 23 C 12.105469 23 13 22.105469 13 21 C 13 19.894531 12.105469 19 11 19 Z"/></Svg>);
};
export default SVGIconsSolid;
