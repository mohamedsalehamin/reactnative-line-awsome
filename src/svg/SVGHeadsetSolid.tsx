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
const SVGHeadsetSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 3 C 9.953125 3 5 7.953125 5 14 L 5 20 C 5 21.292969 5.84375 22.394531 7 22.8125 L 7 23 C 7 25.746094 9.253906 28 12 28 L 13.28125 28 C 13.628906 28.597656 14.261719 29 15 29 L 17 29 C 18.101563 29 19 28.101563 19 27 C 19 25.898438 18.101563 25 17 25 L 15 25 C 14.261719 25 13.628906 25.402344 13.28125 26 L 12 26 C 10.34375 26 9 24.65625 9 23 L 11 23 L 11 14 L 7 14 C 7 9.046875 11.046875 5 16 5 C 20.953125 5 25 9.046875 25 14 L 21 14 L 21 23 L 24 23 C 25.644531 23 27 21.644531 27 20 L 27 14 C 27 7.953125 22.046875 3 16 3 Z M 7 16 L 9 16 L 9 21 L 8 21 C 7.445313 21 7 20.554688 7 20 Z M 23 16 L 25 16 L 25 20 C 25 20.554688 24.554688 21 24 21 L 23 21 Z"/></Svg>);
};
export default SVGHeadsetSolid;
