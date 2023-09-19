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
const SVGQuranSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 8 3 C 6.355469 3 5 4.355469 5 6 L 5 26 C 5 27.644531 6.355469 29 8 29 L 27 29 L 27 3 Z M 8 5 L 25 5 L 25 23 L 8 23 C 7.648438 23 7.316406 23.074219 7 23.1875 L 7 6 C 7 5.433594 7.433594 5 8 5 Z M 8 6 L 8 22 L 24 22 L 24 6 Z M 10 8 L 22 8 L 22 20 L 10 20 Z M 16 9 C 15.449219 9 15 9.449219 15 10 C 15 10.550781 15.449219 11 16 11 C 16.550781 11 17 10.550781 17 10 C 17 9.449219 16.550781 9 16 9 Z M 16 11 L 13 11 L 13 17 L 19 17 L 19 11 Z M 19 14 C 19 14.550781 19.449219 15 20 15 C 20.550781 15 21 14.550781 21 14 C 21 13.449219 20.550781 13 20 13 C 19.449219 13 19 13.449219 19 14 Z M 16 17 C 15.449219 17 15 17.449219 15 18 C 15 18.550781 15.449219 19 16 19 C 16.550781 19 17 18.550781 17 18 C 17 17.449219 16.550781 17 16 17 Z M 13 14 C 13 13.449219 12.550781 13 12 13 C 11.449219 13 11 13.449219 11 14 C 11 14.550781 11.449219 15 12 15 C 12.550781 15 13 14.550781 13 14 Z M 15 13 L 17 13 L 17 15 L 15 15 Z M 8 25 L 25 25 L 25 27 L 8 27 C 7.433594 27 7 26.566406 7 26 C 7 25.433594 7.433594 25 8 25 Z"/></Svg>);
};
export default SVGQuranSolid;
