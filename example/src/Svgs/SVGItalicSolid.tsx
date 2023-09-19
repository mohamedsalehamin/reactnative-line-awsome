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
const SVGItalicSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 11.75 5 L 11.6875 5.9375 L 11.5 8.9375 L 11.4375 10 L 13.4375 10 L 12.5625 22 L 10.5625 22 L 10.5 22.9375 L 10.3125 25.9375 L 10.21875 27 L 20.25 27 L 20.3125 26.0625 L 20.5 23.0625 L 20.5625 22 L 18.5625 22 L 19.4375 10 L 21.4375 10 L 21.5 9.0625 L 21.6875 6.0625 L 21.78125 5 Z M 13.625 7 L 19.625 7 L 19.5625 8 L 17.5625 8 L 17.5 8.9375 L 16.5 22.9375 L 16.4375 24 L 18.4375 24 L 18.375 25 L 12.375 25 L 12.4375 24 L 14.4375 24 L 14.5 23.0625 L 15.5 9.0625 L 15.5625 8 L 13.5625 8 Z"/></Svg>);
};
export default SVGItalicSolid;
