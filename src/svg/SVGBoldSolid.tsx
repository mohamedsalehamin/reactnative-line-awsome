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
const SVGBoldSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 7 C 18.800781 7 21 9.199219 21 12 C 21 13.300781 20.5 14.398438 19.699219 15.300781 C 21.601563 16 23 17.800781 23 20 C 23 22.800781 20.800781 25 18 25 L 7 25 L 7 7 L 16 7 M 9 15 L 16 15 C 17.699219 15 19 13.699219 19 12 C 19 10.300781 17.699219 9 16 9 L 9 9 L 9 15 M 9 23 L 18 23 C 19.699219 23 21 21.699219 21 20 C 21 18.300781 19.699219 17 18 17 L 9 17 L 9 23 M 16 5 L 5 5 L 5 27 L 18 27 C 21.898438 27 25 23.898438 25 20 C 25 17.898438 24 15.898438 22.5 14.601563 C 22.800781 13.800781 23 12.898438 23 12 C 23 8.101563 19.898438 5 16 5 Z M 11 11 L 16 11 C 16.601563 11 17 11.398438 17 12 C 17 12.601563 16.601563 13 16 13 L 11 13 Z M 11 19 L 18 19 C 18.601563 19 19 19.398438 19 20 C 19 20.601563 18.601563 21 18 21 L 11 21 Z"/></Svg>);
};
export default SVGBoldSolid;
