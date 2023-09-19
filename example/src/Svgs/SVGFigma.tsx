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
const SVGFigma = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 12.5 1 C 9.467 1 7 3.467 7 6.5 C 7 8.1579175 7.7405106 9.6431625 8.9042969 10.652344 C 7.1773693 11.580958 6 13.405492 6 15.5 C 6 17.360625 6.9316558 19.00426 8.3496094 20 C 6.9316558 20.99574 6 22.639375 6 24.5 C 6 27.533 8.467 30 11.5 30 C 14.533 30 17 27.533 17 24.5 L 17 19 L 17 12 L 20.5 12 C 23.533 12 26 9.533 26 6.5 C 26 3.467 23.533 1 20.5 1 L 12.5 1 z M 12.5 3 L 20.5 3 C 22.43 3 24 4.57 24 6.5 C 24 8.43 22.43 10 20.5 10 L 17 10 L 12.5 10 C 10.57 10 9 8.43 9 6.5 C 9 4.57 10.57 3 12.5 3 z M 11.5 12 L 12.5 12 L 15 12 L 15 19 L 11.5 19 C 9.57 19 8 17.43 8 15.5 C 8 13.57 9.57 12 11.5 12 z M 21 12 A 4 4 0 0 0 21 20 A 4 4 0 0 0 21 12 z M 11.5 21 L 15 21 L 15 24.5 C 15 26.43 13.43 28 11.5 28 C 9.57 28 8 26.43 8 24.5 C 8 22.57 9.57 21 11.5 21 z"/></Svg>);
};
export default SVGFigma;
