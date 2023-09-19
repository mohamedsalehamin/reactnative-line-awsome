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
const SVGAlignRightSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 3 7 L 3 9 L 29 9 L 29 7 Z M 11 11 L 11 13 L 29 13 L 29 11 Z M 3 15 L 3 17 L 29 17 L 29 15 Z M 11 19 L 11 21 L 29 21 L 29 19 Z M 3 23 L 3 25 L 29 25 L 29 23 Z"/></Svg>);
};
export default SVGAlignRightSolid;
