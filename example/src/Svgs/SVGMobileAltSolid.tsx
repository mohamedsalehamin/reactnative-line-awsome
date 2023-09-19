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
const SVGMobileAltSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 11 4 C 9.355469 4 8 5.355469 8 7 L 8 25 C 8 26.644531 9.355469 28 11 28 L 21 28 C 22.644531 28 24 26.644531 24 25 L 24 7 C 24 5.355469 22.644531 4 21 4 Z M 11 6 L 21 6 C 21.554688 6 22 6.445313 22 7 L 22 25 C 22 25.554688 21.554688 26 21 26 L 11 26 C 10.445313 26 10 25.554688 10 25 L 10 7 C 10 6.445313 10.445313 6 11 6 Z M 16 23 C 15.449219 23 15 23.449219 15 24 C 15 24.550781 15.449219 25 16 25 C 16.550781 25 17 24.550781 17 24 C 17 23.449219 16.550781 23 16 23 Z"/></Svg>);
};
export default SVGMobileAltSolid;
