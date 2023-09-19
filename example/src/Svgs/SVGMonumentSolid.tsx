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
const SVGMonumentSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 4 C 14.894531 4 14 4.894531 14 6 C 14 7.105469 14.894531 8 16 8 C 17.105469 8 18 7.105469 18 6 C 18 4.894531 17.105469 4 16 4 Z M 16 8 L 12 8 L 12 10 L 13.46875 10 L 13.03125 20 L 10 20 L 10 26 L 8 26 L 8 28 L 24 28 L 24 26 L 22 26 L 22 20 L 18.96875 20 L 18.53125 10 L 20 10 L 20 8 Z M 15.46875 10 L 16.53125 10 L 16.96875 20 L 15.03125 20 Z M 12 22 L 20 22 L 20 26 L 12 26 Z"/></Svg>);
};
export default SVGMonumentSolid;
