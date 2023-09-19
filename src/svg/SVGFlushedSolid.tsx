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
const SVGFlushedSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 3 C 8.832 3 3 8.832 3 16 C 3 23.168 8.832 29 16 29 C 23.168 29 29 23.168 29 16 C 29 8.832 23.168 3 16 3 z M 16 5 C 22.065 5 27 9.935 27 16 C 27 22.065 22.065 27 16 27 C 9.935 27 5 22.065 5 16 C 5 9.935 9.935 5 16 5 z M 11.5 8 C 8.467 8 6 10.467 6 13.5 C 6 16.533 8.467 19 11.5 19 C 13.360625 19 15.00426 18.068344 16 16.650391 C 16.99574 18.068344 18.639375 19 20.5 19 C 23.533 19 26 16.533 26 13.5 C 26 10.467 23.533 8 20.5 8 C 18.639375 8 16.99574 8.9316558 16 10.349609 C 15.00426 8.9316558 13.360625 8 11.5 8 z M 11.5 10 C 13.43 10 15 11.57 15 13.5 C 15 15.43 13.43 17 11.5 17 C 9.57 17 8 15.43 8 13.5 C 8 11.57 9.57 10 11.5 10 z M 20.5 10 C 22.43 10 24 11.57 24 13.5 C 24 15.43 22.43 17 20.5 17 C 18.57 17 17 15.43 17 13.5 C 17 11.57 18.57 10 20.5 10 z M 11.5 12 A 1.5 1.5 0 0 0 11.5 15 A 1.5 1.5 0 0 0 11.5 12 z M 20.5 12 A 1.5 1.5 0 0 0 20.5 15 A 1.5 1.5 0 0 0 20.5 12 z M 12 21 L 12 23 L 20 23 L 20 21 L 12 21 z"/></Svg>);
};
export default SVGFlushedSolid;
