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
const SVGDoorOpenSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 15.875 4 L 15.78125 4.03125 L 7.78125 5.90625 L 7 6.09375 L 7 26.34375 L 7.8125 26.46875 L 15.8125 27.96875 L 15.90625 28 L 18 28 L 18 4 Z M 20 6 L 20 8 L 23 8 L 23 24 L 20 24 L 20 26 L 25 26 L 25 6 Z M 16 6.03125 L 16 26 L 9 24.6875 L 9 7.65625 Z M 14.34375 15 C 13.976563 15 13.65625 15.449219 13.65625 16 C 13.65625 16.550781 13.976563 17 14.34375 17 C 14.710938 17 15 16.550781 15 16 C 15 15.449219 14.710938 15 14.34375 15 Z"/></Svg>);
};
export default SVGDoorOpenSolid;
