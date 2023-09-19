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
const SVGOutdentSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 3 7 L 3 9 L 16 9 L 16 7 Z M 3 11 L 3 13 L 23 13 L 23 11 Z M 25 11 L 25 21 L 30 16 Z M 3 15 L 3 17 L 23 17 L 23 15 Z M 3 19 L 3 21 L 23 21 L 23 19 Z M 3 23 L 3 25 L 16 25 L 16 23 Z"/></Svg>);
};
export default SVGOutdentSolid;
