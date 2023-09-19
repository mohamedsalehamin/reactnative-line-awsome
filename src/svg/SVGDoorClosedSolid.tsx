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
const SVGDoorClosedSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 8 5 L 8 27 L 24 27 L 24 5 Z M 10 7 L 22 7 L 22 25 L 10 25 Z M 20 15 C 19.449219 15 19 15.449219 19 16 C 19 16.550781 19.449219 17 20 17 C 20.550781 17 21 16.550781 21 16 C 21 15.449219 20.550781 15 20 15 Z"/></Svg>);
};
export default SVGDoorClosedSolid;
