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
const SVGDollySolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 18.59375 1.65625 L 17.65625 2 L 12.125 4.03125 L 11.1875 4.375 L 11.53125 5.3125 L 13.21875 9.875 L 13.5625 10.8125 L 14.5 10.46875 L 20.03125 8.4375 L 20.96875 8.09375 L 20.625 7.15625 L 18.9375 2.59375 Z M 8.59375 3 L 7.65625 3.34375 L 5 4.3125 L 5.65625 6.1875 L 7.40625 5.5625 L 14.0625 23.34375 L 14.40625 24.28125 L 15.34375 23.9375 L 25.96875 19.9375 L 25.28125 18.0625 L 15.59375 21.71875 L 8.9375 3.9375 Z M 17.40625 4.21875 L 18.40625 6.90625 L 14.75 8.25 L 13.75 5.5625 Z M 21.78125 9.90625 L 20.84375 10.25 L 15.3125 12.28125 L 14.375 12.625 L 14.71875 13.5625 L 16.40625 18.125 L 16.75 19.0625 L 17.6875 18.71875 L 23.21875 16.6875 L 24.15625 16.34375 L 23.8125 15.375 L 22.125 10.84375 Z M 20.59375 12.46875 L 21.59375 15.15625 L 17.9375 16.5 L 16.9375 13.8125 Z M 11 21 C 9.355469 21 8 22.355469 8 24 C 8 25.644531 9.355469 27 11 27 C 12.644531 27 14 25.644531 14 24 C 14 22.355469 12.644531 21 11 21 Z M 11 27 L 5 27 L 5 29 L 27 29 L 27 27 Z M 11 23 C 11.5625 23 12 23.4375 12 24 C 12 24.5625 11.5625 25 11 25 C 10.4375 25 10 24.5625 10 24 C 10 23.4375 10.4375 23 11 23 Z"/></Svg>);
};
export default SVGDollySolid;
