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
const SVGArchwaySolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 3 6 L 3 12 L 5 12 L 5 24 L 3 24 L 3 26 L 5 26 L 13 26 L 13 24 L 13 19 C 13 17.346 14.346 16 16 16 C 17.654 16 19 17.346 19 19 L 19 24 L 19 26 L 27 26 L 29 26 L 29 24 L 27 24 L 27 12 L 29 12 L 29 6 L 3 6 z M 5 8 L 27 8 L 27 10 L 5 10 L 5 8 z M 7 12 L 25 12 L 25 24 L 21 24 L 21 19 C 21 16.243 18.757 14 16 14 C 13.243 14 11 16.243 11 19 L 11 24 L 7 24 L 7 12 z"/></Svg>);
};
export default SVGArchwaySolid;
