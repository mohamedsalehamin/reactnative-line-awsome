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
const SVGBoltSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 6 L 16 15 L 20 16 L 16.101563 26 L 16 26 L 16 17.96875 L 12 16.96875 L 15.898438 6 L 16 6 M 18 4 L 14.488281 4 L 14.015625 5.328125 L 10.113281 16.300781 L 9.378906 18.375 L 11.515625 18.910156 L 14 19.53125 L 14 28 L 17.46875 28 L 17.964844 26.726563 L 21.863281 16.726563 L 22.6875 14.609375 L 18 13.4375 Z"/></Svg>);
};
export default SVGBoltSolid;
