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
const SVGDeviantart = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 18.375 4 L 18.09375 4.3125 L 17.6875 4.6875 L 17.59375 4.8125 L 17.53125 4.9375 L 15.75 8.3125 L 15.59375 8.40625 L 8.1875 8.40625 L 8.1875 15.90625 L 11.78125 15.90625 L 8.3125 22.53125 L 8.1875 22.75 L 8.1875 28 L 13.625 28 L 13.90625 27.6875 L 14.3125 27.3125 L 14.40625 27.1875 L 14.46875 27.0625 L 16.25 23.6875 L 16.40625 23.59375 L 23.8125 23.59375 L 23.8125 16.09375 L 20.21875 16.09375 L 23.6875 9.46875 L 23.8125 9.25 L 23.8125 4 Z M 19.21875 6 L 21.8125 6 L 21.8125 8.78125 L 17.875 16.25 L 17.59375 16.84375 L 18 17.34375 L 18.34375 17.75 L 18.625 18.09375 L 21.8125 18.09375 L 21.8125 21.59375 L 15.78125 21.59375 L 15.5 21.78125 L 14.90625 22.15625 L 14.71875 22.3125 L 14.59375 22.53125 L 12.78125 26 L 10.1875 26 L 10.1875 23.21875 L 14.09375 15.75 L 14.40625 15.1875 L 14 14.65625 L 13.65625 14.25 L 13.375 13.90625 L 10.1875 13.90625 L 10.1875 10.40625 L 16.21875 10.40625 L 16.46875 10.21875 L 17.0625 9.84375 L 17.28125 9.6875 L 17.40625 9.46875 Z"/></Svg>);
};
export default SVGDeviantart;
