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
const SVGCcAmex = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 6 C 3.355469 6 2 7.355469 2 9 L 2 23 C 2 24.644531 3.355469 26 5 26 L 27 26 C 28.644531 26 30 24.644531 30 23 L 30 9 C 30 7.355469 28.644531 6 27 6 Z M 5 8 L 27 8 C 27.566406 8 28 8.433594 28 9 L 28 23 C 28 23.566406 27.566406 24 27 24 L 5 24 C 4.433594 24 4 23.566406 4 23 L 4 9 C 4 8.433594 4.433594 8 5 8 Z M 7.0625 13.25 L 5 18.75 L 6.25 18.75 L 6.65625 17.5 L 9 17.5 L 9.40625 18.75 L 11.75 18.75 L 11.75 14.625 L 13.25 18.75 L 14.34375 18.75 L 15.875 14.75 L 15.875 18.75 L 16.96875 18.75 L 16.96875 13.25 L 15.1875 13.25 L 13.8125 16.96875 L 12.4375 13.25 L 10.5 13.25 L 10.5 18.46875 L 8.5625 13.25 Z M 18.46875 13.25 L 18.46875 18.75 L 22.875 18.75 L 24.25 16.96875 L 25.625 18.75 L 27 18.75 L 24.9375 16 L 27 13.25 L 25.5 13.25 L 24.125 14.90625 L 23 13.25 Z M 7.75 14.34375 L 8.4375 16.28125 L 7.0625 16.28125 Z M 19.5625 14.5 L 22.3125 14.5 L 23.4375 16 L 22.1875 17.65625 L 19.5625 17.65625 L 19.5625 16.5625 L 22.0625 16.5625 L 22.0625 15.4375 L 19.5625 15.4375 Z"/></Svg>);
};
export default SVGCcAmex;
