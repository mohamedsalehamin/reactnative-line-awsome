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
const SVGSimplybuilt = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 6 7 C 4.90625 7 4 7.90625 4 9 L 4 23 C 4 24.09375 4.90625 25 6 25 L 26 25 C 27.09375 25 28 24.09375 28 23 L 28 9 C 28 7.90625 27.09375 7 26 7 L 22 7 C 20.90625 7 20 7.90625 20 9 L 20 10 L 12 10 L 12 9 C 12 7.90625 11.09375 7 10 7 Z M 6 9 L 10 9 L 10 12 L 22 12 L 22 9 L 26 9 L 26 23 L 6 23 Z M 12 14.5 C 10.34375 14.5 9 15.84375 9 17.5 C 9 19.15625 10.34375 20.5 12 20.5 C 13.65625 20.5 15 19.15625 15 17.5 C 15 15.84375 13.65625 14.5 12 14.5 Z M 20 14.5 C 18.34375 14.5 17 15.84375 17 17.5 C 17 19.15625 18.34375 20.5 20 20.5 C 21.65625 20.5 23 19.15625 23 17.5 C 23 15.84375 21.65625 14.5 20 14.5 Z"/></Svg>);
};
export default SVGSimplybuilt;
