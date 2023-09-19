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
const SVGTractorSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 7 5 L 7 12.25 C 5.652344 12.554688 4.417969 13.132813 3.375 13.96875 L 4.625 15.53125 C 5.824219 14.570313 7.339844 14 9 14 C 12.878906 14 16 17.121094 16 21 L 20.5625 21 C 20.214844 21.59375 20 22.265625 20 23 C 20 25.199219 21.800781 27 24 27 C 26.199219 27 28 25.199219 28 23 C 28 21.972656 27.582031 21.054688 26.9375 20.34375 L 28.9375 15.375 L 29 15.1875 L 29 13 L 24 13 L 24 10 C 24 9.433594 24.433594 9 25 9 L 25 7 C 23.355469 7 22 8.355469 22 10 L 22 13 L 18.6875 13 L 15.9375 5.65625 L 15.6875 5 Z M 9 7 L 14.3125 7 L 17.0625 14.34375 L 17.3125 15 L 26.90625 15 L 25.3125 19 L 17.75 19 C 16.832031 15.003906 13.269531 12 9 12 Z M 9 15 C 5.699219 15 3 17.699219 3 21 C 3 24.300781 5.699219 27 9 27 C 12.300781 27 15 24.300781 15 21 C 15 17.699219 12.300781 15 9 15 Z M 9 17 C 11.222656 17 13 18.777344 13 21 C 13 23.222656 11.222656 25 9 25 C 6.777344 25 5 23.222656 5 21 C 5 18.777344 6.777344 17 9 17 Z M 9 19 C 7.894531 19 7 19.894531 7 21 C 7 22.105469 7.894531 23 9 23 C 10.105469 23 11 22.105469 11 21 C 11 19.894531 10.105469 19 9 19 Z M 24 21 C 25.117188 21 26 21.882813 26 23 C 26 24.117188 25.117188 25 24 25 C 22.882813 25 22 24.117188 22 23 C 22 21.882813 22.882813 21 24 21 Z"/></Svg>);
};
export default SVGTractorSolid;
