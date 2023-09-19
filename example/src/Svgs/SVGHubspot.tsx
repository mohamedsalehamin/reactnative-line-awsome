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
const SVGHubspot = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 7.5 4 A 2.5 2.5 0 0 0 7.5 9 A 2.5 2.5 0 0 0 8.8320312 8.6113281 L 16.318359 14.251953 C 15.494802 15.279183 15 16.5808 15 18 C 15 19.551691 15.594081 20.960309 16.560547 22.025391 L 13.515625 25.070312 A 2 2 0 0 0 13 25 A 2 2 0 0 0 13 29 A 2 2 0 0 0 14.929688 26.484375 L 18.138672 23.275391 C 18.139161 23.275657 18.140136 23.275125 18.140625 23.275391 C 18.990789 23.737195 19.964375 24 21 24 C 24.314 24 27 21.314 27 18 C 27 15.0276 24.836666 12.566888 22 12.089844 L 22 8.7304688 A 2 2 0 0 0 21 5 A 2 2 0 0 0 20 8.7304688 L 20 12.089844 C 19.221485 12.220767 18.495614 12.502316 17.849609 12.902344 L 9.9570312 6.9550781 A 2.5 2.5 0 0 0 7.5 4 z M 21 15 C 22.654 15 24 16.346 24 18 C 24 19.654 22.654 21 21 21 C 19.346 21 18 19.654 18 18 C 18 16.346 19.346 15 21 15 z"/></Svg>);
};
export default SVGHubspot;
