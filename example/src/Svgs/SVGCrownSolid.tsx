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
const SVGCrownSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 3 C 14.355469 3 13 4.355469 13 6 C 13 7.125 13.632813 8.113281 14.5625 8.625 L 11.625 14.5 L 7.03125 11.21875 C 7.632813 10.667969 8 9.871094 8 9 C 8 7.355469 6.644531 6 5 6 C 3.355469 6 2 7.355469 2 9 C 2 10.347656 2.925781 11.46875 4.15625 11.84375 L 6 22 L 6 27 L 26 27 L 26 22 L 27.84375 11.84375 C 29.074219 11.46875 30 10.347656 30 9 C 30 7.355469 28.644531 6 27 6 C 25.355469 6 24 7.355469 24 9 C 24 9.871094 24.367188 10.667969 24.96875 11.21875 L 20.375 14.5 L 17.4375 8.625 C 18.367188 8.113281 19 7.125 19 6 C 19 4.355469 17.644531 3 16 3 Z M 16 5 C 16.5625 5 17 5.4375 17 6 C 17 6.5625 16.5625 7 16 7 C 15.4375 7 15 6.5625 15 6 C 15 5.4375 15.4375 5 16 5 Z M 5 8 C 5.5625 8 6 8.4375 6 9 C 6 9.5625 5.5625 10 5 10 C 4.4375 10 4 9.5625 4 9 C 4 8.4375 4.4375 8 5 8 Z M 27 8 C 27.5625 8 28 8.4375 28 9 C 28 9.5625 27.5625 10 27 10 C 26.4375 10 26 9.5625 26 9 C 26 8.4375 26.4375 8 27 8 Z M 16 10.25 L 19.09375 16.4375 L 20.59375 16.8125 L 25.59375 13.25 L 24.1875 21 L 7.8125 21 L 6.40625 13.25 L 11.40625 16.8125 L 12.90625 16.4375 Z M 8 23 L 24 23 L 24 25 L 8 25 Z"/></Svg>);
};
export default SVGCrownSolid;
