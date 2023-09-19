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
const SVGFileCodeSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 6 3 L 6 29 L 26 29 L 26 9.59375 L 25.71875 9.28125 L 19.71875 3.28125 L 19.40625 3 Z M 8 5 L 18 5 L 18 11 L 24 11 L 24 27 L 8 27 Z M 20 6.4375 L 22.5625 9 L 20 9 Z M 16 13 L 14 25 L 16 25 L 18 13 Z M 12.21875 15.375 L 9.71875 18.375 L 9.1875 19 L 9.71875 19.625 L 12.21875 22.625 L 13.78125 21.375 L 11.8125 19 L 13.78125 16.625 Z M 19.78125 15.375 L 18.21875 16.625 L 20.1875 19 L 18.21875 21.375 L 19.78125 22.625 L 22.28125 19.625 L 22.8125 19 L 22.28125 18.375 Z"/></Svg>);
};
export default SVGFileCodeSolid;
