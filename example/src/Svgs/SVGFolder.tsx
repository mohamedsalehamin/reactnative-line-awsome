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
const SVGFolder = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 6 3 L 6 29 L 26 29 L 26 15.4375 L 27.71875 13.71875 L 28 13.40625 L 28 3 Z M 8 5 L 22 5 L 22 13.40625 L 22.28125 13.71875 L 24 15.4375 L 24 27 L 8 27 Z M 24 5 L 26 5 L 26 12.5625 L 25 13.5625 L 24 12.5625 Z"/></Svg>);
};
export default SVGFolder;
