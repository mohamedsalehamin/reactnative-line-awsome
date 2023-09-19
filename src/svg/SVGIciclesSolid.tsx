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
const SVGIciclesSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 6 5 L 6 7.375 L 6.8125 7.65625 C 7.546875 8.269531 8 9.15625 8 10.125 L 8 21 C 8 22.644531 9.355469 24 11 24 C 12.644531 24 14 22.644531 14 21 L 14 18.875 C 14 18.144531 14.660156 17.679688 15.34375 17.9375 C 15.738281 18.085938 16 18.453125 16 18.875 L 16 25 C 16 26.644531 17.355469 28 19 28 C 20.644531 28 22 26.644531 22 25 L 22 16.03125 C 22 14.757813 22.980469 13.796875 24.1875 13.75 L 24.21875 13.75 L 26 14.375 L 26 12 Z M 9.8125 8.71875 L 21.5 12.8125 C 20.59375 13.59375 20 14.730469 20 16.03125 L 20 25 C 20 25.566406 19.566406 26 19 26 C 18.433594 26 18 25.566406 18 25 L 18 18.875 C 18 17.628906 17.230469 16.5 16.0625 16.0625 C 14.132813 15.339844 12 16.8125 12 18.875 L 12 21 C 12 21.566406 11.566406 22 11 22 C 10.433594 22 10 21.566406 10 21 L 10 10.125 C 10 9.644531 9.9375 9.171875 9.8125 8.71875 Z"/></Svg>);
};
export default SVGIciclesSolid;
