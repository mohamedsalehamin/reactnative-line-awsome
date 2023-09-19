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
const SVGListOlSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5.96875 3 L 5.65625 3.34375 C 5.65625 3.34375 4.898438 4 4.40625 4 L 4.40625 6 C 5.085938 6 5.554688 5.722656 6 5.46875 L 6 10 L 8 10 L 8 3 Z M 11 6 L 11 8 L 28 8 L 28 6 Z M 6.5 12 C 5.117188 12 4 13.117188 4 14.5 L 4 15 L 6 15 L 6 14.5 C 6 14.285156 6.285156 14 6.5 14 C 6.714844 14 7 14.285156 7 14.5 L 6.90625 14.59375 L 4.3125 17.09375 L 4 17.375 L 4 19 L 9 19 L 9 17 L 7.28125 17 L 8.15625 16.125 L 8.28125 16.03125 L 8.25 16 C 8.75 15.589844 9 14.980469 9 14.5 C 9 13.117188 7.882813 12 6.5 12 Z M 11 15 L 11 17 L 28 17 L 28 15 Z M 4 21 L 4 23 L 5.375 23 L 5.125 23.40625 L 5 23.625 L 5 25 L 6.5 25 C 6.714844 25 7 25.285156 7 25.5 C 7 25.714844 6.714844 26 6.5 26 L 4 26 L 4 28 L 6.5 28 C 7.882813 28 9 26.882813 9 25.5 C 9 24.496094 8.320313 23.804688 7.46875 23.40625 L 7.875 22.71875 L 8 22.46875 L 8 21 Z M 11 24 L 11 26 L 28 26 L 28 24 Z"/></Svg>);
};
export default SVGListOlSolid;
