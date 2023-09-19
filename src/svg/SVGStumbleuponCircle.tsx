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
const SVGStumbleuponCircle = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 4 C 9.398438 4 4 9.398438 4 16 C 4 22.601563 9.398438 28 16 28 C 22.601563 28 28 22.601563 28 16 C 28 9.398438 22.601563 4 16 4 Z M 16 11 C 15.398438 11 15 11.398438 15 12 L 15 18 C 15 19.699219 13.699219 21 12 21 C 10.300781 21 9 19.699219 9 18 L 9 16 L 11 16 L 11 18 C 11 18.601563 11.398438 19 12 19 C 12.601563 19 13 18.601563 13 18 L 13 12 C 13 10.300781 14.300781 9 16 9 C 17.699219 9 19 10.300781 19 12 L 19 13 C 19 13.601563 18.601563 14 18 14 C 17.398438 14 17 13.601563 17 13 L 17 12 C 17 11.398438 16.601563 11 16 11 Z M 23 18 C 23 19.699219 21.699219 21 20 21 C 18.300781 21 17 19.699219 17 18 L 17 15.699219 C 17.300781 15.898438 17.601563 16 18 16 C 18.398438 16 18.699219 15.898438 19 15.699219 L 19 18 C 19 18.601563 19.398438 19 20 19 C 20.601563 19 21 18.601563 21 18 L 21 16 L 23 16 Z"/></Svg>);
};
export default SVGStumbleuponCircle;
