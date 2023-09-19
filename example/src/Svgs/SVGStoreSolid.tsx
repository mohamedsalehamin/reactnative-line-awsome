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
const SVGStoreSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 4 4 L 4 7.65625 L 1 11.65625 L 1 12 C 1 13.645 2.355 15 4 15 L 4 28 L 28 28 L 28 15 C 29.645 15 31 13.645 31 12 L 31 11.65625 L 28 7.65625 L 28 4 L 4 4 z M 6 6 L 26 6 L 26 7 L 6 7 L 6 6 z M 5.5 9 L 26.5 9 L 28.90625 12.21875 C 28.79725 12.65175 28.469 13 28 13 C 27.445 13 27 12.555 27 12 L 25 12 C 25 12.555 24.555 13 24 13 C 23.445 13 23 12.555 23 12 L 21 12 C 21 12.555 20.555 13 20 13 C 19.445 13 19 12.555 19 12 L 17 12 C 17 12.555 16.555 13 16 13 C 15.445 13 15 12.555 15 12 L 13 12 C 13 12.555 12.555 13 12 13 C 11.445 13 11 12.555 11 12 L 9 12 C 9 12.555 8.555 13 8 13 C 7.445 13 7 12.555 7 12 L 5 12 C 5 12.555 4.555 13 4 13 C 3.531 13 3.20275 12.65175 3.09375 12.21875 L 5.5 9 z M 6 14.21875 C 6.531 14.69875 7.234 15 8 15 C 8.766 15 9.469 14.69875 10 14.21875 C 10.531 14.69875 11.234 15 12 15 C 12.766 15 13.469 14.69875 14 14.21875 C 14.531 14.69875 15.234 15 16 15 C 16.766 15 17.469 14.69875 18 14.21875 C 18.531 14.69875 19.234 15 20 15 C 20.766 15 21.469 14.69875 22 14.21875 C 22.531 14.69875 23.234 15 24 15 C 24.766 15 25.469 14.69875 26 14.21875 L 26 21 L 6 21 L 6 14.21875 z M 6 23 L 26 23 L 26 26 L 6 26 L 6 23 z"/></Svg>);
};
export default SVGStoreSolid;
