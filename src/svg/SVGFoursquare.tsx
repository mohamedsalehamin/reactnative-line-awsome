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
const SVGFoursquare = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 10 5 C 8.90625 5 8 5.90625 8 7 L 8 25.71875 C 8 26.226563 8.359375 26.691406 8.78125 26.84375 C 9.195313 26.992188 9.765625 26.871094 10.09375 26.5 L 16.40625 19 L 19.84375 19 C 20.792969 19 21.628906 18.304688 21.8125 17.375 L 23.75 7.375 C 23.984375 6.160156 23.019531 5 21.78125 5 Z M 10 7 L 21.78125 7 L 21 11 L 14.46875 11 C 14.21875 11 14 11.21875 14 11.46875 L 14 12.53125 C 14 12.78125 14.21875 13 14.46875 13 L 20.625 13 L 19.84375 17 L 15.90625 17 C 15.609375 16.992188 15.320313 17.117188 15.125 17.34375 L 10 23.5 Z"/></Svg>);
};
export default SVGFoursquare;
