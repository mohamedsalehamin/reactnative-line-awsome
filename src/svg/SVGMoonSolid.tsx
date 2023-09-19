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
const SVGMoonSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 5 L 5 7 L 3 7 L 3 9 L 5 9 L 5 11 L 7 11 L 7 9 L 9 9 L 9 7 L 7 7 L 7 5 Z M 20.28125 7.9375 L 18.625 8 C 13.28125 8.191406 9 12.578125 9 17.96875 C 9 23.480469 13.488281 27.96875 19 27.96875 C 24.390625 27.96875 28.777344 23.6875 28.96875 18.34375 L 29.03125 16.71875 L 27.5625 17.40625 C 26.78125 17.777344 25.914063 17.96875 25 17.96875 C 21.675781 17.96875 19 15.292969 19 11.96875 C 19 11.054688 19.222656 10.21875 19.59375 9.4375 Z M 17.375 10.3125 C 17.25 10.867188 17 11.375 17 11.96875 C 17 16.375 20.59375 19.96875 25 19.96875 C 25.605469 19.96875 26.121094 19.722656 26.6875 19.59375 C 25.925781 23.21875 22.859375 25.96875 19 25.96875 C 14.570313 25.96875 11 22.398438 11 17.96875 C 11 14.117188 13.757813 11.082031 17.375 10.3125 Z"/></Svg>);
};
export default SVGMoonSolid;
