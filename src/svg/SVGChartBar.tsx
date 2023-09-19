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
const SVGChartBar = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg  viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 13 3 L 13 27 L 11 27 L 11 7 L 5 7 L 5 27 L 3 27 L 3 29 L 29 29 L 29 27 L 27 27 L 27 14 L 21 14 L 21 27 L 19 27 L 19 3 Z M 15 5 L 17 5 L 17 27 L 15 27 Z"/></Svg>);
};
export default SVGChartBar;
