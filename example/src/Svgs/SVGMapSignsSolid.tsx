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
const SVGMapSignsSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 15 5 L 15 7 L 5 7 L 5 16 L 25.46875 16 L 25.75 15.65625 L 29.3125 11.5 L 25.75 7.34375 L 25.46875 7 L 17 7 L 17 5 Z M 7 9 L 24.53125 9 L 26.6875 11.5 L 24.53125 14 L 7 14 Z M 15 17 L 15 27 L 17 27 L 17 17 Z"/></Svg>);
};
export default SVGMapSignsSolid;
