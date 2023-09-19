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
const SVGFunnelDollarSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 4 L 5 6.34375 L 5.21875 6.625 L 13 16.34375 L 13 28.03125 L 14.59375 26.78125 L 16.15625 25.59375 C 16.90525 29.23375 20.145 32 24 32 C 28.406 32 32 28.406 32 24 C 32 19.594 28.406 16 24 16 C 22.113 16 20.371 16.68025 19 17.78125 L 19 16.34375 L 26.78125 6.6230469 L 27 6.34375 L 27 4 L 5 4 z M 7.28125 6 L 24.71875 6 L 17.53125 15 L 14.46875 15 L 7.28125 6 z M 15 17 L 17 17 L 17 20.125 C 16.488 21.047 16.14525 22.0895 16.03125 23.1875 L 15 24 L 15 17 z M 24 18 C 27.324 18 30 20.676 30 24 C 30 27.324 27.324 30 24 30 C 20.676 30 18 27.324 18 24 C 18 20.676 20.676 18 24 18 z M 23 19 L 23 20.0625 C 21.875 20.2505 21 21.204953 21 22.376953 C 21 23.130953 21.41775 23.82025 22.09375 24.15625 L 25 25.625 C 25 25.848 24.848 26 24.625 26 L 23.375 26 C 23.152 26 23 25.848 23 25.625 L 23 25 L 21 25 L 21 25.625 C 21 26.797 21.875 27.7495 23 27.9375 L 23 29 L 25 29 L 25 27.9375 C 26.125 27.7495 27 26.795047 27 25.623047 C 27 24.869047 26.58225 24.18375 25.90625 23.84375 L 23 22.375 C 23 22.152 23.152 22 23.375 22 L 24.625 22 C 24.848 22 25 22.152 25 22.375 L 25 23 L 27 23 L 27 22.375 C 27 21.203 26.125 20.2505 25 20.0625 L 25 19 L 23 19 z"/></Svg>);
};
export default SVGFunnelDollarSolid;
