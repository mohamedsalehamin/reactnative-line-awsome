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
const SVGJs = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 0 7 L 0 25 L 32 25 L 32 7 Z M 2 9 L 30 9 L 30 23 L 2 23 Z M 12 12 L 12 17.5 C 12 17.714844 11.714844 18 11.5 18 C 11.285156 18 11 17.714844 11 17.5 L 11 17 L 9 17 L 9 17.5 C 9 18.882813 10.117188 20 11.5 20 C 12.882813 20 14 18.882813 14 17.5 L 14 12 Z M 18.5 12 C 17.117188 12 16 13.117188 16 14.5 C 16 15.882813 17.117188 17 18.5 17 C 18.714844 17 19 17.285156 19 17.5 C 19 17.800781 18.882813 18 18.5 18 C 18.132813 18 18.074219 17.921875 18.0625 17.90625 C 18.050781 17.890625 18 17.828125 18 17.59375 L 16 17.59375 C 16 18.160156 16.164063 18.796875 16.625 19.28125 C 17.085938 19.765625 17.769531 20 18.5 20 C 19.917969 20 21 18.800781 21 17.5 C 21 16.117188 19.882813 15 18.5 15 C 18.285156 15 18 14.714844 18 14.5 C 18 14.285156 18.285156 14 18.5 14 C 18.765625 14 18.847656 14.0625 18.90625 14.125 C 18.964844 14.1875 19 14.292969 19 14.40625 L 21 14.40625 C 21 13.816406 20.785156 13.214844 20.34375 12.75 C 19.902344 12.285156 19.234375 12 18.5 12 Z"/></Svg>);
};
export default SVGJs;
