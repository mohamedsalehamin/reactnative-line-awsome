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
const SVGChartBarSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 21 4 L 21 28 L 29 28 L 29 4 Z M 23 6 L 27 6 L 27 26 L 23 26 Z M 3 10 L 3 28 L 11 28 L 11 10 Z M 5 12 L 9 12 L 9 26 L 5 26 Z M 12 16 L 12 28 L 20 28 L 20 16 Z M 14 18 L 18 18 L 18 26 L 14 26 Z"/></Svg>);
};
export default SVGChartBarSolid;
