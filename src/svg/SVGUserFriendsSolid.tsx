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
const SVGUserFriendsSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 9 7 C 5.699219 7 3 9.699219 3 13 C 3 14.984375 3.976563 16.75 5.46875 17.84375 C 2.832031 19.152344 1 21.863281 1 25 L 3 25 C 3 21.675781 5.675781 19 9 19 C 12.324219 19 15 21.675781 15 25 L 17 25 C 17 21.675781 19.675781 19 23 19 C 26.324219 19 29 21.675781 29 25 L 31 25 C 31 21.863281 29.167969 19.152344 26.53125 17.84375 C 28.023438 16.75 29 14.984375 29 13 C 29 9.699219 26.300781 7 23 7 C 19.699219 7 17 9.699219 17 13 C 17 14.984375 17.976563 16.75 19.46875 17.84375 C 18.011719 18.566406 16.789063 19.707031 16 21.125 C 15.210938 19.707031 13.988281 18.566406 12.53125 17.84375 C 14.023438 16.75 15 14.984375 15 13 C 15 9.699219 12.300781 7 9 7 Z M 9 9 C 11.222656 9 13 10.777344 13 13 C 13 15.222656 11.222656 17 9 17 C 6.777344 17 5 15.222656 5 13 C 5 10.777344 6.777344 9 9 9 Z M 23 9 C 25.222656 9 27 10.777344 27 13 C 27 15.222656 25.222656 17 23 17 C 20.777344 17 19 15.222656 19 13 C 19 10.777344 20.777344 9 23 9 Z"/></Svg>);
};
export default SVGUserFriendsSolid;
