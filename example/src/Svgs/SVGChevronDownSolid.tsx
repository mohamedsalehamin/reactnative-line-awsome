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
const SVGChevronDownSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 6.90625 6.59375 L 6.1875 7.28125 L 2.28125 11.1875 L 1.59375 11.90625 L 16 26.3125 L 30.40625 11.90625 L 29.71875 11.1875 L 25.8125 7.28125 L 25.09375 6.59375 L 16 15.6875 Z M 6.875 9.4375 L 15.28125 17.8125 L 16 18.5 L 16.71875 17.8125 L 25.125 9.4375 L 27.5625 11.875 L 16 23.46875 L 4.4375 11.875 Z"/></Svg>);
};
export default SVGChevronDownSolid;
