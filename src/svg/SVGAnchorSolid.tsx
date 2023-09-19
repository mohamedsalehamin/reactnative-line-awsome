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
const SVGAnchorSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 4 C 13.800781 4 12 5.800781 12 8 C 12 9.851563 13.28125 11.398438 15 11.84375 L 15 14 L 12 14 L 12 16 L 15 16 L 15 23.96875 C 12.574219 23.777344 10.960938 22.890625 9.8125 21.875 C 8.9375 21.101563 8.351563 20.25 7.9375 19.53125 L 9.53125 18.75 L 5.53125 16.9375 L 4.46875 21.25 L 6.125 20.4375 C 6.597656 21.285156 7.332031 22.371094 8.46875 23.375 C 9.921875 24.664063 12.066406 25.730469 15 25.9375 L 15 26 L 16 27 L 17 26 L 17 25.9375 C 19.933594 25.730469 22.078125 24.664063 23.53125 23.375 C 24.667969 22.371094 25.402344 21.285156 25.875 20.4375 L 27.53125 21.25 L 26.46875 16.9375 L 22.46875 18.75 L 24.0625 19.53125 C 23.648438 20.25 23.0625 21.101563 22.1875 21.875 C 21.039063 22.890625 19.425781 23.777344 17 23.96875 L 17 16 L 20 16 L 20 14 L 17 14 L 17 11.84375 C 18.71875 11.398438 20 9.851563 20 8 C 20 5.800781 18.199219 4 16 4 Z M 16 6 C 17.117188 6 18 6.882813 18 8 C 18 9.117188 17.117188 10 16 10 C 14.882813 10 14 9.117188 14 8 C 14 6.882813 14.882813 6 16 6 Z"/></Svg>);
};
export default SVGAnchorSolid;
