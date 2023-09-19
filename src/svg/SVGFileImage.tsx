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
const SVGFileImage = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 6 3 L 6 29 L 26 29 L 26 9.59375 L 25.71875 9.28125 L 19.71875 3.28125 L 19.40625 3 Z M 8 5 L 18 5 L 18 11 L 24 11 L 24 27 L 8 27 Z M 20 6.4375 L 22.5625 9 L 20 9 Z M 21.09375 14 C 20.542969 14 20.09375 14.449219 20.09375 15 C 20.09375 15.550781 20.542969 16 21.09375 16 C 21.644531 16 22.09375 15.550781 22.09375 15 C 22.09375 14.449219 21.644531 14 21.09375 14 Z M 14 15.59375 L 13.28125 16.28125 L 9.28125 20.28125 L 10.71875 21.71875 L 14 18.4375 L 16.28125 20.71875 L 17 21.40625 L 17.71875 20.71875 L 19 19.4375 L 21.28125 21.71875 L 22.71875 20.28125 L 19.71875 17.28125 L 19 16.59375 L 18.28125 17.28125 L 17 18.5625 L 14.71875 16.28125 Z"/></Svg>);
};
export default SVGFileImage;
