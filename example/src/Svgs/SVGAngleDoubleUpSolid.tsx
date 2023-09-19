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
const SVGAngleDoubleUpSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 4.6875 L 3.78125 16.90625 L 5.21875 18.3125 L 16 7.53125 L 26.78125 18.3125 L 28.21875 16.90625 Z M 16 11.6875 L 3.78125 23.90625 L 5.21875 25.3125 L 16 14.53125 L 26.78125 25.3125 L 28.21875 23.90625 Z"/></Svg>);
};
export default SVGAngleDoubleUpSolid;
