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
const SVGWonSignSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 4 6 L 5.8125 12 L 4 12 L 4 14 L 6.40625 14 L 7 16 L 4 16 L 4 18 L 7.59375 18 L 10 26 L 12 26 L 14 18 L 18 18 L 20 26 L 22 26 L 24.40625 18 L 28 18 L 28 16 L 25 16 L 25.59375 14 L 28 14 L 28 12 L 26.1875 12 L 28 6 L 26 6 L 24.1875 12 L 18.5 12 L 17 6 L 15 6 L 13.5 12 L 7.8125 12 L 6 6 Z M 16 10 L 16.5 12 L 15.5 12 Z M 8.40625 14 L 13 14 L 12.5 16 L 9 16 Z M 15 14 L 17 14 L 17.5 16 L 14.5 16 Z M 19 14 L 23.59375 14 L 23 16 L 19.5 16 Z M 9.59375 18 L 12 18 L 10.90625 22.375 Z M 20 18 L 22.40625 18 L 21.09375 22.375 Z"/></Svg>);
};
export default SVGWonSignSolid;
