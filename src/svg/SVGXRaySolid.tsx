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
const SVGXRaySolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 5 L 5 27 L 27 27 L 27 5 Z M 7 7 L 25 7 L 25 25 L 7 25 Z M 15 8 L 15 9 L 12 9 L 12 11 L 15 11 L 15 12 L 10 12 L 10 14 L 15 14 L 15 15 L 11 15 L 11 17 L 15 17 L 15 19.5625 C 14.476563 19.292969 13.886719 19 13.5 19 C 12.671875 19 12 19.671875 12 20.5 C 12 21.328125 12.671875 22 13.5 22 C 13.878906 22 15.171875 23 16 23 C 16.828125 23 18.121094 22 18.5 22 C 19.328125 22 20 21.328125 20 20.5 C 20 19.671875 19.328125 19 18.5 19 C 18.113281 19 17.523438 19.292969 17 19.5625 L 17 8 Z M 18 9 L 18 11 L 20 11 L 20 9 Z M 18 12 L 18 14 L 22 14 L 22 12 Z M 18 15 L 18 17 L 21 17 L 21 15 Z"/></Svg>);
};
export default SVGXRaySolid;
