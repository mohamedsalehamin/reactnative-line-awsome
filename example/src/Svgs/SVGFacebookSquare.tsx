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
const SVGFacebookSquare = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 7 5 C 5.90625 5 5 5.90625 5 7 L 5 25 C 5 26.09375 5.90625 27 7 27 L 25 27 C 26.09375 27 27 26.09375 27 25 L 27 7 C 27 5.90625 26.09375 5 25 5 Z M 7 7 L 25 7 L 25 25 L 19.8125 25 L 19.8125 18.25 L 22.40625 18.25 L 22.78125 15.25 L 19.8125 15.25 L 19.8125 13.3125 C 19.8125 12.4375 20.027344 11.84375 21.28125 11.84375 L 22.90625 11.84375 L 22.90625 9.125 C 22.628906 9.089844 21.667969 9.03125 20.5625 9.03125 C 18.257813 9.03125 16.6875 10.417969 16.6875 13 L 16.6875 15.25 L 14.0625 15.25 L 14.0625 18.25 L 16.6875 18.25 L 16.6875 25 L 7 25 Z"/></Svg>);
};
export default SVGFacebookSquare;
