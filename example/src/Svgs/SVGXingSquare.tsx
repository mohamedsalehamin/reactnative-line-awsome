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
const SVGXingSquare = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 5 L 5 27 L 27 27 L 27 5 L 5 5 z M 7 7 L 25 7 L 25 25 L 7 25 L 7 7 z M 19.638672 9 C 19.418672 9 19.237891 9.1308594 19.087891 9.3808594 C 16.179891 14.516859 14.670313 17.173516 14.570312 17.353516 L 17.458984 22.619141 C 17.599984 22.869141 17.779531 23 18.019531 23 L 20.058594 23 C 20.328594 23 20.448359 22.780547 20.318359 22.560547 L 17.460938 17.353516 L 17.460938 17.34375 L 21.957031 9.4394531 C 22.077031 9.2094531 21.937266 9 21.697266 9 L 19.638672 9 z M 11.074219 12 C 10.826219 12 10.687406 12.197547 10.816406 12.435547 L 12.185547 14.785156 L 10.042969 18.554688 C 9.9239687 18.772688 10.062781 19 10.300781 19 L 12.324219 19 C 12.532219 19 12.719141 18.871516 12.869141 18.603516 C 14.267141 16.154516 14.991781 14.874391 15.050781 14.775391 L 13.662109 12.376953 C 13.513109 12.128953 13.325656 12 13.097656 12 L 11.074219 12 z"/></Svg>);
};
export default SVGXingSquare;
