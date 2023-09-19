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
const SVGHandLizardSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 14.3125 4 C 12.535156 4 10.863281 4.933594 9.96875 6.46875 L 4.6875 15.5625 C 4.242188 16.328125 4 17.207031 4 18.09375 L 4 28 L 14 28 L 14 23.6875 C 16.628906 22.898438 17.984375 21.515625 18.40625 21 L 24.71875 21 C 25.996094 21 26.964844 19.738281 26.65625 18.5 L 26.53125 18.03125 C 26.085938 16.257813 24.484375 15 22.65625 15 L 15.78125 15 L 15.28125 13 L 21.65625 13 C 23.484375 13 25.085938 11.742188 25.53125 9.96875 L 25.875 8.65625 C 27.054688 8.25 28 7.308594 28 6 L 28 4 Z M 14.3125 6 L 26 6 C 26 6.566406 25.566406 7 25 7 L 16 7 L 15 9 L 23.71875 9 L 23.59375 9.5 C 23.371094 10.394531 22.578125 11 21.65625 11 L 15.28125 11 C 14.003906 11 13.035156 12.261719 13.34375 13.5 L 13.84375 15.5 C 14.066406 16.386719 14.867188 17 15.78125 17 L 22.65625 17 C 23.578125 17 24.371094 17.605469 24.59375 18.5 L 24.71875 19 L 17.5 19 L 17.1875 19.40625 C 17.1875 19.40625 15.746094 21.453125 12.8125 22.03125 L 12 22.1875 L 12 26 L 6 26 L 6 18.09375 C 6 17.5625 6.136719 17.023438 6.40625 16.5625 L 11.71875 7.5 C 12.257813 6.578125 13.242188 6 14.3125 6 Z"/></Svg>);
};
export default SVGHandLizardSolid;
