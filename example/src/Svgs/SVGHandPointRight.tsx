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
const SVGHandPointRight = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 14.6875 3 L 14.375 3.28125 L 7.59375 10 L 2 10 L 2 26 L 18.84375 26 C 20.253906 26 21.484375 25.003906 21.78125 23.625 L 23.4375 16 L 27 16 C 28.644531 16 30 14.644531 30 13 C 30 11.355469 28.644531 10 27 10 L 16.25 10 L 16.4375 9.25 C 16.640625 9.09375 16.769531 9.027344 17.0625 8.625 C 17.53125 7.984375 18 6.992188 18 5.65625 C 18 4.230469 16.710938 3 15.09375 3 Z M 15.40625 5.09375 C 15.828125 5.175781 16 5.347656 16 5.65625 C 16 6.558594 15.726563 7.117188 15.46875 7.46875 C 15.210938 7.820313 15.03125 7.90625 15.03125 7.90625 L 14.6875 8.09375 L 14.5625 8.5 L 13.96875 10.75 L 13.65625 12 L 27 12 C 27.566406 12 28 12.433594 28 13 C 28 13.566406 27.566406 14 27 14 L 21.8125 14 L 21.625 14.78125 L 19.84375 23.21875 C 19.742188 23.6875 19.320313 24 18.84375 24 L 9 24 L 9 11.40625 Z M 4 12 L 7 12 L 7 24 L 4 24 Z"/></Svg>);
};
export default SVGHandPointRight;
