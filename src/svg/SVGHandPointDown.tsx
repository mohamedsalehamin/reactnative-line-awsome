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
const SVGHandPointDown = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 10 2 L 10 7.59375 L 3.28125 14.375 L 3 14.6875 L 3 15.09375 C 3 16.710938 4.230469 18 5.65625 18 C 6.992188 18 7.984375 17.53125 8.625 17.0625 C 9.027344 16.769531 9.09375 16.640625 9.25 16.4375 L 10 16.25 L 10 27 C 10 28.644531 11.355469 30 13 30 C 14.644531 30 16 28.644531 16 27 L 16 23.4375 L 23.625 21.78125 C 25.003906 21.484375 26 20.253906 26 18.84375 L 26 2 Z M 12 4 L 24 4 L 24 7 L 12 7 Z M 11.40625 9 L 24 9 L 24 18.84375 C 24 19.320313 23.6875 19.742188 23.21875 19.84375 L 14.78125 21.625 L 14 21.8125 L 14 27 C 14 27.566406 13.566406 28 13 28 C 12.433594 28 12 27.566406 12 27 L 12 13.65625 L 10.75 13.96875 L 8.5 14.5625 L 8.09375 14.6875 L 7.90625 15.03125 C 7.90625 15.03125 7.820313 15.210938 7.46875 15.46875 C 7.117188 15.726563 6.558594 16 5.65625 16 C 5.347656 16 5.175781 15.828125 5.09375 15.40625 Z"/></Svg>);
};
export default SVGHandPointDown;
