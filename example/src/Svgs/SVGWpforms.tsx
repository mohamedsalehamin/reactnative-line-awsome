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
const SVGWpforms = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 5 L 5 27 L 27 27 L 27 5 L 5 5 z M 7 7 L 7.5351562 7 L 12.599609 11.300781 L 16 8.3007812 L 19.400391 11.300781 L 24.464844 7 L 25 7 L 25 25 L 7 25 L 7 7 z M 10.705078 7 L 14.525391 7 L 12.599609 8.6992188 L 10.705078 7 z M 17.474609 7 L 21.294922 7 L 19.400391 8.6992188 L 17.474609 7 z M 9 13 L 9 15 L 12 15 L 12 13 L 9 13 z M 14 13 L 14 15 L 23 15 L 23 13 L 14 13 z M 9 17 L 9 19 L 12 19 L 12 17 L 9 17 z M 14 17 L 14 19 L 23 19 L 23 17 L 14 17 z M 18 21 L 18 23 L 23 23 L 23 21 L 18 21 z"/></Svg>);
};
export default SVGWpforms;
