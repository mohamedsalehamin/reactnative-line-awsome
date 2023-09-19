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
const SVGFrownOpen = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 21.535156 6 26 10.464844 26 16 C 26 21.535156 21.535156 26 16 26 C 10.464844 26 6 21.535156 6 16 C 6 10.464844 10.464844 6 16 6 Z M 11.5 11 C 10.671875 11 10 12.121094 10 13.5 C 10 14.878906 10.671875 16 11.5 16 C 12.328125 16 13 14.878906 13 13.5 C 13 12.121094 12.328125 11 11.5 11 Z M 20.5 11 C 19.671875 11 19 12.121094 19 13.5 C 19 14.878906 19.671875 16 20.5 16 C 21.328125 16 22 14.878906 22 13.5 C 22 12.121094 21.328125 11 20.5 11 Z M 16 17 C 13.707031 17 12 18.855469 12 21 C 12 21.988281 12.355469 22.972656 13.15625 23.46875 C 13.957031 23.964844 14.84375 24 16 24 C 17.15625 24 18.042969 23.964844 18.84375 23.46875 C 19.644531 22.972656 20 21.988281 20 21 C 20 18.855469 18.292969 17 16 17 Z M 16 19 C 17.292969 19 18 19.828125 18 21 C 18 21.667969 17.960938 21.691406 17.8125 21.78125 C 17.664063 21.871094 17.054688 22 16 22 C 14.945313 22 14.335938 21.871094 14.1875 21.78125 C 14.039063 21.691406 14 21.667969 14 21 C 14 19.828125 14.707031 19 16 19 Z"/></Svg>);
};
export default SVGFrownOpen;
