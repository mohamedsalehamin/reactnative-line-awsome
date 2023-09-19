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
const SVGSpellCheckSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 7.3320312 5 L 3 18 L 5.1074219 18 L 6.1074219 15 L 10.667969 15 L 11.667969 18 L 13.775391 18 L 9.4414062 5 L 7.3320312 5 z M 15 5 L 15 10 L 15 12 L 15 18 L 21 18 C 23.206 18 25 16.206 25 14 C 25 12.321849 23.958205 10.887833 22.490234 10.294922 C 22.807718 9.7682918 23 9.1585118 23 8.5 C 23 6.57 21.43 5 19.5 5 L 15 5 z M 17 7 L 19.5 7 C 20.327 7 21 7.673 21 8.5 C 21 9.327 20.327 10 19.5 10 L 17 10 L 17 7 z M 8.3886719 8.1621094 L 10.001953 13 L 6.7753906 13 L 8.3886719 8.1621094 z M 17 12 L 19.5 12 L 21 12 C 22.103 12 23 12.897 23 14 C 23 15.103 22.103 16 21 16 L 17 16 L 17 12 z M 27.808594 17.777344 L 19.117188 26.113281 L 15.193359 22.335938 L 13.806641 23.775391 L 19.113281 28.886719 L 29.191406 19.222656 L 27.808594 17.777344 z"/></Svg>);
};
export default SVGSpellCheckSolid;