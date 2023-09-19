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
const SVGArrowsAltHSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 9.28125 6.78125 L 0.78125 15.28125 L 0.09375 16 L 0.78125 16.71875 L 9.28125 25.21875 L 10.71875 23.78125 L 3.9375 17 L 28.0625 17 L 21.28125 23.78125 L 22.71875 25.21875 L 31.21875 16.71875 L 31.90625 16 L 31.21875 15.28125 L 22.71875 6.78125 L 21.28125 8.21875 L 28.0625 15 L 3.9375 15 L 10.71875 8.21875 Z"/></Svg>);
};
export default SVGArrowsAltHSolid;
