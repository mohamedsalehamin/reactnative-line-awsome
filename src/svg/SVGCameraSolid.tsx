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
const SVGCameraSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 11.5 6 L 11.1875 6.40625 L 10 8 L 3 8 L 3 26 L 29 26 L 29 8 L 22 8 L 20.8125 6.40625 L 20.5 6 Z M 12.5 8 L 19.5 8 L 20.6875 9.59375 L 21 10 L 27 10 L 27 24 L 5 24 L 5 10 L 11 10 L 11.3125 9.59375 Z M 8 11 C 7.449219 11 7 11.449219 7 12 C 7 12.550781 7.449219 13 8 13 C 8.550781 13 9 12.550781 9 12 C 9 11.449219 8.550781 11 8 11 Z M 16 11 C 12.699219 11 10 13.699219 10 17 C 10 20.300781 12.699219 23 16 23 C 19.300781 23 22 20.300781 22 17 C 22 13.699219 19.300781 11 16 11 Z M 16 13 C 18.222656 13 20 14.777344 20 17 C 20 19.222656 18.222656 21 16 21 C 13.777344 21 12 19.222656 12 17 C 12 14.777344 13.777344 13 16 13 Z"/></Svg>);
};
export default SVGCameraSolid;
