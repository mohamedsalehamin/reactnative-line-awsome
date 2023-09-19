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
const SVGSith = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 4 4 L 7.734375 10.361328 L 5 10 L 8.2480469 14.058594 C 8.0918289 14.681542 8 15.329318 8 16 C 8 16.670682 8.0918289 17.318458 8.2480469 17.941406 L 5 22 L 7.734375 21.638672 L 4 28 L 10.361328 24.265625 L 10 27 L 14.058594 23.751953 C 14.681542 23.908171 15.329318 24 16 24 C 16.670682 24 17.318458 23.908171 17.941406 23.751953 L 22 27 L 21.638672 24.265625 L 28 28 L 24.265625 21.638672 L 27 22 L 23.751953 17.941406 C 23.908171 17.318458 24 16.670682 24 16 C 24 15.329318 23.908171 14.681542 23.751953 14.058594 L 27 10 L 24.265625 10.361328 L 28 4 L 21.638672 7.734375 L 22 5 L 17.941406 8.2480469 C 17.318458 8.0918289 16.670682 8 16 8 C 15.329318 8 14.681542 8.0918289 14.058594 8.2480469 L 10 5 L 10.361328 7.734375 L 4 4 z M 16 10 C 19.309 10 22 12.691 22 16 C 22 19.309 19.309 22 16 22 C 12.691 22 10 19.309 10 16 C 10 12.691 12.691 10 16 10 z M 16 12 A 4 4 0 0 0 16 20 A 4 4 0 0 0 16 12 z"/></Svg>);
};
export default SVGSith;
