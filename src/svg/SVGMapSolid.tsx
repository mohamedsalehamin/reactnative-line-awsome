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
const SVGMapSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 28 4.46875 L 26.59375 5.09375 L 19.96875 7.9375 L 12.34375 5.0625 L 11.96875 4.9375 L 11.59375 5.09375 L 4.59375 8.09375 L 4 8.34375 L 4 27.53125 L 5.40625 26.90625 L 12.03125 24.0625 L 19.65625 26.9375 L 20.03125 27.0625 L 20.40625 26.90625 L 27.40625 23.90625 L 28 23.65625 Z M 13 7.4375 L 19 9.6875 L 19 24.5625 L 13 22.3125 Z M 11 7.5 L 11 22.34375 L 6 24.5 L 6 9.65625 Z M 26 7.5 L 26 22.34375 L 21 24.5 L 21 9.65625 Z"/></Svg>);
};
export default SVGMapSolid;
