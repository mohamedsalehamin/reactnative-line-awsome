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
const SVGPortraitSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 7 5 L 7 27 L 25 27 L 25 5 Z M 9 7 L 23 7 L 23 25 L 9 25 Z M 16 10 C 13.800781 10 12 11.800781 12 14 C 12 15.113281 12.476563 16.117188 13.21875 16.84375 C 11.886719 17.746094 11 19.28125 11 21 L 13 21 C 13 19.332031 14.332031 18 16 18 C 17.667969 18 19 19.332031 19 21 L 21 21 C 21 19.28125 20.113281 17.746094 18.78125 16.84375 C 19.523438 16.117188 20 15.113281 20 14 C 20 11.800781 18.199219 10 16 10 Z M 16 12 C 17.117188 12 18 12.882813 18 14 C 18 15.117188 17.117188 16 16 16 C 14.882813 16 14 15.117188 14 14 C 14 12.882813 14.882813 12 16 12 Z"/></Svg>);
};
export default SVGPortraitSolid;
