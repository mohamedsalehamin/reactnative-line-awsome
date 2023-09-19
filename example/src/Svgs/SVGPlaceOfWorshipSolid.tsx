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
const SVGPlaceOfWorshipSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 4.40625 L 15.21875 5.375 L 11.21875 10.375 L 11 10.65625 L 11 16.9375 L 5.46875 20.40625 L 6.53125 22.09375 L 7 21.8125 L 7 27 L 15 27 L 15 23 C 15 22.433594 15.433594 22 16 22 C 16.566406 22 17 22.433594 17 23 L 17 27 L 25 27 L 25 21.8125 L 25.46875 22.09375 L 26.53125 20.40625 L 21 16.9375 L 21 10.65625 L 20.78125 10.375 L 16.78125 5.375 Z M 16 7.59375 L 19 11.34375 L 19 15.6875 L 16.53125 14.15625 L 16 13.8125 L 15.46875 14.15625 L 13 15.6875 L 13 11.34375 Z M 16 11 C 15.449219 11 15 11.449219 15 12 C 15 12.550781 15.449219 13 16 13 C 16.550781 13 17 12.550781 17 12 C 17 11.449219 16.550781 11 16 11 Z M 16 16.1875 L 23 20.5625 L 23 25 L 19 25 L 19 23 C 19 21.355469 17.644531 20 16 20 C 14.355469 20 13 21.355469 13 23 L 13 25 L 9 25 L 9 20.5625 Z"/></Svg>);
};
export default SVGPlaceOfWorshipSolid;
