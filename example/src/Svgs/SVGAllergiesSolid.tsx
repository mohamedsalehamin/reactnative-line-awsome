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
const SVGAllergiesSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 2 C 14.617 2 13.469 2.969 13.125 4.25 C 12.773 4.105 12.402 4 12 4 C 10.355 4 9 5.355 9 7 L 9 17.75 L 8.125 16.875 C 6.961 15.711 5.039 15.711 3.875 16.875 C 2.711 18.039 2.711 19.961 3.875 21.125 L 10.65625 27.90625 C 11.83225 29.07825 13.457 30 15.375 30 L 20 30 C 23.855 30 27 26.855 27 23 L 27 11 C 27 9.355 25.645 8 24 8 C 23.648 8 23.316 8.0735 23 8.1875 L 23 7 C 23 5.355 21.645 4 20 4 C 19.598 4 19.227 4.105 18.875 4.25 C 18.531 2.969 17.383 2 16 2 z M 16 4 C 16.566 4 17 4.434 17 5 L 17 15 L 19 15 L 19 7 C 19 6.434 19.434 6 20 6 C 20.566 6 21 6.434 21 7 L 21 15 L 23 15 L 23 11 C 23 10.434 23.434 10 24 10 C 24.566 10 25 10.434 25 11 L 25 23 C 25 25.773 22.773 28 20 28 L 15.375 28 C 14.102 28 13.00775 27.37875 12.09375 26.46875 L 5.28125 19.71875 C 4.88325 19.32075 4.88325 18.68025 5.28125 18.28125 C 5.67925 17.88325 6.31975 17.88325 6.71875 18.28125 L 9.28125 20.875 L 11 22.59375 L 11 7 C 11 6.434 11.434 6 12 6 C 12.566 6 13 6.434 13 7 L 13 15 L 15 15 L 15 5 C 15 4.434 15.434 4 16 4 z M 16 17 A 1 1 0 0 0 16 19 A 1 1 0 0 0 16 17 z M 22 17 A 1 1 0 0 0 22 19 A 1 1 0 0 0 22 17 z M 18 20 A 1 1 0 0 0 18 22 A 1 1 0 0 0 18 20 z M 14 21 A 1 1 0 0 0 14 23 A 1 1 0 0 0 14 21 z M 22 21 A 1 1 0 0 0 22 23 A 1 1 0 0 0 22 21 z M 18 24 A 1 1 0 0 0 18 26 A 1 1 0 0 0 18 24 z"/></Svg>);
};
export default SVGAllergiesSolid;
