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
const SVGCheeseSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 11.09375 5.96875 L 10.78125 6.03125 C 4.3125 7.46875 3.03125 13.8125 3.03125 13.8125 L 3 13.90625 L 3 26 L 29 26 L 29 20 L 28 20 C 27.433594 20 27 19.566406 27 19 C 27 18.433594 27.433594 18 28 18 L 29 18 L 29 13.34375 L 28.375 13.0625 L 11.375 6.0625 Z M 10.96875 8.09375 L 13.75 9.25 C 13.308594 9.433594 13 9.691406 13 10 C 13 10.550781 13.894531 11 15 11 C 15.757813 11 16.410156 10.78125 16.75 10.46875 L 22.90625 13 L 5.375 13 C 5.976563 11.519531 7.46875 9 10.96875 8.09375 Z M 5 15 L 8.09375 15 C 8.039063 15.15625 8 15.328125 8 15.5 C 8 16.328125 8.671875 17 9.5 17 C 10.328125 17 11 16.328125 11 15.5 C 11 15.328125 10.960938 15.15625 10.90625 15 L 27 15 L 27 16.40625 C 25.890625 16.847656 25 17.742188 25 19 C 25 20.257813 25.890625 21.152344 27 21.59375 L 27 24 L 14.71875 24 C 14.890625 23.707031 15 23.363281 15 23 C 15 21.894531 14.105469 21 13 21 C 11.894531 21 11 21.894531 11 23 C 11 23.363281 11.109375 23.707031 11.28125 24 L 5 24 Z M 19.5 17 C 18.671875 17 18 17.671875 18 18.5 C 18 19.328125 18.671875 20 19.5 20 C 20.328125 20 21 19.328125 21 18.5 C 21 17.671875 20.328125 17 19.5 17 Z"/></Svg>);
};
export default SVGCheeseSolid;
