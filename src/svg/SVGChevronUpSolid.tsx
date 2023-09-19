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
const SVGChevronUpSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 5.6875 L 1.59375 20.09375 L 2.28125 20.8125 L 6.1875 24.71875 L 6.90625 25.40625 L 16 16.3125 L 25.09375 25.40625 L 25.8125 24.71875 L 29.71875 20.8125 L 30.40625 20.09375 Z M 16 8.53125 L 27.5625 20.125 L 25.125 22.5625 L 16.71875 14.1875 L 16 13.5 L 15.28125 14.1875 L 6.875 22.5625 L 4.4375 20.125 Z"/></Svg>);
};
export default SVGChevronUpSolid;
