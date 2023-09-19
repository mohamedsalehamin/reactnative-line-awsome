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
const SVGSquareRootAltSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 19.3125 6 L 19.0625 6.65625 L 12.90625 22.71875 L 9.90625 16.5625 L 9.625 16 L 6 16 L 6 18 L 8.375 18 L 12 25.4375 L 12.28125 26 L 13.78125 26 L 14.03125 25.34375 L 20.6875 8 L 26 8 L 26 6 Z"/></Svg>);
};
export default SVGSquareRootAltSolid;
