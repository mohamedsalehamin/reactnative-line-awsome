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
const SVGVenusDoubleSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 11 3 C 6.589844 3 3 6.589844 3 11 C 3 15.070313 6.058594 18.441406 10 18.9375 L 10 23 L 6 23 L 6 25 L 10 25 L 10 29 L 12 29 L 12 25 L 20 25 L 20 29 L 22 29 L 22 25 L 26 25 L 26 23 L 22 23 L 22 18.9375 C 25.941406 18.441406 29 15.070313 29 11 C 29 6.589844 25.410156 3 21 3 C 19.480469 3 18.054688 3.449219 16.84375 4.1875 C 17.363281 4.632813 17.84375 5.136719 18.25 5.6875 C 19.078125 5.257813 20.003906 5 21 5 C 24.308594 5 27 7.691406 27 11 C 27 14.308594 24.308594 17 21 17 C 17.691406 17 15 14.308594 15 11 C 15 10.203125 15.15625 9.445313 15.4375 8.75 C 15.101563 8.085938 14.617188 7.515625 14.03125 7.0625 C 13.371094 8.226563 13 9.566406 13 11 C 13 15.070313 16.058594 18.441406 20 18.9375 L 20 23 L 12 23 L 12 18.90625 C 13.144531 18.761719 14.214844 18.386719 15.15625 17.8125 C 14.636719 17.367188 14.15625 16.863281 13.75 16.3125 C 12.921875 16.742188 11.996094 17 11 17 C 7.691406 17 5 14.308594 5 11 C 5 7.691406 7.691406 5 11 5 C 14.308594 5 17 7.691406 17 11 C 17 11.796875 16.84375 12.554688 16.5625 13.25 C 16.898438 13.914063 17.382813 14.484375 17.96875 14.9375 C 18.628906 13.773438 19 12.433594 19 11 C 19 6.589844 15.410156 3 11 3 Z"/></Svg>);
};
export default SVGVenusDoubleSolid;
