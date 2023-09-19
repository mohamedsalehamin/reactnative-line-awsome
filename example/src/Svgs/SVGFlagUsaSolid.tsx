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
const SVGFlagUsaSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 3 7 L 3 17 L 15 17 L 17 17 L 29 17 L 29 15 L 17 15 L 17 13 L 29 13 L 29 11 L 17 11 L 17 9 L 29 9 L 29 7 L 17 7 L 15 7 L 3 7 z M 5 8 C 5.552 8 6 8.448 6 9 C 6 9.552 5.552 10 5 10 C 4.448 10 4 9.552 4 9 C 4 8.448 4.448 8 5 8 z M 9 8 C 9.552 8 10 8.448 10 9 C 10 9.552 9.552 10 9 10 C 8.448 10 8 9.552 8 9 C 8 8.448 8.448 8 9 8 z M 13 8 C 13.552 8 14 8.448 14 9 C 14 9.552 13.552 10 13 10 C 12.448 10 12 9.552 12 9 C 12 8.448 12.448 8 13 8 z M 7 11 C 7.552 11 8 11.448 8 12 C 8 12.552 7.552 13 7 13 C 6.448 13 6 12.552 6 12 C 6 11.448 6.448 11 7 11 z M 11 11 C 11.552 11 12 11.448 12 12 C 12 12.552 11.552 13 11 13 C 10.448 13 10 12.552 10 12 C 10 11.448 10.448 11 11 11 z M 15 11 C 15.552 11 16 11.448 16 12 C 16 12.552 15.552 13 15 13 C 14.448 13 14 12.552 14 12 C 14 11.448 14.448 11 15 11 z M 5 14 C 5.552 14 6 14.448 6 15 C 6 15.552 5.552 16 5 16 C 4.448 16 4 15.552 4 15 C 4 14.448 4.448 14 5 14 z M 9 14 C 9.552 14 10 14.448 10 15 C 10 15.552 9.552 16 9 16 C 8.448 16 8 15.552 8 15 C 8 14.448 8.448 14 9 14 z M 13 14 C 13.552 14 14 14.448 14 15 C 14 15.552 13.552 16 13 16 C 12.448 16 12 15.552 12 15 C 12 14.448 12.448 14 13 14 z M 3 19 L 3 21 L 29 21 L 29 19 L 3 19 z M 3 23 L 3 25 L 29 25 L 29 23 L 3 23 z"/></Svg>);
};
export default SVGFlagUsaSolid;
