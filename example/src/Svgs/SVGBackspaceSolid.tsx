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
const SVGBackspaceSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 11.59375 7 L 11.28125 7.28125 L 3.28125 15.28125 L 2.59375 16 L 3.28125 16.71875 L 11.28125 24.71875 L 11.59375 25 L 29 25 L 29 7 Z M 12.4375 9 L 27 9 L 27 23 L 12.4375 23 L 5.4375 16 Z M 15.15625 11.75 L 13.75 13.15625 L 16.59375 16 L 13.75 18.84375 L 15.15625 20.25 L 18 17.40625 L 20.84375 20.25 L 22.25 18.84375 L 19.40625 16 L 22.25 13.15625 L 20.84375 11.75 L 18 14.59375 Z"/></Svg>);
};
export default SVGBackspaceSolid;
