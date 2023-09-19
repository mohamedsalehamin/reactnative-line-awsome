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
const SVGMizuni = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 3 C 8.832 3 3 8.832 3 16 C 3 23.168 8.832 29 16 29 C 23.168 29 29 23.168 29 16 C 29 8.832 23.168 3 16 3 z M 16 5 C 22.065 5 27 9.935 27 16 C 27 22.065 22.065 27 16 27 C 9.935 27 5 22.065 5 16 C 5 9.935 9.935 5 16 5 z M 11.5 10 C 10.67 10 10 10.67 10 11.5 L 10 22 C 10.79 21.22 11.82 20.589219 13 20.199219 L 13 11.5 C 13 10.67 12.33 10 11.5 10 z M 16 10 C 15.17 10 14.5 10.67 14.5 11.5 L 14.5 19.830078 C 14.99 19.750078 15.489766 19.710938 16.009766 19.710938 C 16.519766 19.710937 17.01 19.750078 17.5 19.830078 L 17.5 11.5 C 17.5 10.67 16.83 10 16 10 z M 20.5 10 C 19.67 10 19 10.67 19 11.5 L 19 20.189453 C 20.18 20.589453 21.21 21.210234 22 21.990234 L 22 11.5 C 22 10.67 21.33 10 20.5 10 z"/></Svg>);
};
export default SVGMizuni;
