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
const SVGSatelliteDishSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16.5 4.5 L 16.5 6.5 C 21.484375 6.5 25.5 10.515625 25.5 15.5 L 27.5 15.5 C 27.5 9.4375 22.5625 4.5 16.5 4.5 Z M 16.5 8.5 L 16.5 10.5 C 19.273438 10.5 21.5 12.726563 21.5 15.5 L 23.5 15.5 C 23.5 11.644531 20.355469 8.5 16.5 8.5 Z M 7.90625 8.59375 L 7.21875 9.28125 C 2.949219 13.550781 2.949219 20.511719 7.21875 24.78125 C 11.488281 29.050781 18.449219 29.050781 22.71875 24.78125 L 23.40625 24.09375 L 22.71875 23.375 L 17.21875 17.875 C 18.242188 17.5625 19 16.628906 19 15.5 C 19 14.121094 17.878906 13 16.5 13 C 15.371094 13 14.4375 13.757813 14.125 14.78125 L 8.625 9.28125 Z M 8.0625 11.5625 L 20.4375 23.9375 C 16.917969 26.730469 11.882813 26.632813 8.625 23.375 C 5.367188 20.117188 5.269531 15.082031 8.0625 11.5625 Z"/></Svg>);
};
export default SVGSatelliteDishSolid;
