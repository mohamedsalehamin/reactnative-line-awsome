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
const SVGPagelines = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 15.09375 4 C 15.09375 4 13.886719 5.664063 14.25 8.28125 C 14.527344 10.261719 16.179688 11.503906 17.09375 12.03125 C 17.125 12.984375 17.101563 13.957031 17 14.9375 C 16.539063 13.8125 15.507813 11.84375 13.59375 11.15625 C 11.734375 10.484375 9.375 11.34375 9.375 11.34375 C 9.691406 13.660156 11.210938 15.460938 13.6875 15.90625 C 15.273438 16.191406 16.332031 16.007813 16.875 15.875 C 16.625 17.546875 16.164063 19.199219 15.5 20.6875 C 15.140625 19.582031 13.988281 17.320313 10.65625 16.9375 C 8.699219 16.714844 6.84375 17.9375 6.84375 17.9375 C 6.84375 17.9375 8.035156 22.21875 11.875 22.21875 C 13.433594 22.21875 14.464844 21.863281 15.0625 21.59375 C 15.03125 21.65625 15.003906 21.71875 14.96875 21.78125 C 13.261719 24.863281 10.558594 27 6.46875 27 L 6.46875 28 C 10.914063 28 14.011719 25.558594 15.84375 22.25 C 15.957031 22.046875 16.050781 21.835938 16.15625 21.625 C 16.429688 21.832031 17.914063 22.875 20.84375 22.875 C 24.082031 22.875 25.53125 19.21875 25.53125 19.21875 C 25.53125 19.21875 23.914063 17.875 21.4375 17.875 C 19.09375 17.875 17.339844 19.742188 16.53125 20.8125 C 17.175781 19.304688 17.628906 17.679688 17.875 16.03125 C 18.050781 16.066406 21.394531 16.667969 23.28125 14.75 C 25.21875 12.78125 24.90625 10.96875 24.90625 10.96875 C 24.90625 10.96875 21.648438 10.503906 19.875 12.125 C 18.757813 13.148438 18.167969 14.847656 17.9375 15.625 C 18.113281 14.296875 18.152344 12.972656 18.09375 11.6875 C 18.449219 11.03125 18.9375 9.910156 18.9375 8.4375 C 18.9375 5.242188 15.09375 4 15.09375 4 Z"/></Svg>);
};
export default SVGPagelines;
