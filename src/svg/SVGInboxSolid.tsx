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
const SVGInboxSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 7.15625 5 L 7 5.84375 L 5 18.84375 L 5 27 L 27 27 L 27 18.84375 L 25 5.84375 L 24.84375 5 Z M 8.875 7 L 23.125 7 L 24.8125 18 L 18 18 L 18 19 C 18 20.117188 17.117188 21 16 21 C 14.882813 21 14 20.117188 14 19 L 14 18 L 7.1875 18 Z M 7 20 L 12.1875 20 C 12.640625 21.710938 14.152344 23 16 23 C 17.847656 23 19.359375 21.710938 19.8125 20 L 25 20 L 25 25 L 7 25 Z"/></Svg>);
};
export default SVGInboxSolid;
