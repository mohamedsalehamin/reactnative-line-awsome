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
const SVGMercurySolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 11 2 C 11 3.476563 11.660156 4.800781 12.6875 5.71875 C 9.929688 6.984375 8 9.777344 8 13 C 8 17.066406 11.066406 20.4375 15 20.9375 L 15 24 L 11 24 L 11 26 L 15 26 L 15 30 L 17 30 L 17 26 L 21 26 L 21 24 L 17 24 L 17 20.9375 C 20.933594 20.4375 24 17.066406 24 13 C 24 9.777344 22.070313 6.984375 19.3125 5.71875 C 20.339844 4.800781 21 3.476563 21 2 L 19 2 C 19 3.667969 17.667969 5 16 5 C 14.332031 5 13 3.667969 13 2 Z M 16 7 C 19.324219 7 22 9.675781 22 13 C 22 16.324219 19.324219 19 16 19 C 12.675781 19 10 16.324219 10 13 C 10 9.675781 12.675781 7 16 7 Z"/></Svg>);
};
export default SVGMercurySolid;
