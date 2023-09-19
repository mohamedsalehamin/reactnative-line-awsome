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
const SVGBullhornSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 28 3.03125 L 26.40625 4.1875 C 26.40625 4.1875 24.417969 5.664063 21.5625 7.125 C 18.707031 8.585938 14.988281 10 11.71875 10 L 2 10 L 2 19.125 L 2.03125 19.28125 L 4.03125 26.28125 L 4.25 27 L 10.3125 27 L 9.96875 25.71875 L 8.34375 20 L 11.71875 20 C 14.945313 20 18.664063 21.441406 21.53125 22.90625 C 24.398438 24.371094 26.40625 25.8125 26.40625 25.8125 L 28 26.96875 L 28 17.8125 C 29.15625 17.394531 30 16.292969 30 15 C 30 13.707031 29.15625 12.605469 28 12.1875 Z M 26 6.75 L 26 23.21875 C 25.171875 22.660156 24.515625 22.152344 22.4375 21.09375 C 19.5 19.59375 15.707031 18.074219 12 18 L 12 12 C 15.742188 11.925781 19.539063 10.375 22.46875 8.875 C 24.542969 7.8125 25.179688 7.308594 26 6.75 Z M 4 12 L 10 12 L 10 18 L 4 18 Z M 4.34375 20 L 6.25 20 L 7.65625 25 L 5.75 25 Z"/></Svg>);
};
export default SVGBullhornSolid;
