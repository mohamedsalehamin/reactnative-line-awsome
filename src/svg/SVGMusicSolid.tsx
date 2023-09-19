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
const SVGMusicSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 27 3.78125 L 25.8125 4.03125 L 9.8125 7.03125 L 9 7.15625 L 9 20.5625 C 8.40625 20.214844 7.734375 20 7 20 C 4.800781 20 3 21.800781 3 24 C 3 26.199219 4.800781 28 7 28 C 9.199219 28 11 26.199219 11 24 L 11 12.8125 L 25 10.1875 L 25 17.5625 C 24.40625 17.214844 23.734375 17 23 17 C 20.800781 17 19 18.800781 19 21 C 19 23.199219 20.800781 25 23 25 C 25.199219 25 27 23.199219 27 21 Z M 25 6.1875 L 25 8.1875 L 11 10.8125 L 11 8.8125 Z M 23 19 C 24.117188 19 25 19.882813 25 21 C 25 22.117188 24.117188 23 23 23 C 21.882813 23 21 22.117188 21 21 C 21 19.882813 21.882813 19 23 19 Z M 7 22 C 8.117188 22 9 22.882813 9 24 C 9 25.117188 8.117188 26 7 26 C 5.882813 26 5 25.117188 5 24 C 5 22.882813 5.882813 22 7 22 Z"/></Svg>);
};
export default SVGMusicSolid;
