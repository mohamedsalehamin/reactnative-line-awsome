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
const SVGBalanceScaleLeftSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 23.523438 5.109375 L 18.28125 7.0761719 C 17.730472 6.4241192 16.918214 6 16 6 C 14.346 6 13 7.346 13 9 C 13 9.021397 13.005411 9.0412083 13.005859 9.0625 L 8 11 L 3 19.75 L 3 20.015625 C 3 22.771625 5.243 25 8 25 C 10.757 25 13 22.771625 13 20.015625 L 13 19.75 L 9.0097656 12.765625 L 13.724609 10.931641 C 14.063182 11.329853 14.498316 11.637435 15 11.816406 L 15 24 L 15 26 L 17 26 L 21 26 L 21 24 L 17 24 L 17 11.816406 C 18.161251 11.402139 19 10.301609 19 9 C 19 8.9812527 18.994485 8.9639792 18.994141 8.9453125 L 23.210938 7.3632812 L 19 14.734375 L 19 15 C 19 17.757 21.243 20 24 20 C 26.757 20 29 17.757 29 15 L 29 14.734375 L 24.509766 6.8769531 L 23.523438 5.109375 z M 16 8 C 16.552 8 17 8.449 17 9 C 17 9.551 16.552 10 16 10 C 15.448 10 15 9.551 15 9 C 15 8.449 15.448 8 16 8 z M 24 10.015625 L 26.277344 14 L 21.722656 14 L 24 10.015625 z M 8 15.03125 L 10.267578 19 L 5.7324219 19 L 8 15.03125 z M 21.185547 16 L 26.814453 16 C 26.400209 17.161642 25.302172 18 24 18 C 22.697828 18 21.599791 17.161642 21.185547 16 z M 5.1796875 21 L 10.820312 21 C 10.41004 22.168969 9.3074181 23.015625 8 23.015625 C 6.6925819 23.015625 5.5899603 22.168969 5.1796875 21 z"/></Svg>);
};
export default SVGBalanceScaleLeftSolid;
