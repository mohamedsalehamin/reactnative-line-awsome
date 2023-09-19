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
const SVGStarHalfAltSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 2.375 L 15.09375 4.40625 L 11.84375 11.71875 L 3.90625 12.53125 L 1.65625 12.78125 L 3.34375 14.28125 L 9.25 19.625 L 7.59375 27.4375 L 7.125 29.625 L 7.15625 29.625 L 9.09375 28.5 L 16 24.53125 L 22.90625 28.5 L 24.875 29.625 L 24.40625 27.4375 L 22.75 19.625 L 28.65625 14.28125 L 30.34375 12.78125 L 28.09375 12.53125 L 20.15625 11.71875 L 16.90625 4.40625 Z M 16 7.28125 L 18.5625 13.0625 L 18.8125 13.5625 L 19.375 13.625 L 25.6875 14.28125 L 20.96875 18.53125 L 20.53125 18.90625 L 20.65625 19.46875 L 21.96875 25.65625 L 16.5 22.5 L 16 22.21875 Z"/></Svg>);
};
export default SVGStarHalfAltSolid;
