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
const SVGAtSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16.1875 4 C 8.824219 3.890625 2.914063 10.484375 4.15625 18.03125 C 5 23.152344 9.203125 27.179688 14.34375 27.875 C 17.808594 28.34375 21.046875 27.34375 23.5 25.375 L 22.25 23.8125 C 20.203125 25.453125 17.511719 26.300781 14.59375 25.90625 C 10.339844 25.332031 6.851563 21.953125 6.15625 17.71875 C 5.109375 11.347656 9.992188 5.910156 16.15625 6 C 21.410156 6.078125 25.839844 10.433594 26 15.6875 C 26.003906 15.800781 26 15.910156 26 16.03125 C 25.992188 18.234375 24.207031 20 22 20 C 20.882813 20 20 19.117188 20 18 L 20 10 L 18 10 L 18 10.78125 C 17.28125 10.292969 16.425781 10 15.5 10 C 13.027344 10 11 12.027344 11 14.5 L 11 17.5 C 11 19.972656 13.027344 22 15.5 22 C 16.847656 22 18.046875 21.386719 18.875 20.4375 C 19.609375 21.371094 20.730469 22 22 22 C 25.285156 22 27.988281 19.320313 28 16.03125 C 28 15.898438 28.003906 15.769531 28 15.625 C 27.808594 9.289063 22.523438 4.09375 16.1875 4 Z M 15.5 12 C 16.890625 12 18 13.109375 18 14.5 L 18 17.5 C 18 18.890625 16.890625 20 15.5 20 C 14.109375 20 13 18.890625 13 17.5 L 13 14.5 C 13 13.109375 14.109375 12 15.5 12 Z"/></Svg>);
};
export default SVGAtSolid;
