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
const SVGMegaport = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 3 C 8.832 3 3 8.832 3 16 C 3 23.168 8.832 29 16 29 C 23.168 29 29 23.168 29 16 C 29 8.832 23.168 3 16 3 z M 16 5 C 22.065 5 27 9.935 27 16 C 27 22.065 22.065 27 16 27 C 9.935 27 5 22.065 5 16 C 5 9.935 9.935 5 16 5 z M 16 7 L 15 8 L 15 10.671875 L 13 12.671875 L 13 15.707031 L 10 18.105469 L 10 19.585938 L 10 22 L 11 23 L 12 22 L 12 19.585938 L 12 19.066406 L 13.5 17.865234 L 15 19.066406 L 15 22 L 16 23 L 17 22 L 17 19.585938 L 17 19.066406 L 18.5 17.865234 L 20 19.066406 L 20 22 L 21 23 L 22 22 L 22 19.585938 L 22 18.105469 L 19 15.707031 L 19 12.671875 L 17 10.671875 L 17 8 L 16 7 z M 16 12.5 L 17 13.5 L 17 16.171875 L 16 17.171875 L 15 16.171875 L 15 13.5 L 16 12.5 z"/></Svg>);
};
export default SVGMegaport;
