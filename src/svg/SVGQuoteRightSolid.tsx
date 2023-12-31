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
const SVGQuoteRightSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 4 8 L 4 18 L 12 18 C 12 20.21875 10.21875 22 8 22 L 8 24 C 11.300781 24 14 21.300781 14 18 L 14 8 Z M 18 8 L 18 18 L 26 18 C 26 20.21875 24.21875 22 22 22 L 22 24 C 25.300781 24 28 21.300781 28 18 L 28 8 Z M 6 10 L 12 10 L 12 16 L 6 16 Z M 20 10 L 26 10 L 26 16 L 20 16 Z"/></Svg>);
};
export default SVGQuoteRightSolid;
